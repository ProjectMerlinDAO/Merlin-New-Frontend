import React, { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import Isotope with no SSR
const Isotope = dynamic(() => import('isotope-layout').then(mod => mod.default), { ssr: false });

const TrandingContent = () => {
    const [selectedPeriod, setSelectedPeriod] = useState('all');
    const timePeriods = ['1d', '7d', '1m', '3m', '1y', 'all'];
    const users = [
        { id: 1, name: 'Katie R. Pines', mrln: '6.42', avatar: './assets/images/nft/avater/avater5.png' },
        { id: 2, name: 'Rolek Nion', mrln: '5.99', avatar: './assets/images/nft/avater/avater6.png' },
        { id: 3, name: 'Robert Murray', mrln: '5.66', avatar: './assets/images/nft/avater/avater7.png' },
        { id: 4, name: 'Miranda', mrln: '3.80', avatar: './assets/images/nft/avater/avater10.png' },
        { id: 5, name: 'Nia Lane', mrln: '12.52', avatar: './assets/images/nft/avater/avater1.png' },
        { id: 6, name: 'Daniel Gow', mrln: '8.93', avatar: './assets/images/nft/avater/avater4.png' },
        { id: 7, name: 'Ryan Lefevre', mrln: '9.85', avatar: './assets/images/nft/avater/avater3.png' },
        { id: 8, name: 'Hutcherson', mrln: '4.70', avatar: './assets/images/nft/avater/avater8.png' },
        { id: 9, name: 'John Rones', mrln: '4.00', avatar: './assets/images/nft/avater/avater9.png' },
        { id: 10, name: 'Lisa Harris', mrln: '10.28', avatar: './assets/images/nft/avater/avater2.png' },        
    ];

    const isotopeContainer = useRef(null);
    const [isIsotopeReady, setIsIsotopeReady] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            // Client-side only code
            let isotopeInstance;
            const initializeIsotope = async () => {
                const Isotope = (await import('isotope-layout')).default;
                isotopeInstance = new Isotope(isotopeContainer.current, {
                    itemSelector: '.isotope-item',
                    layoutMode: 'fitRows',
                });
                setIsIsotopeReady(true);
            };
            initializeIsotope();

            return () => {
                if (isotopeInstance) {
                    isotopeInstance.destroy();
                }
            };
        }
    }, []);

    const filteredUsers = () => {
        switch (selectedPeriod) {
            case '1d':
                return users.slice(0, 10);
            case '7d':
                return users.slice(0, 10);
            case '1m':
                return users.slice(0, 10);
            case '3m':
                return users.slice(0, 10);
            case '1y':
                return users.slice(0, 10);
            default:
                return users;
        }
    };

    return (
        <div className='relative pt-[40px]'>
            <ul className='isotop absolute w-[260px] top-[-40px] right-0 p-[5px] bg-[rgba(255,255,255,0.10)] rounded-[25px] border border-[rgba(0,0,0,0.08)] flex items-center justify-between'>
                {timePeriods.map((period, index) => (
                    <li key={index}>
                        <span
                        className={`flex items-center justify-center p-[5px] w-[40px] cursor-pointer h-[40px] text-[#FFFFFF] uppercase rounded-full 
                            ${period === "3m" || period === "1y" ? "pointer-events-none text-gray-500" : ""} 
                            ${selectedPeriod === period ? 'bg-[rgba(12,228,102,0.15)] text-[#0CE466]' : ''} 
                            hover:bg-[rgba(12,228,102,0.15)] hover:text-[#0CE466]`}
                            // className={ period === "3m" || period === "1y" ? "pointer-events-none text-gray-500':`flex items-center justify-center p-[5px] w-[40px] cursor-pointer h-[40px] text-[#FFFFFF] uppercase rounded-full hover:bg-[rgba(12,228,102,0.15)] hover:text-[#0CE466] ${selectedPeriod === period ? 'bg-[rgba(12,228,102,0.15)] text-[#0CE466]' : ''}`}
                            onClick={() => setSelectedPeriod(period)}
                        >
                            {period}
                        </span>
                    </li>
                ))}
            </ul>
            <div ref={isotopeContainer} className="flex items-start justify-start flex-wrap mx-[-14px] nft-isotop-content">
                {isIsotopeReady && filteredUsers().map((user, index) => (
                    <div key={user.id} className="isotope-item px-[14px] w-[20%] 2xl:w-1/4 xl:w-[33.33%] lg:w-1/2 xsm:w-full mb-[30px]">
                        <div className="rounded-[15px] flex items-center cursor-pointer gap-[12px] justify-start overflow-hidden px-[15px] py-[13px] relative isotope-card" style={{background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.03) 100%)'}}>
                            <div className="flex items-center justify-start gap-[8px]">
                                <span className='text-[14px] text-[rgba(255,255,255,0.80)] leading-[157.143%] font-[700]'>#{index + 1}</span>
                                <div className="overflow-hidden h-[54px] w-[54px] object-cover rounded-full relative">
                                    <img src={user.avatar} alt="img" className='object-cover w-full h-full' />
                                </div>
                            </div>
                            <div className="text">
                                <h6 className='text-[14px] text-[rgba(255,255,255,0.80)] leading-[157.143%] font-[700] flex items-center justify-start gap-[5px]'>{user.name} <span><img src="./assets/images/icons/verifi.svg" alt="icon" className="h-[13px] w-[13px]" /></span></h6>
                                <p className='text-[12px] text-[rgba(255,255,255,0.80)] leading-[180%] font-[400]'>{user.mrln} MRLN</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TrandingContent;
