import React from 'react'
import SectionTitle from '../../Core/SectionTitle'

const Integration = () => {
  return (
    <div className="flex items-start justify-between mx-[-15px] lg:flex-wrap-reverse">
        <div className="w-1/2 lg:w-full px-[15px]">
            <div className="w-full max-w-[473px] lg:mx-auto lg:mt-[30px]">
                <img src="../assets/images/img/integration.png" alt="img" className="w-full" />
            </div>
        </div>
        <div className="w-1/2 lg:w-full px-[15px]">
            <div className="max-w-[572px] lg:max-w-full">
                <SectionTitle title="Integration" subtitle="Grant Bonuses" alignment="text-left lg:text-center " titleMaxW="600px" titleMargin="mb-0" />

                <p className="text-[16px] leading-[175%] mt-[40px] lg:text-center">Project Merlin supports web3 projects developed on blockchains through a grant program, based on the decisions of its community. If agreements are reached with the supported web3 projects, their native tokens are distributed to the Project Merlin community.</p>
                <h6 className="text-[16px] text-white mt-[20px] lg:text-center">Here are the projects we have collaborated with:</h6>
                <ul className="mt-[25px] text-white text-[16px] leading-[120%] lg:justify-center">
                    <li className="flex items-center justify-start gap-[15px] mb-[18px] lg:justify-center"><span><img src="../assets/images/icons/rotat.svg" alt="icon" /></span> Awaiting announcement</li>
                    <li className="flex items-center justify-start gap-[15px] mb-[18px] lg:justify-center"><span><img src="../assets/images/icons/rotat.svg" alt="icon" /></span> Awaiting announcement</li>
                    <li className="flex items-center justify-start gap-[15px] mb-[18px] lg:justify-center"><span><img src="../assets/images/icons/rotat.svg" alt="icon" /></span> Awaiting announcement</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Integration