import React, { useState, useEffect } from 'react';
import Marquee from 'react-marquee-slider';
import times from 'lodash/times'; // to easily create a large number of repeated tags

const tagsData = [
    { label: 'Metaverse', tagBg: '#AEE3FD' },
    { label: 'DeFi', tagBg: '#ADFFEB' },
    { label: 'Wallet', tagBg: '#FFF8E7' },
    { label: 'Blockchain', tagBg: '#ADE5FF' },
    { label: 'Apps', tagBg: '#FF7BCA' },
    { label: 'tokenomics', tagBg: '#F2DD09' },
    { label: 'NFTs', tagBg: '#FFF8E7' },
    { label: 'dApp', tagBg: '#12CFA7' },
    { label: 'Digital', tagBg: '#FFF8E7' },
    { label: 'Currency', tagBg: '#ADFFEB' },
];

const TokenTag = () => {
  const [repeatTimes, setRepeatTimes] = useState(3);
  const [isLoaded, setIsLoaded] = useState(false);

  const updateRepeatTimes = () => {
    if (window.innerWidth > 768) {
      setRepeatTimes(3);
    } else if (window.innerWidth > 675) {
      setRepeatTimes(2);
    } else {
      setRepeatTimes(1);
    }
  };

  useEffect(() => {
    updateRepeatTimes();
    window.addEventListener('resize', updateRepeatTimes);

    // Ensure isLoaded is set after initial render
    setTimeout(() => setIsLoaded(true), 0);

    return () => {
      window.removeEventListener('resize', updateRepeatTimes);
    };
  }, []);

  return (
    <div className='py-[140px] xl:py-[110px] lg:py-[80px] md:py-[60px] sm:py-[40px]'>
      <div className={`crypto-token-tag-inner flex items-start justify-start gap-[30px] transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <Marquee velocity={25} resetAfterTries={100} scatterRandomly={false}>
          {times(repeatTimes, Number).map(index => (
            tagsData.map((tag, tagIndex) => (
              <a
                key={`${index}-${tagIndex}`}
                href="#"
                className="text-[24px] xl:text-[22px] lg:text-[20px] md:text-[18px] uppercase font-[700] leading-[340%] py-[10px] px-[28px] quantico text-[#000000] rounded-full mr-[30px]"
                style={{ background: `${tag.tagBg}` }}
              >
                {tag.label}
              </a>
            ))
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default TokenTag;
