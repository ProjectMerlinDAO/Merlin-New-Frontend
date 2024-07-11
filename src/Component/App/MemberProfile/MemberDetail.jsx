import Image from 'next/image'
import React from 'react'

const MemberDetail = ({details, setDetails}) => {
  return (
    <div className="backdrop-blur-[10px] py-[25px] px-[59px] 2xl:px-[20px] absolute top-0 left-0 w-[50%] lg:w-full z-20" style={{background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 100%)'}}>
        <div className="flex items-center justify-start gap-[20px] mb-[10px]">
            <h3 className='text-[30px] uppercase text-white leading-[165%] font-[700]'>{details && details.name}</h3>
            <button className="bg-[transparent] p-[0] m-[0] border-0">
                <Image src="/assets/images/icons/edit.svg" alt="icon" height="16" width="18" />
            </button>
        </div>
        <div className="flex items-center justify-start gap-[10px]">
            {/* <a href="#" className="flex items-center justify-center py-[8px] px-[12px] text-[15px] leading-[106.667%] text-white rounded-full" style={{background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.06) 100%)'}}>Community Member</a> */}
            {/* <a href="#" className="flex items-center justify-center py-[8px] px-[12px] text-[15px] leading-[106.667%] text-white rounded-full" style={{background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.06) 100%)'}}>Senator</a> */}
        </div>
    </div>
  )
}

export default MemberDetail