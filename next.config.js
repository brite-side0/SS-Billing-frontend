/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@ss-billing/ui', '@ss-billing/types'],
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3001/api/v1',
    NEXT_PUBLIC_STELLAR_NETWORK: process.env.NEXT_PUBLIC_STELLAR_NETWORK ?? 'testnet',
    NEXT_PUBLIC_CONTRACT_ID: process.env.NEXT_PUBLIC_CONTRACT_ID ?? '',
  },
};

module.exports = nextConfig;
