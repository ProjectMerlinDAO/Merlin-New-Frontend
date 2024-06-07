import React from 'react'
import DonutChart from './DonutChart'

const DonutCharSection = () => {
    // Dummy data for demonstration, replace with your actual data
    const donutChartData = {
        datasets: [{
            label: [' Merlin Treasury', ' Token Holders', ' Project Merlin Ecosystem', ' Team Project Merlin'],
            data: [45, 14, 28, 13], // Dynamic data percentages
            backgroundColor: [
                '#12CFA7',
                '#A06BFD',
                '#2236E5',
                '#EEBC13',
            ],
            hoverOffset: 4
        }]
    };

    const dynamicLabels = [' Merlin Treasury', ' Token Holders', ' Project Merlin Ecosystem', ' Team Project Merlin'];
    return (
        <div className="flex items-start justify-between lg:justify-center mx-[-15px] lg:mx-0 text-white lg:flex-wrap relative lg:pt-[530px] xsm:pt-[320px]">
            <div className="w-[25%] lg:w-1/2 xsm:w-full px-[15px">
                <div className="pl-[24px] relative mb-[35px]">
                    <div className="rounded-full bg-[#12CFA7] h-[16px] w-[16px] absolute top-[7px] left-0"></div>
                    <h5 className="uppercase text-[20px] font-[700] quantico">Merlin Treasury (45%)</h5>

                    <div className="mt-[17px]">
                        <h6 className="uppercase text-[16px] font-[700] quantico">Merlin Treasury</h6>
                        <p className='text-[15px] text-[rgba(255,255,255,0.90)]'>Circulation 12,600,000 MRLN</p>
                        <p className='text-[15px] text-[rgba(255,255,255,0.90)]'>Vesting Period 12,600,000 MRLN</p>
                    </div>
                    <div className="mt-[17px]">
                        <h6 className="uppercase text-[16px] font-[700] quantico">Grant Pool</h6>
                        <p className='text-[15px] text-[rgba(255,255,255,0.90)]'>Circulation 12,600,000 MRLN</p>
                        <p className='text-[15px] text-[rgba(255,255,255,0.90)]'>Vesting Period 12,600,000 MRLN</p>
                    </div>
                </div>

                <div className="pl-[24px] relative">
                    <div className="rounded-full bg-[#2236E5] h-[16px] w-[16px] absolute top-[7px] left-0"></div>
                    <h5 className="uppercase text-[20px] font-[700] quantico">Token Holders (14%)</h5>

                    <div className="mt-[17px]">
                        <h6 className="uppercase text-[16px] font-[700] quantico">Seed sale Holders</h6>
                        <p className='text-[15px] text-[rgba(255,255,255,0.90)]'>Circulation 12,600,000 MRLN</p>
                        <p className='text-[15px] text-[rgba(255,255,255,0.90)]'>Vesting Period 12,600,000 MRLN</p>
                    </div>
                    <div className="mt-[17px]">
                        <h6 className="uppercase text-[16px] font-[700] quantico">Private sale Holders</h6>
                        <p className='text-[15px] text-[rgba(255,255,255,0.90)]'>Circulation 12,600,000 MRLN</p>
                        <p className='text-[15px] text-[rgba(255,255,255,0.90)]'>Vesting Period 12,600,000 MRLN</p>
                    </div>
                    <div className="mt-[17px]">
                        <h6 className="uppercase text-[16px] font-[700] quantico">Public sale Holders</h6>
                        <p className='text-[15px] text-[rgba(255,255,255,0.90)]'>Circulation 12,600,000 MRLN</p>
                        <p className='text-[15px] text-[rgba(255,255,255,0.90)]'>Vesting Period 12,600,000 MRLN</p>
                    </div>
                    <div className="mt-[17px]">
                        <h6 className="uppercase text-[16px] font-[700] quantico">Airdrop Holders</h6>
                        <p className='text-[15px] text-[rgba(255,255,255,0.90)]'>Circulation 12,600,000 MRLN</p>
                        <p className='text-[15px] text-[rgba(255,255,255,0.90)]'>Vesting Period 12,600,000 MRLN</p>
                    </div>
                </div>
            </div>
            <div className="w-[40%] lg:w-full lg:max-w-[500px] xsm:max-w-[300px] lg:min-h-[500px] xsmg:min-h-[300px] px-[15px] pt-[80px] lg:pt-0 lg:absolute lg:top-[0]">
                <DonutChart data={donutChartData} labels={dynamicLabels} />
            </div>
            <div className="w-[35%] lg:w-1/2 xsm:w-full xsm:mt-[40px] px-[15px]">
                <div className="pl-[24px] relative mb-[35px]">
                    <div className="rounded-full bg-[#A06BFD] h-[16px] w-[16px] absolute top-[7px] left-0"></div>
                    <h5 className="uppercase text-[20px] font-[700] quantico">Project Merlin Ecosystem (28%)</h5>

                    <div className="mt-[17px]">
                        <h6 className="uppercase text-[16px] font-[700] quantico">Operation</h6>
                        <p className='text-[15px] text-[rgba(255,255,255,0.90)]'>Circulation 12,600,000 MRLN</p>
                        <p className='text-[15px] text-[rgba(255,255,255,0.90)]'>Vesting Period 12,600,000 MRLN</p>
                    </div>
                    <div className="mt-[17px]">
                        <h6 className="uppercase text-[16px] font-[700] quantico">marketing</h6>
                        <p className='text-[15px] text-[rgba(255,255,255,0.90)]'>Circulation 12,600,000 MRLN</p>
                        <p className='text-[15px] text-[rgba(255,255,255,0.90)]'>Vesting Period 12,600,000 MRLN</p>
                    </div>
                    <div className="mt-[17px]">
                        <h6 className="uppercase text-[16px] font-[700] quantico">Liquidity</h6>
                        <p className='text-[15px] text-[rgba(255,255,255,0.90)]'>Circulation 12,600,000 MRLN</p>
                        <p className='text-[15px] text-[rgba(255,255,255,0.90)]'>Vesting Period 12,600,000 MRLN</p>
                    </div>
                </div>
                <div className="pl-[24px] relative mb-[35px]">
                    <div className="rounded-full bg-[#EEBC13] h-[16px] w-[16px] absolute top-[7px] left-0"></div>
                    <h5 className="uppercase text-[20px] font-[700] quantico">team Project Merlin (13%)</h5>

                    <div className="mt-[17px]">
                        <h6 className="uppercase text-[16px] font-[700] quantico">Core team</h6>
                        <p className='text-[15px] text-[rgba(255,255,255,0.90)]'>Circulation 12,600,000 MRLN</p>
                        <p className='text-[15px] text-[rgba(255,255,255,0.90)]'>Vesting Period 12,600,000 MRLN</p>
                    </div>
                    <div className="mt-[17px]">
                        <h6 className="uppercase text-[16px] font-[700] quantico">Advisors</h6>
                        <p className='text-[15px] text-[rgba(255,255,255,0.90)]'>Circulation 12,600,000 MRLN</p>
                        <p className='text-[15px] text-[rgba(255,255,255,0.90)]'>Vesting Period 12,600,000 MRLN</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DonutCharSection