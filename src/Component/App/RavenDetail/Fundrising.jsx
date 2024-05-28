import React from 'react'
import FundrisingTimer from './FundrisingTimer'
import Image from 'next/image'

const Fundrising = () => {
  return (
    <div className='rounded-[20px] backdrop-blur-[5px] p-[40px] 2xl:p-[20px] relative fundrising-card mb-[30px]' style={{ background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.00) 100%)' }}>
      <div className='relative z-10'>
        <h3 className='text-white text-[18px] lexend mb-[5px] uppercase' >Fundraising Ends in  </h3>
        <FundrisingTimer />

        <div className="h-[20px] rounded-[10px] bg-[#ffffff19] w-full mt-[25px] mb-[15px]">
          <div className="bg-[#12CFA7] rounded-[10px] text-white text-[14px] quantico flex items-center justify-end gap-[5px] h-[20px] w-[32%]">
            <span>32%</span>
            <Image src="/assets/images/icons/range-dot.svg" alt="icon" width="39" height="34" className="mr-[-5px]" />
          </div>
        </div>

        <ul className="fundrising-list 2xl:text-[15px]">
          <li className='relative flex items-center justify-between py-[15px] text-white'><span>Raised</span> <span>9,562 USDT (19,256 MRLN)</span></li>
          <li className='relative flex items-center justify-between py-[15px] text-white'><span>Goal</span> <span>25,000 USDT (500,000 MRLN)</span></li>
        </ul>
        <button type='submit' className="hov-btn no-border btn-has-shape bg-[#12CFA7] h-[60px] text-white quantico font-[700] w-full rounded-[18px] uppercase mt-[30px]">
          <span className="btn-hov-text !h-[27px]">
            <span className="btn-text">Donate Now</span>
            <span className="btn-text">Donate Now</span>
          </span>
        </button>
      </div>
    </div>

  )
}

export default Fundrising