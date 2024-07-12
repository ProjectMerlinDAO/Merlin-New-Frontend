import React from 'react'

const statistics = [
    { label: 'Incomplete Tasks:', value: '0' },
    { label: 'Completed Tasks:', value: '0' },
    { label: 'Total Earned Karma Points:', value: '0' },
    { label: 'Total Earned Merlin Tokens:', value: '0' },
    { label: 'Earned NFTs:', value: '0' },
    { label: 'Total Referred People:', value: '0' },
    { label: 'Total People Registered via Referral:', value: '0' },
    { label: 'Karma Points Earned from Referrals:', value: '0' },
  ];

const AirdropStatisticsTable = () => {
  return (
    <div className='airdrop-statistics-table rounded-[18px]' style={{background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.01) 100%)'}}>
        <h3 className='text-[22px] uppercase text-white leading-[165%] font-[700] quantico pt-[40px] px-[30px] pb-[10px]'>Statistics</h3>
        <ul className="airdrop-statistics-table-list pb-[10px]">
        {statistics.map((stat, index) => (
          <li key={index} className="relative py-[10px] sm:py-[4px] px-[30px] flex items-center justify-between gap-[10px]">
            <span>{stat.label}</span>
            <span className="text-white">{stat.value}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AirdropStatisticsTable