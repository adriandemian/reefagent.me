import styles from './ComparisonTable.module.css';

const rows = [
  {
    label: 'Who owns the code?',
    reef: 'You',
    platform: 'Platform',
    cloud: 'Platform',
  },
  {
    label: 'Where does it run?',
    reef: 'Your infra',
    platform: 'Their editor',
    cloud: 'Their cloud',
  },
  {
    label: 'Revenue transparency',
    reef: 'Open Stripe ledger',
    platform: 'None',
    cloud: 'None',
  },
  {
    label: 'Vendor lock-in',
    reef: 'None \u2014 full source',
    platform: 'Editor-dependent',
    cloud: 'GPU-dependent',
  },
  {
    label: 'Agent autonomy',
    reef: 'Think loops, self-directed',
    platform: 'Prompt-response only',
    cloud: 'API-bound',
  },
  {
    label: 'Multi-channel',
    reef: '6+ channels, same memory',
    platform: 'Editor only',
    cloud: 'API only',
  },
];

export function ComparisonTable() {
  return (
    <div className="section" id="compare">
      <div className="section-label">Why ReefAgent</div>
      <div className="section-title">Agents owned by you vs. managed by platforms.</div>
      <div className="section-desc">The AI agent space is consolidating around platforms that control your data, your infra, and your revenue. We built the alternative.</div>
      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.labelCol} scope="col" aria-label="Feature"></th>
              <th className={styles.reefCol} scope="col">ReefAgent</th>
              <th scope="col">Platform Agents<span className={styles.examples}>Copilot, Cursor</span></th>
              <th scope="col">Cloud Agents<span className={styles.examples}>NeMo, OpenClaw</span></th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.label}>
                <td className={styles.rowLabel}>{row.label}</td>
                <td className={styles.reefCell}>{row.reef}</td>
                <td>{row.platform}</td>
                <td>{row.cloud}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
