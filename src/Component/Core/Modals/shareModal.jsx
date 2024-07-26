import React, { useEffect, useState } from 'react';
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'
import {
    RedditIcon,
    RedditShareButton,
    TwitterIcon,
    TwitterShareButton,
    WhatsappIcon,
    WhatsappShareButton,
    XIcon,
    LinkedinIcon,
    LinkedinShareButton,
    TelegramIcon,
    TelegramShareButton

} from "react-share";
import { CopyToClipboard } from 'react-copy-to-clipboard';
const ShareModal = ({ isOpen, setIsOpen }) => {
    const [open, setOpen] = useState(true)
    const [currentUrl, setCurrentUrl] = useState('');
    const [copied, setIsCopied] = useState(false)

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setCurrentUrl(window.location.href);
        }
    }, []);

    const handleClose = () => {
        setIsOpen(false)
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
                                {/* <div className="bg-[#2e2e2e] px-4 pb-4 pt-5 sm:p-6 sm:pb-4 w-full " style={{ maxWidth: "550px" }} > */}
                                <div className="bg-[#000000]  border border-solid border-[#12cfa7] rounded-2xl px-4 pb-4 mb-4 pt-5 sm:p-2 sm:pb-2 w-full " >
                                    <div className="sm:flex sm:items-start">
                                        <div className="Sharetext">
                                            <h2 className=' text-3xl font-medium  text-white '>Share</h2>
                                            <div className='text-gray-500 cursor-pointer' onClick={handleClose}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                            </svg>
                                            </div>
                                        </div>
                                        <div className="modalinner">
                                            <div className="SocialIcon">
                                                <TwitterShareButton url={currentUrl ? currentUrl : ""} openShareDialogOnClick={true}>
                                                    {/* <TwitterIcon size={50} round /> */}
                                                    <XIcon size={50} round />
                                                </TwitterShareButton>
                                                <WhatsappShareButton url={currentUrl ? currentUrl : ""} openShareDialogOnClick={true}>
                                                    <WhatsappIcon size={50} round />
                                                </WhatsappShareButton>
                                                <RedditShareButton url={currentUrl ? currentUrl : ""} openShareDialogOnClick={true}>
                                                    <RedditIcon size={50} round />
                                                </RedditShareButton >
                                                <LinkedinShareButton  url={currentUrl ? currentUrl : ""} openShareDialogOnClick={true}>
                                                <LinkedinIcon size={50} round />
                                                </LinkedinShareButton>
                                                <TelegramShareButton url={currentUrl ? currentUrl : ""} openShareDialogOnClick={true}>
                                                    <TelegramIcon size={50} round/>
                                                </TelegramShareButton>
                                            </div>
                                            <div className="modalLink " style={{ maxWidth: "350px", margin: "0 auto" }}>
                                                <input className='text-[#FFFFFF]' style={{ background: 'linear-gradient(90deg, rgba(18, 207, 167, 0.00) 0%, #12CFA7 100%)' }} type="text" value={`${currentUrl.slice(0, 29)}....`} readOnly />
                                                <CopyToClipboard text={currentUrl}>
                                                    <button className={copied ? "button_1" : null} onClick={() => setIsCopied(true)}>{copied ? "Copied" : "Copy"}</button>
                                                </CopyToClipboard>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </DialogPanel>
                        </div>
                    </div>
                </Dialog>
            }
        </>
    )
}

export default ShareModal