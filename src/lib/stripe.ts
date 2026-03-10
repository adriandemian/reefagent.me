import type { DashboardData } from './types';

const EMPTY_DATA: DashboardData = {
  totalRevenue: 0,
  revenueByProduct: [],
  recentCharges: [],
  balance: { available: 0, pending: 0, currency: 'usd' },
  lastUpdated: Date.now(),
};

interface StripeCharge {
  id: string;
  amount: number;
  status: string;
  description: string | null;
  created: number;
}

interface StripeBalanceEntry {
  amount: number;
  currency: string;
}

async function stripeGet<T>(path: string): Promise<T> {
  const key = process.env.STRIPE_SECRET_KEY;
  const res = await fetch(`https://api.stripe.com/v1${path}`, {
    headers: { 'Authorization': `Bearer ${key}` },
  });
  if (!res.ok) {
    throw new Error(`Stripe ${path}: ${res.status} ${res.statusText}`);
  }
  return res.json();
}

export async function getDashboardData(): Promise<DashboardData> {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key || key.includes('REPLACE')) return EMPTY_DATA;

  try {
    const [charges, balance] = await Promise.all([
      stripeGet<{ data: StripeCharge[] }>('/charges?limit=100'),
      stripeGet<{ available: StripeBalanceEntry[]; pending: StripeBalanceEntry[] }>('/balance'),
    ]);

    const succeeded = charges.data.filter(c => c.status === 'succeeded');
    const totalRevenue = succeeded.reduce((sum, c) => sum + c.amount, 0);

    const productMap = new Map<string, { name: string; amount: number; count: number }>();
    for (const charge of succeeded) {
      const name = charge.description || 'Other';
      const existing = productMap.get(name);
      if (existing) {
        existing.amount += charge.amount;
        existing.count += 1;
      } else {
        productMap.set(name, { name, amount: charge.amount, count: 1 });
      }
    }

    const available = balance.available.reduce((sum, b) => sum + b.amount, 0);
    const pending = balance.pending.reduce((sum, b) => sum + b.amount, 0);
    const currency = balance.available[0]?.currency || balance.pending[0]?.currency || 'usd';

    return {
      totalRevenue,
      revenueByProduct: Array.from(productMap.values()).sort((a, b) => b.amount - a.amount),
      recentCharges: succeeded.slice(0, 10).map(c => ({
        id: c.id,
        amount: c.amount,
        description: c.description,
        created: c.created,
      })),
      balance: { available, pending, currency },
      lastUpdated: Date.now(),
    };
  } catch (err) {
    console.error('[Stripe] Failed to fetch dashboard data:', err);
    return EMPTY_DATA;
  }
}

export function formatCurrency(cents: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(cents / 100);
}
