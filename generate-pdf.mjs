import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';
import puppeteer from 'puppeteer-core';

const HOME = process.env.HOME;
const BASE = join(HOME, 'Documents/Github/reefagent.me');
const CONTENT = join(BASE, 'content/playbook-v1');
const OUTPUT = join(BASE, 'public/downloads/ai-agent-pays-bills-v1.pdf');

const files = [
  '00-frontmatter.md',
  '01-the-zero-to-one-problem.md',
  '02-the-architecture-that-earns.md',
  '03-the-revenue-stack.md',
  '04-the-content-flywheel.md',
  '05-the-outreach-machine.md',
  '06-the-self-funding-loop.md',
  '07-our-live-numbers.md',
  'appendix-a-yaml-config.md',
  'appendix-b-email-sequences.md',
  'appendix-c-revenue-calculator.md',
  'appendix-d-icp-filters.md',
];

// Simple markdown to HTML converter
function mdToHtml(md) {
  let html = md;
  
  // Escape HTML entities first (but not in code blocks)
  // Handle code blocks first - preserve them
  const codeBlocks = [];
  html = html.replace(/```[\s\S]*?```/g, (match) => {
    codeBlocks.push(match);
    return `__CODEBLOCK_${codeBlocks.length - 1}__`;
  });
  
  // Indented code blocks (4 spaces)
  html = html.replace(/^(    .+\n?)+/gm, (match) => {
    const code = match.replace(/^    /gm, '');
    return `<pre><code>${code.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>\n`;
  });
  
  // Headers
  html = html.replace(/^#### (.+)$/gm, '<h4>$1</h4>');
  html = html.replace(/^### (.+)$/gm, '<h3>$1</h3>');
  html = html.replace(/^## (.+)$/gm, '<h2>$1</h2>');
  html = html.replace(/^# (.+)$/gm, '<h1>$1</h1>');
  
  // Horizontal rules
  html = html.replace(/^---+$/gm, '<hr>');
  
  // Blockquotes
  html = html.replace(/^> (.+)$/gm, '<blockquote><p>$1</p></blockquote>');
  // Merge consecutive blockquotes
  html = html.replace(/<\/blockquote>\n<blockquote>/g, '\n');
  
  // Bold and italic
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');
  
  // Inline code
  html = html.replace(/`([^`]+)`/g, '<code>$1</code>');
  
  // Restore code blocks
  html = html.replace(/__CODEBLOCK_(\d+)__/g, (_, i) => {
    const block = codeBlocks[parseInt(i)];
    const content = block.replace(/^```\w*\n?/, '').replace(/\n?```$/, '');
    return `<pre><code>${content.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>`;
  });
  
  // Lists (simple)
  html = html.replace(/^- (.+)$/gm, '<li>$1</li>');
  html = html.replace(/^(\d+)\. (.+)$/gm, '<li>$2</li>');
  // Wrap consecutive li in ul
  html = html.replace(/(<li>.+<\/li>\n?)+/g, (match) => `<ul>${match}</ul>`);
  
  // Paragraphs - wrap loose text
  const lines = html.split('\n');
  const result = [];
  let inPara = false;
  
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) {
      if (inPara) {
        result.push('</p>');
        inPara = false;
      }
      result.push('');
      continue;
    }
    if (trimmed.startsWith('<h') || trimmed.startsWith('<hr') || 
        trimmed.startsWith('<pre') || trimmed.startsWith('<ul') ||
        trimmed.startsWith('<ol') || trimmed.startsWith('<li') ||
        trimmed.startsWith('<blockquote') || trimmed.startsWith('</')) {
      if (inPara) {
        result.push('</p>');
        inPara = false;
      }
      result.push(line);
      continue;
    }
    if (!inPara) {
      result.push('<p>' + line);
      inPara = true;
    } else {
      result.push(line);
    }
  }
  if (inPara) result.push('</p>');
  
  return result.join('\n');
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');

body {
  font-family: 'Inter', -apple-system, sans-serif;
  font-size: 11pt;
  line-height: 1.7;
  color: #1a1a2e;
  max-width: 100%;
  padding: 0;
  margin: 0;
}

h1 {
  font-size: 22pt;
  font-weight: 800;
  color: #0f0f23;
  margin-top: 1em;
  margin-bottom: 0.5em;
  page-break-before: always;
  border-bottom: 2px solid #e0e0e0;
  padding-bottom: 0.3em;
}

h1:first-of-type { page-break-before: avoid; }

h2 {
  font-size: 15pt;
  font-weight: 700;
  color: #16213e;
  margin-top: 1.6em;
  margin-bottom: 0.4em;
}

h3 {
  font-size: 12pt;
  font-weight: 600;
  color: #1a1a2e;
  margin-top: 1.3em;
  margin-bottom: 0.3em;
}

h4 {
  font-size: 11pt;
  font-weight: 600;
  margin-top: 1em;
}

p { margin-bottom: 0.7em; }
hr { border: none; border-top: 1px solid #d0d0d0; margin: 1.5em 0; }

blockquote {
  border-left: 3px solid #4361ee;
  background: #f8f9ff;
  padding: 0.8em 1.2em;
  margin: 1.2em 0;
  border-radius: 0 6px 6px 0;
  font-style: italic;
  color: #2d2d44;
}

blockquote p { margin: 0.2em 0; }
blockquote strong { color: #1a1a2e; font-style: normal; }

pre {
  background: #f4f4f8;
  border: 1px solid #e0e0e8;
  border-radius: 6px;
  padding: 0.8em 1em;
  overflow-x: auto;
  font-size: 8.5pt;
  line-height: 1.5;
  margin: 0.8em 0;
  page-break-inside: avoid;
}

code {
  font-family: 'JetBrains Mono', monospace;
  font-size: 9pt;
}

p code, li code {
  background: #f0f0f5;
  padding: 0.1em 0.35em;
  border-radius: 3px;
  font-size: 9pt;
}

ul, ol { margin-bottom: 0.7em; padding-left: 1.3em; }
li { margin-bottom: 0.25em; }
li strong { color: #16213e; }

table {
  width: 100%;
  border-collapse: collapse;
  margin: 0.8em 0;
  font-size: 9pt;
  page-break-inside: avoid;
}

th {
  background: #f4f4f8;
  font-weight: 600;
  text-align: left;
  padding: 0.4em 0.6em;
  border-bottom: 2px solid #d0d0d0;
}

td {
  padding: 0.35em 0.6em;
  border-bottom: 1px solid #e8e8e8;
}

strong { font-weight: 600; }
a { color: #4361ee; text-decoration: none; }
em { font-style: italic; }
`;

async function main() {
  console.log('Reading markdown files...');
  
  let combined = '';
  for (const file of files) {
    const content = readFileSync(join(CONTENT, file), 'utf-8');
    combined += content + '\n\n';
  }
  
  console.log('Converting to HTML...');
  const htmlBody = mdToHtml(combined);
  
  const fullHtml = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>${CSS}</style>
</head>
<body>
${htmlBody}
</body>
</html>`;
  
  // Write HTML for debugging
  writeFileSync('/tmp/playbook-debug.html', fullHtml);
  console.log('HTML written to /tmp/playbook-debug.html');
  
  console.log('Launching browser...');
  const browser = await puppeteer.launch({
    executablePath: '/tmp/chrome-bin',
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  
  const page = await browser.newPage();
  await page.setContent(fullHtml, { waitUntil: 'networkidle0', timeout: 30000 });
  
  console.log('Generating PDF...');
  mkdirSync(join(BASE, 'public/downloads'), { recursive: true });
  
  await page.pdf({
    path: OUTPUT,
    format: 'A4',
    margin: { top: '25mm', bottom: '25mm', left: '20mm', right: '20mm' },
    printBackground: true,
    displayHeaderFooter: true,
    headerTemplate: '<div style="font-size:7px;width:100%;text-align:center;color:#aaa;font-family:sans-serif;">The AI Agent That Pays Its Own Bills — ReefAgent</div>',
    footerTemplate: '<div style="font-size:7px;width:100%;text-align:center;color:#aaa;font-family:sans-serif;"><span class="pageNumber"></span> / <span class="totalPages"></span></div>',
  });
  
  await browser.close();
  console.log('PDF generated at:', OUTPUT);
}

main().catch(err => {
  console.error('Error:', err.message);
  process.exit(1);
});
