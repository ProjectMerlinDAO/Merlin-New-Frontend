import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BogBannerContent = () => {
    return (
        <div className="flex flex-wrap items-center justify-between">
            <div className="w-1/2 lg:w-full">
                <div className="text-white blog-banner-text max-w-[569px] lg:mx-auto lg:text-center">
                    <h6 className='flex items-center justify-start gap-[10px] mb-[20px] text-[16px] font-[700] quantico uppercase lg:justify-center'><span>Featured News</span><span>.</span><span>10 May, 2024</span></h6>
                    <h2 className='max-w-[550px] mb-[30px] xl:mb-[16px] lexend font-[500] text-[36px] xl:text-[30px] leading-[152.778%] lg:mx-auto'>How NFTs Are Revolutionizing the Creative World</h2>
                    <p className='text-[16px] mb-[40px] lg:mx-auto ellips-line4'>Project Merlin is a next-generation DAO with a mission to benefit individuals within the community. We have redesigned the DAO governance mechanism and coined it as DAO v2....</p>
                    <Link href="#" className="hov-btn btn-has-shape gap-[7px] bg-[#12CFA7] rounded-full backdrop-blur-[5px] h-[50px] w-[170px] lg:mx-auto flex items-center justify-center text-white text-center  font-[600] text-[16px] uppercase quantico mt-[20px]">
                        <span className="btn-hov-text">
                            <span className="btn-text">Read More</span>
                            <span className="btn-text">Read More</span>
                        </span>
                        <Image
                            src="/assets/images/icons/arrow-right-top.svg"
                            alt="icon"
                            width={25}
                            height={20}
                        />
                    </Link>
                </div>
            </div>
            <div className="w-1/2 lg:w-full">
                <div className="w-full overflow-hidden rounded-[30px] bg-[#D9D9D9] max-w-[570px] lg:max-w-[400px] ml-auto lg:mx-auto lg:mt-[40px]">
                    <img src="../assets/images/img/blog-banner-img.jpg" alt="img" className="object-cover w-full h-full" />
                </div>
            </div>
        </div>
    )
}

export default BogBannerContent