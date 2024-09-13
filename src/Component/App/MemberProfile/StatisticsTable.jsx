import React from 'react';

const StatisticsTable = () => {
  const statistics = [
    { label: 'Has become a Senator', value: '0' },
    { label: 'Has become an Editor', value: '0' },
    { label: 'Community Assessment', value: '0/0' },
    { label: 'Created Pre-proposals', value: '0/0' },
    { label: 'Senator Assessment', value: '0/0' },
    { label: 'Vote', value: '0/0' },
    { label: 'Raven Message', value: '5/0' },
  ];

  return (
    <div className="statistics-table max-w-[662px] w-full">
      <h3 className="uppercase text-[22px] text-white font-[700] quantico leading-[163.636%] mt-[30px] mb-[20px]">Statistics</h3>
      <ul className="ml-[-58px] 2xl:ml-[-20px]">
        {statistics.map((stat, index) => (
          <li key={index} className="relative py-[8px] sm:py-[4px] pl-[58px] 2xl:pl-[20px] flex items-center justify-start gap-[10px]">
            <span className="flex w-[50%] md:w-[70%]">{stat.label}</span>
            <span className="w-[50%] md:w-[30%] flex text-white">{stat.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StatisticsTable;
