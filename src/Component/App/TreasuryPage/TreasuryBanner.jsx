import React from 'react'

const TreasuryBanner = () => {
  return (
    <div className="p-[60px] xl:p-[45px] lg:p-[30px] md:p-[20px] rounded-[40px] backdrop-blur-[15px] relative overflow-hidden" style={{background: 'linear-gradient(178deg, rgba(255, 255, 255, 0.05) 2.04%, rgba(255, 255, 255, 0.01) 97.96%)'}}>
        <div className="absolute top-0 left-0 z-0">
            <img src="../assets/images/shape/trasure-shape.png" alt="shape" />
        </div>
        <h2 className='text-white uppercase leading-[137.5%] text-[40px] sm:text-[32px] font-[700] quantico mb-[40px] lg:mb-[20px] max-w-[400px] w-[100%] relative z-10 lg:text-center lg:mx-auto'>The Exchequer of Project Merlin</h2>
        <p className='text-white leading-[175%] text-[16px] md:text-[14px] font-[300] lexend mb-[60px] lg:mb-[20px] max-w-[612px] w-[100%] relative z-10 lg:text-center lg:mx-auto'>Here, you can find the financial records of Project Merlin. Additionally, if there is a payment or reward entitled to the account associated with your wallet, you can claim it from this page.</p>
        <div className="flex items-start justify-between lg:flex-wrap mx-[-10px] max-w-[1110px] relative z-10 lg:text-center lg:mx-auto">
            <div className="px-[10px] pb-[20px] lg:w-1/2 xsm:w-full">
                <div className="w-full">
                    <h6 className="text-white lexend text-[16px] lg:text-[14px] font-[400] leading-[312.5%]">Merlin&apos;s Treasury</h6>
                    <h3 className="text-white uppercase leading-[137.5%] text-[30px] lg:text-[24px] font-[700] quantico">337,500,000 MRLn</h3>
                </div>
            </div>
            <div className="px-[10px] pb-[20px] lg:w-1/2 xsm:w-full">
                <div className="w-full">
                    <h6 className="text-white lexend text-[16px] lg:text-[14px] font-[400] leading-[312.5%]">MRLN / USDT</h6>
                    <h3 className="text-white uppercase leading-[137.5%] text-[30px] lg:text-[24px] font-[700] quantico">0.05 USDT</h3>
                </div>
            </div>
            <div className="px-[10px] pb-[20px] lg:w-1/2 xsm:w-full">
                <div className="w-full">
                    <h6 className="text-white lexend text-[16px] lg:text-[14px] font-[400] leading-[312.5%]">Total User</h6>
                    <h3 className="text-white uppercase leading-[137.5%] text-[30px] lg:text-[24px] font-[700] quantico">10,000 +</h3>
                </div>
            </div>
            <div className="px-[10px] pb-[20px] lg:w-1/2 xsm:w-full">
                <div className="w-full"> 
                    <h6 className="text-white lexend text-[16px] lg:text-[14px] font-[400] leading-[312.5%]">Funds Distributed</h6>
                    <h3 className="text-white uppercase leading-[137.5%] text-[30px] lg:text-[24px] font-[700] quantico">2.44m USDT</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TreasuryBanner