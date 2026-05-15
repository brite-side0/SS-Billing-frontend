# SS-Billing — Frontend

> Next.js 14 merchant and subscriber dashboards for the [SS-Billing](https://github.com/brite-side0/SS-Billing) decentralized subscription billing platform, built on the **Stellar Soroban** network.

[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org)
[![Stellar](https://img.shields.io/badge/Network-Stellar%20Soroban-7B2FBE)](https://stellar.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://typescriptlang.org)

---

## Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS |
| State | Zustand |
| Data fetching | TanStack Query |
| Charts | Recharts |
| Wallet | Freighter (`@stellar/freighter-api`) |
| Animations | Framer Motion |

---

## Pages

| Route | Description |
|-------|-------------|
| `/` | Landing page |
| `/merchant` | Merchant dashboard — plans, revenue, subscriptions |
| `/subscriber` | Subscriber dashboard — active plans, payment history |

---

## Getting Started

```bash
# Install dependencies
pnpm install

# Set environment variables
cp .env.example .env.local
# NEXT_PUBLIC_API_URL=http://localhost:3001/api/v1

# Run dev server
pnpm dev
# → http://localhost:3000
```

---

## Wallet Integration

The frontend uses [Freighter](https://www.freighter.app/) — the official Stellar browser wallet extension.

```typescript
// src/store/wallet.store.ts
import { getPublicKey, isConnected, signTransaction } from '@stellar/freighter-api';

// Connect wallet
const publicKey = await getPublicKey();

// Sign a Soroban transaction before submitting
const signed = await signTransaction(xdr, { network: 'TESTNET' });
```

---

## Environment Variables

```env
NEXT_PUBLIC_API_URL=http://localhost:3001/api/v1
NEXT_PUBLIC_CONTRACT_ID=CXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
NEXT_PUBLIC_STELLAR_NETWORK=testnet
```

---

## Part of SS-Billing

| Repo | Description |
|------|-------------|
| [SS-Billing](https://github.com/brite-side0/SS-Billing) | Monorepo |
| [SS-Billing-Backend](https://github.com/brite-side0/SS-Billing-backend) | NestJS API |
| [SS-Billing-Contract](https://github.com/brite-side0/SS-Billing-contract) | Soroban smart contract |

---

MIT © [brite-side0](https://github.com/brite-side0)
