import React from 'react'
import Image from 'next/image';
import FundriseTimer from '../FundriseTimer';

const MyMessageTable = ({ data }) => {
  return (
    <div className="lg:overflow-x-scroll">
      <div className="2xl:text-[14px] min-w-[950px] ">
        <ul className="flex items-center justify-between py-[15px] uppercase">
          <li className="pl-[30px] xl:pl-[15px] pr-[15px] w-[33%]">Raven Message</li>
          <li className="px-[15px] xl:px-[5px] w-[15%]">Categories</li>
          <li className="px-[15px] xl:px-[5px] w-[20%]">Fundraiser ends In</li>
          <li className="px-[15px] xl:px-[5px] w-[12%]">In Proposal</li>
          <li className="px-[15px] xl:px-[5px] pr-[15px] w-[13%] text-right xl:min-w-[max-content]">Balance</li>
          <li className="px-[15px] xl:px-[5px] pr-[15px] w-[7%] text-right xl:min-w-[max-content]"></li>
        </ul>
        {data && data.map((crystal, index) => (
          <ul key={index} className="rounded-[20px] mb-[15px] relative crystal-table-row backdrop-blur-[10px] py-[15px] flex items-center justify-between" style={{ background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 50%, rgba(255, 255, 255, 0.08) 100%)', zIndex: data.length - index}}>
            <li className="w-[33%] px-[15px] xl:pr-[5px]">
              <div className="flex items-center justify-start xl:pr-[15px]">
                <div className="min-h-[60px] min-w-[60px] max-h-[60px] max-w-[60px] rounded-[15px] overflow-hidden">
                  <Image src={crystal.avatarImage} alt="img" className="object-cover w-full h-full" width="60" height="60" />
                </div>
                <div className="ml-[14px]">
                  <h3 className="overflow-hidden text-ellipsis text-[16px] font-[500] text-white lexend mb-[5px] text-nowrap max-w-[320px] 2xl:max-w-[260px] xl:max-w-[220px]">{crystal.title}</h3>
                  <p className="text-[16px] 2xl:font-size-[15px] xl:text-[14px] md:text-[14px] font-[300] lexend uppercase">{crystal?.code}</p>
                </div>
              </div>
            </li>
            <li className="px-[15px] xl:px-[5px] w-[15%]">
              <div className="flex items-center justify-start gap-[20px]">
                {crystal?.categories?.map((icon, idx) => (
                  <div className="tooltip" data-tip={icon.tooltip} key={idx}>
                    <Image src={`/assets/images/img/${icon}.png`} alt="icon" width={34} height={34} />
                  </div>
                ))}
              </div>
            </li>
            <li className="px-[15px] xl:px-[5px] w-[20%]">
              <span className="text-[16px] 2xl:font-size-[15px] xl:text-[14px] md:text-[14px] text-white font-[400] lexend"><FundriseTimer endTime={crystal?.endDate} /></span>
            </li>
            <li className="px-[15px] xl:px-[5px] w-[12%]">
              <span className="text-[16px] 2xl:font-size-[15px] xl:text-[14px] md:text-[14px] text-white font-[400] lexend">{crystal?.inProposal}</span>
            </li>
            <li className="px-[15px] w-[13%] text-right pr-[15px]">
              <span className="text-[16px] 2xl:font-size-[15px] xl:text-[14px] md:text-[14px] text-white font-[400] lexend">{crystal?.balance ? crystal.balance : 0}</span>
            </li>
            <li className="px-[15px] w-[7%] text-right pr-[15px]">
              <div className="text-[16px] 2xl:font-size-[15px] xl:text-[14px] md:text-[14px] text-white font-[400] lexend">
                <div className="dropdown no-arrow dropdown-end dropdown-hover" style={{ zIndex: 9999 }}>
                  <div tabIndex={0} role="button" className="m-1">
                     <img src="../assets/images/icons/3dot-menu.svg" alt="icon" />
                  </div>
                  <ul tabIndex={0} className="p-2 shadow dropdown-content menu bg-[#000000] rounded-box w-52">
                    <li><a>Extend Raven Message</a></li>
                    <li><a>Boost Raven Message</a></li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        ))}
      </div>
    </div>
  )
}

export default MyMessageTable
