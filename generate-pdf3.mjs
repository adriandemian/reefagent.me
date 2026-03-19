import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';
import puppeteer from 'puppeteer-core';

const HOME = process.env.HOME;
const BASE = join(HOME, 'Documents/Github/reefagent.me');
const CONTENT = join(BASE, 'content/playbook-v1');
const OUTPUT = join(BASE, 'public/downloads/ai-agent-pays-bills-v1.pdf');
const CHROME = join(HOME, '.cache/puppeteer/chrome/mac_arm-146.0.7680.153/chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing');

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
  html = html.replace(/```[\s\S]*?```/g, (m) => { codeBlocks.push(m); return `__CB${codeBlocks.length - 1}__`; });
  html = html.replace(/^(    .+\n?)+/gm, (m) => '<pre><code>' + m.replace(/^    /gm, '').replace(/</g, '&lt;').replace(/>/g, '&gt;') + '</code></pre>\n');
  html = html.replace(/^#### (.+)$/gm, '<h4>$1</h4>');
  html = html.replace(/^### (.+)$/gm, '<h3>$1</h3>');
  html = html.replace(/^## (.+)$/gm, '<h2>$1</h2>');
  html = html.replace(/^# (.+)$/gm, '<h1>$1</h1>');
  html = html.replace(/^---+$/gm, '<hr>');
  html = html.replace(/^> \*\*(.+?)\*\*$/gm, '<blockquote><p><strong>$1</strong></p></blockquote>');
  html = html.replace(/^> (.+)$/gm, '<blockquote><p>$1</p></blockquote>');
  html = html.replace(/<\/blockquote>\n<blockquote>/g, '\n');
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*([^*\n]+?)\*/g, '<em>$1</em>');
  html = html.replace(/(?<![_a-zA-Z])`([^`\n]+)`/g, '<code>$1</code>');
  html = html.replace(/__CB(\d+)__/g, (_, i) => {
    const b = codeBlocks[parseInt(i)];
    const c = b.replace(/^```\w*\n?/, '').replace(/\n?```$/, '').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return '<pre><code>' + c + '</code></pre>';
  });
  html = html.replace(/^- (.+)$/gm, '<li>$1</li>');
  html = html.replace(/^(\d+)\. (.+)$/gm, '<li>$2</li>');
  html = html.replace(/(<li>[\s\S]*?<\/li>\n?)+/g, (m) => '<ul>\n' + m + '</ul>\n');
  const lines = html.split('\n');
  const out = [];
  let inP = false;
  for (const line of lines) {
    const t = line.trim();
    if (!t) { if (inP) { out.push('</p>'); inP = false; } continue; }
    if (/^<(h[1-4]|hr|pre|ul|ol|li|blockquote|table|div|\/)/.test(t)) {
      if (inP) { out.push('</p>'); inP = false; }
      out.push(line);
    } else if (!inP) { out.push('<p>' + line); inP = true; }
    else { out.push('<br>' + line); }
  }
  if (inP) out.push('</p>');
  return out.join('\n');
}

async function main() {
  console.log('Reading files...');
  let combined = '';
  for (const f of files) combined += readFileSync(join(CONTENT, f), 'utf-8') + '\n\n';
  
  console.log('Converting markdown to HTML...');
  const body = mdToHtml(combined);
  
  const css = `
    @page { size: A4; margin: 25mm 20mm; }
    body { font-family: -apple-system, 'Helvetica Neue', sans-serif; font-size: 10.5pt; line-height: 1.65; color: #1a1a2e; }
    h1 { font-size: 22pt; font-weight: 800; color: #0f0f23; margin-top: 0.5em; margin-bottom: 0.4em; page-break-before: always; border-bottom: 2px solid #e0e0e0; padding-bottom: 0.3em; }
    h1:first-of-type { page-break-before: avoid; }
    h2 { font-size: 14pt; font-weight: 700; color: #16213e; margin-top: 1.3em; margin-bottom: 0.3em; }
    h3 { font-size: 11.5pt; font-weight: 600; color: #1a1a2e; margin-top: 1em; margin-bottom: 0.2em; }
    h4 { font-size: 10.5pt; font-weight: 600; margin-top: 0.8em; }
    p { margin-bottom: 0.55em; orphans: 3; widows: 3; }
    hr { border: none; border-top: 1px solid #d0d0d0; margin: 1.2em 0; }
    blockquote { border-left: 3px solid #4361ee; background: #f8f9ff; padding: 0.6em 1em; margin: 0.8em 0; border-radius: 0 6px 6px 0; font-style: italic; color: #2d2d44; page-break-inside: avoid; }
    blockquote p { margin: 0.15em 0; }
    blockquote strong { color: #1a1a2e; font-style: normal; }
    pre { background: #f4f4f8; border: 1px solid #e0e0e8; border-radius: 6px; padding: 0.6em 0.8em; font-size: 8pt; line-height: 1.4; margin: 0.6em 0; page-break-inside: avoid; white-space: pre-wrap; word-wrap: break-word; }
    code { font-family: 'Menlo', 'Monaco', monospace; font-size: 8.5pt; }
    p code, li code { background: #f0f0f5; padding: 0.1em 0.25em; border-radius: 3px; }
    ul, ol { margin-bottom: 0.55em; padding-left: 1.2em; }
    li { margin-bottom: 0.15em; }
    li strong { color: #16213e; }
    strong { font-weight: 600; }
    a { color: #4361ee; text-decoration: none; }
  `;
  
  const fullHtml = '<!DOCTYPE html><html><head><meta charset="utf-8"><style>' + css + '</style></head><body>' + body + '</body></html>';
  writeFileSync('/tmp/playbook-preview.html', fullHtml);
  console.log('HTML preview at /tmp/playbook-preview.html');
  
  console.log('Launching Chrome for Testing...');
  const browser = await puppeteer.launch({
    executablePath: CHROME,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu', '--disable-dev-shm-usage'],
  });
  
  const page = await browser.newPage();
  console.log('Loading content...');
  await page.setContent(fullHtml, { waitUntil: 'networkidle0', timeout: 30000 });
  
  console.log('Rendering PDF...');
  mkdirSync(join(BASE, 'public/downloads'), { recursive: true });
  
  await page.pdf({
    path: OUTPUT,
    format: 'A4',
    margin: { top: '25mm', bottom: '25mm', left: '20mm', right: '20mm' },
    printBackground: true,
    displayHeaderFooter: true,
    headerTemplate: '<div style="font-size:7px;width:100%;text-align:center;color:#bbb;font-family:Helvetica,sans-serif;padding-top:5mm;">The AI Agent That Pays Its Own Bills</div>',
    footerTemplate: '<div style="font-size:7px;width:100%;text-align:center;color:#bbb;font-family:Helvetica,sans-serif;padding-bottom:5mm;"><span class="pageNumber"></span> / <span class="totalPages"></span></div>',
  });
  
  await browser.close();
  console.log('PDF generated:', OUTPUT);
}

main().catch(err => { console.error('FATAL:', err.message); process.exit(1); });
