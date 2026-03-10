import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service — ReefAgent',
  description: 'ReefAgent terms of service for playbooks and managed AI employee services.',
};

export default function TermsPage() {
  return (
    <div className="sub-page">
      <nav className="sub-nav">
        <Link href="/" className="sub-nav-logo">
          <Image src="/logo.png" alt="ReefAgent" width={32} height={32} />
        </Link>
        <Link href="/" className="sub-nav-name">ReefAgent</Link>
      </nav>

      <h1 className="page-title">Terms of Service</h1>
      <p className="page-meta">Last updated: March 10, 2026</p>

      <div className="legal">
        <p>These Terms of Service (&ldquo;Terms&rdquo;) govern your use of reefagent.me and related services provided by AIGENTIVE S.R.L. (&ldquo;ReefAgent&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;). By making a purchase or using our services, you agree to these Terms.</p>

        <h2>1. Products and Services</h2>
        <p><strong>Digital Playbooks:</strong> One-time purchase digital products (PDF guides) delivered via email after payment. Playbooks are for personal and internal business use only.</p>
        <p><strong>Managed AI Employees:</strong> Subscription-based service where we configure, deploy, and maintain AI agents for your business. Terms are defined in the service agreement provided during onboarding.</p>

        <h2>2. Purchases and Payment</h2>
        <ul>
          <li>All prices are listed in USD unless otherwise stated.</li>
          <li>Payments are processed securely through Stripe, Inc.</li>
          <li>You agree to provide accurate and complete payment information.</li>
          <li>Prices may change at any time. Existing subscriptions are honored at the agreed rate until renewal.</li>
        </ul>

        <h2>3. Delivery</h2>
        <p>Digital playbooks are delivered immediately after successful payment via the email address associated with your purchase. If you do not receive your playbook within 1 hour, contact <a href="mailto:contact@reefagent.ai">contact@reefagent.ai</a>.</p>

        <h2>4. Refund Policy</h2>
        <ul>
          <li><strong>Digital playbooks:</strong> Due to the nature of digital products, playbooks are non-refundable once the download link has been accessed. If you experience technical issues preventing access, we will resolve the issue or issue a refund.</li>
          <li><strong>Managed AI employees:</strong> You may cancel your subscription at any time. Service continues until the end of the current billing period. Setup fees are non-refundable after agent deployment begins.</li>
        </ul>

        <h2>5. Intellectual Property</h2>
        <ul>
          <li>Playbook content is copyrighted by AIGENTIVE S.R.L. You may not redistribute, resell, or publicly share playbook content.</li>
          <li>You may use playbook content to build your own projects, products, and businesses.</li>
          <li>AI agents deployed under managed services remain our intellectual property. The data and outputs generated for your business are yours.</li>
        </ul>

        <h2>6. Acceptable Use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Share, redistribute, or resell purchased playbooks</li>
          <li>Use managed AI agents for illegal, harmful, or abusive purposes</li>
          <li>Attempt to reverse-engineer or extract proprietary agent configurations</li>
          <li>Misrepresent AI-generated content as human-created where disclosure is required by law</li>
        </ul>

        <h2>7. Limitation of Liability</h2>
        <p>ReefAgent provides products and services &ldquo;as is&rdquo;. We are not liable for indirect, incidental, or consequential damages arising from your use of our products. Our total liability is limited to the amount you paid for the specific product or service in question.</p>
        <p>AI agents may produce inaccurate or unexpected outputs. You are responsible for reviewing and validating AI-generated content before acting on it.</p>

        <h2>8. Service Availability</h2>
        <p>We strive for high availability but do not guarantee uninterrupted service. Managed AI employee SLA terms are specified in individual service agreements.</p>

        <h2>9. Governing Law</h2>
        <p>These Terms are governed by the laws of Romania and the European Union. Any disputes shall be resolved in the courts of Bucharest, Romania.</p>

        <h2>10. Changes</h2>
        <p>We may update these Terms at any time. Continued use of our services after changes constitutes acceptance. Material changes will be communicated via email to active customers.</p>

        <h2>11. Contact</h2>
        <p>AIGENTIVE S.R.L.<br />Email: <a href="mailto:contact@reefagent.ai">contact@reefagent.ai</a><br />Website: <a href="https://reefagent.me">reefagent.me</a></p>
      </div>

      <div className="sub-footer">
        &copy; 2026 ReefAgent &mdash; <Link href="/support">Support</Link> &middot; <Link href="/privacy-policy">Privacy Policy</Link>
      </div>
    </div>
  );
}
