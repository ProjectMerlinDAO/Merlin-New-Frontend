import Image from 'next/image'
import React from 'react'

const BlogQuote = () => {
  return (
    <div className='rounded-[30px] py-[45px] px-[40px] md:px-[25px] mb-[50px] relative' style={{background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.10) 100%)'}}>
        <div className="quote h-[50px] w-[50px] bg-[#12CFA7] rounded-[50%] flex items-center justify-center absolute top-[-25px] left-[40px]">
            <Image src="../assets/images/icons/quote.svg" alt="icon" />
        </div>
        <p className='leading-[166.667%] font-[400] text-[24px] xl:text-[20px] md:text-[18px] text-white lexend'>At Project Merlin, we are not just building a platform; we are nurturing a movement where every voice can truly make a difference.</p>
    </div>
  )
}

export default BlogQuote