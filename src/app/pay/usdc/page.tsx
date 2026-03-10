'use client';

import { Suspense, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const PRODUCTS: Record<string, { name: string; price: number }> = {
  'first-agent': { name: 'Your First AI Agent — No Code Required', price: 19 },
};

const WALLET_ADDRESS = process.env.NEXT_PUBLIC_PRIVY_WALLET_ADDRESS || '';

function UsdcPaymentContent() {
  const params = useSearchParams();
  const productKey = params.get('product') || 'first-agent';
  const product = PRODUCTS[productKey];

  const [txHash, setTxHash] = useState('');
  const [status, setStatus] = useState<'idle' | 'verifying' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const [copied, setCopied] = useState(false);

  if (!product) {
    return (
      <div className="thank-you-wrap">
        <h1 className="page-title">Product not found</h1>
        <Link href="/" className="btn-home">&larr; Back to ReefAgent</Link>
      </div>
    );
  }

  const copyAddress = async () => {
    await navigator.clipboard.writeText(WALLET_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const verify = async () => {
    if (!txHash.startsWith('0x') || txHash.length < 66) {
      setStatus('error');
      setMessage('Please enter a valid transaction hash (starts with 0x)');
      return;
    }

    setStatus('verifying');
    setMessage('');

    try {
      const res = await fetch('/api/verify-payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ txHash, product: productKey }),
      });

      const data = await res.json();

      if (data.verified) {
        setStatus('success');
        setMessage(`Payment verified! ${data.amount} USDC received.`);
      } else {
        setStatus('error');
        setMessage(data.reason || data.error || 'Could not verify payment');
      }
    } catch {
      setStatus('error');
      setMessage('Network error — please try again');
    }
  };

  if (status === 'success') {
    return (
      <div className="thank-you-wrap">
        <div className="check-icon">&#10003;</div>
        <h1 className="page-title">Payment verified!</h1>
        <p style={{ color: 'var(--text-2)', fontSize: '1.05rem', marginBottom: '2.5rem', maxWidth: '420px' }}>
          Your USDC payment has been confirmed on Base. You should receive your playbook via email shortly.
        </p>
        <div className="next-steps">
          <h3>What happens next</h3>
          <ol>
            <li><strong>Check your email</strong> for the download link</li>
            <li><strong>Download your playbook</strong> using the link in the email</li>
            <li><strong>Start building</strong> &mdash; follow the step-by-step guides inside</li>
          </ol>
        </div>
        <p className="support-note">
          Didn&apos;t receive the email? Reach out to <a href="mailto:contact@reefagent.ai">contact@reefagent.ai</a> with your tx hash.
        </p>
        <Link href="/" className="btn-home">&larr; Back to ReefAgent</Link>
      </div>
    );
  }

  return (
    <div className="thank-you-wrap" style={{ justifyContent: 'flex-start', paddingTop: '4rem' }}>
      <Link href="/#playbooks" style={{ color: 'var(--text-3)', fontSize: '0.85rem', textDecoration: 'none', marginBottom: '2rem' }}>
        &larr; Back to playbooks
      </Link>

      <h1 className="page-title" style={{ fontSize: '1.5rem' }}>Pay with USDC</h1>
      <p style={{ color: 'var(--text-2)', fontSize: '0.95rem', marginBottom: '2rem' }}>
        {product.name}
      </p>

      {/* Amount */}
      <div style={{
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: '12px',
        padding: '1.5rem',
        width: '100%',
        maxWidth: '420px',
        marginBottom: '1.5rem',
        textAlign: 'left',
      }}>
        <div style={{ color: 'var(--text-3)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
          Amount
        </div>
        <div style={{ fontFamily: 'var(--mono)', fontSize: '1.5rem', fontWeight: 700, color: 'var(--green)' }}>
          {product.price} USDC
        </div>
        <div style={{ color: 'var(--text-3)', fontSize: '0.78rem', marginTop: '0.25rem' }}>
          on Base (Chain ID 8453)
        </div>
      </div>

      {/* Wallet Address */}
      <div style={{
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: '12px',
        padding: '1.5rem',
        width: '100%',
        maxWidth: '420px',
        marginBottom: '1.5rem',
        textAlign: 'left',
      }}>
        <div style={{ color: 'var(--text-3)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
          Send to
        </div>
        <div style={{
          fontFamily: 'var(--mono)',
          fontSize: '0.72rem',
          color: 'var(--text)',
          wordBreak: 'break-all',
          lineHeight: 1.5,
          marginBottom: '0.75rem',
        }}>
          {WALLET_ADDRESS}
        </div>
        <button
          onClick={copyAddress}
          className="btn btn-secondary btn-sm"
          style={{ width: '100%', justifyContent: 'center' }}
        >
          {copied ? 'Copied!' : 'Copy Address'}
        </button>
      </div>

      {/* Verify */}
      <div style={{
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: '12px',
        padding: '1.5rem',
        width: '100%',
        maxWidth: '420px',
        textAlign: 'left',
      }}>
        <div style={{ color: 'var(--text-3)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
          After sending, paste your transaction hash
        </div>
        <input
          type="text"
          placeholder="0x..."
          value={txHash}
          onChange={(e) => setTxHash(e.target.value.trim())}
          style={{
            width: '100%',
            padding: '0.6rem 0.8rem',
            fontFamily: 'var(--mono)',
            fontSize: '0.78rem',
            background: 'var(--surface-2)',
            border: '1px solid var(--border-2)',
            borderRadius: '8px',
            color: 'var(--text)',
            marginBottom: '0.75rem',
            outline: 'none',
          }}
        />
        <button
          onClick={verify}
          disabled={status === 'verifying'}
          className="btn btn-buy btn-sm"
          style={{ width: '100%', justifyContent: 'center', opacity: status === 'verifying' ? 0.6 : 1 }}
        >
          {status === 'verifying' ? 'Verifying...' : 'Verify Payment'}
        </button>
        {message && (
          <p style={{
            marginTop: '0.75rem',
            fontSize: '0.82rem',
            color: status === 'error' ? '#ef4444' : 'var(--green)',
          }}>
            {message}
          </p>
        )}
      </div>

      <p style={{ color: 'var(--text-3)', fontSize: '0.75rem', marginTop: '1.5rem', maxWidth: '420px' }}>
        Send exactly {product.price} USDC on Base. The transaction typically confirms within a few seconds. If you have any issues, email <a href="mailto:contact@reefagent.ai" style={{ color: 'var(--accent)', textDecoration: 'none' }}>contact@reefagent.ai</a>.
      </p>
    </div>
  );
}

export default function UsdcPaymentPage() {
  return (
    <Suspense fallback={
      <div className="thank-you-wrap">
        <p style={{ color: 'var(--text-2)' }}>Loading...</p>
      </div>
    }>
      <UsdcPaymentContent />
    </Suspense>
  );
}
