import Image from 'next/image'
import React from 'react'

const AirdropDetail = ({detail}) => {
  return (
    <div className="backdrop-blur-[10px] py-[25px] px-[59px] 2xl:px-[20px] absolute top-0 left-0 w-[50%] lg:w-full z-20" style={{background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 100%)'}}>
        <div className="flex items-center justify-start gap-[20px] mb-[10px]">
            <h3 className='text-[30px] md:text-[24px] xsm:text-[22px] uppercase text-white leading-[165%] font-[700]'>My Tasks  <br /><span>{detail?.name} #{detail?.referralCode}</span></h3>
        </div>
        <div className="flex items-center justify-start gap-[10px]">
            {/* <a href="#" className="flex items-center justify-center py-[8px] px-[12px] text-[15px] leading-[106.667%] text-white rounded-full" style={{background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.06) 100%)'}}>Young Wizard</a> */}
            {/* <a href="#" className="flex items-center justify-center py-[8px] px-[12px] text-[15px] leading-[106.667%] text-white rounded-full" style={{background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.06) 100%)'}}>Rich</a> */}
        </div>
    </div>
  )
}

export default AirdropDetail