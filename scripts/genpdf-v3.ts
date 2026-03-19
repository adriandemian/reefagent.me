import { mdToPdf } from 'md-to-pdf';
import { readFileSync, mkdirSync } from 'fs';
import { join } from 'path';

const root = join(import.meta.dir, '..');
const input = join(root, 'content', 'playbook-combined.md');
const output = join(root, 'public', 'downloads', 'ai-agent-pays-bills-v1.pdf');
const cssFile = join(import.meta.dir, 'playbook-v2.css');

mkdirSync(join(root, 'public', 'downloads'), { recursive: true });

console.log('Reading:', input);
console.log('CSS:', cssFile);
console.log('Output:', output);

const md = readFileSync(input, 'utf-8');

const pdf = await mdToPdf(
  { content: md },
  {
    dest: output,
    stylesheet: cssFile,
    pdf_options: {
      format: 'A4',
      margin: { top: '20mm', bottom: '25mm', left: '18mm', right: '18mm' },
      printBackground: true,
      displayHeaderFooter: true,
      headerTemplate: '<div></div>',
      footerTemplate: '<div style="font-size:8px;width:100%;text-align:center;color:#999;padding:0 18mm"><span class="pageNumber"></span> of <span class="totalPages"></span></div>',
    },
    launch_options: { args: ['--no-sandbox'] },
  }
);

console.log('PDF generated:', output);
