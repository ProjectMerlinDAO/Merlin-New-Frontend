import React from 'react';
import Image from 'next/image'
import AssesmentTimer from '../../Core/AssesmentTimer';

const CamelotTreasuryCard = ({ title, cardImg, months, description, description2, voteLink, icons, timerText, imgSrc, Amount, Revenues, Balance, balanceColor }) => {
  return (
    <div className="rounded-[40px] overflow-hidden relative bg-gradient-to-b from-[#ffffff19] to-[#ffffff02]">
      <Image src={imgSrc} alt="shape" className="absolute z-0" width="425" height="425" />
    
      <div className='flex items-center justify-start relative z-10 gap-[18px] xl:gap-[12px] px-[40px] 2xl:px-[20px] max-w-[75%] lg:max-w-full pt-[40px] xl:pt-[25px] pb-[25px] xl-[10px] lg:mb-[30px] xsm:lg:mb-[30px]  md:mb-[0px]'>
        <div className="overflow-hidden relative min-h-[100px] min-w-[100px] 2xl:min-h-[80px] 2xl:min-w-[80px] max-h-[100px] max-w-[100px] 2xl:max-h-[80px] 2xl:max-w-[80px] xl:min-h-[80px] xl:min-w-[80px] xl:max-h-[80px] xl:max-w-[80px] lg:min-h-[60px] lg:min-w-[60px] lg:max-h-[60px] lg:max-w-[60px]">
          <img src={cardImg} alt="img" className="object-cover w-[100%] h-[100%] item-img" />
        </div>
        <div className="max-w-[70%]">
          <h3 className='mb-[15px] 2xl:mb-[0] text-[26px] lg:text-[18px] font-[500] text-white text-ellipsis overflow-hidden text-nowrap'>{title}</h3>
          <h6 className='mb-[0px] xl:text-[14px]'>{months}</h6>
        </div>
      </div>
      <div className='px-[40px] 2xl:px-[20px] py-[15px] relative z-10 bg-gradient-to-r from-[#ffffff10] to-opacity-[transparent] '>
        <h6 className='text-[16px] font-[500] text-white lexend uppercase mb-[10px]'>{timerText}</h6>
        <AssesmentTimer />
      </div>
      <div className="pt-[30px] xl:pt-[20px] pb-[35px] relative z-10 px-[40px] xl:px-[20px] lg:text-[14px]">
        <div className="relative">
          <div className='overflow-hidden pb-[20px] h-[auto]'>
            <p className='mb-[12px]'>{description}</p>
            <p>{description2}</p>
          </div>
        </div>
        
        <ul className='camelot-treasury-card-list'>
            <li className='text-white font-[400] text-[16px] flex items-center justify-between leading-[343%] relative'><span>Target Amount</span> <span>{Amount} MRLN</span></li>
            <li className='text-white font-[400] text-[16px] flex items-center justify-between leading-[343%] relative'><span>The Revenues</span> <span>{Revenues} MRLN</span></li>
            <li className='text-white font-[400] text-[16px] flex items-center justify-between leading-[343%] relative'><span>Balance</span> <span style={{color: `${balanceColor}`}}>{Balance} MRLN</span></li>
        </ul>
        
        
      </div>
    </div>
  );
};

export default CamelotTreasuryCard;
