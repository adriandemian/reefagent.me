import { mdToPdf } from 'md-to-pdf';
import { readFileSync, mkdirSync } from 'fs';
import { join } from 'path';

const root = join(import.meta.dir, '..');
const input = join(root, 'content', 'playbook-combined.md');
const output = join(root, 'public', 'downloads', 'ai-agent-pays-bills-v1.pdf');

mkdirSync(join(root, 'public', 'downloads'), { recursive: true });
console.log('Reading:', input);

const md = readFileSync(input, 'utf-8');

const pdf = await mdToPdf(
  { content: md },
  {
    dest: output,
    pdf_options: {
      format: 'A4',
      margin: { top: '25mm', bottom: '30mm', left: '20mm', right: '20mm' },
      printBackground: true,
    },
    stylesheet: 'body{font-family:system-ui,sans-serif;font-size:11pt;line-height:1.6;color:#1a1a2e}h1{font-size:24pt;margin-top:60px;color:#0f0f23;border-bottom:2px solid #6366f1;padding-bottom:10px;page-break-before:always}h1:first-of-type{page-break-before:avoid}h2{font-size:16pt;margin-top:30px;color:#1a1a3e}h3{font-size:13pt;color:#2d1b4e}blockquote{border-left:4px solid #6366f1;margin:20px 0;padding:12px 20px;background:#f8f7ff;font-style:italic}code{font-family:monospace;font-size:9.5pt;background:#f4f4f8;padding:2px 6px;border-radius:3px}pre{background:#1a1a2e;color:#e2e8f0;padding:16px;border-radius:8px;font-size:9pt}pre code{background:none;color:inherit;padding:0}table{border-collapse:collapse;width:100%;font-size:10pt}th{background:#f4f4f8;font-weight:600;text-align:left;padding:8px 12px;border:1px solid #ddd}td{padding:8px 12px;border:1px solid #ddd}',
    launch_options: { args: ['--no-sandbox'] },
  }
);

console.log('PDF generated:', output);
