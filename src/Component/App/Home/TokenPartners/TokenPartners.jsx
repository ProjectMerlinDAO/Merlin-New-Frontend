import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';

const partnerData = [
  { id: 1, logoSrc: '/assets/images/brands/logo1.svg' },
  { id: 2, logoSrc: '/assets/images/brands/logo2.svg' },
  { id: 3, logoSrc: '/assets/images/brands/logo3.svg' },
  { id: 4, logoSrc: '/assets/images/brands/logo4.svg' },
  { id: 5, logoSrc: '/assets/images/brands/logo5.svg' },
  { id: 6, logoSrc: '/assets/images/brands/logo6.svg' },
  { id: 7, logoSrc: '/assets/images/brands/logo7.svg' },
  { id: 8, logoSrc: '/assets/images/brands/logo9.svg' },
  { id: 9, logoSrc: '/assets/images/brands/logo11.svg' },
  { id: 10, logoSrc: '/assets/images/brands/logo12.svg' },
];

const TokenPartners = () => {
  useEffect(() => {
    const handleMouseEnter = (event) => {
      const item = event.currentTarget;
      const roundItem = item.querySelector(".round");

      item.classList.add("animate");

      const rect = item.getBoundingClientRect();
      const buttonX = event.clientX - rect.left;
      const buttonY = event.clientY - rect.top;

      roundItem.style.top = buttonY < 105 ? '0px' : '210px';
      roundItem.style.left = `${buttonX}px`;
      roundItem.style.width = '1px';
      roundItem.style.height = '1px';
    };

    const handleMouseLeave = (event) => {
      const item = event.currentTarget;
      const roundItem = item.querySelector(".round");

      item.classList.remove("animate");

      const rect = item.getBoundingClientRect();
      const buttonX = event.clientX - rect.left;
      const buttonY = event.clientY - rect.top;

      roundItem.style.top = buttonY < 105 ? '0px' : '210px';
      roundItem.style.left = `${buttonX}px`;
    };

    const partnersLogo = document.querySelectorAll(".partners-logo");

    partnersLogo.forEach((item) => {
      item.addEventListener("mouseenter", handleMouseEnter);
      item.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      partnersLogo.forEach((item) => {
        item.removeEventListener("mouseenter", handleMouseEnter);
        item.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <div
      className="relative bg-no-repeat bg-cover token-partners-section bg-center-top"
      style={{ backgroundImage: 'url(/assets/images/bg/grain-texture.png)' }}
    >
      <div className="px-[20px] md:px-[14px] max-w-[1210px] mx-auto lg:max-w-[720px] relative z-20">
        <div className="text-center max-w-[768px] mx-auto">
          <h2 className="text-white quantico uppercase leading-[130%] text-[60px] lg:text-[48px] md:text-[40px] sm:text-[32px] font-[700] mt-[30px] lg:mt-[20px] md:mt-[10px]">
            Meet the Partners and collaborators
          </h2>
        </div>

        <div className="green-shape">
          <Image
            src='/assets/images/shape/green-shadow.png'
            alt="img"
            width={500}
            height={500}
          />
        </div>
        <div className="relative partners-list mt-[50px]">
          <ul>
            {partnerData.map((partner) => (
              <li key={partner.id}>
                <div className="partners-logo">
                  <Image className='blur' src={partner.logoSrc} alt="logo" width={100} height={100} />
                  <div className="partners-btn-outline">
                    <img
                      src='/assets/images/shape/round-circle.png'
                      alt="img"
                      className="w-full h-full "
                    />
                  </div>
                  <span className="round" />
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Link href="https://wkf.ms/3RqpEi5" target='_blank' className='hov-btn btn-has-shape gap-[7px] bg-[rgba(255,255,255,0.10)] rounded-full bg-opacity-10 backdrop-blur-[5px] h-[60px] w-[270px] mx-auto flex items-center justify-center text-white text-center  font-[600] text-[16px] uppercase quantico mt-[20px]' >
            <span className="btn-hov-text">
              <span className="btn-text">Become an Investor</span>
              <span className="btn-text">Become an Investor</span>
            </span>
            <Image src="/assets/images/icons/arrow-right-white.svg" alt="icon" width={16} height={14} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TokenPartners;
