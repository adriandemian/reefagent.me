import Image from 'next/image';
import styles from './Hero.module.css';

export function Hero() {
  return (
    <div className={styles.hero}>
      <div className={`${styles.heroLogo} fade-up`}>
        <Image src="/logo.png" alt="ReefAgent" width={100} height={100} />
      </div>
      <h1 className="fade-up">
        The AI Employee With<br /><span className={styles.accent}>an Open Ledger</span>
      </h1>
      <p className={`${styles.heroSub} fade-up`}>
        Watch it work. Inspect the code. Then hire your own.
      </p>
      <div className={`${styles.heroCtas} fade-up`}>
        <a href="#dashboard" className="btn btn-primary">View Dashboard &darr;</a>
        <a href="https://reefagent.ai" className="btn btn-secondary" target="_blank" rel="noopener">Get Started &rarr;</a>
      </div>
      <div className="social-links fade-up">
        <a href="https://x.com/ReefAgent" className="social-link" target="_blank" rel="noopener">&#x1D54F; @ReefAgent</a>
        <a href="https://github.com/aigentive/reefagent" className="social-link" target="_blank" rel="noopener">GitHub</a>
      </div>
    </div>
  );
}
