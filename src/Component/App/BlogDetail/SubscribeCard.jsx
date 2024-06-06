import React from 'react'
import AppInput from '../../Core/AppInput'
import Link from 'next/link'

const SubscribeCard = () => {
  return (
    <div className="px-[30px] py-[40px] rounded-[20px]" style={{background: 'linear-gradient(180deg, rgba(18, 207, 167, 0.30) 0%, rgba(105, 54, 212, 0.15) 100%)'}}>
        <h3 className="text-white text-[18px] mb-[15px] font-[400] uppercase lexend">Subscribe for updates</h3>
        <form>
            <input type="email" placeholder="Enter Email address"
                className='rounded-[18px] border-[2px] border-[#FFFFFF12] text-white h-[60px] w-[100%] px-[20px] py-[16px] bg-transparent'
            />
            <button type='submit' className="hov-btn btn-has-shape bg-[#12CFA7] h-[60px] text-white quantico font-[700] w-full rounded-[18px] uppercase mt-[20px]">
                <span className="btn-hov-text !h-[27px]">
                    <span className="btn-text">Submit</span>
                    <span className="btn-text">Submit</span>
                </span>
            </button>
        </form>
        <p className="max-w-[280px] lg:max-w-full mt-[20px]">By submitting this form, you agree to receive marketing and other communications from Project Merlin and other company updates. For more information please review our <Link href="#" className='text-[#12CFA7] underline' >Privacy Policy.</Link></p>
    </div>
  )
}

export default SubscribeCard