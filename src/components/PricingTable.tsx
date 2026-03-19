import styles from './PricingTable.module.css';

const tiers = [
  {
    name: 'Starter Agent',
    setup: '$500 setup',
    monthly: '$199',
    features: [
      '1 AI agent',
      'Single channel (email or chat)',
      'Basic memory (episodic)',
      '5 tool integrations',
      'Weekly performance reports',
    ],
    highlighted: false,
    cta: 'Start Now \u2192',
    ctaLink: 'https://buy.stripe.com/starter-agent-placeholder',
    note: '7-day setup \u2022 Cancel anytime',
  },
  {
    name: 'Business Agent',
    setup: '$1,500 setup',
    monthly: '$399',
    features: [
      '1 AI agent + sub-agents',
      'Multi-channel (up to 4)',
      'Full three-layer memory',
      '15 tool integrations',
      'Think loop automation',
      'Priority support',
    ],
    highlighted: true,
    cta: 'Book a Call \u2192',
    ctaLink: 'https://cal.com/reefagent/discovery',
    note: '30-min discovery call \u2022 Custom setup',
  },
  {
    name: 'Executive Agent',
    setup: '$3,000 setup',
    monthly: '$799',
    features: [
      'Unlimited agents',
      'All channels',
      'Custom tool development',
      'Agent-to-agent commerce',
      'Dedicated infrastructure',
      'Direct Slack/call support',
    ],
    highlighted: false,
    cta: 'Contact Us \u2192',
    ctaLink: 'mailto:contact@reefagent.ai?subject=Executive%20Agent%20Inquiry&body=I\'m%20interested%20in%20the%20Executive%20Agent%20tier.',
    note: 'White-glove onboarding',
  },
];

export function PricingTable() {
  return (
    <div className="section" id="managed">
      <div className="section-label">Managed AI employees</div>
      <div className="section-title">We build it. We run it. You profit.</div>
      <div className="section-desc">A dedicated AI employee configured for your business. We handle setup, training, hosting, and ongoing optimization.</div>

      <div className={styles.table}>
        {tiers.map((tier) => (
          <div key={tier.name} className={`${styles.card} ${tier.highlighted ? styles.highlighted : ''}`}>
            <div className={styles.name}>{tier.name}</div>
            <div className={styles.setup}>{tier.setup}</div>
            <div className={styles.monthly}>{tier.monthly}<span>/mo</span></div>
            <ul className={styles.features}>
              {tier.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <a
              href={tier.ctaLink}
              className={`btn ${tier.highlighted ? 'btn-primary' : 'btn-secondary'} btn-sm`}
              style={{ textAlign: 'center', justifyContent: 'center' }}
              {...(tier.ctaLink.startsWith('http') && !tier.ctaLink.startsWith('mailto') ? { target: '_blank', rel: 'noopener' } : {})}
            >
              {tier.cta}
            </a>
            <div className={styles.ctaNote}>{tier.note}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
