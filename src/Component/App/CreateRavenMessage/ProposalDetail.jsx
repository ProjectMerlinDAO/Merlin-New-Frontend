import Image from 'next/image'
import React from 'react'

const ProposalDetail = ({onChange, name, errors}) => {
  if(errors){
  }
  return (
    <div className='mt-[40px] xl:mt-[30px]'>
        <label className='font-[400] uppercase text-white'>Details of your proposal</label>
        <textarea className='resize-none h-[220px] border-[2px] border-[#FFFFFF12] text-white rounded-[18px] px-[18px] py-[20px] w-full mt-[8px] md:mt-[4px] bg-transparent' placeholder='Tell us why you are applying. Why should the Project Merlin community support you?' onChange={onChange} name={name}>
        </textarea>
        {errors && Object.keys(errors).length > 0 && errors?.hasOwnProperty(name) ? <div className="error-message">{errors[name]}</div> : null}
    </div>

  )
}

export default ProposalDetail