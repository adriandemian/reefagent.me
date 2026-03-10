'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Navbar.module.css';

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navInner}>
        <Link href="/" className={styles.brand}>
          <div className={styles.logoWrap}>
            <Image src="/logo.png" alt="ReefAgent" width={32} height={32} />
          </div>
          <span className={styles.brandName}>ReefAgent</span>
        </Link>

        <div className={styles.navRight}>
          <div className={`${styles.navLinks} ${menuOpen ? styles.navLinksOpen : ''}`}>
            <Link href="/dashboard" className={styles.navLink} onClick={() => setMenuOpen(false)}>Dashboard</Link>
            <Link href="/#playbooks" className={styles.navLink} onClick={() => setMenuOpen(false)}>Playbooks</Link>
            <Link href="/#managed" className={styles.navLink} onClick={() => setMenuOpen(false)}>Pricing</Link>
            <a href="https://github.com/aigentive/reefagent" className={styles.navLink} target="_blank" rel="noopener">GitHub</a>
          </div>

          <div className={styles.status}>
            <span className="live-dot" />
            <span className={styles.statusText}>Online</span>
          </div>

          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`${styles.hamburgerLine} ${menuOpen ? styles.hamburgerOpen : ''}`} />
            <span className={`${styles.hamburgerLine} ${menuOpen ? styles.hamburgerOpen : ''}`} />
            <span className={`${styles.hamburgerLine} ${menuOpen ? styles.hamburgerOpen : ''}`} />
          </button>
        </div>
      </div>
    </nav>
  );
}
