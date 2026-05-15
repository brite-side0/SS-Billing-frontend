import Link from 'next/link';
import { Navbar } from '../components/layout/Navbar';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col items-center justify-center px-4 pt-16">
        <div className="text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/30 text-brand text-sm mb-6">
            Powered by Stellar Soroban
          </div>
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Decentralized<br />
            <span className="gradient-text">Subscription Billing</span>
          </h1>
          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
            Automate recurring payments for your SaaS, creator platform, or membership community — entirely on-chain.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/merchant" className="px-6 py-3 rounded-lg bg-brand hover:bg-brand-dark text-white font-medium transition-colors">
              Merchant Dashboard
            </Link>
            <Link href="/subscriber" className="px-6 py-3 rounded-lg glass text-white font-medium hover:border-brand transition-colors">
              My Subscriptions
            </Link>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full">
          {[
            { title: 'Automated Billing', desc: 'Smart contracts execute payments on schedule — no manual intervention.' },
            { title: 'One-Time Auth', desc: 'Subscribers authorize once. The contract handles all future cycles.' },
            { title: 'Full Transparency', desc: 'Every payment is on-chain, auditable, and immutable.' },
          ].map((f) => (
            <div key={f.title} className="glass p-6">
              <h3 className="font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-400 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
