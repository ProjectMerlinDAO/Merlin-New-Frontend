import Image from 'next/image'
import React, { useState } from 'react'

const OracalCard = ( { messageCode, oracalImg, id, deleteList, setDeleteList } ) => {
    const [isTextVisible, setIsTextVisible] = useState(false);
    const toggleTextVisibility = () => {
        setIsTextVisible(!isTextVisible);
    }
    const handleCheck = (e) => {
        console.log(e.target.checked, e.target.value, "  TARGET")
        const checked = e.target.checked;
        const value = e.target.value;
        if (checked) {
            setDeleteList((list) => [
                ...list,
                value
            ]);
        }else if(!checked){
            setDeleteList((list) =>{
                return list.filter((item) => item !== value)
            })
        }
    }
    console.log(deleteList, "LIST")
    return (
        <div
            className="rounded-[20px] cursor-pointer relative"
            style={{ background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.03) 100%)' }}
        >
            <div className="flex items-center justify-start gap-[10px] py-[10px] px-[20px]">
                <div className="form-control ml-[-10px]">
                    <label className="cursor-pointer label">
                        <input type="checkbox" value={id} className="checkbox checkbox-accent rounded-[50%]" onClick={(e) => handleCheck(e)} />
                    </label>
                </div>
                <div className="oracle-card-img h-[50px] w-[50px] overflow-hidden rounded-[12px] relative">
                    <Image src={oracalImg} alt="img" fill />
                </div>
                <span className='text-white uppercase'>{messageCode}</span>
                <Image
                    src="/assets/images/icons/arrow-up-down.svg"
                    alt="img"
                    height={17}
                    width={10}
                    className='absolute top-[27px] right-[15px]'
                    onClick={toggleTextVisibility}
                />
            </div>
            {/* <div className={`px-[20px] ${isTextVisible ? 'block' : 'hidden'}`}>
                <h3 className='text-[16px] font-[400] leading-[150%] mb-[10px] pt-[10px]'>{title}</h3>
                <p className='text-[15px] font-[300] leading-[160%] pb-[10px]'>{oracalParagraph}</p>
            </div> */}
        </div>
    )
}

export default OracalCard
