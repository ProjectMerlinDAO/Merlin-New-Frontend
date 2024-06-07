import React from 'react'
import RewardInfoTooltip from './RewardInfoTooltip'

const RewardsInfo = () => {
    return (
        <div className='bg-[rgba(255,255,255,0.05)] rounded-[30px] p-[30px] xsm:px-[20px]'>
            <div className="flex items-start justify-start gap-[30px] sm:flex-wrap">
                <div className="infoImg min-h-[150px] min-w-[113px] max-h-[150px] max-w-[113px] relative rounded-[20px] bg-[#FFFFFF]">
                    <img src="../assets/images/img/check-img1.png" alt="img" />
                </div>
                <div className="pt-[10px] w-full">
                    <h3 className='text-[30px] sm:text-[24px] font-[700] uppercase text-white quantico'>Member #45678</h3>
                    <div className="flex items-start justify-between lg:flex-wrap gap-[20px] mx-[-10px] mt-[28px] max-w-[890px] w-full">
                        <div className="px-[10px] flex items-end justify-start gap-[15px]">
                            <div className="text">
                                <p className="text-[16px] xsm:text-[14px] lexend leading-[250%]">Available Balance</p>
                                <h3 className="text-[24px] xsm:text-[20px] quantico text-white font-[700] uppercase">365,250 MRLN</h3>
                            </div>
                            <button className="quantico uppercase text-[15px] xsm:text-[12px] text-[white] w-[76px] xsm:w-[65px] h-[35px] xsm:h-[28px] bg-[#12CFA7] rounded-full">Claim</button>
                        </div>

                        <div className="px-[10px] flex items-end justify-start gap-[15px]">
                            <div className="text">
                                <p className="text-[16px] xsm:text-[14px] lexend leading-[250%] flex items-center justify-start gap-[5px]">Unavailable Balance
                                    <RewardInfoTooltip/>
                                </p>
                                <h3 className="text-[24px] xsm:text-[20px] quantico text-white font-[700] uppercase">950,750 MRLN</h3>
                            </div>
                        </div>

                        <div className="px-[10px] flex items-end justify-start gap-[15px]">
                            <div className="text">
                                <p className="text-[16px] xsm:text-[14px] lexend leading-[250%]">Bonus Balance</p>
                                <h3 className="text-[24px] xsm:text-[20px] quantico text-white font-[700] uppercase">850 XYZ</h3>
                            </div>
                            <button className="quantico uppercase text-[15px] xsm:text-[12px] text-[white] w-[76px] xsm:w-[65px] h-[35px] xsm:h-[28px] bg-[#12CFA7] rounded-full">Claim</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RewardsInfo