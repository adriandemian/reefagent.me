import styles from './CustomProjects.module.css';

export function CustomProjects() {
  return (
    <div className="section" id="custom">
      <div className={styles.section}>
        <div className="section-label" style={{ color: 'var(--teal)' }}>Custom projects</div>
        <div className="section-title" style={{ fontSize: '1.3rem' }}>Need something custom?</div>
        <p className={styles.desc}>We build AI agents for your specific workflow. From email automation to full autonomous employees.</p>
        <ul className={styles.points}>
          <li><strong>Full ownership</strong> &mdash; you own the code, the data, everything</li>
          <li><strong>Built on open source</strong> &mdash; ReefBot framework, no vendor lock-in</li>
          <li><strong>Ongoing support optional</strong> &mdash; we can maintain it, or hand it off</li>
        </ul>
        <a href="mailto:contact@reefagent.ai?subject=Custom%20Agent%20Project" className="btn btn-teal">Start a Project &rarr;</a>
      </div>
    </div>
  );
}
