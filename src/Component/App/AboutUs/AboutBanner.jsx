import React from 'react'

const AboutBanner = () => {
  return (
    <div className='bg-no-repeat bg-cover app-banner-section bg-top-center' style={{background: 'url(../assets/images/bg/about-bg.png)'}}>
        <div className="pt-[250px] xl:pt-[220px] lg:pt-[180px] md:pt-[160px] pb-[10px]" style={{background: 'linear-gradient(180deg, rgba(13, 16, 20, 0.00) 0%, rgba(13, 16, 20, 0.76) 33%, #0D1014 85.42%)'}}>
            <div className="px-[20px] md:px-[10px] max-w-[1210px] mx-auto lg:max-w-[720px]">
                <div className="mx-auto text-center max-w-[1100px] xl:max-w-[850px]">
                    <h6 className='text-[#12CFA7] text-[24px] font-[700] leading-[150%] uppercase mb-[60px] xl:mb-[45px] lg:mb-[30px] md:mb-[20px] quantico'>PROJECT MERLIN</h6>
                    <p className='text-[#FFFFFF] text-[26px] xl:text-[20px] lg:-text-[18px] md:text-[16px] font-[300] leading-[184.615%] mb-[30px] lg:mb-[20px] md:mb-[15px]'>Project Merlin is an innovative platform operating on Ethereum and various other blockchains, enabling users to directly participate in decision-making processes and earn income from these activities.</p>
                    <p className='text-[#FFFFFF] text-[24px] xl:text-[18px] lg:text-[16px] md:text-[14px] font-[300] leading-[200%] mb-[30px]'>Users, as NFT holders, assume special roles, gain a say in projects, have voting rights, and earn Merlin Tokens as a result of their participation.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutBanner

