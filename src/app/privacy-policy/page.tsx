import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy — ReefAgent',
  description: 'ReefAgent privacy policy. How we collect, use, and protect your information.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="sub-page">
      <nav className="sub-nav">
        <Link href="/" className="sub-nav-logo">
          <Image src="/logo.png" alt="ReefAgent" width={32} height={32} />
        </Link>
        <Link href="/" className="sub-nav-name">ReefAgent</Link>
      </nav>

      <h1 className="page-title">Privacy Policy</h1>
      <p className="page-meta">Last updated: March 10, 2026</p>

      <div className="legal">
        <p>This Privacy Policy describes how AIGENTIVE S.R.L. (&ldquo;ReefAgent&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) collects, uses, and shares information when you use our website at reefagent.me and related services.</p>

        <h2>1. Information We Collect</h2>
        <p><strong>Information you provide:</strong></p>
        <ul>
          <li><strong>Purchase information:</strong> When you buy a playbook or subscribe to a managed AI employee service, we collect your name, email address, and payment details. Payments are processed by Stripe, Inc. &mdash; we do not store your full card number.</li>
          <li><strong>Communications:</strong> When you email us at contact@reefagent.ai, we collect the content of your message and your email address.</li>
        </ul>
        <p><strong>Information collected automatically:</strong></p>
        <ul>
          <li><strong>Usage data:</strong> We collect standard web analytics data including pages visited, time on site, referring URL, browser type, and device information.</li>
          <li><strong>Cookies:</strong> We use essential cookies for site functionality. We do not use third-party advertising cookies.</li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <ul>
          <li>To process and fulfill your purchases</li>
          <li>To deliver playbooks and provide managed AI employee services</li>
          <li>To respond to your support requests</li>
          <li>To send transactional emails (order confirmations, receipts)</li>
          <li>To improve our products and services</li>
          <li>To comply with legal obligations</li>
        </ul>
        <p>We do not sell your personal information to third parties. We do not send marketing emails unless you explicitly opt in.</p>

        <h2>3. Information Sharing</h2>
        <p>We share your information only with:</p>
        <ul>
          <li><strong>Stripe, Inc.</strong> &mdash; for payment processing (<a href="https://stripe.com/privacy">Stripe Privacy Policy</a>)</li>
          <li><strong>Vercel, Inc.</strong> &mdash; for website hosting</li>
          <li><strong>Law enforcement</strong> &mdash; when required by applicable law</li>
        </ul>

        <h2>4. Data Security</h2>
        <p>We implement appropriate technical and organizational measures to protect your personal data. All payment transactions are encrypted via TLS and processed through Stripe&apos;s PCI-DSS compliant infrastructure.</p>

        <h2>5. Data Retention</h2>
        <p>We retain purchase records for as long as necessary to fulfill our contractual obligations and comply with legal requirements (typically 5 years for financial records). You can request deletion of your personal data by emailing us.</p>

        <h2>6. Your Rights (GDPR)</h2>
        <p>If you are in the European Economic Area, you have the right to:</p>
        <ul>
          <li>Access the personal data we hold about you</li>
          <li>Request correction of inaccurate data</li>
          <li>Request deletion of your data</li>
          <li>Object to or restrict processing</li>
          <li>Data portability</li>
          <li>Lodge a complaint with your local supervisory authority</li>
        </ul>
        <p>To exercise these rights, email <a href="mailto:contact@reefagent.ai">contact@reefagent.ai</a>.</p>

        <h2>7. International Transfers</h2>
        <p>AIGENTIVE S.R.L. is based in Romania (EU). Your data may be processed by service providers in the United States (Stripe, Vercel) under appropriate data transfer mechanisms.</p>

        <h2>8. Changes to This Policy</h2>
        <p>We may update this policy from time to time. Material changes will be posted on this page with an updated &ldquo;Last updated&rdquo; date.</p>

        <h2>9. Contact</h2>
        <p>For privacy-related questions or requests:</p>
        <p>AIGENTIVE S.R.L.<br />Email: <a href="mailto:contact@reefagent.ai">contact@reefagent.ai</a><br />Website: <a href="https://reefagent.me">reefagent.me</a></p>
      </div>

      <div className="sub-footer">
        &copy; 2026 ReefAgent &mdash; <Link href="/support">Support</Link> &middot; <Link href="/terms">Terms of Service</Link>
      </div>
    </div>
  );
}
