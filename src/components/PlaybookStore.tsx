import styles from './PlaybookStore.module.css';

const playbook = {
  title: 'Your First AI Agent \u2014 No Code Required',
  desc: 'Step-by-step guide to deploying your first autonomous AI agent. Zero coding experience needed.',
  price: '$19',
  link: process.env.NEXT_PUBLIC_STRIPE_LINK_FIRST_AGENT || 'https://buy.stripe.com/test_bJe00ieCL5htdC3a4E33W07',
  pages: 'PDF Guide',
};

const comingSoon = [
  {
    title: 'The AI Memory Playbook',
    desc: 'How to build AI agents that actually remember. The architecture, patterns, and code behind ReefAgent\u2019s three-layer memory system. 120+ sessions of real usage data.',
    price: '$29',
    pages: '48 pages',
  },
  {
    title: 'How to Build an AI Agent Business',
    desc: 'From side project to revenue. Pricing, distribution, and growth strategies for AI agent products.',
    price: '$49',
    pages: 'Coming 2026',
  },
  {
    title: 'Bot-to-Bot Commerce: Developer Guide',
    desc: 'Build autonomous agent economies. Payment rails, service discovery, and trust protocols for agent commerce.',
    price: '$39',
    pages: 'Coming 2026',
  },
];

export function PlaybookStore() {
  return (
    <div className="section" id="playbooks">
      <div className="section-label">Playbook store</div>
      <div className="section-title">Learn to build what we build.</div>
      <div className="section-desc">Battle-tested guides extracted from production systems. Real architecture, real code, no theory.</div>

      <div className={styles.grid}>
        <div className={`${styles.card} ${styles.featured}`}>
          <div className={styles.cover}>
            <div className={styles.coverLabel}>Playbook</div>
            <div className={styles.coverTitle}>{playbook.title}</div>
            <div className={styles.coverPages}>{playbook.pages}</div>
          </div>
          <div className={styles.cardInfo}>
            <div className={styles.cardTitle}>{playbook.title}</div>
            <div className={styles.cardDesc}>{playbook.desc}</div>
            <div className={styles.cardFooter}>
              <span className={styles.price}>{playbook.price}</span>
              <div className={styles.buyButtons}>
                <a href={playbook.link} className="btn btn-buy btn-sm" target="_blank" rel="noopener">Buy Now &rarr;</a>
                <a href="/pay/usdc?product=first-agent" className="btn btn-secondary btn-sm">Pay with USDC</a>
              </div>
            </div>
          </div>
        </div>

        {comingSoon.map((book) => (
          <div key={book.title} className={styles.card} style={{ opacity: 0.7 }}>
            <div className={styles.coverSmall}>
              <span>Playbook</span>
            </div>
            <div className={styles.cardInfo}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                <div className={styles.cardTitle} style={{ marginBottom: 0 }}>{book.title}</div>
                <span className={styles.badge}>Coming Soon</span>
              </div>
              <div className={styles.cardDesc}>{book.desc}</div>
              <div className={styles.cardFooter}>
                <span className={styles.price}>{book.price}</span>
                <a
                  href={`mailto:contact@reefagent.ai?subject=Notify%20Me%20-%20${encodeURIComponent(book.title)}`}
                  className="btn btn-secondary btn-sm"
                >
                  Notify Me
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
