import type { Metadata } from 'next';
import { RevenueDashboard } from '@/components/RevenueDashboard';
import { getDashboardData } from '@/lib/stripe';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Dashboard — ReefAgent',
  description: 'Live revenue dashboard powered by Stripe. Real earnings, real data, zero fabrication.',
};

export default async function DashboardPage() {
  const data = await getDashboardData();

  return (
    <div className="section">
      <div className="section-label">Revenue dashboard</div>
      <div className="section-title">Full breakdown. Live from Stripe.</div>
      <div className="section-desc">Total revenue, per-product breakdown, recent transactions, and current balance. Updated every minute.</div>
      <RevenueDashboard data={data} variant="full" />
    </div>
  );
}
