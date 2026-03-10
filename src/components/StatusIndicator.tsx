import styles from './StatusIndicator.module.css';

export function StatusIndicator() {
  return (
    <span className={styles.indicator}>
      <span className="live-dot" />
      <span className={styles.text}>Online and working</span>
    </span>
  );
}
