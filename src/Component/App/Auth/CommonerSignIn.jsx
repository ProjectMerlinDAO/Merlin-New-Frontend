import React, { useState } from 'react'


const CommonerSignIn = ({isOpen, setIsOpen}) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const images = [
        { src: "../assets/images/img/sign-in-img1.png", alt: "img" },
        { src: "../assets/images/img/sign-in-img2.png", alt: "img" },
        { src: "../assets/images/img/sign-in-img3.png", alt: "img" },
        { src: "../assets/images/img/sign-in-img4.png", alt: "img" },
        { src: "../assets/images/img/sign-in-img5.png", alt: "img" },
    ];

    const handleImageClick = (index) => {
        setActiveIndex(index);
    };
   const handleWalletConnect = () => {
    // document.getElementById('signInModal').close();
    setIsOpen(false);
    open();
   }

    return (
        <div className="relative bg-[#27312E] rounded-[30px] p-[50px] w-full overflow-hidden text-center flex items-center justify-center flex-col">
            <div className="h-[133px] w-[133px] rounded-[50%] bg-[#12CFA7] blur-[100px] mx-auto top-[-65px] z-0 absolute">
            </div>
            <div className='relative z-0 w-full'>
                <h3 className='mb-[25px] text-[30px] text-white quantico font-[700] uppercase max-w-[329px] w-full mx-auto'>Sign In as Community Member</h3>
                <p className='mb-[25px] text-[16px]'>To sign in as a community member, you must own at least one Project Merlin Community Member NFT. Before signing in, select which Community Member NFT you would like to use for access.</p>
                <ul className="flex items-start justify-start mx-[-7.5px] mb-[30px]">
                    {images.map((image, index) => (
                        <li key={index} className="w-[20%] px-[7.5px]">
                            <div
                                className={`px-[10px] py-[10px] text-center flex items-center justify-center flex-col gap-[5px] relative rounded-[15px] sign-in-img-card ${activeIndex === index ? 'active' : ''}`}
                                style={{ background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.03) 100%)' }}
                                onClick={() => handleImageClick(index)}
                            >
                                <img src={image.src} alt={image.alt} className="w-full min-h-[80px] object-cover rounded-[5px] overflow-hidden" />
                                <img src="../assets/images/icons/check-green.svg" alt="icon" className="check-icon" />
                            </div>
                        </li>
                    ))}
                </ul>
                <button type='submit' onClick={handleWalletConnect} className="hov-btn btn-has-shape bg-[#12CFA7] h-[60px] text-white quantico font-[700] w-full rounded-[18px] uppercase mb-[0px]">
                    <span className="btn-hov-text !h-[27px]" >
                        <span className="btn-text">Sign In</span>
                        <span className="btn-text">Sign In</span>
                    </span>
                </button>
            </div>
        </div>
    )
}

export default CommonerSignIn
