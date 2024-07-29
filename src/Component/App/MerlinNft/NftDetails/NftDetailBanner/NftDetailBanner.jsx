import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import NftContainerWrapper from './../../NftContainerWrapper';
import SaleEndCard from './SaleEndCard';
import NftDetailTab from './NftDetailTab';
import SharePopup from '../../../RavenDetail/SharePopup';
import BannerDropdown from './BannerDropdown';


const NftDetailBanner = () => {
    useEffect(() => {
        const nftDetailImg = document.querySelector('.nft-detail-img img');
        const nftDetailBannerBg = document.querySelector('.nft-detail-banner-bg');

        if (nftDetailImg && nftDetailBannerBg) {
            nftDetailBannerBg.style.backgroundImage = `url(${nftDetailImg.src})`;
        }
    }, []);

    const openShareModal = () => {
        const modal = document.getElementById('shareModal');
        if (modal) {
            modal.showModal();
        }
    }

    const [isLiked, setIsLiked] = useState(false);

    const handleClick = () => {
        setIsLiked(!isLiked);
    };

    return (
        <div className="pt-[170px] xl:pt-[150px] relative">
            <div
                className="absolute top-0 left-0 w-full h-[50%] z-0 nft-detail-banner-bg"
                style={{
                    backgroundPosition: 'center center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'
                }}
            />
            <div
                className="absolute top-0 left-0 w-full h-[50%] z-[1] backdrop-blur-[5px]"
                style={{
                    background: 'linear-gradient(180deg, rgba(18, 22, 25, 0.90) 0%, #121619 100%)'
                }}
            />
            <NftContainerWrapper>
                <div className="relative z-[20]">
                    <Link href="/nft" className="flex items-center gap-[15px] outfit">
                        <Image src="/assets/images/icons/back-arrow.svg" alt="icon" height="40" width="40" /> Go back
                    </Link>
                    <div className="flex items-start justify-between mt-[20px] lg:flex-wrap">
                        <div className="w-1/2 pr-[50px] 2xl:pr-[20px] lg:pr-0 2xl:w-[40%] xl:w-[35%] lg:w-full">
                            <div className="overflow-hidden rounded-[30px] nft-detail-img">
                                <img src="./assets/images/nft/merlin-img.png" alt="img" className="w-full h-full" />
                            </div>
                        </div>
                        <div className="w-1/2 pl-[50px] 2xl:pl-[15px] lg:pl-0 2xl:w-[60%] xl:w-[65%] lg:w-full lg:mt-[40px]">
                            <div className="relative">
                                <div className="flex items-center justify-between mb-[15px] gap-[20px] flex-wrap">
                                    <div className="flex items-center justify-start gap-[12px]">
                                        <img src="./assets/images/icons/membership.svg" alt="icon" className='w-[20px]' />
                                        <span className='font-[700] text-[18px] text-[#FFFFFF] leading-[111.111%]'>Membership</span>
                                    </div>
                                    <div className="flex items-center gap-[10px] justify-end">
                                        <div
                                            className="flex items-center justify-center rounded-[12px] overflow-hidden backdrop-blur-[2.5px] bg-[rgba(255,255,255,0.10)] h-[50px] min-w-[50px] px-[13px] gap-[9px]"
                                            onClick={handleClick}
                                            style={{ cursor: 'pointer' }}
                                        >
                                            <img
                                                src={isLiked ? "./assets/images/icons/red-heart.svg" : "./assets/images/icons/heart-icon.svg"}
                                                alt="icon"
                                            />
                                            <span className="text-[16px] text-white font-[600]">245</span>
                                        </div>
                                        <div onClick={openShareModal} className="flex items-center justify-center cursor-pointer rounded-[12px] share-popup-open overflow-hidden backdrop-blur-[2.5px] bg-[rgba(255,255,255,0.10)] h-[50px] min-w-[50px] px-[13px]">
                                            <img src="./assets/images/icons/share.svg" alt="icon" />
                                        </div>
                                        <BannerDropdown />
                                    </div>
                                </div>
                                <h3 className="text-[40px] sm:text-[32px] font-[700] text-white leading-[65%] xsm:mt-[20px] mb-[57px] md:mb-[30px]">Merlin Avatars</h3>
                                <div className="flex items-start justify-start mx-[-15px] pb-[15px] sm:flex-wrap sm:gap-[10px]">
                                    <div className="w-1/2 px-[15px] mb-[20px] sm:w-full">
                                        <div className="flex items-center justify-start gap-[8px] mb-[15px] uppercase text-[16px] text-[rgba(255,255,255,0.80)] outfit leading-[125%] font-[500]">
                                            Price
                                        </div>
                                        <h2 className="font-[600] text-[22px] text-white leading-[90.909%]">0.028 MRLN (~$297.02) </h2>
                                    </div>
                                    <div className="w-1/2 px-[15px] mb-[20px] sm:w-full">
                                        <div className="flex items-center justify-start gap-[8px] mb-[15px] uppercase text-[16px] text-[rgba(255,255,255,0.80)] outfit leading-[125%] font-[500]">
                                            Highest bid By - <a href="#" className="text-white capitalize">Adam Horo</a>
                                        </div>
                                        <h2 className="font-[600] text-[22px] text-white leading-[90.909%]">0.026 MRLN (~$288.50) </h2>
                                    </div>
                                </div>
                                <div className="mb-[50px]">
                                    <SaleEndCard />
                                </div>
                                <div className="">
                                    <NftDetailTab />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <SharePopup />
            </NftContainerWrapper>
        </div>
    )
}

export default NftDetailBanner
