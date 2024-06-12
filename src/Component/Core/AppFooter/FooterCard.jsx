import React from "react";
import Image from "next/image";
import Link from "next/link";

const FooterCard = () => {
  // Define arrays for footer links and social media icons
  const firstColumnLinks = [
    { text: "Home", href: "/launch-app#" },
    { text: "Proposals", href: "/camelot-proposals#" },
    { text: "The Crystal Cave", href: "/crystal-cave#" },
    { text: "Raven Message", href: "/create-raven-message#" },
    { text: "Treasury", href: "treasury#" },
  ];

  const secondColumnLinks = [
    { text: "Latest Articles", href: "#" },
    { text: "Docs", href: "https://docs.projectmerlin.io/projectmerlin" },
    { text: "Tokenomic", href: "/#Tokeneconomics" },
  ];

  const socialIcons = [
    {
      src: "./assets/images/icons/x.svg",
      alt: "Twitter",
      href: "https://x.com/ProjectMerlinio",
      height: "22",
      width: "22",
    },
    {
      src: "/assets/images/icons/fb.svg",
      alt: "Facebook",
      href: "#",
      height: "22",
      width: "22",
    },
    {
      src: "/assets/images/icons/telegram.svg",
      alt: "Telegram",
      href: "https://t.me/ProjectMerlin",
      height: "22",
      width: "22",
    },
    {
      src: "/assets/images/icons/mediam.svg",
      alt: "Medium",
      href: "https://projectmerlin.medium.com/",
      height: "30",
      width: "30",
    },
  ];

  return (
    <div className="mt-[120px] xl:mt-[90px] lg:mt-[70px] sm:mt-[60px] overflow-hidden rounded-[40px] bg-gradient-to-r from-[#FFFFFF10] via-[transparent] to-[transparent] ">
      <div className="p-[70px] lg:p-[40px] overflow-hidden rounded-[40px] bg-gradient-to-l from-[#FFFFFF04] to-[#060cbf05] backdrop-blur-[5px]">
        <div className="flex flex-wrap">
          <div className="w-2/3 lg:w-full">
            <Link href="/">
              <Image
                src="/assets/images/logo/logo.svg"
                alt="logo"
                width="145"
                height="500"
                className="lg:mx-auto"
              />
            </Link>
            <div className="flex items-start mt-[55px] lg:mt-[30px] justify-start text-[#ffffffd2] font-[400] lg:flex-wrap lg:max-w-[300px] lg:mx-auto">
              <div className="w-2/5 lg:w-full lg:mb-[20px] lg:text-center">
                <p className="max-w-[246px] lg:mx-auto leading-[24px]">
                  Copyright © <a href="#">ProjectMerlin</a>, 2024 All rights
                  reserved.
                </p>
              </div>
              <div className="w-[30%] lg:w-1/2">
                <ul>
                  {firstColumnLinks.map((link, index) => (
                    <li key={index} className="hover:text-white mb-[10px]">
                      <a href={link.href}>{link.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-[30%] lg:w-1/2 lg:pl-[30px]">
                <ul>
                  {secondColumnLinks.map((link, index) => (
                    <li key={index} className={link.text === "Latest Articles" ? "pointer-events-none text-gray-500" : "hover:text-white mb-[10px]"}>
                      <a href={link.href}>{link.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="w-1/3 lg:w-full lg:text-center">
            <h2 className="mb-[50px] lg:mb-[20px] mt-[20px] uppercase quantico text-[26px] sm:text-[22px] font-[700] text-white">
              Official Community
            </h2>
            <ul className="flex items-start justify-start md:justify-center mb-[40px] lg:mb-[20px] max-w-[370px] lg:mx-auto flex-wrap gap-[20px] sm:gap-[10px]">
              {socialIcons.map((icon, index) => (
                <li key={index} className="social-icon-btn">
                  <a
                    href={icon.href}
                    target="_blank"
                    className="flex btn-has-shape items-center justify-center rounded-[16px] sm:rounded-[10px] bg-[#FFFFFF05] backdrop-blur-[5px] h-[70px] w-[70px] sm:h-[50px] sm:w-[50px]"
                  >
                    <span className="btn-icons">
                      <span className="btn-icon my-[0px]">
                        <Image
                          src={icon.src}
                          alt={icon.alt}
                          width={icon.width}
                          height={icon.height}
                        />
                      </span>
                      <span className="btn-icon my-[0px]">
                        <Image
                          src={icon.src}
                          alt={icon.alt}
                          width={icon.width}
                          height={icon.height}
                        />
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="https://discord.gg/projectmerlin"
              target="_blank"
              className="hov-btn btn-has-shape gap-[10px] bg-[#5865F2] rounded-full h-[60px] w-[220px] lg:mx-auto flex items-center justify-center text-white text-center leading-trim-both text-edge-cap font-[600] text-[16px] uppercase quantico"
            >
              <Image
                src="/assets/images/icons/discord.svg"
                alt="icon"
                className="mt-[0px]"
                width="25"
                height="500"
              />
              <span className="btn-hov-text">
                <span className="btn-text">JOIN DISCORD</span>
                <span className="btn-text">JOIN DISCORD</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterCard;
