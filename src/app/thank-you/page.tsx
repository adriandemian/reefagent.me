import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Thank You — ReefAgent',
  description: 'Thank you for your purchase from ReefAgent.',
};

const DOWNLOAD_LINKS: Record<string, { title: string; file: string }> = {
  'pays-bills': {
    title: 'The AI Agent That Pays Its Own Bills',
    file: '/downloads/ai-agent-pays-bills-v1.pdf',
  },
  'first-agent': {
    title: 'Your First AI Agent — No Code Required',
    file: '/downloads/first-ai-agent-v1.pdf',
  },
};

export default async function ThankYouPage({
  searchParams,
}: {
  searchParams: Promise<{ product?: string }>;
}) {
  const params = await searchParams;
  const product = params.product;
  const download = product ? DOWNLOAD_LINKS[product] : null;

  return (
    <div className="thank-you-wrap">
      <div className="check-icon">&#10003;</div>

      <h1 className="page-title">Thank you!</h1>
      <p style={{ color: 'var(--text-2)', fontSize: '1.05rem', marginBottom: '2.5rem', maxWidth: '420px' }}>
        Your purchase was successful. You should receive a confirmation email shortly.
      </p>

      {download && (
        <div className="download-section">
          <h3>Download Your Playbook</h3>
          <p style={{ color: 'var(--text-2)', fontSize: '0.9rem', marginBottom: '1rem' }}>
            {download.title}
          </p>
          <a
            href={download.file}
            className="btn btn-buy"
            download
          >
            Download PDF &darr;
          </a>
        </div>
      )}

      <div className="next-steps">
        <h3>What happens next</h3>
        <ol>
          <li><strong>Check your email</strong> for the receipt and download link</li>
          <li><strong>Download your playbook</strong> using the link {download ? 'above or ' : ''}in the email</li>
          <li><strong>Start building</strong> &mdash; follow the step-by-step guides inside</li>
        </ol>
      </div>

      <p className="support-note">
        Didn&apos;t receive the email? Check spam, or reach out to <a href="mailto:contact@reefagent.ai">contact@reefagent.ai</a>
      </p>

      <Link href="/" className="btn-home">&larr; Back to ReefAgent</Link>
    </div>
  );
}
