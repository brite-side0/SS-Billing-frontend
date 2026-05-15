import type { Metadata } from 'next';
import './globals.css';
import { Providers } from '../components/layout/Providers';

export const metadata: Metadata = {
  title: 'SS-Billing — Decentralized Subscription Billing',
  description: 'Automated recurring payments powered by Stellar Soroban smart contracts',
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
