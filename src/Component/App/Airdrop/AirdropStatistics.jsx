import Link from 'next/link'
import React from 'react'

const AirdropStatistics = () => {
    return (
        <div className='flex flex-wrap items-start justify-start mx-[-6px] mt-[25px]'>
            <div className="w-1/2 px-[6px] my-[14px] lg:my-[10px]">
                <div className="w-full">
                    <h6 className="text-white lexend text-[16px] lg:text-[14px] font-[400] leading-[312.5%]">Karma Score</h6>
                    <h3 className="text-white uppercase leading-[137.5%] text-[26px] lg:text-[20px] font-[700] quantico">520,000</h3>
                </div>
            </div>
            <div className="w-1/2 px-[6px] my-[14px] lg:my-[10px]">
                <div className="w-full">
                    <h6 className="text-white lexend text-[16px] lg:text-[14px] font-[400] leading-[312.5%]">Eligible Merlin Token</h6>
                    <h3 className="text-white uppercase leading-[137.5%] text-[26px] lg:text-[20px] font-[700] quantico">0.05 MRLN</h3>
                </div>
            </div>
            <div className="w-full px-[6px] my-[14px] lg:my-[10px]">
                <div className="w-full">
                    <h6 className="text-white lexend text-[16px] lg:text-[14px] font-[400] leading-[312.5%]">Redeemed Merlin Token</h6>
                    <div className="flex items-center justify-start gap-[15px]">
                        <h3 className="text-white uppercase leading-[137.5%] text-[26px] lg:text-[20px] font-[700] quantico">200.00MRLN</h3>
                        <Link href='#' className='bg-[#12CFA7] rounded-full h-[34px] relative w-[89px] flex items-center justify-center text-white text-center font-[600] text-[15px] uppercase quantico'>
                            <span className="btn-text">Redeems</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AirdropStatistics