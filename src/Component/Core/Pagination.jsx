import Image from 'next/image'
import React from 'react'

const Pagination = () => {
  return (
    <div className="merlin-pagination">
        <ul className='flex items-center justify-start gap-[10px]'>
            <li><a href="#" className='flex items-center justify-center rounded-[12px] sm:rounded-[8px] h-[40px] w-[40px] sm:h-[30px] sm:w-[30px] bg-transparent border border-[#ffffff26] hover:bg-[#ffffff26] hover:text-[#12CFA7] duration-[0.4s]'><Image src="/assets/images/icons/pagination-arrow-left.svg" alt="icon" height="12" width="7" /></a></li>
            <li><a href="#" className='flex items-center justify-center rounded-[12px] sm:rounded-[8px] h-[40px] w-[40px] sm:h-[30px] sm:w-[30px] bg-transparent border border-[#ffffff26] hover:bg-[#ffffff26] hover:text-[#12CFA7] duration-[0.4s]'>1</a></li>
            <li><a href="#" className='flex items-center justify-center rounded-[12px] sm:rounded-[8px] h-[40px] w-[40px] sm:h-[30px] sm:w-[30px] bg-[#ffffff26] text-[#12CFA7] border border-[#ffffff26] hover:bg-[#ffffff26] hover:text-[#12CFA7] duration-[0.4s]'>2</a></li>
            <li><a href="#" className='flex items-center justify-center rounded-[12px] sm:rounded-[8px] h-[40px] w-[40px] sm:h-[30px] sm:w-[30px] bg-transparent border border-[#ffffff26] hover:bg-[#ffffff26] hover:text-[#12CFA7] duration-[0.4s]'>3</a></li>
            <li><a href="#" className='flex items-center justify-center rounded-[12px] sm:rounded-[8px] h-[40px] w-[40px] sm:h-[30px] sm:w-[30px] bg-transparent border border-[#ffffff26] hover:bg-[#ffffff26] hover:text-[#12CFA7] duration-[0.4s]'>4</a></li>
            <li><a href="#" className='flex items-center justify-center rounded-[12px] sm:rounded-[8px] h-[40px] w-[40px] sm:h-[30px] sm:w-[30px] bg-transparent border border-[#ffffff26] hover:bg-[#ffffff26] hover:text-[#12CFA7] duration-[0.4s]'><Image src="/assets/images/icons/pagination-arrow-right.svg" alt="icon" height="12" width="7" /></a></li>
        </ul>
    </div>
  )
}

export default Pagination