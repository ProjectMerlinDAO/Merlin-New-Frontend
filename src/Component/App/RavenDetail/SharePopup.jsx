import Image from 'next/image'
import React, { useState } from 'react'

const socialIcons = [
    { src: '/assets/images/icons/twitter.svg', alt: 'Twitter', href: '#', height: '22', width: '22', },
    { src: '/assets/images/icons/fb.svg', alt: 'Facebook', href: '#', height: '22', width: '22', },
    { src: '/assets/images/icons/telegram.svg', alt: 'Telegram', href: '#', height: '22', width: '22', },
    { src: '/assets/images/icons/mediam.svg', alt: 'Medium', href: '#', height: '30', width: '30', }
];

const SharePopup = () => {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        const url = "https://projectmerlin.io/#a00043";
        navigator.clipboard.writeText(url).then(() => {
            setCopied(true);
            setTimeout(() => {
                setCopied(false);
            }, 3000);
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    };

    return (
        <div>
            <dialog id="shareModal" className="modal">
                <div className="modal-box max-w-[420px] w-full rounded-[30px] bg-[rgba(39,49,46,0.90)] backdrop-blur-[10px] p-[40px]">
                    <div className="flex items-center justify-start">
                        <div className="min-h-[70px] min-w-[70px] max-h-[70px] max-w-[70px] rounded-[15px] overflow-hidden">
                            <Image src='/assets/images/img/cave5.png' alt="img" className="object-cover w-full h-full" width="60" height="60" />
                        </div>
                        <div className="ml-[14px]">
                            <h3 className="overflow-hidden text-ellipsis text-[20px] lg:text-[18px] md:text-[16px] font-[500] text-white lexend mb-[5px] text-nowrap max-w-[320px] 2xl:max-w-[260px]">Want to visit Maldives</h3>
                            <p className="text-[16px] lg:text-[15px] md:text-[14px] font-[300] lexend uppercase">Code: #A00043</p>
                        </div>
                    </div>
                    <ul className="flex items-start justify-start md:justify-center mb-[40px] lg:mb-[20px] max-w-[370px] lg:mx-auto flex-wrap gap-[20px] sm:gap-[10px] mt-[40px] xsm:mt-[30px]">
                        {socialIcons.map((icon, index) => (
                            <li key={index} className='social-icon-btn'>
                                <a href={icon.href} className='flex btn-has-shape light-shape items-center justify-center rounded-[16px] sm:rounded-[10px] bg-[rgba(255,255,255,0.1)] backdrop-blur-[5px] h-[70px] w-[70px] sm:h-[50px] sm:w-[50px]' >
                                    <span className="btn-icons">
                                        <span className="btn-icon my-[0px]">
                                            <Image src={icon.src} alt={icon.alt} width={icon.width} height={icon.height} />
                                        </span>
                                        <span className="btn-icon my-[0px]">
                                            <Image src={icon.src} alt={icon.alt} width={icon.width} height={icon.height} />
                                        </span>
                                    </span>
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="flex items-center justify-between rounded-[15px] bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.12)] h-[55px] px-[15px] py-[5px]">
                        <span className="overflow-hidden text-nowrap text-ellipsis max-w-[257px] text-[15px] font-[500] text-white">https://projectmerlin.io/#a00043...</span>
                        <span className="cursor-pointer" onClick={copyToClipboard}>
                            {copied ? (
                                <span className="text-green-500 text-[13px]">Copied!</span>
                            ) : (
                                <Image src="/assets/images/icons/copy-icon.svg" alt="icon" height="16" width="16" />
                            )}
                        </span>
                    </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    )
}

export default SharePopup
