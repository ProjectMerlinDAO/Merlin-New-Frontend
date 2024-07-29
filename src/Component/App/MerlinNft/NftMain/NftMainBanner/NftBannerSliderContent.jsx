import Link from 'next/link'
import React from 'react'

const NftBannerSliderContent = () => {
    return (
        <div className='bg-[#10432E] relative rounded-[40px] xl:rounded-[30px] lg:rounded-[20px] md:rounded-[12px] sm:rounded-[8px] overflow-hidden h-[520px] 2xl:h-[420px] xl:h-[380px] lg:h-[320px]'>
            <div className="w-full h-full">
                <img src="./assets/images/nft/nft-banner-img.png" alt='img' className="absolute z-0 object-cover w-full h-full" />
            </div>
            <div className="absolute z-10 top-0 left-0 w-[450px] md:w-full h-full backdrop-blur-[2px]" style={{ background: 'linear-gradient(270deg, rgba(18, 22, 25, 0.00) 0%, rgba(18, 22, 25, 0.80) 100%)' }}>
                <div className="relative flex flex-col items-start justify-center h-full p-[40px] lg:p-[30px] md:p-[20px]">
                    <h3 className='mb-[24px] lg:mt-[-20px] text-[40px] lg:text-[32px] md:text-[28px] font-[700] leading-[65%] text-[#FFFFFF]' style={{ textShadow: '0px 2px 2px rgba(0, 0, 0, 0.30)' }}>Merlin Avatars</h3>
                    <div className="mb-[36px] lg:mb-[15px] flex items-center justify-start gap-[10px] text-[18px] font-[600] leading-[144.444%] text-[#FFFFFF]" style={{ textShadow: '0px 2px 2px rgba(0, 0, 0, 0.30)' }}>
                        <p className='flex items-center justify-start gap-[10px]'>By <span><img src="./assets/images/nft/merlin-icon.png" alt="icon" /></span></p>
                        <p className='flex items-center justify-start gap-[10px]'><Link href="#" className="no-underline hover:underline">Project Merlin</Link> <span><img src="./assets/images/icons/verifi.svg" alt="icon" /></span></p>
                    </div>
                    <p className='text-[16px] font-[500] leading-[162.5%] text-[#FFFFFF] outfit' style={{ textShadow: '0px 2px 2px rgba(0, 0, 0, 0.30)' }}><span>254 Items</span> . <span>0.005 MRLN</span></p>
                    <div className="absolute bottom-[40px] left-[40px] lg:bottom-[30px] lg:left-[30px] md:bottom-[20px] md:left-[20px]">
                        <a
                            href="#"
                            className="flex btn-has-shape light-shape items-center btn-no-border justify-center hov-btn rounded-full gap-[8px] backdrop-blur-[5px] h-[60px] w-[179px] sm:w-[160px] text-[#ffffff] text-center font-[600] text-[16px] sm:text[14px] uppercase"
                            style={{ background: 'rgba(255, 255, 255, 0.20)' }}
                        >
                            {/* <span className="pointer-events-none text-gray-500 "> */}
                                {/* <span className="btn-text">View Drops</span> */}
                                <span className="pointer-events-none text-gray-500 ">View Drops</span>
                                {/* btn-hov-text  */}
                            {/* </span> */}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NftBannerSliderContent