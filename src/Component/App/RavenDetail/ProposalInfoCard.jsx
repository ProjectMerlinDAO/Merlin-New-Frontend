import { FormatDate } from '@/utils/Formatdate';
import React from 'react';

const ProposalInfoCard = ({detail}) => {
    const proposalInfo = [
        { label: 'User', value: `Member ${detail?.code}` },
        { label: 'Category', value: 'Sports and Arts' },
        { label: 'Message Date', value: FormatDate(detail?.endDate)},
        { label: 'Total Raven Message', value: '1' },
        { label: 'User Type', value: detail?.UserType },
        { label: 'Message Status', value: 'Active' }
    ];

    return (
        <div className='rounded-[20px] backdrop-blur-[5px] p-[40px] 2xl:p-[20px] relative personal-info-card mb-[30px]' style={{ background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.00) 100%)' }}>
            <h3 className='text-white text-[18px] lexend mb-[5px] uppercase' >Proposal Info </h3>

            <ul className="fundrising-list 2xl:text-[15px]">
                {proposalInfo.map((item, index) => (
                    <li key={index} className='relative flex items-center justify-between py-[15px] xsm:py-[8px] text-white'>
                        <span className="#ffffffd5">{item.label}</span>
                        <span>{item.value}</span>
                    </li>
                ))}
            </ul>
            <button type='submit' className="hov-btn no-border btn-has-shape bg-[#12cfa719] h-[60px] text-[#12CFA7] quantico font-[700] w-full rounded-[18px] uppercase mt-[30px]">
                <span className="btn-hov-text !h-[27px]">
                    <span className="btn-text">Claim</span>
                    <span className="btn-text">Claim</span>
                </span>
            </button>
        </div>
    );
};

export default ProposalInfoCard;
