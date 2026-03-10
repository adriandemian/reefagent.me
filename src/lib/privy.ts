import { PrivyClient } from '@privy-io/node';

export const privy = new PrivyClient({
  appId: process.env.PRIVY_API_KEY!,
  appSecret: process.env.PRIVY_API_SECRET!,
});

// USDC on Base (chain ID 8453)
export const BASE_CHAIN_ID = 8453;
export const BASE_CAIP2 = `eip155:${BASE_CHAIN_ID}`;
export const USDC_BASE_ADDRESS = '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913' as const;
export const USDC_DECIMALS = 6;

/**
 * Create a server wallet on Ethereum (Base-compatible).
 * Run once, then store the wallet ID and address in env vars.
 */
export async function createServerWallet() {
  const wallet = await privy.wallets().create({
    chain_type: 'ethereum',
  });
  return {
    id: wallet.id,
    address: wallet.address,
    chainType: wallet.chain_type,
  };
}

/**
 * Get an existing wallet by ID.
 */
export async function getWallet(walletId: string) {
  return privy.wallets().get(walletId);
}

/**
 * Sign and broadcast a transaction on Base via the server wallet.
 */
export async function sendTransaction(
  walletId: string,
  to: string,
  data: string,
  value: string = '0x0',
) {
  return privy.wallets().rpc(walletId, {
    method: 'eth_sendTransaction',
    caip2: BASE_CAIP2,
    params: {
      transaction: {
        to,
        data,
        value,
        chain_id: BASE_CHAIN_ID,
      },
    },
  });
}
