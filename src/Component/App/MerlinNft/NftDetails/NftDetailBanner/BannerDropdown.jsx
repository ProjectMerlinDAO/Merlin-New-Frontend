import React from 'react'

const BannerDropdown = ({ btnTitle }) => {
    return (
        <div className="relative dropdown no-arrow rounded-[15px] min-w-[50px] flex items-center justify-start">
            <div tabIndex={0} className="flex items-center justify-center rounded-[12px] overflow-hidden backdrop-blur-[2.5px] bg-[rgba(255,255,255,0.10)] h-[50px] min-w-[50px] px-[13px]">
                <img src="./assets/images/icons/3dot.svg" alt="icon" />
            </div>
            <ul tabIndex={0} className="dropdown-content z-[999] menu p-[10px] bg-[rgba(46,53,57,0.85)] backdrop-blur-[3px] rounded-box w-[224px] absolute top-[60px] right-0">
                <li className='hover:bg-[rgba(255,255,255,0.08)] rounded-[4px] px-0'><a href="#" className='px-[10px] flex items-ceter justify-start gap-[15px] text-[16px] loading-[125%] text-white font-[600]'><img src="./assets/images/icons/refress.svg" alt="icon" />Refresh Metadata</a></li>
                <li className='hover:bg-[rgba(255,255,255,0.08)] rounded-[4px] px-0'><a href="#" className='px-[10px] flex items-ceter justify-start gap-[15px] text-[16px] loading-[125%] text-white font-[600]'><img src="./assets/images/icons/report.svg" alt="icon" />Report</a></li>
            </ul>
        </div>
    )
}

export default BannerDropdown