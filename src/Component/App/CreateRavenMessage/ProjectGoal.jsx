import React, { useState } from 'react'
import Image from 'next/image'

const ProjectGoal = ({name, onChange, value, errors}) => {
    const [isTextVisible, setIsTextVisible] = useState(false);
    const mrlnTokenPrice = 0.5 //(1 mrlnToken == 0.5 USDT);
  const toggleTextVisibility = () => {
    setIsTextVisible(!isTextVisible);
  }
  
    return (
        <div className='mt-[40px] xl:mt-[30px]'>
            <label className='font-[400] uppercase text-white'>Project Goal</label>
            <div className="rounded-[18px] relative overflow-hidden min-h-[107px] pb-[15px] w-full mt-[8px] md:mt-[4px]" style={{ background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.01) 0%, rgba(255, 255, 255, 0.05) 100%)' }}>
                <div className="flex flex-wrap items-start rounded-[18px] justify-between border-2 border-[#FFFFFF12] min-h-[60px]">
                    <div className="w-1/2 xsm:w-full">
                        <div className="flex px-[20px] items-center py-[10px] gap-[13px] border-r-2 border-[#FFFFFF12] h-[60px]" onClick={toggleTextVisibility}>
                            <div className="h-[30px] relative w-[30px] rounded-full overflow-hidden flex items-center justify-center">
                                <Image src="/assets/images/coins/usdt.svg" alt="coin" fill={true} />
                            </div>
                            <input type="text" placeholder='USDT Amount' className='text-white no-outline bg-transparent border-0' name={name} onChange={onChange} value={value == 0 ? null : value }/>
                        </div>
                        {errors && Object.keys(errors).length > 0 && errors?.hasOwnProperty(name) ? <div className="error-message">{errors[name]}</div> : null}
                    </div>
                    <div className="w-1/2 xsm:w-full">
                        <div className="flex items-center justify-between px-[20px] py-[10px] gap-[13px] bg-[#ffffff05] h-[60px]">
                            <span>{value ? Number(value) * mrlnTokenPrice : 0.00}</span>
                            <div className="flex items-center gap-[13px]">
                                <p>MRLN</p>
                                <div className="h-[30px] relative w-[30px] rounded-full overflow-hidden flex items-center justify-center">
                                    <Image src="/assets/images/img/banner-img.png" alt="coin" fill={true} />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='px-[20px] pt-[15px]'>
                    <div className="flex justify-end gap-[12px]">
                        <span className='cursor-pointer' onClick={toggleTextVisibility}><Image src="/assets/images/icons/info-icon.svg" alt="icon" width="18" height="18" /></span>
                        <span className='cursor-pointer' onClick={toggleTextVisibility}><Image src="/assets/images/icons/arrow-up-down.svg" alt="icon" width="10" height="17" /></span>
                    </div>
                    <div className={`pt-[15px] ${isTextVisible ? '' : 'hidden'}`}>
                        <p>You can set a target for your funding needs. This way, if they wish, the Project Merlin Community can directly support you in reaching your funding goal. If you do not reach your targeted amount within three months, the funds collected will be transferred to the Camelot treasury. Therefore, it is beneficial for you to choose an achievable target when determining the amount of funds.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectGoal