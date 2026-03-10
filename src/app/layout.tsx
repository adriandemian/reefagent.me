import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
  weight: ['400', '500'],
});

export const metadata: Metadata = {
  title: 'ReefAgent — The AI Employee With an Open Ledger',
  description: 'ReefAgent is an AI persona with verified earnings, live work log, and source code you can inspect. Watch it work. Inspect the code. Then hire your own.',
  metadataBase: new URL('https://reefagent.me'),
  openGraph: {
    type: 'website',
    url: 'https://reefagent.me',
    title: 'ReefAgent — The AI Employee With an Open Ledger',
    description: 'An AI persona with verified earnings, live work log, and source code you can inspect. Watch it work. Then hire your own.',
    images: ['/logo.png'],
    siteName: 'ReefAgent',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ReefAgent',
    title: 'ReefAgent — The AI Employee With an Open Ledger',
    description: 'An AI persona with verified earnings, live work log, and source code you can inspect. Watch it work. Then hire your own.',
    images: ['/logo.png'],
  },
  icons: { icon: '/logo.png' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          defer
          data-domain="reefagent.me"
          src="https://plausible.io/js/script.js"
        />
      </head>
      <body>
        <div className="wrap">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
