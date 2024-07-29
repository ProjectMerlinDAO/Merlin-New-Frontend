import React, { useState } from 'react';
import NftCardTimer from './NftCardTimer';


const NftAuctionCard = ({ id, title, price, change, supply, showTimer, itemImg }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleClick = () => {
    setIsLiked(!isLiked);
  };
  return (
    <div className="relative border-[rgba(255, 255, 255, 0.10)] border-1 bg-[rgba(255,255,255,0.05)] overflow-hidden rounded-[20px] nft-auction-card cursor-pointer">
      {showTimer && 
        <div className="card-timer text-white text-[16px] font-[600] leading-[125%] absolute top-[20px] left-[20px] overflow-hidden bg-[rgba(18,22,25,0.3)] h-[40px] px-[14px] py-[9px] rounded-[8px] backdrop-blur-[2.5px]">
          <NftCardTimer/>
        </div>
      } 
      <button className="h-[40px] w-[40px] rounded-[8px] overflow-hidden backdrop-blur-[5px] bg-[rgba(18,22,25,0.3)] absolute top-[20px] right-[20px] z-10 flex items-center justify-center"
        onClick={handleClick}
        style={{ cursor: 'pointer' }}
      >
        <img 
          src={isLiked ? "./assets/images/icons/red-heart.svg" : "./assets/images/icons/heart-icon.svg"} 
          alt="icon" 
        />
      </button>
      <img src={itemImg} alt="icon" className="w-full" />
      <div className="px-[20px] py-[25px] z-0 relative">
        <p className="text-[rgba(255,255,255,0.80)] text-[14px] font-[700] leading-[142.857%] flex items-center justify-start gap-[10px] mb-[16px]">
          #{id}
        </p>
        <h2 className="text-[#FFF] text-[22px] font-[700] leading-[90%] mb-[30px]">{title}</h2>
        <div className="flex items-center justify-between outfit">
          <p className="text-[#FFF] text-[16px] font-[500] leading-[125%]">
            {price} MRLN <span className="text-[13px] text-[#0CE466] leading-[153%]">{change}</span>
          </p>
          <p className="text-[#FFF] text-[16px] font-[500] leading-[125%]">{supply}</p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full nft-auction-card-btn">
        <a href="#" className="p-[17px] w-full flex items-center justify-center bg-[#0CE466] text-[#111] text-[16px] font-[700] leading-[125%] uppercase">Buy Now</a>
      </div>
    </div>
  );
};

export default NftAuctionCard;
