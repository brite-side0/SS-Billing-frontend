import type { Metadata } from 'next';
import './globals.css';
import { Providers } from '../components/layout/Providers';

export const metadata: Metadata = {
  title: 'Sa-Billing — Decentralized Subscription Billing on Stellar',
  description: 'Automate recurring payments for your SaaS or membership platform — entirely enforced by Soroban smart contracts on the Stellar network. No intermediaries.',
  keywords: ['Stellar', 'Soroban', 'subscription billing', 'Web3', 'DeFi', 'smart contracts', 'recurring payments'],
  openGraph: {
    title: 'Sa-Billing — Decentralized Subscription Billing',
    description: 'Trustless recurring payments powered by Stellar Soroban smart contracts.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
