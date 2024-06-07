import React from 'react';
import Pagination from '../../Core/Pagination';
import EligibleTimer from './EligibleTimer';

const RewardsTable = ({ data }) => {

    return (
        <div className="lg:overflow-x-scroll">
            <div className='mt-[25px] xl:mt-[10px] lg:min-w-[950px]'>
            <ul className="flex items-center justify-between text-[16px] 2xl:text-[13px] font-[300] uppercae lexend leading-[150%] py-[15px]">
                <li className='w-[12%] px-[15px] py-[15px]'>Proposal</li>
                <li className='w-[20%] px-[15px] py-[15px]'>Eligible Until</li>
                <li className='w-[12%] px-[15px] py-[15px]'>Winner</li>
                <li className='w-[12%] px-[15px] py-[15px]'>Senator</li>
                <li className='w-[12%] px-[15px] py-[15px]'>Editor</li>
                <li className='w-[12%] px-[15px] py-[15px]'>Member</li>
                <li className='w-[12%] px-[15px] py-[15px]'>donor</li>
                <li className='w-[8%] px-[15px] py-[15px] text-right'>Bonus</li>
            </ul>
            {data.map((row, index) => (
                <ul key={index} className="flex items-center justify-between text-white text-[16px] 2xl:text-[13px] font-[300] lexend leading-[150%] rounded-[10px] backdrop-blur-[5px] mb-[10px]" style={{ background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 50%, rgba(255, 255, 255, 0.05) 100%)' }}>
                    <li className="w-[12%] px-[15px] py-[15px] uppercase">{row.proposal}</li>
                    <li className="w-[20%] px-[15px] py-[15px]"><EligibleTimer/></li>
                    <li className="w-[12%] px-[15px] py-[15px] uppercase">{row.winner}</li>
                    <li className="w-[12%] px-[15px] py-[15px] uppercase">{row.senator}</li>
                    <li className="w-[12%] px-[15px] py-[15px] uppercase">{row.editor}</li>
                    <li className="w-[12%] px-[15px] py-[15px] uppercase">{row.member}</li>
                    <li className="w-[12%] px-[15px] py-[15px] uppercase">{row.donor}</li>
                    <li className="w-[8%] px-[15px] py-[15px] uppercase text-right">{row.bonus}</li>
                </ul>
            ))}

        </div>
        <div className="pt-[20px]">
                <Pagination/>
            </div>
        </div>
    );
};

export default RewardsTable;
