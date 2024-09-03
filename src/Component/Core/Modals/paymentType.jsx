import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import React, { useState } from 'react'

const PaymentType = ({isOpen, setIsOpen,setPayType,payType,wallet}) => {
    const [open, setOpen] = useState(true);
    const openTokenModal = () => {
        if (!wallet) {
          toast.error("Please connect wallet");
          return;
        }
        setIsOpen(true);  
        setPayType(false);  
      }
      const handleClose = () => { 
        setPayType(false);
       }
    return (
        <div>
            {payType &&
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
                                <div className="bg-[#2e2e2e] px-4 pb-16 pt-5 sm:p-6 sm:pb-4 w-full " style={{ maxWidth: "550px" }} >
                                    <div className="sm:flex sm:items-start">
                                        <div className="Sharetext">
                                            <div className='text-gray-500 cursor-pointer' onClick={handleClose}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                            </svg>
                                            </div>
                                        </div>
                                            <div className="modalinner">
                                                <div className="modalLink text-white-500 pt-5 font-[700]">
                                                    <label for="">PAYMENT TYPE</label>
                                                </div>
                                                    <button className='disabled:opacity-75   hov-btn no-border btn-has-shape bg-[#12CFA7] h-[60px] text-white quantico font-[700] w-full rounded-[18px] uppercase mt-[30px]'  >Credit/Debit</button>
                                                    <button className='disabled:opacity-75   hov-btn no-border btn-has-shape bg-[#12CFA7] h-[60px] text-white quantico font-[700] w-full rounded-[18px] uppercase mt-[30px]' onClick={openTokenModal} >MRLN Token</button>
                                                <div className="modalLink">
                                                    {/* <input type="text" value={amt == 0 ? null : amt} onChange={(e) => setAmt(e.target.value)} /> */}
                                                </div>
                                            </div>
                                    </div>
                                </div>
                            </DialogPanel>
                        </div>
                    </div>
                </Dialog>}
        </div>
    )
}

export default PaymentType