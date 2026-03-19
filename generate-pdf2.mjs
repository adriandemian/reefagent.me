import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join } from 'path';
import puppeteer from 'puppeteer-core';

const HOME = process.env.HOME;
const BASE = join(HOME, 'Documents/Github/reefagent.me');
const CONTENT = join(BASE, 'content/playbook-v1');
const OUTPUT = join(BASE, 'public/downloads/ai-agent-pays-bills-v1.pdf');

// Find Chrome
const chromePaths = [
  '/tmp/chrome-bin',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium-browser',
];

let execPath;
for (const p of chromePaths) {
  if (existsSync(p)) { execPath = p; break; }
}

if (!execPath) {
  console.error('No Chrome found');
  process.exit(1);
}

console.log('Using Chrome at:', execPath);

const files = [
  '00-frontmatter.md', '01-the-zero-to-one-problem.md',
  '02-the-architecture-that-earns.md', '03-the-revenue-stack.md',
  '04-the-content-flywheel.md', '05-the-outreach-machine.md',
  '06-the-self-funding-loop.md', '07-our-live-numbers.md',
  'appendix-a-yaml-config.md', 'appendix-b-email-sequences.md',
  'appendix-c-revenue-calculator.md', 'appendix-d-icp-filters.md',
];

function mdToHtml(md) {
  let html = md;
  const codeBlocks = [];
  html = html.replace(/```[\s\S]*?```/g, (match) => {
    codeBlocks.push(match);
    return `__CB_${codeBlocks.length - 1}__`;
  });
  html = html.replace(/^(    .+\n?)+/gm, (match) => {
    const code = match.replace(/^    /gm, '').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return '<pre><code>' + code + '</code></pre>\n';
  });
  html = html.replace(/^#### (.+)$/gm, '<h4>$1</h4>');
  html = html.replace(/^### (.+)$/gm, '<h3>$1</h3>');
  html = html.replace(/^## (.+)$/gm, '<h2>$1</h2>');
  html = html.replace(/^# (.+)$/gm, '<h1>$1</h1>');
  html = html.replace(/^---+$/gm, '<hr>');
  html = html.replace(/^> \*\*(.+?)\*\*$/gm, '<blockquote><p><strong>$1</strong></p></blockquote>');
  html = html.replace(/^> (.+)$/gm, '<blockquote><p>$1</p></blockquote>');
  html = html.replace(/<\/blockquote>\n<blockquote>/g, '\n');
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');
  html = html.replace(/(?<![_a-zA-Z])`([^`\n]+)`/g, '<code>$1</code>');
  html = html.replace(/__CB_(\d+)__/g, (_, i) => {
    const b = codeBlocks[parseInt(i)];
    const c = b.replace(/^```\w*\n?/, '').replace(/\n?```$/, '').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return '<pre><code>' + c + '</code></pre>';
  });
  html = html.replace(/^- (.+)$/gm, '<li>$1</li>');
  html = html.replace(/^(\d+)\. (.+)$/gm, '<li>$2</li>');
  html = html.replace(/(<li>.+<\/li>\n?)+/g, (m) => '<ul>' + m + '</ul>');
  
  const lines = html.split('\n');
  const result = [];
  let inP = false;
  for (const line of lines) {
    const t = line.trim();
    if (!t) {
      if (inP) { result.push('</p>'); inP = false; }
      continue;
    }
    const isTag = /^<(h[1-4]|hr|pre|ul|ol|li|blockquote|table|div|\/)/.test(t);
    if (isTag) {
      if (inP) { result.push('</p>'); inP = false; }
      result.push(line);
    } else if (!inP) {
      result.push('<p>' + line);
      inP = true;
    } else {
      result.push('<br>' + line);
    }
  }
  if (inP) result.push('</p>');
  return result.join('\n');
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');
body { font-family: 'Inter', sans-serif; font-size: 10.5pt; line-height: 1.65; color: #1a1a2e; }
h1 { font-size: 22pt; font-weight: 800; color: #0f0f23; margin-top: 0.5em; margin-bottom: 0.5em; page-break-before: always; border-bottom: 2px solid #e0e0e0; padding-bottom: 0.3em; }
h1:first-of-type { page-break-before: avoid; }
h2 { font-size: 14pt; font-weight: 700; color: #16213e; margin-top: 1.4em; margin-bottom: 0.3em; }
h3 { font-size: 12pt; font-weight: 600; color: #1a1a2e; margin-top: 1.1em; margin-bottom: 0.2em; }
h4 { font-size: 10.5pt; font-weight: 600; margin-top: 0.9em; }
p { margin-bottom: 0.6em; }
hr { border: none; border-top: 1px solid #d0d0d0; margin: 1.2em 0; }
blockquote { border-left: 3px solid #4361ee; background: #f8f9ff; padding: 0.6em 1em; margin: 1em 0; border-radius: 0 6px 6px 0; font-style: italic; color: #2d2d44; }
blockquote p { margin: 0.2em 0; }
blockquote strong { color: #1a1a2e; font-style: normal; }
pre { background: #f4f4f8; border: 1px solid #e0e0e8; border-radius: 6px; padding: 0.7em 0.9em; font-size: 8pt; line-height: 1.45; margin: 0.7em 0; page-break-inside: avoid; }
code { font-family: 'JetBrains Mono', monospace; font-size: 8.5pt; }
p code, li code { background: #f0f0f5; padding: 0.1em 0.3em; border-radius: 3px; }
ul, ol { margin-bottom: 0.6em; padding-left: 1.2em; }
li { margin-bottom: 0.2em; }
li strong { color: #16213e; }
strong { font-weight: 600; }
a { color: #4361ee; text-decoration: none; }
`;

async function main() {
  console.log('Reading files...');
  let combined = '';
  for (const f of files) {
    combined += readFileSync(join(CONTENT, f), 'utf-8') + '\n\n';
  }
  
  console.log('Converting to HTML...');
  const body = mdToHtml(combined);
  const fullHtml = '<!DOCTYPE html><html><head><meta charset="utf-8"><style>' + CSS + '</style></head><body>' + body + '</body></html>';
  writeFileSync('/tmp/playbook-debug.html', fullHtml);
  
  console.log('Launching Chrome...');
  let browser;
  try {
    browser = await puppeteer.launch({
      executablePath: execPath,
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu'],
    });
  } catch (err) {
    console.error('Launch failed:', err.message);
    // Try with headless: true (legacy)
    console.log('Retrying with legacy headless...');
    browser = await puppeteer.launch({
      executablePath: execPath,
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu'],
    });
  }
  
  const page = await browser.newPage();
  console.log('Setting content...');
  await page.setContent(fullHtml, { waitUntil: 'networkidle0', timeout: 60000 });
  
  console.log('Generating PDF...');
  mkdirSync(join(BASE, 'public/downloads'), { recursive: true });
  
  await page.pdf({
    path: OUTPUT,
    format: 'A4',
    margin: { top: '25mm', bottom: '25mm', left: '20mm', right: '20mm' },
    printBackground: true,
    displayHeaderFooter: true,
    headerTemplate: '<div style="font-size:7px;width:100%;text-align:center;color:#aaa;">The AI Agent That Pays Its Own Bills</div>',
    footerTemplate: '<div style="font-size:7px;width:100%;text-align:center;color:#aaa;"><span class="pageNumber"></span> / <span class="totalPages"></span></div>',
  });
  
  await browser.close();
  console.log('Done! PDF at:', OUTPUT);
}

main().catch(err => {
  console.error('FATAL:', err.message);
  console.error(err.stack);
  process.exit(1);
});
