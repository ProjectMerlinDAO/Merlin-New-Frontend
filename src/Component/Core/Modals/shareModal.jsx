import React, { useEffect, useState } from 'react';
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'
import {
    RedditIcon,
    RedditShareButton,
    TwitterIcon,
    TwitterShareButton,
    WhatsappIcon,
    WhatsappShareButton,
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
                        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
                    />
                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
                            <DialogPanel
                                transition
                                className="relative transform overflow-hidden rounded-lg bg-white w-full max-w-[650px] text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                            >
                                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 w-full">
                                    <div className="sm:flex sm:items-start">
                                        <div className="Sharetext">
                                            <h2 className=' text-3xl font-medium  text-gray-500'>Share</h2>
                                            <div className='text-gray-500 cursor-pointer' onClick={handleClose}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                            </svg>
                                            </div>
                                        </div>
                                        <div className="modalinner">
                                            <div className="SocialIcon">
                                                <TwitterShareButton url={currentUrl ? currentUrl : ""} openShareDialogOnClick={true}>
                                                    <TwitterIcon size={50} round />
                                                </TwitterShareButton>
                                                <WhatsappShareButton url={currentUrl ? currentUrl : ""} openShareDialogOnClick={true}>
                                                    <WhatsappIcon size={50} round />
                                                </WhatsappShareButton>
                                                <RedditShareButton url={currentUrl ? currentUrl : ""} openShareDialogOnClick={true}>
                                                    <RedditIcon size={50} round />
                                                </RedditShareButton>
                                            </div>
                                            <div className="modalLink">
                                                <input type="text" value={`${currentUrl.slice(0,40)}....`} readOnly />
                                                <CopyToClipboard text={currentUrl}>
                                                    <button className={copied ? "button_1" : null} onClick={() => setIsCopied(true)}>{copied ? "Copied" : "Copy"}</button>
                                                </CopyToClipboard>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
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