import { create } from 'zustand';
import {
  isConnected,
  getAddress,
  signTransaction,
  requestAccess,
} from '@stellar/freighter-api';

interface WalletState {
  address: string | null;
  connecting: boolean;
  connect: () => Promise<void>;
  disconnect: () => void;
  signTx: (xdr: string, networkPassphrase: string) => Promise<string>;
}

export const useWallet = create<WalletState>((set) => ({
  address: null,
  connecting: false,

  connect: async () => {
    set({ connecting: true });
    try {
      const connected = await isConnected();
      if (!connected) throw new Error('Freighter not installed');
      await requestAccess();
      const result = await getAddress();
      if ('error' in result && result.error) throw new Error(String(result.error));
      set({ address: (result as { address: string }).address });
    } finally {
      set({ connecting: false });
    }
  },

  disconnect: () => set({ address: null }),

  signTx: async (xdr, networkPassphrase) => {
    const result = await signTransaction(xdr, { networkPassphrase });
    if ('error' in result && result.error) throw new Error(String(result.error));
    return (result as { signedTxXdr: string }).signedTxXdr;
  },
}));
