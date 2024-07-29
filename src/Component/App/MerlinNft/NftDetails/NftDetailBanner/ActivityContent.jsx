import React from 'react';
import Link from 'next/link';

const activityData = [
  {
    id: 1,
    listIcon: "./assets/images/nft/icons/bid-accepted.svg",
    action: "Bid Accepted by",
    name: "Smith_de_fox",
    is2ndName: false,
    amount: "123.026 MRLN",
    value: "(~$30.08)",
    isTopBid: true,
    date: "Jul 16, 2024, 11:36 AM",
  },
  {
    id: 2,
    listIcon: "./assets/images/nft/icons/transfer.svg",
    action: "Transfer From",
    name: "Ok0xd",
    is2ndName: true,
    name2: 'John_de',
    amount: "---",
    value: "",
    isTopBid: false,
    date: "Jun 15, 2024, 05:08 PM",
  },
  {
    id: 3,
    listIcon: "./assets/images/nft/icons/sale.svg",
    action: "Sale From",
    name: "9xDDz",
    is2ndName: true,
    name2: 'APYoxx',
    amount: "89.088 MRLN ",
    value: "(~$21.00)",
    isTopBid: true,
    date: "May 12, 2024, 12:00 AM",
  },
  {
    id: 4,
    listIcon: "./assets/images/nft/icons/listed.svg",
    action: "Listed for",
    name: "0x148_DX",
    is2ndName: false,
    amount: "20.000 MRLN",
    value: "(~$2.03)",
    isTopBid: true,
    date: "Feb 10, 2024, 08:08 PM",
  },
  {
    id: 5,
    listIcon: "./assets/images/nft/icons/transfer.svg",
    action: "Transfer From",
    name: "CCDR0x",
    is2ndName: true,
    name2: 'Money_to',
    amount: "---",
    value: "",
    isTopBid: false,
    date: "Feb 16, 2024, 11:36 AM",
  },
  {
    id: 6,
    listIcon: "./assets/images/nft/icons/sale.svg",
    action: "Sale From",
    name: "Smith_Oxc",
    is2ndName: true,
    name2: 'DNXFront',
    amount: "50.002 MRLN",
    value: "(~$15.89)",
    isTopBid: true,
    date: "Feb 16, 2024, 11:36 AM",
  },
  {
    id: 7,
    listIcon: "./assets/images/nft/icons/minted.svg",
    action: "Minted By",
    name: "Smith_Oxc",
    is2ndName: false,
    amount: "---",
    value: "",
    isTopBid: false,
    date: "Feb 16, 2024, 11:36 AM",
  },
];


const ActivityContent = () => {
  return (
    <div className='relative pt-[19px]'>
      {activityData.map((bid) => (
        <div key={bid.id} className="flex items-center justify-between py-[12px]">
          <div className="flex items-center justify-start gap-[10px] w-[37%] sm:w-[50%]">
            <div className="flex items-center justify-center h-[40px] w-[40px] min-h-[40px] min-w-[40px] rounded-full overflow-hidden relative bg-[rgba(255,255,255,0.10)]">
              <img src={bid.listIcon} alt="list-icon" className='' />
            </div>
            <div className="text">
              <span className='outfit text-[12px] font-[500] text-[rgba(255,255,255,0.80)]'>{bid.action}</span>
              <h6 className='p-0 mb-0 mt-[-3px] text-[16px] xl:text-[15px] md:text-[14px] leading-[150%] font-[700] text-white'><Link href="#" className="no-underline hover:underline" >{bid.name}</Link> {bid.is2ndName && <span><span className="outfit text-[12px] font-[500] text-[rgba(255,255,255,0.80)]">To</span> <Link href="#" className="no-underline hover:underline">{bid.name2}</Link></span> }</h6>
            </div>
          </div>
          <div className="w-[35%] sm:w-[30%] px-[10px]">
            <Link href="#" target='_blank' className="p-0 m-0 text-left text-[16px] leading-[100%] xl:text-[15px] md:text-[14px] font-[700] text-[#FFFFFF] flex items-center justify-start gap-[6px] nft-bid-value md:flex-wrap">
              {bid.amount} <span className='text-[rgba(255,255,255,0.80)] flex items-center justify-start gap-[6px]'>{bid.value} {bid.isTopBid && <img src="./assets/images/icons/arrow-top-right.svg" alt="icon" className="nft-bid-value-icon" />}</span>
            </Link>
          </div>
          <div className="w-[28%] sm:w-[20%] text-right">
            <p className="p-0 m-0 text-left text-[16px] xl:text-[15px] md:text-[14px] font-[700] text-[#FFFFFF]">{bid.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ActivityContent;
