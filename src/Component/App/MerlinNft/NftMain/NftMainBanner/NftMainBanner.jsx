import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import NftContainerWrapper from '../../NftContainerWrapper';
import NftBannerSlider from './NftBannerSlider';


const NftMainBanner = () => {
    return (
        <div className="bg-no-repeat bg-cover" style={{ backgroundImage: 'url(./assets/images/nft/nft-banner-bg.png)', backgroundPosition: 'center top' }}>
            <div className="overlay pt-[110px] pb-[280px] 2xl:pb-[250px] xl:pb-[220px]" style={{ background: 'linear-gradient(180deg, rgba(18, 22, 25, 0.90) 0%, #121619 100%)' }}>
                <NftContainerWrapper>
                    <div className="rounded-[40px] xl:rounded-[30px] lg:rounded-[20px] md:rounded-[13px] backdrop-blur-[10px] px-[35px] lg:px-[25px] pt-[10px] relative z-10" style={{ background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%)' }}>
                        <Tabs>
                            <TabList className="flex items-end justify-start text-[16px] font-[700] text-[#FFFFFF] leading-[162.5%] pl-[65px] xl:pl-0 nft-banner-slider-nav">
                                <Tab className="cursor-pointer px-[20px] py-[15px] md:p-[8px] md:text-[14px] nft-banner-tab-btn !flex gap-[5px]">Project <span className="2xsm:hidden">Merlin</span></Tab>
                                <Tab className="cursor-pointer px-[20px] py-[15px] md:p-[8px] md:text-[14px] nft-banner-tab-btn !flex gap-[5px]">Community</Tab>
                                <Tab className="cursor-pointer px-[20px] py-[15px] md:p-[8px] md:text-[14px] nft-banner-tab-btn !flex gap-[5px]">Supported <span className="2xsm:hidden">Projects</span></Tab>
                            </TabList>
                            
                            <TabPanel>
                                <NftBannerSlider />
                            </TabPanel>
                            <TabPanel>
                                <NftBannerSlider />
                            </TabPanel>
                            <TabPanel>
                                <NftBannerSlider />
                            </TabPanel>
                        </Tabs>
                    </div>
                </NftContainerWrapper>
            </div>
        </div>
    );
}

export default NftMainBanner;
