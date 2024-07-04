import React, { useEffect, useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'
import axios from 'axios';
import QRCode from 'qrcode.react';
import { useWallet } from '@solana/wallet-adapter-react';
const PaymentModal = ({ isOpen, setIsOpen }) => {
    const baseurl = process.env.NEXT_PUBLIC_BASE_URL;
    const { publicKey } = useWallet();
    const [open, setOpen] = useState(true);
    const [txId, setTxId] = useState("");
    const [txnStatus, setTxnStatus] = useState("pending");
    const [qrCodeData, setQrCodeData] = useState('');
    const [amt, setAmt] = useState(0);
    const handleClose = () => {
        setAmt(0);
        setIsOpen(false)
    }
    const handlePayment = async () => {
        try {
            const payApi = await axios.post(`${baseurl}/solana/processOrder`, {
                customerWallet: publicKey?.toBase58(),
                amount: amt
            })
            const data = payApi.data.redirectUrl;
            const transactionId = payApi.data.txnId
            if (data && transactionId) {
                // window.location.href = new URL(data);
                setQrCodeData(data);
                setTxId(transactionId);
            } else {
                console.log("URL not found")
            }
        } catch (error) {
            console.log(error)
        }
    }
    const transactionStatus = async () => {
        try {
            const status = await  axios.get(`${baseurl}/solana/transaction-status/:${txId}`);
            console.log(status,"STATUS");
        } catch (error) {

        }
    }
    console.log(qrCodeData, "DATATA")

     setTimeout(() => {
        if(txId){
            transactionStatus();
        }
     },[5000])
    return (
        <>
            {isOpen &&
                <Dialog className="relative z-10" open onClose={setOpen}>
                    <DialogBackdrop
                        transition
                        className="fixed inset-0 bg-white-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
                    />
                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
                            <DialogPanel
                                transition
                                className="relative py-24 px-24 transform overflow-hidden rounded-lg bg-white w-full max-w-[650px] text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                            >
                                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 w-full">
                                    <div className="sm:flex sm:items-start">
                                        <div className="Sharetext">
                                            <div className='text-gray-500 cursor-pointer' onClick={handleClose}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                            </svg>
                                            </div>
                                        </div>
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
                                                    <button onClick={handlePayment}>Payment</button>
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