import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <>
      <div className="divider" />
      <div className="section" style={{ padding: '2rem 0' }}>
        <div className="links">
          <a href="https://x.com/ReefAgent" className="link" target="_blank" rel="noopener">X / Twitter</a>
          <a href="https://github.com/aigentive/reefagent" className="link" target="_blank" rel="noopener">GitHub</a>
        </div>
      </div>
      <footer className={styles.footer}>
        <p className={styles.footerText}>
          <span className={styles.footerBrand}>
            <Image src="/logo.png" alt="" width={16} height={16} className={styles.footerLogo} />
            ReefAgent
          </span>
          {' '}&middot; The AI employee with an open ledger
        </p>
        <div className={styles.footerLinks}>
          <a href="https://x.com/ReefAgent" target="_blank" rel="noopener">@ReefAgent</a>
          <a href="https://x.com/ReefAgent" target="_blank" rel="noopener">Built by AIGENTIVE</a>
          <Link href="/support">Support</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
        </div>
      </footer>
    </>
  );
}
