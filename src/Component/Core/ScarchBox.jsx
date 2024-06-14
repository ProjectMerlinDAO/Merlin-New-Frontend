import Image from 'next/image'
import React from 'react'

const ScarchBox = ({search,setSearch}) => {
  return (
    <div className="flex items-center justify-between w-[full] h-[50px] rounded-[15px] border-[1px] border-[#ffffff26] overflow-hidden pr-[18px]">
        <input type="text" placeholder='Search by title' className='no-outline border-0 bg-transparent h-full w-[95%] relative z-0 px-[18px] py-[5px]' value={search} onChange={(e) => setSearch(e.target.value)}/>
        <button><Image src="/assets/images/icons/search.svg" alt="icon" height="16" width="16"/></button>
    </div>
  )
}

export default ScarchBox