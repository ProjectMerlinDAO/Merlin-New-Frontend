// import React, { useMemo } from "react";
// // import { config } from "@/config";
// // import Web3ModalProvider from "@/context";
// import "@/styles/globals.css";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
// import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
// import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
// import {
//   GlowWalletAdapter,
//   PhantomWalletAdapter,
// } from "@solana/wallet-adapter-wallets";
// import { clusterApiUrl } from "@solana/web3.js";
// import { BackpackWalletAdapter } from "@solana/wallet-adapter-backpack";
// import { Provider } from "react-redux";
// import store from "@/src/redux/store";
// import { GoogleOAuthProvider } from '@react-oauth/google';
// require("@solana/wallet-adapter-react-ui/styles.css");


// export default function App({ Component, pageProps }) {
//   // const initialState = cookieToInitialState(config, headers().get('cookie'))
//    const network = WalletAdapterNetwork.Devnet;
//   //  const network = WalletAdapterNetwork.Mainnet;
//   const endpoint = useMemo(() => clusterApiUrl(network), [network]);
//   const wallets = useMemo(
//     () => [
//       new PhantomWalletAdapter(),
//       new GlowWalletAdapter(),
//       new BackpackWalletAdapter()
//     ],
//     [network]
//   );
//   const clientId = process.env.NEXT_PUBLIC_CLIENTID;
//   return (
//     <>
//     <GoogleOAuthProvider clientId={clientId}>

//     <Provider store={store}>
//      <ConnectionProvider endpoint={endpoint}>
//       <WalletProvider wallets={wallets} autoConnect>
//         <WalletModalProvider>
//       {/* <Web3ModalProvider> */}
//         <Component {...pageProps}  />
//       {/* </Web3ModalProvider> */}
//       </WalletModalProvider >
//       </WalletProvider >
//       </ConnectionProvider >
//       <ToastContainer
//         position="top-right"
//         className="custom_toast_error"
//         autoClose={5000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="light"
//       />
//       </Provider>
      
//       </GoogleOAuthProvider>
//     </>
//   )
// }

import React, { useMemo } from "react";
import "@/styles/globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { GlowWalletAdapter, PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from "@solana/web3.js";
import { BackpackWalletAdapter } from "@solana/wallet-adapter-backpack";
import { Provider } from "react-redux";
import store from "@/src/redux/store";
import { GoogleOAuthProvider } from '@react-oauth/google';
require("@solana/wallet-adapter-react-ui/styles.css");

export default function App({ Component, pageProps }) {
  const network = WalletAdapterNetwork.Devnet;
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);
  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new GlowWalletAdapter(),
      new BackpackWalletAdapter()
    ],
    [network]
  );
  const clientId = process.env.NEXT_PUBLIC_CLIENTID;

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Provider store={store}>
        <ConnectionProvider endpoint={endpoint}>
          <WalletProvider wallets={wallets} autoConnect>
            <WalletModalProvider>
              <Component {...pageProps} />
            </WalletModalProvider>
          </WalletProvider>
        </ConnectionProvider>
        <ToastContainer
          position="top-right"
          className="custom_toast_error"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </Provider>
    </GoogleOAuthProvider>
  );
}
