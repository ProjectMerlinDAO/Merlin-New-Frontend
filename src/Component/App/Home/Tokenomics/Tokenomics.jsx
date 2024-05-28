import React, { useEffect, useRef } from 'react';
import HomeSectionTitle from '../HomeSectionTitle';
import Image from 'next/image';

const Tokenomics = () => {
  const cloud3Ref = useRef(null);
  const cloud2Ref = useRef(null);
  const globeRef = useRef(null);

  const handleScroll = () => {
    const y = window.scrollY;

    if (cloud3Ref.current && cloud2Ref.current && globeRef.current) {
      // Adjustments for cloud3
      const xCloud3 = cloud3Ref.current.getBoundingClientRect().top;
      let animationValueCloud3 = (y - xCloud3) / 15;
      animationValueCloud3 = -animationValueCloud3; // Reverse the direction

      // Adjustments for cloud2
      const xCloud2 = cloud2Ref.current.getBoundingClientRect().top;
      let animationValueCloud2 = (y - xCloud2) / 15;

      // Adjustments for globe
      const xGlobe = globeRef.current.getBoundingClientRect().top;
      let animationValueGlobe = (y - xGlobe) / 9;

      cloud3Ref.current.style.transform = `translateX(${animationValueCloud3}px)`;
      cloud2Ref.current.style.transform = `translateX(${animationValueCloud2}px)`;
      globeRef.current.style.transform = `rotate(${animationValueGlobe}deg)`;
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="tokenomics-section" id="tokeneconomics">
      <div className="px-[20px] md:px-[10px] max-w-[1210px] mx-auto lg:max-w-[720px]">
        <div className='max-w-[669px] mx-auto'>
          <HomeSectionTitle
            title="Community-focused Tokenomics"
            subtitle="TOKENOMICS"
            alignment="text-center"
          />
        </div>
        <p className='md:text-[14px] md:leading-[200%]'>
          The allocation of Merlin Tokens by Project Merlin is designed to ensure fair distribution and
          encourage active participation within the community. With a fixed maximum supply and a tendency to
          decrease, it adopts a deflationary structure secured through buyback and burn strategies. Maximum
          52.30% of the total supply can be in circulation and this will decrease day by day, aiming for
          appreciation in value with each passing day.
        </p>
        <div className="mb-[80px]">
          <a href="/assets/pdf/Project Merlin Whitepaper.pdf" target="_blank" className='hov-btn btn-has-shape gap-[7px] bg-[#12CFA7] rounded-full backdrop-blur-[5px] h-[60px] w-[220px] mx-auto flex items-center justify-center text-white text-center leading-trim-both text-edge-cap font-[600] text-[16px] uppercase quantico mt-[20px]' >
            <span className="btn-hov-text">
              <span className="btn-text" >Whitepaper</span>
              <span className="btn-text" >Whitepaper</span>
            </span>
            <Image src="/assets/images/icons/arrow-right-white.svg" alt="icon" className='mt-0' width="16" height="14" />
          </a>
        </div>
        <div className="tokenomics-text">
          <ul>
            <li>
              MRLN <br />
              Ticker
            </li>
            <li>
              MULTICHAIN<br />
              TOKEN TYPE
            </li>
            <li>
              Liquidity pools<br />
              management
            </li>
            <li>
              Instant token
              <br />
              swaps
            </li>
          </ul>
        </div>
        <div className="tokenomics-content">
          {/* <img src="../assets/images/logo/fevicon.svg" alt="img" className="logo-icon" /> */}
          <div className="eco-line">
            <img src="../assets/images/shape/eco-lines.svg" alt="img" className="eco-line-pc" />
            <img src="../assets/images/shape/eco_line.png" alt="img" className="eco-line-mobile" />
          </div>
          <div className="globe-img">
            <img src="../assets/images/shape/globe.png" alt="img" className="globe" ref={globeRef} />
            <img src="../assets/images/shape/cloud1.svg" alt="img" className="cloud1" />
            <img src="../assets/images/shape/cloud2.svg" alt="img" className="cloud2" ref={cloud2Ref} />
            <img src="../assets/images/shape/cloud3.svg" alt="img" className="cloud3" ref={cloud3Ref} />
            <img src="../assets/images/shape/cloud4.svg" alt="img" className="cloud4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
