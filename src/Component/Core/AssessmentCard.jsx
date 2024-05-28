import React, { useState } from 'react';
import Image from 'next/image'
import AssesmentTimer from './AssesmentTimer';

const AssessmentCard = ({ title, cardImg, totalPreProposal, description, description2, voteLink, icons, timerText, imgSrc, assesmentTag, tagBg }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
  return (
    <div className="rounded-[40px] assessment-card overflow-hidden relative bg-gradient-to-b from-[#ffffff19] to-[#ffffff02]">
      <Image src={imgSrc} alt="shape" className="absolute z-0" width="425" height="425" />
      <div className="px-[30px] py-[12px] lg:py-[8px] absolute right-0 top-[50px] xl:top-[35px] lg:top-[94px] md:top-[30px] xsm:top-[94px]" style={{borderRadius: '10px 0px 0px 10px', background: tagBg }}>
        <span className='text-white font-[500] text-[18px] xl:text-[16px]'>{assesmentTag}</span>
      </div>
    
      <div className='flex items-center justify-start relative z-10 gap-[18px] xl:gap-[12px] px-[40px] 2xl:px-[20px] max-w-[75%] lg:max-w-full pt-[40px] xl:pt-[25px] pb-[25px] xl-[10px] lg:mb-[30px] xsm:lg:mb-[30px]  md:mb-[0px]'>
        <div className="overflow-hidden rounder-[25px] relative min-h-[100px] min-w-[100px] 2xl:min-h-[80px] 2xl:min-w-[80px] max-h-[100px] max-w-[100px] 2xl:max-h-[80px] 2xl:max-w-[80px] xl:min-h-[80px] xl:min-w-[80px] xl:max-h-[80px] xl:max-w-[80px] lg:min-h-[60px] lg:min-w-[60px] lg:max-h-[60px] lg:max-w-[60px]">
          <Image src={cardImg} alt="img" className="object-cover w-[100px] h-[100px] item-img" fill={true} />
        </div>
        <div className="max-w-[70%]">
          <h3 className='mb-[15px] 2xl:mb-[0] text-[26px] lg:text-[18px] text-white text-ellipsis overflow-hidden text-nowrap'>{title}</h3>
          <h6 className='mb-[0px] xl:text-[14px]'>Total Pre-Proposal: {totalPreProposal}</h6>
        </div>
      </div>
      <div className='px-[40px] 2xl:px-[20px] py-[15px] relative z-10 bg-gradient-to-r from-[#ffffff10] to-opacity-[transparent] '>
        <h6 className='text-[16px] font-[500] text-white lexend uppercase mb-[10px]'>{timerText}</h6>
        <AssesmentTimer />
      </div>
      <div className="pt-[30px] xl:pt-[20px] pb-[35px] relative z-10 px-[40px] xl:px-[20px] lg:text-[14px]">
        <div className="relative">
          <div className='overflow-hidden' style={{background: 'linear-gradient(180deg, rgba(22, 24, 28, 0.00) 0%, #16181C 100%)', paddingBottom: `${showMore ? '20px' : '20px'}`, height: `${showMore ? 'auto' : '125px'}`}}>
            <p className='mb-[12px]'>{description}</p>
            <p>{description2}</p>
          </div>
          <div className="absolute left-0 w-full bottom-[-34px]">
            <div className={showMore ? '' : 'bg-gradient-to-b from-[transparent] to-[#16181C] h-[85px]'}></div>
            <span className='text-[#FFFFFF80] uppercase quantico font-[700] cursor-pointer' onClick={toggleShowMore}>
              {showMore ? '- Show Less' : '+ Show More'}
            </span>
          </div>
        </div>

        <div className="flex mt-[45px] gap-[20px]">
          <a href={voteLink} className='buy-btn hov-btn bg-[#12CFA715] rounded-full h-[50px] w-[170px] flex items-center justify-center text-white text-center leading-trim-both text-edge-cap font-[600] text-[16px] uppercase quantico'>
            <span className="btn-hov-text">
              <span className="btn-text" >Vote Now</span>
              <span className="btn-text" >Vote Now</span>
            </span>
          </a>
          <div className='px-[20px] py-[8px] flex justify-end items-center gap-[20px] rounded-full h-[50px] w-[207px] lg:w-[140px] ml-auto bg-gradient-to-l from-[#ffffff10] to-[transparent]' >
            {icons && icons.map((icon, index) => (
              <a key={index} href="#">
                <Image src={icon} alt="icon" width="24" height="24" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssessmentCard;
