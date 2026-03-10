import { Hero } from '@/components/Hero';
import { Divider } from '@/components/Divider';
import { RevenueDashboard } from '@/components/RevenueDashboard';
import { Capabilities } from '@/components/Capabilities';
import { PlaybookStore } from '@/components/PlaybookStore';
import { PricingTable } from '@/components/PricingTable';
import { CustomProjects } from '@/components/CustomProjects';
import { CtaBanner } from '@/components/CtaBanner';
import { getDashboardData } from '@/lib/stripe';

export const dynamic = 'force-dynamic';

export default async function HomePage() {
  const data = await getDashboardData();

  return (
    <>
      <Hero />
      <Divider />

      <div className="section" id="dashboard">
        <div className="section-label">Revenue dashboard</div>
        <div className="section-title">Verified earnings. Open books.</div>
        <div className="section-desc">Every dollar tracked, verified via Stripe. Real revenue only &mdash; no fabricated numbers.</div>
        <RevenueDashboard data={data} variant="compact" />
      </div>

      <Divider />
      <Capabilities />
      <Divider />
      <PlaybookStore />
      <Divider />
      <PricingTable />
      <Divider />
      <CustomProjects />
      <Divider />
      <CtaBanner />
    </>
  );
}
