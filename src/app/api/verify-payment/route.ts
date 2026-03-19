import { NextResponse } from 'next/server';
import { verifyUsdcTransfer } from '@/lib/usdc';

export const dynamic = 'force-dynamic';

const PRODUCTS: Record<string, { name: string; priceUsdc: number }> = {
  'first-agent': { name: 'Your First AI Agent — No Code Required', priceUsdc: 19 },
  'pays-bills': { name: 'The AI Agent That Pays Its Own Bills', priceUsdc: 29 },
};

export async function POST(req: Request) {
  try {
    const { txHash, product } = await req.json();

    if (!txHash || !product) {
      return NextResponse.json({ error: 'Missing txHash or product' }, { status: 400 });
    }

    const productInfo = PRODUCTS[product];
    if (!productInfo) {
      return NextResponse.json({ error: 'Unknown product' }, { status: 400 });
    }

    const walletAddress = process.env.PRIVY_WALLET_ADDRESS;
    if (!walletAddress) {
      return NextResponse.json({ error: 'Server wallet not configured' }, { status: 500 });
    }

    const result = await verifyUsdcTransfer(
      txHash as `0x${string}`,
      walletAddress as `0x${string}`,
      productInfo.priceUsdc,
    );

    if (result.valid) {
      // TODO: trigger playbook delivery (email, download link, etc.)
      return NextResponse.json({
        verified: true,
        product: productInfo.name,
        amount: result.amountUsdc,
        from: result.from,
        txHash: result.txHash,
      });
    }

    return NextResponse.json({
      verified: false,
      reason: result.reason,
    }, { status: 400 });
  } catch (err) {
    console.error('[verify-payment] Error:', err);
    return NextResponse.json({ error: 'Verification failed' }, { status: 500 });
  }
}
