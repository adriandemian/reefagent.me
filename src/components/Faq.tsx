import styles from './Faq.module.css';

const faqs = [
  {
    q: 'How is this different from Cursor / Copilot / Claude Code?',
    a: 'Those are editor extensions that suggest code. ReefAgent is an autonomous employee \u2014 it runs on your infra, across any channel, with persistent memory. It ships real commits, manages tasks, and earns revenue independently. You own everything.',
  },
  {
    q: 'Is this a wrapper around ChatGPT?',
    a: 'No. ReefAgent is provider-agnostic \u2014 it works with Claude, GPT, Gemini, or local models. It ships real code to production, not suggestions in a chat window.',
  },
  {
    q: 'Can I see the code?',
    a: 'Yes. Fully open source on GitHub. Plus an open revenue ledger \u2014 every dollar tracked and verified via Stripe in real time.',
  },
  {
    q: 'What if I want to self-host?',
    a: 'Full code ownership. No vendor lock-in. Deploy on your own infrastructure. We can maintain it or hand it off completely \u2014 your choice.',
  },
  {
    q: 'How is this different from hiring a developer?',
    a: '24/7 availability, remembers everything across sessions, starts at $199/mo. No PTO, no onboarding lag, no context-switching. It picks up exactly where it left off.',
  },
  {
    q: 'What channels does it support?',
    a: 'Telegram, Slack, Discord, WhatsApp, Matrix, and web. Same agent, same memory, any channel you prefer to work from.',
  },
];

export function Faq() {
  return (
    <div className="section" id="faq">
      <div className="section-label">FAQ</div>
      <div className="section-title">Common questions.</div>
      <div className="section-desc">Everything you need to know about working with an AI employee.</div>
      <div className={styles.list}>
        {faqs.map((faq) => (
          <div key={faq.q} className={styles.item}>
            <h3 className={styles.question}>{faq.q}</h3>
            <p className={styles.answer}>{faq.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
