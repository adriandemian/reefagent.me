export interface DashboardData {
  totalRevenue: number;
  revenueByProduct: { name: string; amount: number; count: number }[];
  recentCharges: { id: string; amount: number; description: string | null; created: number }[];
  balance: { available: number; pending: number; currency: string };
  lastUpdated: number;
}
