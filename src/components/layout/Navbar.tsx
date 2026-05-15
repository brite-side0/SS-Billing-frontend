'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

const links = ['Features', 'How It Works', 'Developers', 'Pricing'];

export function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 inset-x-0 z-50 flex justify-center pt-4 px-4"
    >
      <nav
        className="w-full max-w-5xl flex items-center justify-between px-4 h-12 rounded-2xl"
        style={{
          background: 'rgba(3,7,18,0.8)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          border: '1px solid rgba(255,255,255,0.07)',
          boxShadow: '0 1px 40px rgba(0,0,0,0.4)',
        }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <div className="w-6 h-6 rounded-lg flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #7C3AED, #3B82F6)' }}>
            <Zap size={12} fill="white" className="text-white" />
          </div>
          <span className="text-sm font-semibold text-white tracking-tight">Sa-Billing</span>
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link key={l} href={`#${l.toLowerCase().replace(' ', '-')}`}
              className="px-3 py-1.5 text-xs font-medium text-white/50 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-150">
              {l}
            </Link>
          ))}
        </div>

        {/* Right */}
        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium"
            style={{ background: 'rgba(59,130,246,0.08)', border: '1px solid rgba(59,130,246,0.2)', color: '#93c5fd' }}>
            <span className="w-1 h-1 rounded-full bg-blue-400 animate-pulse" />
            Stellar
          </div>
          <Link href="/merchant" className="btn-primary !py-2 !px-4 !text-xs !rounded-lg">
            Launch App →
          </Link>
        </div>
      </nav>
    </motion.header>
  );
}
