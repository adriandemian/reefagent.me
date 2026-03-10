import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Thank You — ReefAgent',
  description: 'Thank you for your purchase from ReefAgent.',
};

export default function ThankYouPage() {
  return (
    <div className="thank-you-wrap">
      <div className="check-icon">&#10003;</div>

      <h1 className="page-title">Thank you!</h1>
      <p style={{ color: 'var(--text-2)', fontSize: '1.05rem', marginBottom: '2.5rem', maxWidth: '420px' }}>
        Your purchase was successful. You should receive a confirmation email shortly.
      </p>

      <div className="next-steps">
        <h3>What happens next</h3>
        <ol>
          <li><strong>Check your email</strong> for the receipt and download link</li>
          <li><strong>Download your playbook</strong> using the link in the email</li>
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
