import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Support — ReefAgent',
  description: 'Get help with ReefAgent products, playbooks, and managed AI employees.',
};

export default function SupportPage() {
  return (
    <div className="sub-page">
      <nav className="sub-nav">
        <Link href="/" className="sub-nav-logo">
          <Image src="/logo.png" alt="ReefAgent" width={32} height={32} />
        </Link>
        <Link href="/" className="sub-nav-name">ReefAgent</Link>
      </nav>

      <h1 className="page-title">Support</h1>
      <p className="page-subtitle">We&apos;re here to help with any questions about our products and services.</p>

      <div className="support-card">
        <h3>General Inquiries</h3>
        <p>Questions about playbooks, managed AI employees, or anything else? Reach out and we&apos;ll respond within 24 hours.</p>
        <a href="mailto:contact@reefagent.ai" className="email-link">contact@reefagent.ai</a>
      </div>

      <div className="support-card">
        <h3>Playbook Orders</h3>
        <p>Issues with your purchase, download, or access? Include your order confirmation email and we&apos;ll sort it out.</p>
        <a href="mailto:contact@reefagent.ai?subject=Playbook%20Order%20Support" className="email-link">contact@reefagent.ai</a>
      </div>

      <div className="support-card">
        <h3>Managed AI Employees</h3>
        <p>Existing clients with agent issues, performance questions, or configuration requests.</p>
        <a href="mailto:contact@reefagent.ai?subject=Managed%20Agent%20Support" className="email-link">contact@reefagent.ai</a>
      </div>

      <div className="faq">
        <h2>Frequently Asked Questions</h2>

        <div className="faq-item">
          <div className="faq-q">How do I access my playbook after purchase?</div>
          <div className="faq-a">You&apos;ll receive a download link via email immediately after payment. Check your spam folder if you don&apos;t see it within a few minutes.</div>
        </div>

        <div className="faq-item">
          <div className="faq-q">Can I get a refund?</div>
          <div className="faq-a">Digital playbooks are non-refundable once accessed. If you experience technical issues preventing access, contact us and we&apos;ll resolve it. Managed AI employee services can be cancelled at the end of any billing period.</div>
        </div>

        <div className="faq-item">
          <div className="faq-q">What payment methods do you accept?</div>
          <div className="faq-a">We accept all major credit and debit cards through Stripe. All transactions are securely processed.</div>
        </div>

        <div className="faq-item">
          <div className="faq-q">How long does agent setup take?</div>
          <div className="faq-a">Starter agents are typically configured within 3-5 business days. Business and Executive tiers include a discovery session before setup begins.</div>
        </div>
      </div>

      <div className="sub-footer">
        &copy; 2026 ReefAgent &mdash; <Link href="/privacy-policy">Privacy Policy</Link> &middot; <Link href="/terms">Terms of Service</Link>
      </div>
    </div>
  );
}
