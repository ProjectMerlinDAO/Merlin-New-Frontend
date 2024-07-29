import React, { useEffect, useState } from 'react'
import FundrisingTimer from './FundrisingTimer'
import Image from 'next/image'
import { toast } from 'react-toastify'

const Fundrising = ({ timer, goal, setIsOpen, wallet, amtRaised, fundRaiseTimer }) => {
  const [percentAmt, setPercentAmt] = useState(100);
  const [isFundRaising, setIsFundRaising] = useState(true);
  const calculateAmt = () => {
    let amt = (Number(amtRaised) / Number(goal)) * 100
    setPercentAmt(amt);
  }
  console.log(new Date(fundRaiseTimer).getTime(),"lllll")
  const mrlnTokenPrice = 0.5 //(1 mrlnToken == 0.5 USDT);
  const openModal = () => {
    if (!wallet) {
      toast.error("Please connect wallet");
      return;
    }
    setIsOpen(true);
  }
  useEffect(() => {
    calculateAmt()
  }, [wallet, amtRaised])
  
  const handleFundRaisingTime = async () => {
    let currentDate = new Date().getTime();
    let fundRaiseTime = new Date(fundRaiseTimer).getTime();
    if(fundRaiseTime <= currentDate){
      setIsFundRaising(false);
    }
  }
  useEffect(() => {
    handleFundRaisingTime();
  },[isFundRaising])
  return (
    <div className='rounded-[20px] backdrop-blur-[5px] p-[40px] 2xl:p-[20px] relative fundrising-card mb-[30px]' style={{ background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.00) 100%)' }}>
      <div className='relative z-10'>
        <h3 className='text-white text-[18px] lexend mb-[5px] uppercase' >Fundraising Ends in  </h3>
        <FundrisingTimer timer={timer} />

        <div className="h-[20px] rounded-[10px] bg-[#ffffff19] w-full mt-[25px] mb-[15px]">
          <div className={`bg-[#12CFA7] rounded-[10px] text-white text-[14px] quantico flex items-center justify-end gap-[5px] h-[20px] w-[${Math.floor(percentAmt)}%]`}>
            <span className='mt-[45px] mr-[-9px] absolute'>{percentAmt ? percentAmt.toFixed(0) : 0}%</span>
            <Image src="/assets/images/icons/range-dot.svg" alt="icon" width="39" height="34" className="mr-[-5px]" />
          </div>
        </div>

        <ul className="fundrising-list 2xl:text-[15px]">
          <li className='relative flex items-center justify-between py-[15px] text-white'><span>Raised</span> <span>{amtRaised ? `${amtRaised.toFixed(1)} USDT (${goal * mrlnTokenPrice} MRLN)` : '0 USDT(0 MRLN)'}
          </span></li>
          <li className='relative flex items-center justify-between py-[15px] text-white'><span>Goal</span> <span>{goal} USDT {`(${goal * mrlnTokenPrice} MRLN)`}</span></li>
        </ul>
        <button type='submit' onClick={openModal} disabled={percentAmt === 100} className="disabled:opacity-75   hov-btn no-border btn-has-shape bg-[#12CFA7] h-[60px] text-white quantico font-[700] w-full rounded-[18px] uppercase mt-[30px]">
          {Math.round(percentAmt) == 100 || isFundRaising === false ? 
            <span className="disabled:opacity-100 btn-text">Time Over</span>
          : <span className="btn-hov-text !h-[27px]">
            <span className="disabled:opacity-100 btn-text">Donate Now</span>
            <span className="disabled:opacity-75  btn-text">Donate Now</span>
          </span>}

        </button>
      </div>
    </div>

  )
}

export default Fundrising