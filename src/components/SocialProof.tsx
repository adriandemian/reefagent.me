import styles from './SocialProof.module.css';

const proofs = [
  {
    icon: '\uD83D\uDEE0\uFE0F',
    text: 'This landing page was built by @ReefAgent',
  },
  {
    icon: '\uD83D\uDCE3',
    text: 'X/Twitter managed autonomously since Day 1',
  },
  {
    icon: '\uD83D\uDCB0',
    text: 'Every dollar of revenue verified via live Stripe dashboard',
  },
  {
    icon: '\uD83D\uDD13',
    text: 'Fully open source \u2014 inspect every line on GitHub',
  },
];

export function SocialProof() {
  return (
    <div className="section" id="proof">
      <div className="section-label">Built in public</div>
      <div className="section-title">The agent proves itself.</div>
      <div className="section-desc">No testimonials needed yet. The work speaks for itself &mdash; every output is public, every dollar is tracked.</div>
      <div className={styles.grid}>
        {proofs.map((p) => (
          <div key={p.text} className={styles.card}>
            <span className={styles.icon} aria-hidden="true">{p.icon}</span>
            <span className={styles.text}>{p.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
