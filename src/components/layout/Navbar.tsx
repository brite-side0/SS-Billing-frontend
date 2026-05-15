import Link from 'next/link';
import { WalletButton } from '../wallet/WalletButton';

export function Navbar() {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 border-b border-surface-border bg-surface/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold gradient-text">SS-Billing</Link>
        <div className="flex items-center gap-6 text-sm text-gray-400">
          <Link href="/merchant" className="hover:text-white transition-colors">Dashboard</Link>
          <Link href="/subscriber" className="hover:text-white transition-colors">Subscriptions</Link>
          <WalletButton />
        </div>
      </div>
    </nav>
  );
}
