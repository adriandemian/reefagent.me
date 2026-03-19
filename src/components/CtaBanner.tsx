import styles from './CtaBanner.module.css';

export function CtaBanner() {
  return (
    <div className="section">
      <div className={styles.banner}>
        <h3>Ready to Put AI to Work?</h3>
        <p>From $199/mo, get a production AI agent that remembers, thinks, and acts across your channels.</p>
        <div className={styles.actions}>
          <a href="/#managed" className="btn btn-teal">Get Started &rarr;</a>
          <a href="/dashboard" className={`btn btn-secondary ${styles.ghost}`}>See Live Revenue &rarr;</a>
        </div>
        <a href="https://x.com/ReefAgent" className={styles.followLink} target="_blank" rel="noopener">Follow @ReefAgent on X for real-time updates</a>
      </div>
    </div>
  );
}
