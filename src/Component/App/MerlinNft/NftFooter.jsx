import React from 'react';
import NftContainerWrapper from './NftContainerWrapper';
import Link from 'next/link';
import NftFooterBottom from './NftFooterBottom';

const socialIcons = [
  {
    href: "https://t.me/ProjectMerlin",
    imgSrc: "./assets/images/icons/telegram.svg",
    imgAlt: "Telegram icon",
    iconHeight: "28px"
  },
  {
    href: "https://www.linkedin.com/company/projectmerlinio/",
    imgSrc: "./assets/images/icons/in.svg",
    imgAlt: "LinkedIn icon",
    iconHeight: "34px"
  },
  {
    href: "https://discord.com/invite/projectmerlin",
    imgSrc: "./assets/images/icons/discord2.svg",
    imgAlt: "Discord icon",
    iconHeight: "28px"
  },
  {
    href: "https://x.com/ProjectMerlinio",
    imgSrc: "./assets/images/icons/x.svg",
    imgAlt: "X icon",
    iconHeight: "34px",
    iconClass: "w-[20px]"
  }
];

const sections = [
  {
    title: "Categories",
    links: [
      { href: "#", label: "Art" },
      { href: "#", label: "Memberships" },
      { href: "#", label: "Gaming" },
      { href: "#", label: "Photography" }
    ]
  },
  {
    title: "Resources",
    links: [
      { href: "#", label: "Blog" },
      { href: "#", label: "Learn" },
      { href: "#", label: "Help center" },
      { href: "#", label: "Community" }
    ]
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About Us" },
      { href: "//launch-app", label: "Project Merlin" },
      { href: "/crystal-cave", label: "Raven Messages" },
      { href: "/treasury", label: "Treasury" },
      { href: "#", label: "Contact Us" }
    ]
  }
];

const NftFooter = () => {
  return (
    <div className='nft-footer' style={{ background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)', borderRadius: '50px 50px 0px 0px' }}>
      <NftContainerWrapper>
        <div className="flex items-start justify-between mx-[-15px] md:flex-wrap">
          <div className="w-1/4 2xl:w-[30%] md:w-full px-[15px] xsm:p-0 nft-footer-column-section">
            <div className="footer-left pt-[80px] xl:pt-[60px] xsm:pt-[40px] h-[420px] md:h-[auto] md:mb-[40px] md:text-center">
              <Link className="md:items-start md:justify-start logo nft-logo md:flex md:justify-center" href="#">
                <img src="./assets/images/logo/nft-logo.svg" alt="logo" />
              </Link>
              <p className="mt-[20px] mb-[40px] xl:mt-[10px] xl:mb-[20px]">Copyright © ProjectMerlin, 2024 All rights reserved.</p>
              <ul className='flex items-start justify-start gap-[20px] xl:flex-wrap md:justify-center'>
                {socialIcons.map((icon, index) => (
                  <li className="social-icon-btn" key={index}>
                    <Link
                      href={icon.href}
                      target='_blank'
                      className="flex btn-has-shape light-shape items-center justify-center rounded-[16px] xsm:rounded-[10px] bg-[rgba(255,255,255,0.1)] backdrop-blur-[5px] h-[70px] w-[70px]"
                    >
                      <span className="btn-icons" style={{ height: icon.iconHeight }}>
                        <span className="btn-icon my-[0px]">
                          <img
                            src={icon.imgSrc}
                            alt={icon.imgAlt}
                            className={icon.iconClass || ""}
                          />
                        </span>
                        <span className="btn-icon my-[0px]">
                          <img
                            src={icon.imgSrc}
                            alt={icon.imgAlt}
                            className={icon.iconClass || ""}
                          />
                        </span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {sections.map((section, index) => (
            <div className="w-1/4 2xl:w-[23.33%] md:w-[33.33%] xsm:w-full px-[15px] nft-footer-column-section" key={index}>
              <div className="pt-[80px] xl:pt-[60px] pr-[38px] xl:pr-[20px] xsm:pr-0 pl-[70px] xl:pl-[30px] nft-footer-column relative h-[420px] md:h-[320px] xsm:h-[auto] xsm:pl-0 xsm:text-center md:pt-[30px] xsm:pt-[15px] xsm:pb-[20px]">
                <h3 className='text-[18px] lg:text-[16px] font-[700] text-[#FFFFFF] leading-[166.667%] uppercase mb-[35px] lg:mb-[25px] xsm:mb-[10px]'>{section.title}</h3>
                <ul>
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex} className='mb-[5px] sm:mb-[2px]'>
                      <Link href={link.href} className={section.title === "Categories" || section.title === "Resources" || link.label === "Contact Us" ?' pointer-events-none text-gray-500': 'font-[400] text-[16px] lg:text-[14px] leading-[250%] text-[rgba(255,255,255,0.80)] hover:text-white delay-[0.3s] outfit'}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

        </div>
      </NftContainerWrapper>
      <NftFooterBottom />
    </div>
  );
}

export default NftFooter;
