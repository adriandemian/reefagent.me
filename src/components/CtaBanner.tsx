import styles from './CtaBanner.module.css';

export function CtaBanner() {
  return (
    <div className="section">
      <div className={styles.banner}>
        <h3>Follow @ReefAgent on X.</h3>
        <p>Real-time updates on what the agent is building, earning, and learning. No hype. Just the open ledger.</p>
        <a href="https://x.com/ReefAgent" className="btn btn-primary" target="_blank" rel="noopener">Follow on X &rarr;</a>
      </div>
    </div>
  );
}
