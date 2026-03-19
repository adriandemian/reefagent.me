import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './playbook.module.css';

export const metadata: Metadata = {
  title: 'The AI Agent That Pays Its Own Bills — Playbook by ReefAgent',
  description: 'Build, deploy, and monetize your first autonomous AI agent. 7-chapter playbook with config templates, email sequences, and revenue calculators.',
  openGraph: {
    title: 'The AI Agent That Pays Its Own Bills — Playbook',
    description: 'Build, deploy, and monetize your first autonomous AI agent. 55-page playbook extracted from a production system.',
    type: 'website',
    url: 'https://reefagent.me/playbook',
  },
};

const chapters = [
  { num: '01', title: 'The Zero-to-One Problem', desc: 'Why most AI agents are cost centers — and the three questions that flip the equation.' },
  { num: '02', title: 'The Architecture That Earns', desc: 'Three-layer memory, config-driven identity, and the think loop that creates value autonomously.' },
  { num: '03', title: 'The Revenue Stack', desc: 'Five revenue layers from content to bot-to-bot commerce. Pricing models and unit economics.' },
  { num: '04', title: 'The Content Flywheel', desc: 'Turn one piece of content into twelve. CTA architecture and the education-led growth model.' },
  { num: '05', title: 'The Outreach Machine', desc: 'Five ICP personas, cold email sequences, and LinkedIn automation that books calls.' },
  { num: '06', title: 'The Self-Funding Loop', desc: 'The 30% compute budget rule, smart model routing, and the path to AI sovereignty.' },
  { num: '07', title: 'Our Live Numbers', desc: 'Real revenue, real costs, real margins — updated monthly. Full transparency.' },
];

const includes = [
  '55-page PDF guide with real architecture diagrams',
  'Complete YAML config template — copy, paste, customize',
  '14 email sequence templates (cold outreach + onboarding + follow-up)',
  'Revenue projection calculator with month-by-month formulas',
  'ICP filter configs for Apollo.io and LinkedIn Sales Navigator',
  'Access to future updates — buy once, get all revisions',
];

const faqs = [
  {
    q: 'Do I need to know how to code?',
    a: 'Basic familiarity with config files (YAML) helps, but the playbook is designed for builders at all levels. The templates are copy-paste ready.',
  },
  {
    q: 'What tech stack does this cover?',
    a: 'The architecture is stack-agnostic, but examples use TypeScript/Bun, MCP tools, and SQLite. The revenue and outreach strategies work with any stack.',
  },
  {
    q: 'Is this about ChatGPT wrappers?',
    a: 'No. This is about building autonomous agents with persistent memory, real tool access, and revenue-generating capabilities. The opposite of a wrapper.',
  },
  {
    q: 'What if I already have an AI agent?',
    a: 'Even better. Chapters 3-6 focus purely on monetization, content, and outreach — applicable to any existing agent.',
  },
];

export default function PlaybookPage() {
  const stripeLink = process.env.NEXT_PUBLIC_STRIPE_LINK_PAYS_BILLS || 'https://buy.stripe.com/test_placeholder_pays_bills';

  return (
    <div className={styles.wrap}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroLabel}>New Playbook</div>
        <h1 className={styles.heroTitle}>
          The AI Agent That Pays<br />Its Own Bills
        </h1>
        <p className={styles.heroSub}>
          Build, deploy, and monetize your first autonomous agent.<br />
          7 chapters. 55 pages. Extracted from a production system earning real revenue.
        </p>
        <div className={styles.heroCta}>
          <a href={stripeLink} className="btn btn-buy" target="_blank" rel="noopener">
            Get the Playbook — $29 &rarr;
          </a>
          <a href="/pay/usdc?product=pays-bills" className="btn btn-secondary">
            Pay with USDC
          </a>
        </div>
      </section>

      {/* TOC */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>What&apos;s Inside</h2>
        <div className={styles.tocGrid}>
          {chapters.map((ch) => (
            <div key={ch.num} className={styles.tocCard}>
              <span className={styles.tocNum}>{ch.num}</span>
              <div>
                <div className={styles.tocChTitle}>{ch.title}</div>
                <div className={styles.tocDesc}>{ch.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Includes */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>What You Get</h2>
        <ul className={styles.checkList}>
          {includes.map((item, i) => (
            <li key={i} className={styles.checkItem}>
              <span className={styles.checkMark}>&#10003;</span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Preview Quote */}
      <section className={styles.section}>
        <div className={styles.preview}>
          <blockquote className={styles.quote}>
            &ldquo;Most AI agents are cost centers disguised as innovation. They consume API tokens, generate demo-worthy outputs, and never earn a dollar. This playbook exists because we built the opposite.&rdquo;
          </blockquote>
          <p className={styles.quoteAttr}>&mdash; Chapter 1: The Zero-to-One Problem</p>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>Stop subsidizing your AI. Make it earn.</h2>
        <p className={styles.ctaSub}>
          $29 for the complete playbook. Config templates, email sequences, revenue calculators included.
        </p>
        <div className={styles.heroCta}>
          <a href={stripeLink} className="btn btn-buy" target="_blank" rel="noopener">
            Get the Playbook — $29 &rarr;
          </a>
          <a href="/pay/usdc?product=pays-bills" className="btn btn-secondary">
            Pay with USDC
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>FAQ</h2>
        <div className={styles.faqGrid}>
          {faqs.map((faq, i) => (
            <div key={i} className={styles.faqCard}>
              <div className={styles.faqQ}>{faq.q}</div>
              <div className={styles.faqA}>{faq.a}</div>
            </div>
          ))}
        </div>
      </section>

      <div className={styles.backLink}>
        <Link href="/">&larr; Back to ReefAgent</Link>
      </div>
    </div>
  );
}
