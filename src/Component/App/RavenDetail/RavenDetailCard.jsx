import React from 'react'
import Image from 'next/image'
import RavenDetailVideo from './RavenDetailVideo'
import RavenImages from './RavenImages'
import TransactionLogs from './TransactionLogs'
import Fundrising from './Fundrising'
import ProposalInfoCard from './ProposalInfoCard'
import LikeShareCard from './LikeShareCard'
import {useStickyBox} from "react-sticky-box";
import Link from 'next/link'

const RavenDetailCard = ({ isSidebarVisible }) => {
    const stickyRef = useStickyBox({offsetTop: 20, offsetBottom: 20})
    return (
        <div className="pt-[110px] relative bg-no-repeat position-top bg-contain" style={{ backgroundImage: 'url(./assets/images/bg/sub-bg.png)', backgroundSize: '100% 388px' }}>
            <div className={`app-home-wrapper mt-[-70px] lg:mt-[0px]  ${isSidebarVisible ? "sidebar-visible" : "sidebar-hidden"}`}>
                <div className="px-[20px] md:px-[10px] max-w-[1365px] mx-auto lg:max-w-[720px]">
                <ul className='flex items-center justify-start gap-[8px] uppercase relative pt-[5px] pl-[48px] z-[999]  mb-[30px] 2xl:text-[14px] xl:ml-[100px] lg:ml-[0px] md:flex-wrap'>
                        <li className='flex items-center justify-start gap-[8px] mr-10px ml-[-5px]'><Link href="/crystal-cave" className="flex absolute left-0 top-0"  ><Image src="/assets/images/icons/back-arrow.svg" alt="icon" height="40" width="40" /></Link></li>
                        <li className='flex items-center justify-start gap-[8px]'><a href="#" className="flex">app HOME  </a> . </li>
                        <li className='flex items-center justify-start gap-[8px]'><a href="#" className="flex">The Crystal Cave</a> . </li>
                        <li className='flex items-center justify-start gap-[8px]'><a href="#" className="flex">Raven Message</a> . </li>
                        <li className='flex items-center justify-start gap-[8px]'><a href="#" className="flex text-[#12CFA7]">#A000235</a></li>
                    </ul>
                    <div className="p-[60px] 2xl:py-[40px] 2xl:px-[20px] rounded-[40px] relative backdrop-blur-[15px] overflow-hidden" style={{ background: 'linear-gradient(178deg, rgba(255, 255, 255, 0.05) 2.04%, rgba(255, 255, 255, 0.01) 97.96%)' }}>
                        <Image src='/assets/images/shape/raven-detail-shape.png' fill={true} className='top-0 right-0 z-0 mt-[-30%] mr-[-15%]' />
                        <div className="relative z-10">
                            <div className="flex items-start justify-between mx-[-15px] lg:flex-wrap row">
                                <div className="w-[65%] px-[15px] lg:w-full raven-detail-left lg:mb-[30px]">
                                    <div className="max-w-[715px]">
                                        <div className="flex items-start justify-start gap-[25px] mb-[40px] md:mb-[30px] sm:mb-[20px]" >
                                            <div className="min-h-[120px] min-w-[120px] max-h-[120px] sm:min-h-[80px] sm:min-w-[80px] xm:max-h-[80px] xm:max-w-[80px] xsm:absolute relative rounded-[20px] overflow-hidden">
                                                <Image src="/assets/images/img/raven-detail-img.png" alt="icon" fill={true} />
                                            </div>
                                            <div className='text-white xsm:w-full'>
                                                <h3 className='mb-[20px] md:mb-[15px] text-[40px] 2xl:text-[32px] lg:text-[26px] leading-[150%] xsm:pl-[100px]'>We want to build VR</h3>
                                                <p className='xsm:mt-[58px] 2xsm:mt-[20px]'>Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                            </div>
                                        </div>
                                        <p className='mb-[30px]'>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best</p>
                                        <RavenDetailVideo/>
                                        <p className='mb-[30px]'>So blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain.</p>
                                        <p className='mb-[30px]'>These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled.</p>
                                        <RavenImages/>
                                        <TransactionLogs/>
                                    </div>
                                </div>
                                <aside ref={stickyRef} className="w-[35%] px-[15px] lg:w-full raven-detail-right">
                                    <Fundrising/>
                                    <ProposalInfoCard/>
                                    <LikeShareCard/>
                                </aside>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RavenDetailCard