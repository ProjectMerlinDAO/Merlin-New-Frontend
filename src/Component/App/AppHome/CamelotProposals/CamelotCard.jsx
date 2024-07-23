import React from 'react';
import Image from 'next/image'

const CamelotCard = ({ title, imageSrc, editorAvatar, editorName, treasury, category, date }) => {
  return (
    <div className='p-[19px] relative camelot-card rounded-[20px] bg-gradient-to-b from-[#ffffff14] to-[#ffffff02]'>
      <div className="rounded-[15px] overflow-x-hidden mb-[22px]">
        <Image src={imageSrc} alt="img" className='object-cover w-full h-full' width="500" height="500"/>
      </div>
      <h3 className='text-[20px] font-[500] leading-[150%] text-white mb-[7px] text-ellipsis overflow-hidden text-nowrap'>
        {title}
      </h3>
      <ul>
        <li className="flex items-center justify-between py-[15px] md:py-[7px] border-b last:border-none border-[#ffffff10] font-[400] text-white">
          <p className='text-[#ffffffc7]'>Editor</p>
          <p className="flex items-center justify-end gap-[10px]">
            <Image src={editorAvatar} alt="icon" className='h-[22px] w-[22px] rounded-full overflow-hidden object-cover' width="500" height="500" />
            {editorName}
          </p>
        </li>
        <li className="flex items-center justify-between py-[15px] md:py-[7px] border-b last:border-none border-[#ffffff10] font-[400] text-white">
          <p className='text-[#ffffffc7]'>Treasury</p>
          <p>{treasury} MRLN</p>
        </li>
        <li className="flex items-center justify-between py-[15px] md:py-[7px] border-b last:border-none border-[#ffffff10] font-[400] text-white">
          <p className='text-[#ffffffc7]'>Category</p>
          <p>{category}</p>
        </li>
      </ul>
      <div className="flex items-center justify-between gap-[20px] mt-[20px]">
        <a 
        //  href=""
        //  className='hov-btn relative gap-[7px] bg-[#ffffff10] rounded-full bg-opacity-10 backdrop-blur-[5px] h-[45px] w-[120px] flex items-center justify-center text-white text-center leading-trim-both text-edge-cap font-[600] text-[16px] uppercase quantico' >
        className='buy-btn  rounded-full h-[50px] w-[170px] flex items-center justify-center text-white text-center leading-trim-both text-edge-cap font-[600] text-[16px] uppercase quantico'>
          <span className="disable">
          <span className="">Vote Now</span>
          </span>
          {/* <span className="btn-hov-text">
              <span className="btn-text" >Vote Now</span>
              <span className="btn-text" >Vote Now</span>
          </span> */}
        </a>
        <div className=' gap-[7px] bg-gradient-to-r from-[transparent] to-[#ffffff10] rounded-full backdrop-blur-[5px] h-[45px] w-[120px] flex items-center justify-center text-white text-center leading-trim-both text-edge-cap font-[600] text-[16px] uppercase quantico' >
          <Image src="/assets/images/icons/calander.svg" alt="icon" width="13" height="13" /> {date}
        </div>
      </div>
    </div>
  )
}

export default CamelotCard;
