import { data } from 'isotope-layout'
import Image from 'next/image'
import React from 'react'

const Cost = ({data}) => {
    return (
        <div className='mt-[40px] xl:mt-[30px]'>
            <label className='font-[400] uppercase text-white'>Cost <span className="normal-case">(Calculated)</span></label>
            <div className="flex flex-wrap items-start rounded-[18px] justify-between border-2 min-h-[60px] border-[#FFFFFF12] mt-[8px] md:mt-[4px]">
                <div className="w-1/2 xsm:w-full">
                <div className="flex items-center justify-between px-[20px] py-[10px] gap-[13px] h-[60px] border-r-2 border-[#FFFFFF12]">
                        <span className='text-white'>{data.fee != 0 ? data.fee :0.000}</span>
                        <div className="flex items-center gap-[13px]">
                            <p>MRLN</p>
                            <div className="h-[30px] relative w-[30px] rounded-full overflow-hidden flex items-center justify-center">
                                <Image src="/assets/images/img/banner-img.png" alt="coin" fill={true} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 xsm:w-full">
                    <div className="flex items-center justify-between px-[20px] py-[10px] gap-[13px] bg-[#ffffff05] h-[60px]">
                        <span>+ Transaction Fee</span>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Cost