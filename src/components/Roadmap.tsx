import styles from './Roadmap.module.css';

const milestones = [
  {
    quarter: 'Q1 2026',
    title: 'Core Platform',
    desc: 'Multi-channel, 3-layer memory, think loops, agent commerce, open ledger',
    live: true,
  },
  {
    quarter: 'Q2 2026',
    title: 'Multi-Agent Debates',
    desc: 'Multiple AI agents debating decisions before shipping. Fleet coordination.',
    live: false,
  },
  {
    quarter: 'Q3 2026',
    title: 'Agent Marketplace',
    desc: 'Hire specialized agents from the network. Pay-per-task economy.',
    live: false,
  },
  {
    quarter: 'Q4 2026',
    title: 'Enterprise Self-Serve',
    desc: 'Deploy your own agent fleet. White-label dashboard. Full sovereignty.',
    live: false,
  },
];

export function Roadmap() {
  return (
    <div className="section" id="roadmap">
      <div className="section-label">Roadmap</div>
      <div className="section-title">Where we&apos;re going.</div>
      <div className="section-desc">Everything in Q1 is live and in production. Everything else is in active development &mdash; not slides, not pitch decks.</div>
      <div className={styles.timeline}>
        {milestones.map((m) => (
          <div key={m.quarter} className={`${styles.milestone} ${m.live ? styles.live : ''}`}>
            <div className={styles.quarter}>
              {m.quarter}
              {m.live && <span className={styles.badge}>LIVE</span>}
            </div>
            <h3>{m.title}</h3>
            <p>{m.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
