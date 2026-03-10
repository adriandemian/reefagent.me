import { createPublicClient, http, parseAbi, formatUnits } from 'viem';
import { base } from 'viem/chains';
import { USDC_BASE_ADDRESS, USDC_DECIMALS } from './privy';

const client = createPublicClient({
  chain: base,
  transport: http(),
});

const erc20Abi = parseAbi([
  'function balanceOf(address) view returns (uint256)',
  'event Transfer(address indexed from, address indexed to, uint256 value)',
]);

/**
 * Get USDC balance for an address on Base.
 */
export async function getUsdcBalance(address: `0x${string}`): Promise<string> {
  const balance = await client.readContract({
    address: USDC_BASE_ADDRESS,
    abi: erc20Abi,
    functionName: 'balanceOf',
    args: [address],
  });
  return formatUnits(balance, USDC_DECIMALS);
}

/**
 * Verify a USDC transfer transaction on Base.
 * Returns the transfer amount if valid, null if not a valid USDC transfer.
 */
export async function verifyUsdcTransfer(
  txHash: `0x${string}`,
  expectedTo: `0x${string}`,
  expectedAmountUsdc?: number,
) {
  const receipt = await client.getTransactionReceipt({ hash: txHash });

  if (receipt.status !== 'success') {
    return { valid: false, reason: 'Transaction failed' } as const;
  }

  // Find USDC Transfer event to our wallet
  for (const log of receipt.logs) {
    if (log.address.toLowerCase() !== USDC_BASE_ADDRESS.toLowerCase()) continue;

    try {
      const [from, to, value] = [
        `0x${log.topics[1]?.slice(26)}` as `0x${string}`,
        `0x${log.topics[2]?.slice(26)}` as `0x${string}`,
        BigInt(log.data),
      ];

      if (to.toLowerCase() !== expectedTo.toLowerCase()) continue;

      const amountUsdc = Number(formatUnits(value, USDC_DECIMALS));

      if (expectedAmountUsdc && Math.abs(amountUsdc - expectedAmountUsdc) > 0.01) {
        return { valid: false, reason: 'Amount mismatch', amountUsdc, from } as const;
      }

      return { valid: true, amountUsdc, from, to, txHash } as const;
    } catch {
      continue;
    }
  }

  return { valid: false, reason: 'No USDC transfer found to expected address' } as const;
}
