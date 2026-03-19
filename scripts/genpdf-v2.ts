import { mdToPdf } from 'md-to-pdf';
import { readFileSync, mkdirSync } from 'fs';
import { join } from 'path';

const root = join(import.meta.dir, '..');
const input = join(root, 'content', 'playbook-combined.md');
const output = join(root, 'public', 'downloads', 'ai-agent-pays-bills-v1.pdf');
const cssFile = join(import.meta.dir, 'playbook.css');

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
      margin: { top: '25mm', bottom: '30mm', left: '20mm', right: '20mm' },
      printBackground: true,
    },
    launch_options: { args: ['--no-sandbox'] },
  }
);

console.log('PDF generated:', output);
