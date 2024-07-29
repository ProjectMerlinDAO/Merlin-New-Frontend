import React from 'react'
import NftTimer from '../../NftTimer'
import MakeOfferPopup from '../MakeOfferPopup/MakeOfferPopup'

const SaleEndCard = () => {
  return (
    <div className="relative">
        <div className="overflow-hidden rounded-[20px]" style={{background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.02) 100%)', border: '1px solid rgba(255, 255, 255, 0.00)'}}>
            <div className="flex items-center justify-between gap-[15px] flex-wrap bg-[rgba(255,255,255,0.08)] px-[30px] xsm:px-[20px] py-[20px]">
              <div className="flex text-[18px] xsm:text-[16px] font-[700] leading-[110%] text-white">
                  <h6 className="mr-[20px]">Sale ends in</h6>
                  <NftTimer/>
              </div>
              <p className='text-[16px] font-[600] leading-[110%] text-white m-0'>July 17, 2024 at 4:37 PM</p>
            </div>
            <div className="p-[30px] xsm:p-[20px]">
                <div className="flex items-center justify-between mx-[-15px] 2xsm:flex-wrap 2xsm:gap-[16px]">
                    <div className="px-[15px] w-1/2 2xsm:w-full">
                    <a href="#" className="flex btn-has-shape items-center btn-no-border justify-center hov-btn rounded-full backdrop-blur-[5px] h-[60px] w-full text-[#111] text-center font-[600] text-[16px] sm:text[14px] uppercase bg-[#0CE466]">
                    <span className="btn-hov-text">
                      <span className="btn-text">Buy Now</span>
                      <span className="btn-text">Buy Now</span>
                    </span>
                  </a>
                    </div>
                    <div className="px-[15px] w-1/2 2xsm:w-full">
                      <MakeOfferPopup/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SaleEndCard