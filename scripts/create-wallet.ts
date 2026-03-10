/**
 * One-time script to create a Privy server wallet on Base.
 *
 * Usage:
 *   npx tsx scripts/create-wallet.ts
 *
 * After running, add the output values to .env.local:
 *   PRIVY_WALLET_ID=<wallet_id>
 *   PRIVY_WALLET_ADDRESS=<wallet_address>
 */

import { createServerWallet } from '../src/lib/privy';

async function main() {
  console.log('Creating Privy server wallet (ethereum/Base)...\n');

  const wallet = await createServerWallet();

  console.log('Wallet created successfully!\n');
  console.log(`  ID:      ${wallet.id}`);
  console.log(`  Address: ${wallet.address}`);
  console.log(`  Chain:   ${wallet.chainType}\n`);
  console.log('Add these to your .env.local:');
  console.log(`  PRIVY_WALLET_ID=${wallet.id}`);
  console.log(`  PRIVY_WALLET_ADDRESS=${wallet.address}`);
}

main().catch((err) => {
  console.error('Failed to create wallet:', err);
  process.exit(1);
});
