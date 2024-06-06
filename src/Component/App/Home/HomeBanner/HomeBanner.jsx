import React from 'react'
import Statistic from './Statistic'
import Link from 'next/link'
import BannerBgAnimetion from './BannerBgAnimetion'

const HomeBanner = () => {
  return (
    <div id="home" className='relative overflow-hidden bg-no-repeat bg-cover bg-center-bottom' style={{background: 'url(../assets/images/bg/home-banner-bg.png)'}}>
      <BannerBgAnimetion/>
      <div className="pb-[90px] xl:pb-[80px] lg:pb-[70px] md:pb-[60px] sm:pb-[45px]">
      <div className="h-[60%] z-[1] w-full absolute bottom-0 left-0" style={{background: 'linear-gradient(180deg, rgba(13, 16, 20, 0.00) 0%, rgba(13, 16, 20, 0.76) 33%, #0D1014 85.42%)'}}></div>
      <img src="../assets/images/shape/banner-mesh-grad.png" alt="shape" className="absolute bottom-0 right-0 z-[2]" />
      <div className="banner-shapes absolute top-[20px] left-0 w-full z-[3]">
        <div className='w-full h-[60px] mb-[20px]'style={{background: 'linear-gradient(90deg, rgba(254, 185, 8, 0.20) 0%, rgba(108, 211, 108, 0.20) 100%)'}}></div>
        <div className='w-full h-[60px] mb-[20px]'style={{background: 'linear-gradient(90deg, rgba(254, 185, 8, 0.20) 0%, rgba(108, 211, 108, 0.20) 100%)'}}></div>
        <div className='w-full h-[60px] mb-[20px]'style={{background: 'linear-gradient(90deg, rgba(254, 185, 8, 0.15) 0%, rgba(108, 211, 108, 0.15) 100%)'}}></div>
        <div className='w-full h-[60px] mb-[20px]'style={{background: 'linear-gradient(90deg, rgba(254, 185, 8, 0.11) 0%, rgba(108, 211, 108, 0.11) 100%)'}}></div>
        <div className='w-full h-[60px] mb-[20px]'style={{background: 'linear-gradient(90deg, rgba(254, 185, 8, 0.09) 0%, rgba(108, 211, 108, 0.09) 100%)'}}></div>
        <div className='w-full h-[60px] mb-[20px]'style={{background: 'linear-gradient(90deg, rgba(254, 185, 8, 0.07) 0%, rgba(108, 211, 108, 0.07) 100%)'}}></div>
        <div className='w-full h-[60px] mb-[20px]'style={{background: 'linear-gradient(90deg, rgba(254, 185, 8, 0.05) 0%, rgba(108, 211, 108, 0.05) 100%)'}}></div>
        <div className='w-full h-[60px] mb-[20px]'style={{background: 'linear-gradient(90deg, rgba(254, 185, 8, 0.03) 0%, rgba(108, 211, 108, 0.03) 100%)'}}></div>
      </div>
      <div className="pt-[235px] xl:pt-[210px] lg:pt-[180px] md:pt-[150px] sm:pt-[130px] px-[20px] md:px-[10px] max-w-[1450px] mx-auto lg:max-w-[720px] relative">
        <div className="text pb-[128px] xl:pb-[100px] lg:pb-[80px] md:pb-[60px] sm:pb-[40px] relative z-[5]">
            <h1 className='text-[80px] xl:text-[60px] lg:text-[50px] md:text-[40px] font-[700] uppercase leading-[125%] quantico max-w-[794px] xl:max-w-[550px] text-white mb-[20px]'>Make Dreams into the Future</h1>
            <p className='text-white mb-[50px] lg:mb-[30px] max-w-[677px] xl:max-w-[550px]'>Project Merlin provides community members with the opportunity to actualize their dreams. As integral parts of the community, members share their dreams and receive support. At each step of the process leading to the realization of a community member&apos;s dream, each individual community member is rewarded separately.</p>
            <Link href="/launch-app" className="buy-btn btn-has-shape hov-btn bg-[#12CFA7] rounded-full h-[60px] w-[220px] flex items-center justify-center text-white text-center leading-trim-both text-edge-cap font-[600] text-[16px] sm:text[14px] uppercase quantico">
              <span className="btn-hov-text">
                <span className="btn-text">Learn More</span>
                <span className="btn-text">Learn More</span>
              </span>
            </Link>
        </div>
        <Statistic/>
        <div className="absolute top-0 right-0 z-[4] xl:max-w-[600px] lg:max-w-[500px]">
          <div className="relative flex items-center justify-center">
              <img className=' w-full max-w-xl'  src="../assets/images/img/banner-img-min.png" alt="img" />
              <img  src="../assets/images/coins/coin.gif" alt="img" className=' w-full max-w-36  absolute translate-x-[-20px] lg:max-w-[200px] md:max-w-[180px] sm:max-w-[150px]' />
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default HomeBanner
