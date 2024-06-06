import Image from 'next/image'
import React, { useState } from 'react'

const OwningProjectMerlin = ({onChange, name}) => {
  const [isTextVisible, setIsTextVisible] = useState(false);

  const toggleTextVisibility = () => {
    setIsTextVisible(!isTextVisible);
  }

  return (
    <div className='mt-[40px] xl:mt-[30px]'>
      <label className='font-[400] uppercase text-white'>Do you own a Project Merlin Community Member NFT?</label>
      <div className="rounded-[18px] relative overflow-hidden min-h-[60px] w-full mt-[8px] md:mt-[4px]" style={{ background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.01) 0%, rgba(255, 255, 255, 0.05) 100%)' }}>
        <div className='px-[20px] pt-[15px]'>
          <div className="flex justify-between">
            <div className="flex items-center justify-start gap-[30px]">
              <span className='flex items-center justify-start gap-[10px] text-white'>
                <input type="radio" name={name} className="radio radio-accent" defaultChecked onChange={onChange} value={"Yes"}/>
                <label>Yes</label>
              </span>
              <span className='flex items-center justify-start gap-[10px] text-white'>
                <input type="radio" name={name} className="radio radio-accent" onChange={onChange} value={"No"}/>
                <label>No</label>
              </span>
            </div>

            <div className="flex justify-end gap-[12px] mt-[6px]">
              <span className='cursor-pointer' onClick={toggleTextVisibility}><Image src="/assets/images/icons/info-icon.svg" alt="icon" width="18" height="18" /></span>
              <span className='cursor-pointer' onClick={toggleTextVisibility}><Image src="/assets/images/icons/arrow-up-down.svg" alt="icon" width="10" height="17" /></span>
            </div>
          </div>
          <div className={`py-[15px] ${isTextVisible ? '' : 'hidden'}`}>
            <p>Owning a Project Merlin Community Member NFT reduces your Raven Message Fee. With an NFT, the Raven fee is 100 MRLN, without, it&#39;s 300 MRLN.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OwningProjectMerlin
