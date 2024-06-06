import { config } from "@/config";
import Web3ModalProvider from "@/context";
import "@/styles/globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { cookieToInitialState } from "wagmi";

export default function App({ Component, pageProps }) {
  // const initialState = cookieToInitialState(config, headers().get('cookie'))
  return (
    <>
      <Web3ModalProvider>
        <Component {...pageProps} />
      </Web3ModalProvider>
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
    </>
  );
}
