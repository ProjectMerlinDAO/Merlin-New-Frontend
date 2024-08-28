import React from 'react';
import dynamic from 'next/dynamic';
// import { sepolia } from 'viem/chains';

// Dynamically import WormholeConnect with SSR disabled
const WormholeConnect = dynamic(
  () => import('@wormhole-foundation/wormhole-connect'),
  { ssr: false }
);

const Index = () => {
    const config = {
        env : 'testnet',
        networks: ["solana", "sepolia"],
        // tokens: ["ETH", "WETH", "MATIC", "WMATIC", "BSKT", "ETHsepolia"],
        // rpcUrls: {
        //     sepolia:'https://endpoints.omniatech.io/v1/zksync-era/sepolia/public'
        // }
      }
  return (
    <WormholeConnect config={config}/>  
  );
};

export default Index;
