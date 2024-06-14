import React from 'react'
import Image from 'next/image'

const ApplySection = () => {
  return (
    <div className='rounded-[30px] overflow-hidden bg-cover bg-no-repeat bg-center mt-[40px]' style={{backgroundImage: `url('../assets/images/bg/apply-bg.jpg')`}}>
        <div className='pt-[70px] pb-[60px] lg:py-[40px] px-[20px] text-center bg-gradient-to-b from-[transparent] to-[#0d1014b2]'>
            <h2 className='max-w-[606px] lg:max-w-[500px] mx-auto mb-[20px] text-white uppercase text-[40px] lg:text-[32px] font-[700] leading-[125%] quantico '>
                Apply to make your dreams come true
            </h2>
            <p className='max-w-[788px] lg:max-w-[500px]0 mx-auto mb-[20px] font-[400] text-white leading-[187.5%] lg:text-[14px]'>
                Welcome to The Crystal Cave, a mystical realm where lives and dreams from across the globe converge. Each glimmer reveals a dream awaiting fulfillment, a whisper of what could be. Do you have a dream you wish to manifest? Share it with us through the Raven Message.
            </p>
            <a href="/create-raven-message" className='hov-btn btn-has-shape apply-btn gap-[7px] bg-[#ffffff10] rounded-full bg-opacity-10 backdrop-blur-[5px] h-[60px] w-[220px] mx-auto flex items-center justify-center text-white text-center leading-trim-both text-edge-cap font-[600] text-[16px] uppercase quantico' 
            >
              <span className="btn-hov-text">
                    <span className="btn-text" >raven message</span>
                    <span className="btn-text" >raven message</span>
                  </span>
              <Image src="/assets/images/icons/arrow-right.svg" alt="icon" className='mt-0' width="8" height="13" />
            </a>
        </div>
    </div>
  )
}

export default ApplySection