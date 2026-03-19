import styles from './PlaybookStore.module.css';

const featured = {
  title: 'The AI Agent That Pays Its Own Bills',
  desc: 'Build, deploy, and monetize your first autonomous agent. 7-chapter playbook covering architecture, revenue stacks, content flywheels, outreach automation, and the self-funding loop. Includes config templates, email sequences, and revenue calculators.',
  price: '$29',
  link: process.env.NEXT_PUBLIC_STRIPE_LINK_PAYS_BILLS || '',
  pages: '108-page PDF Guide',
};

const isLive = featured.link && !featured.link.includes('placeholder');

const comingSoon = [
  {
    title: 'The AI Memory Playbook',
    desc: 'How to build AI agents that actually remember. The architecture, patterns, and code behind three-layer memory systems. 120+ sessions of real usage data.',
    price: '$29',
    pages: '48 pages',
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
            <div className={styles.coverTitle}>{featured.title}</div>
            <div className={styles.coverPages}>{featured.pages}</div>
          </div>
          <div className={styles.cardInfo}>
            <div className={styles.cardTitle}>{featured.title}</div>
            <div className={styles.cardDesc}>{featured.desc}</div>
            <div className={styles.cardFooter}>
              <span className={styles.price}>{featured.price}</span>
              {isLive ? (
                <div className={styles.buyButtons}>
                  <a href={featured.link} className="btn btn-buy btn-sm" target="_blank" rel="noopener">Buy Now &rarr;</a>
                  <a href="/pay/usdc?product=pays-bills" className="btn btn-secondary btn-sm">Pay with USDC</a>
                </div>
              ) : (
                <div className={styles.buyButtons}>
                  <a
                    href="mailto:contact@reefagent.ai?subject=Waitlist%20-%20The%20AI%20Agent%20That%20Pays%20Its%20Own%20Bills"
                    className="btn btn-secondary btn-sm"
                  >
                    Coming Soon — Join Waitlist
                  </a>
                </div>
              )}
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
