import React from 'react';

const StampsDropdown = () => {
    return (
        <div className="w-full relative z-0 dropdown rounded-[15px] border border-[#ffffff26] bg-[#ffffffc] h-[50px] flex items-center justify-start">
            <div tabIndex={0} role="button" className="relative z-10 w-full px-[15px]">Stamps</div>
            <ul className="dropdown-content z-[999] menu p-2 shadow bg-[#000000] rounded-box w-full absolute top-[50px] left-0">
                <li className='hover:bg-[#FFFFFF20] rounded-[4px] px-0'><a href="#" className='px-[5px]' >Green Stamp</a></li>
                <li className='hover:bg-[#FFFFFF20] rounded-[4px] px-0'><a href="#" className='px-[5px]' >Yellow Stamp</a></li>
                <li className='hover:bg-[#FFFFFF20] rounded-[4px] px-0'><a href="#" className='px-[5px]' >Blue Stamp</a></li>
                <li className='hover:bg-[#FFFFFF20] rounded-[4px] px-0'><a href="#" className='px-[5px]' >Red Stamp</a></li>
            </ul>
        </div>
    );
}

export default StampsDropdown;
