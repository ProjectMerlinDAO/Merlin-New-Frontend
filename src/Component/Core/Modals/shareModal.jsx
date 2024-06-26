import React, { useEffect, useState } from 'react';
import {
    RedditIcon,
    RedditShareButton,
    TwitterIcon,
    TwitterShareButton,
    WhatsappIcon,
    WhatsappShareButton,
} from "react-share";

const ShareModal = ({ isOpen, setIsOpen }) => {
    const [currentUrl, setCurrentUrl] = useState('');

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setCurrentUrl(window.location.href);
        }
    }, []);

    const handleClose = () => {
        setIsOpen(false)
    }
    console.log(currentUrl,"url")
    console.log(isOpen, "ISOPEN")
    return (
        <>
            {isOpen &&
                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle" open>
                    <div className="modal-box">
                        <h3 className="font-bold text-lg text-black">Share</h3>
                        <div className='text-black'>
                            <TwitterShareButton url={currentUrl ? currentUrl : ""} openShareDialogOnClick={true}>
                                <TwitterIcon size={32} round />
                            </TwitterShareButton>
                            <WhatsappShareButton url={currentUrl ? currentUrl : ""} openShareDialogOnClick={true}>
                                <WhatsappIcon size={32} round />
                            </WhatsappShareButton>
                            <RedditShareButton url={currentUrl ? currentUrl : ""} openShareDialogOnClick={true}>
                                <RedditIcon size={32} round />
                            </RedditShareButton>
                        </div>
                        <div className='text-black'>
                            <input type='text' value={currentUrl ? currentUrl : ""} />
                        </div>
                        <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn" onClick={handleClose}>Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            }
        </>
    )
}

export default ShareModal