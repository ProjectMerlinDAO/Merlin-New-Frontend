import React, { useEffect, useState } from "react";
import Image from "next/image";

const AppBanner = ({ isSidebarVisible }) => {

    return (
        <div className="bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url('../assets/images/bg/banner_bg.jpg')` }}>
            <div className="overlay2 bg-gradient-to-b from-opacity-80 via-opacity-80 to-0 pt-[110px] pb-[353px]" style={{ backgroundImage: 'linear-gradient(180deg, rgba(13, 16, 20, 0.80) 0%, #0D1014 100%)' }}>
                    <div className={`app-home-wrapper ${isSidebarVisible ? "sidebar-visible" : "sidebar-hidden"}`}>
                        <div className="px-[20px] md:px-[10px] max-w-[1365px] mx-auto lg:max-w-[720px]">
                            <div className="relative overflow-hidden rounded-[40px] banner-card py-[70px] md:py-[40px] px-[70px] md:px-[30px] backdrop-blur-[15px]">
                                <Image src="/assets/images/shape/banner-shape.png" alt="shape" className='absolute top-0 left-0 z-0' width="500" height="500" />
                                <div className="flex items-start justify-start mx-[-12px] relative z-10 flex-wrap">
                                    <div className="w-3/5 lg:w-full">
                                        <div className="banner-left lg:text-center">
                                            <h6 className="py-1 px-[10px] text-white lexend text-[18px] md:text-[16px] font-normal max-w-[290px] w-full border border-[#ffffff1f] lg:mx-auto">
                                                👋 Welcome to Project Merlin
                                            </h6>
                                            <h1 className="bg-gradient-to-b from-white to-[#12CFA7] bg-clip-text text-transparent font-bold max-w-[500px] w-full my-[30px] quantico text-[60px] xl:text-[50px] lg:text-[40px] md:text-[32px] leading-[108.333%] uppercase lg:mx-auto lg:my-[20px]">
                                                the future of crowdfunding and DAOs
                                            </h1>
                                            <p className="text-white font-normal mb-[40px] max-w-[540px] lg:text-[14px] lg:mx-auto lg:mb-[20px]">
                                                Project Merlin, as a next-generation crowdfunding and DAO platform, facilitates the realization of projects and dreams while also rewarding The Great Project Merlin Community.
                                            </p>
                                            <a href="https://docs.projectmerlin.io/projectmerlin" target="_blank" className="flex btn-has-shape items-center justify-center hov-btn h-[60px] w-[220px] text-[16px] font-semibold text-white uppercase rounded-full learn-more-btn bg-[#12CFA7] quantico lg:mx-auto">
                                            <span className="btn-hov-text">
                                                <span className="btn-text" >Learn More</span>
                                                <span className="btn-text" >Learn More</span>
                                            </span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="w-2/5 lg:w-full lg:text-center sm:hidden">
                                        <div className="flex items-center justify-center h-full banner-card-right pt-[55px]">
                                            <div className="relative banner-card-img h-[300px] w-[300px]">
                                                <div className="relative z-10 rounded-full img-bg bg-gradient-to-b from-[#12CFA7] to-[#096955]">
                                                    <Image src="/assets/images/img/banner-img.png" alt="img" width="500" height="500" />
                                                </div>
                                                <div className="absolute z-0 bg-[#12cfa74c] rounded-full bg-opacity-30 filter blur-[35px] h-full w-full top-0 left-0"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

        </div>
    )
}

export default AppBanner;
