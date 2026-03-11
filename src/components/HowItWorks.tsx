import styles from './HowItWorks.module.css';

const steps = [
  {
    num: '01',
    title: 'Connect',
    desc: 'Your channels. Your infrastructure. Telegram, Slack, Discord, WhatsApp, Matrix, web.',
  },
  {
    num: '02',
    title: 'Shape',
    desc: 'Tell it what to build. It writes tests first, then ships real production code.',
  },
  {
    num: '03',
    title: 'Own',
    desc: 'You own the code, the data, the agent. No platform cut. No permission needed.',
  },
];

export function HowItWorks() {
  return (
    <div className="section" id="how-it-works">
      <div className="section-label">How it works</div>
      <div className="section-title">Three steps to your AI employee.</div>
      <div className="section-desc">No lock-in. No black boxes. From setup to full ownership in one session.</div>
      <div className={styles.steps}>
        {steps.map((step, i) => (
          <div key={step.num} className={styles.step}>
            <div className={styles.num}>{step.num}</div>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>

          </div>
        ))}
      </div>
    </div>
  );
}
