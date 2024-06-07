
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import TreasuryBanner from './TreasuryBanner'
import CamelotTreasury from './CamelotTreasury'
import Treasury from '../AppHome/Treasury/Treasury';
import RewardsCenter from './RewardsCenter'
import TokenMap from './TokenMap/TokenMap'
import Integration from './Integration'

const TreasuryContent = ({ isSidebarVisible }) => {
    return (
        <div className="pt-[110px] relative bg-no-repeat position-top bg-contain" style={{ backgroundImage: 'url(./assets/images/bg/sub-bg.png)', backgroundSize: '100% 388px' }}>
            <div className={`mt-[-70px] lg:mt-[0px] app-home-wrapper ${isSidebarVisible ? "sidebar-visible" : "sidebar-hidden"}`}>
                <div className="px-[20px] md:px-[10px] max-w-[1365px] mx-auto lg:max-w-[720px]">
                    <div className='mt-[60px] lg:mt-[0px]'>
                        <TreasuryBanner/>
                    </div>
                    
                    <div className='pt-[90px] lg:pt-[80px] md:pt-[70px] sm:pt-[60px]'>
                        <CamelotTreasury/>
                    </div>

                    <div className="mx-[-20px] pt-[30px] xl:pt-[20px]">
                        <Treasury />
                    </div>

                    <div className="pt-[120px] xl:pt-[90px] lg:pt-[80px] md:pt-[70px] sm:pt-[60px]">
                        <TokenMap/>
                    </div>
                    <div className="pt-[120px] xl:pt-[90px] lg:pt-[80px] md:pt-[70px] sm:pt-[60px] xsm:pt-[40px]">
                        <Integration/>
                    </div>
                    <div className="pt-[120px] xl:pt-[90px] lg:pt-[80px] md:pt-[70px] sm:pt-[60px]">
                        <RewardsCenter/>
                    </div>
                    
                </div>
            </div>
        </div>

    )
}

export default TreasuryContent