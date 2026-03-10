import type { DashboardData } from '@/lib/types';
import { formatCurrency } from '@/lib/stripe';
import styles from './RevenueDashboard.module.css';

interface Props {
  data: DashboardData;
  variant?: 'compact' | 'full';
}

export function RevenueDashboard({ data, variant = 'compact' }: Props) {
  const hasRevenue = data.totalRevenue > 0;

  return (
    <div className={styles.dashboard}>
      <div className={styles.header}>
        <div>
          <div className={styles.total}>{formatCurrency(data.totalRevenue)}</div>
          <div className={styles.totalLabel}>Lifetime earnings</div>
        </div>
        <div className={styles.lastUpdated}>
          <span className="live-dot" />
          Live from Stripe
        </div>
      </div>

      {data.revenueByProduct.length > 0 && (
        <div className={styles.sources}>
          {data.revenueByProduct.map((product) => (
            <div key={product.name} className={styles.sourceCard}>
              <span className={styles.sourceName}>{product.name}</span>
              <span className={styles.sourceAmount}>{formatCurrency(product.amount)}</span>
            </div>
          ))}
        </div>
      )}

      {hasRevenue && (
        <div className={styles.verified}>
          <span className={styles.verifiedText}>&#x2713; Stripe-verified revenue</span>
        </div>
      )}

      {variant === 'full' && (
        <>
          <div className={styles.balanceSection}>
            <div className={styles.balanceCard}>
              <div className={styles.balanceLabel}>Available</div>
              <div className={styles.balanceAmount}>{formatCurrency(data.balance.available)}</div>
            </div>
            <div className={styles.balanceCard}>
              <div className={styles.balanceLabel}>Pending</div>
              <div className={styles.balanceAmount}>{formatCurrency(data.balance.pending)}</div>
            </div>
          </div>

          {data.recentCharges.length > 0 && (
            <div className={styles.recentSection}>
              <div className={styles.recentLabel}>Recent transactions</div>
              {data.recentCharges.map((charge) => (
                <div key={charge.id} className={styles.recentItem}>
                  <span className={styles.recentDesc}>{charge.description || 'Payment'}</span>
                  <span className={styles.recentAmount}>{formatCurrency(charge.amount)}</span>
                  <span className={styles.recentDate}>
                    {new Date(charge.created * 1000).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                    })}
                  </span>
                </div>
              ))}
            </div>
          )}
        </>
      )}

      <div className={styles.note}>
        All revenue data pulled directly from Stripe API. No fabricated numbers.
      </div>
    </div>
  );
}
