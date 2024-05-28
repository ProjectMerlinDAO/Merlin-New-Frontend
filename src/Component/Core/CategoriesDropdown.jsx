import React from 'react'

const CategoriesDropdown = () => {
    return (
        <div className="w-full relative dropdown rounded-[15px] border border-[#ffffff26] bg-[#ffffffc] h-[50px] flex items-center justify-start">
            <div tabIndex={0} role="button" className="relative z-10 w-full px-[15px]">Categories</div>
            <ul tabIndex={0} className="dropdown-content z-[999] menu p-2 shadow bg-[#000000] rounded-box w-full absolute top-[50px] left-0">
                <li className='hover:bg-[#FFFFFF20] rounded-[4px] px-0'><a href="#" className='px-[5px]' >Personal Goals</a></li>
                <li className='hover:bg-[#FFFFFF20] rounded-[4px] px-0'><a href="#" className='px-[5px]' >Sports and Arts</a></li>
                <li className='hover:bg-[#FFFFFF20] rounded-[4px] px-0'><a href="#" className='px-[5px]' >Social Responsibilities</a></li>
            </ul>
        </div>
    )
}

export default CategoriesDropdown
