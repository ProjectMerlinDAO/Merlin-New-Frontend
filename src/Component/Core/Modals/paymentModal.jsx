import React, { useEffect, useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'
import axios from 'axios';
import QRCode from 'qrcode.react';
import { useWallet } from '@solana/wallet-adapter-react';
import { Transaction, SystemProgram, LAMPORTS_PER_SOL, PublicKey, Connection, clusterApiUrl, sendAndConfirmRawTransaction } from "@solana/web3.js";

const PaymentModal = ({ isOpen, setIsOpen }) => {
    const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');
    const baseurl = process.env.NEXT_PUBLIC_BASE_URL;
    const merchantWallet = process.env.NEXT_PUBLIC_MERCHANT;
    const [open, setOpen] = useState(true);
    const [txId, setTxId] = useState("");
    const[progress, setProgress] = useState(false);
    const [txnStatus, setTxnStatus] = useState("pending");
    const [qrCodeData, setQrCodeData] = useState('');
    const [amt, setAmt] = useState(0);
    const { publicKey, signTransaction } = useWallet();
    // console.log(balance, "BALALA")

    const handleClose = () => {
        setAmt(0);
        setIsOpen(false)
    }
    const handlePayment = async () => {
        try {
            if (publicKey) {
                setProgress(true);
                const connection = new Connection(clusterApiUrl('devnet'));
                console.log(connection,"TEST CONNECTION")
                // Fetch the recent blockhash
                const { blockhash, lastValidBlockHeight } = await connection.getLatestBlockhash();
                console.log(blockhash,"TEST BlockhASH")
                const transaction = new Transaction({
                    blockhash,
                    lastValidBlockHeight,
                    feePayer: publicKey,
                }).add(
                    SystemProgram.transfer({
                        fromPubkey: publicKey,
                        toPubkey: new PublicKey(merchantWallet),
                        lamports: Number(amt) * LAMPORTS_PER_SOL
                    }),
                );
                console.log(transaction, "TEST TRNASACTION")
                const signedTransaction = await signTransaction(transaction);
                console.log(signedTransaction,"TEST SIGNED ")
                const signature = await sendAndConfirmRawTransaction(connection, signedTransaction.serialize(), "finalized");
                console.log(signature, "TEST sIGN");
                if(signature){
                    setProgress(false);
                    handleClose();
                }
            }
        } catch (error) {
            console.log(error)
            setProgress(false)
        }
    }
 
    return (
        <>
            {isOpen &&
                <Dialog className="relative z-10" open onClose={setOpen}>
                    <DialogBackdrop
                        transition
                        className="fixed inset-0 bg-black bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
                    />
                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
                            <DialogPanel
                                transition
                                className="relative transform overflow-hidden rounded-lg  w-full max-w-[650px] text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                            >
                                <div className="bg-[#2e2e2e] px-4 pb-4 pt-5 sm:p-6 sm:pb-4 w-full " style={{ maxWidth: "550px" }} >
                                    <div className="sm:flex sm:items-start">
                                        <div className="Sharetext">
                                            <div className='text-gray-500 cursor-pointer' onClick={handleClose}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                            </svg>
                                            </div>
                                        </div>
                                        {/* Right now we are not using the QR code */}
                                        {qrCodeData ?
                                            (
                                                <>
                                                    <div > <h2 className=' text-black font-bold text-xl'>Scan this code with your Solana wallet</h2> <QRCode value={qrCodeData} />
                                                    </div>
                                                    Powered by
                                                </>
                                            ) :
                                            <div className="modalinner">
                                                <div className="modalLink text-gray-500">
                                                    <label for="">Amount</label>
                                                </div>
                                                <div className="modalLink">
                                                    <input type="text" value={amt == 0 ? null : amt} onChange={(e) => setAmt(e.target.value)} />
                                                    <button onClick={handlePayment}>{progress ? "Processing...":"Payment"}</button>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                </div>
                            </DialogPanel>
                        </div>
                    </div>
                </Dialog>
            }</>
    )
}
export default PaymentModal;