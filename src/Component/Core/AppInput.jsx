import React from 'react'

const AppInput = ({inputTitle, inputPlaceholder, inputType, inputSubTitle,name,onChange, errors, value}) => {
  return (
    <div>
        <label className='font-[400] uppercase text-white'>{inputTitle} <span className="normal-case">{inputSubTitle}</span></label>
        <input 
            type={inputType} placeholder={inputPlaceholder}
            className='rounded-[18px] border-[2px] border-[#FFFFFF12] text-white h-[60px] w-[100%] px-[20px] py-[16px] bg-transparent mt-[8px] md:mt-[4px]'
            name={name}
            onChange={onChange}
            // disabled={name === "shortBrief" && value?.trim().length > 120}
         />
         {errors && Object.keys(errors).length > 0  && errors?.hasOwnProperty(name)? <div className="error-message">{errors[name]}</div> : null}
        
    </div>
  )
}
// disabled
export default AppInput