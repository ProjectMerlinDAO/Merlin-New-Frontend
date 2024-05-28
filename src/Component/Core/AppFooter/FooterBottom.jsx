import React from 'react'
import Image from 'next/image'

const FooterBottom = () => {
  return (
    <div className="py-[50px] xl:py-[30px] flex items-center justify-between md:justify-center font-[400] md:gap-[16px] md:flex-wrap">
        <ul className="flex items-center justify-start gap-[25px] flex-wrap sm:justify-center sm:gap-[10px]">
            <li><a href="#" className="hover:text-white">Terms and conditions</a></li>
            <li><a href="#" className="hover:text-white">Privacy policy</a></li>
            <li><a href="#" className="hover:text-white">Whitepaper</a></li>
        </ul>
        <a href="#" className='flex items-center justify-end gap-[10px] text-white'>Back to Top <Image src="/assets/images/icons/top-arrow.svg" alt="icon" height="8" width="13" /></a>
    </div>
  )
}

export default FooterBottom