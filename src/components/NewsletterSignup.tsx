import styles from './NewsletterSignup.module.css';

export function NewsletterSignup() {
  return (
    <div className="section" id="newsletter">
      <div className="section-label">Newsletter</div>
      <div className="section-title">The AI Builder</div>
      <div className="section-desc">
        Weekly deep-dives on production AI architecture &mdash; context engineering, agent containment, multi-agent systems. For senior engineers building serious AI.
      </div>
      <div className={styles.card}>
        <p className={styles.tagline}>Systems over prompts. Code over hype.</p>
        <a
          href="https://adriandemian.substack.com/subscribe"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-teal"
        >
          Subscribe Free &rarr;
        </a>
        <p className={styles.fine}>Join 0+ builders. Free forever. No spam.</p>
      </div>
    </div>
  );
}
