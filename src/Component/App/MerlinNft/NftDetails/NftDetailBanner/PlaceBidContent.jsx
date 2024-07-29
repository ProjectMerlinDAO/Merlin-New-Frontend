import React from 'react';
import Link from 'next/link';

const bids = [
  {
    id: 1,
    avatar: "./assets/images/nft/avater/1.png",
    rank: "Highest bidder",
    name: "Smith_de_fox",
    amount: "123.026 MRLN",
    value: "(~$30.08)",
    date: "Jul 16, 2024, 11:36 AM",
  },
  {
    id: 2,
    avatar: "./assets/images/nft/avater/2.png",
    rank: "4th bidder",
    name: "0xoow_QQ",
    amount: "10.000 MRLN",
    value: "(~$1.44)",
    date: "Jun 15, 2024, 05:08 PM",
  },
  {
    id: 3,
    avatar: "./assets/images/nft/avater/3.png",
    rank: "3rd bidder",
    name: "Defin_oxx",
    amount: "255.158 MRLN",
    value: "(~$20.50)",
    date: "May 12, 2024, 12:00 AM",
  },
  {
    id: 4,
    avatar: "./assets/images/nft/avater/4.png",
    rank: "2nd bidder",
    name: "Roe Ferris",
    amount: "100.000 MRLN",
    value: "(~$9.10)",
    date: "Feb 10, 2024, 08:08 PM",
  },
  {
    id: 5,
    avatar: "./assets/images/nft/avater/5.png",
    rank: "1st bidder",
    name: "9x0cod ddv",
    amount: "50.025 MRLN",
    value: "(~$6.02)",
    date: "Feb 16, 2024, 11:36 AM",
  },
];

const PlaceBidContent = () => {
  return (
    <div className='relative pt-[19px]'>
      {bids.map((bid) => (
        <div key={bid.id} className="flex items-center justify-between py-[12px]">
          <div className="flex items-center justify-start gap-[10px] w-[30%] sm:w-[50%] xsm:pr-[10px]">
            <div className="flex items-center justify-center h-[40px] w-[40px] min-h-[40px] min-w-[40px] rounded-full overflow-hidden relative">
              <img src={bid.avatar} alt="avatar" className='absolute object-cover w-full h-full' />
            </div>
            <div className="text">
              <span className='outfit text-[12px] font-[500] text-[rgba(255,255,255,0.80)]'>{bid.rank}</span>
              <h6 className='p-0 mb-0 mt-[-3px] text-[16px] xl:text-[15px] md:text-[14px] leading-[150%] font-[700] text-white'><Link href="#" className="no-underline hover:underline" >{bid.name}</Link></h6>
            </div>
          </div>
          <div className="w-[40%] sm:w-[30%] px-[10px]">
            <Link href="#" target='_blank' className="p-0 m-0 text-left text-[16px] xl:text-[15px] md:text-[14px] font-[700] text-[#FFFFFF] flex items-center justify-start flex-wrap leading-[110%] gap-[6px] nft-bid-value">
              {bid.amount} <span className='text-[rgba(255,255,255,0.80)] flex items-center justify-start gap-[6px]'>{bid.value} <img src="./assets/images/icons/arrow-top-right.svg" alt="icon" className="nft-bid-value-icon" /></span>
            </Link>
          </div>
          <div className="w-[30%] sm:w-[20%] text-right">
            <p className="p-0 m-0 text-left text-[16px] xl:text-[15px] md:text-[14px] font-[700] text-[#FFFFFF]">{bid.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PlaceBidContent;
