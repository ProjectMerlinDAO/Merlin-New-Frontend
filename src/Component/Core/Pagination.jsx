import Image from 'next/image'
import React from 'react'

const Pagination = ({ page, pageCount, setPage }) => {
  console.log(page, pageCount,"PPPPPP" )
  const handleNextPage = () => {
    if (page < pageCount) {
      setPage((page) => page + 1); // Decrement page number by 1
    }
  };
  const handlePrevious = () => {
    if (page > 0) {
      setPage((page) => page - 1);
    }
  }
  return (
    <div className="merlin-pagination">
      <ul className='flex items-center justify-start gap-[10px]'>
        {page > 1 ?
          <li>
            <div onClick={handlePrevious} className='cursor-pointer flex items-center justify-center rounded-[12px] sm:rounded-[8px] h-[40px] w-[40px] sm:h-[30px] sm:w-[30px] bg-transparent border border-[#ffffff26] hover:bg-[#ffffff26] hover:text-[#12CFA7] duration-[0.4s]'><Image src="/assets/images/icons/pagination-arrow-left.svg" alt="icon" height="12" width="7" /></div>
          </li> : null
        }
        {Array.from({ length: pageCount }).map((_, index) => (
          <li key={index}>
            <div
            onClick={() => setPage(index +1)}
              className={index+1 == page ? `cursor-pointer flex items-center justify-center rounded-[12px] sm:rounded-[8px] h-[40px] w-[40px] sm:h-[30px] sm:w-[30px] ${`bg-[#ffffff26] text-[#12CFA7] border border-[#ffffff26] hover:bg-[#ffffff26] hover:text-[#12CFA7] duration-[0.4s]`}` : "cursor-pointer flex items-center justify-center rounded-[12px] sm:rounded-[8px] h-[40px] w-[40px] sm:h-[30px] sm:w-[30px] bg-transparent border border-[#ffffff26] hover:bg-[#ffffff26] hover:text-[#12CFA7] duration-[0.4s]"}
            >
              {index + 1}
            </div>
          </li>
        ))}
        {page == pageCount ? null :
          <li>
            <div
              onClick={handleNextPage} className='cursor-pointer flex items-center justify-center rounded-[12px] sm:rounded-[8px] h-[40px] w-[40px] sm:h-[30px] sm:w-[30px] bg-transparent border border-[#ffffff26] hover:bg-[#ffffff26] hover:text-[#12CFA7] duration-[0.4s]'><Image src="/assets/images/icons/pagination-arrow-right.svg" alt="icon" height="12" width="7" />
            </div>
          </li>
        }
      </ul>
    </div>
  )
}

export default Pagination