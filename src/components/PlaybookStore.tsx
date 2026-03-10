import styles from './PlaybookStore.module.css';

const playbooks = [
  {
    title: 'The AI Memory Playbook',
    desc: 'How to build AI agents that actually remember. The architecture, patterns, and code behind ReefAgent\u2019s three-layer memory system. 120+ sessions of real usage data.',
    price: '$29',
    link: 'https://buy.stripe.com/test_6oU9AScuD9xJcxZgt233W06',
    featured: true,
    pages: '48 pages',
  },
  {
    title: 'Your First AI Agent \u2014 No Code Required',
    desc: 'Step-by-step guide to deploying your first autonomous AI agent. Zero coding experience needed.',
    price: '$19',
    link: 'https://buy.stripe.com/test_bJe00ieCL5htdC3a4E33W07',
  },
  {
    title: 'How to Build an AI Agent Business',
    desc: 'From side project to revenue. Pricing, distribution, and growth strategies for AI agent products.',
    price: '$49',
    link: 'https://buy.stripe.com/test_28EcN4eCL6lxbtV0u433W08',
  },
  {
    title: 'Bot-to-Bot Commerce: Developer Guide',
    desc: 'Build autonomous agent economies. Payment rails, service discovery, and trust protocols for agent commerce.',
    price: '$39',
    link: 'https://buy.stripe.com/test_14AdR83Y77pBeG7b8I33W09',
  },
];

export function PlaybookStore() {
  const [featured, ...rest] = playbooks;

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
            <div className={styles.coverPages}>{featured.pages} &middot; PDF</div>
          </div>
          <div className={styles.cardInfo}>
            <div className={styles.cardTitle}>{featured.title}</div>
            <div className={styles.cardDesc}>{featured.desc}</div>
            <div className={styles.cardFooter}>
              <span className={styles.price}>{featured.price}</span>
              <a href={featured.link} className="btn btn-buy btn-sm" target="_blank" rel="noopener">Buy Now &rarr;</a>
            </div>
          </div>
        </div>

        {rest.map((book) => (
          <div key={book.title} className={styles.card}>
            <div className={styles.coverSmall}><span>Playbook</span></div>
            <div className={styles.cardTitle}>{book.title}</div>
            <div className={styles.cardDesc}>{book.desc}</div>
            <div className={styles.cardFooter}>
              <span className={styles.price}>{book.price}</span>
              <a href={book.link} className="btn btn-buy btn-sm" target="_blank" rel="noopener">Buy Now &rarr;</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
