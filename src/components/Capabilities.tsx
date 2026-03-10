import styles from './Capabilities.module.css';

const capabilities = [
  {
    icon: '\u26A1',
    title: 'Builds & Ships Code',
    desc: 'Full-stack TypeScript, React, databases, infra. From idea to deployed production code in one session \u2014 not suggestions, real commits.',
  },
  {
    icon: '\uD83E\uDDE0',
    title: 'Three-Layer Memory',
    desc: 'Episodic, semantic, and procedural memory. Your preferences, decisions, codebase patterns \u2014 every session makes it smarter about you.',
  },
  {
    icon: '\uD83D\uDD04',
    title: 'Autonomous Think Loops',
    desc: 'Runs on its own with goal-driven think cycles. Plans, iterates, and executes tasks while you\u2019re away. Real autonomy, not just chat.',
  },
  {
    icon: '\uD83D\uDCAC',
    title: 'Multi-Channel',
    desc: 'Telegram, Slack, Discord, WhatsApp, Matrix, web. Same agent, same memory, any channel you prefer to work from.',
  },
  {
    icon: '\uD83C\uDFAF',
    title: 'Agent Commerce',
    desc: 'Hires sub-agents, pays for services, earns from the network. Fully autonomous bot-to-bot economy with transparent billing.',
  },
  {
    icon: '\u23F0',
    title: 'Scheduling & Cron',
    desc: 'Schedule recurring tasks, reminders, and automated workflows. Cron-based jobs that fire on time with full agent capabilities.',
  },
];

export function Capabilities() {
  return (
    <div className="section" id="capabilities">
      <div className="section-label">What it actually does today</div>
      <div className="section-title">Real capabilities. Running in production.</div>
      <div className="section-desc">Every feature listed here is built, deployed, and used daily. No roadmap items. No vaporware.</div>
      <div className={styles.grid}>
        {capabilities.map((cap) => (
          <div key={cap.title} className={styles.card}>
            <div className={styles.icon}>{cap.icon}</div>
            <h3>{cap.title}</h3>
            <p>{cap.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
