// import SectionTitle from '../../src/Component/Core/SectionTitle'
// import SectionTitle from '../../../Core'
import SectionTitle from '../../../Core/SectionTitle'
import React from 'react'
import DonutChartSection from './DonutChartSection'

const TokenMap = () => {
    return (
        <>
            <SectionTitle title="Numbers" subtitle="Token map" alignment="text-left sm:text-center" titleMaxW="600px" titleMargin="mb-[60px] lg:mb-[30px]" />
            <div className="mt-[40px] mb-[101px] lg:mb-[70px] md:mb-[60px] xsm:mb-[50px]">
                <div className="flex items-start justify-between lg:flex-wrap max-w-[1190px] w-full mb-[40px]">
                    <div className="text-white w-[33.33%] lg:w-full lg:mb-[20px]">
                        <p className="text-[18px] xsm:text-[16px] lexend font-[500] leading-[250%] sm:text-center">Total Supply</p>
                        <h3 className="text-[30px] xsm:text-[24px] quantico font-[700] sm:text-center uppercase">800,000,000 MRLn</h3>
                    </div>
                    <div className="text-white w-[33.33%] lg:w-1/2 sm:w-full lg:mb-[20px]">
                        <p className="text-[18px] xsm:text-[16px] lexend font-[500] leading-[250%] sm:text-center">Vesting Period (96.64%)</p>
                        <h3 className="text-[30px] xsm:text-[24px] quantico font-[700] sm:text-center uppercase text-[#12CFA7]">774,000,000 MRLn</h3>
                    </div>
                    <div className="text-white w-[33.33%] lg:w-1/2 sm:w-full lg:mb-[20px]">
                        <p className="text-[18px] xsm:text-[16px] lexend font-[500] leading-[250%] sm:text-center">Circulation (3.36%)</p>
                        <h3 className="text-[30px] xsm:text-[24px] quantico font-[700] sm:text-center uppercase text-[#A06BFD]">26,000,000 MRLn</h3>
                    </div>
                </div>
                <div className="flex items-center justify-between gap-[5px] rounded-[15px] overflow-hidden text-white font-[400] text-[14px] lexend token-map-bar">
                    <div className="bar relative bg-[#12CFA7] h-[50px] w-[96.64%]">
                        <p className="flex items-center bar-data justify-start gap-[6px] m-0 absolute top-[10px] left-[10px]">
                            <img src="../assets/images/icons/dot.svg" alt="icon" />
                            Vesting Period (96.64%)
                        </p>
                    </div>
                    <div className="bar relative bg-[#A06BFD] h-[50px] w-[3.36%]">
                        <p className="flex items-center bar-data justify-end gap-[6px] m-0 absolute top-[10px] right-[10px] min-w-[max-content]">
                            Circulation (3.36%)
                            <img src="../assets/images/icons/dot.svg" alt="icon" />
                        </p>
                    </div>
                </div>
            </div>
            <div className="">
                <DonutChartSection/>
            </div>
        </>
    )
}

export default TokenMap