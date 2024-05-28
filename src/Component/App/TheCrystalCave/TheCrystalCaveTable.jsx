import React from 'react'
import ScarchBox from '../../Core/ScarchBox'
import Dropdown from '../../Core/Dropdown'
import Image from 'next/image';
import CategoriesDropdown from '../../Core/CategoriesDropdown';
import Pagination2 from '../../Core/Pagination2';

const crystalData = [
    {
      imgSrc: "/assets/images/img/cave1.png",
      title: "I want sport equipments for ...",
      code: "Code: #A00049",
      icons: [
        { src: "/assets/images/img/personal.png", tooltip: "Personal Goals" },
        { src: "/assets/images/img/sports.png", tooltip: "Sports and Arts" },
      ],
      userType: "Member",
      goal: "250,000 MRLN (25.5%)",
      like: "459",
      dislike: "36",
    },
    {
      imgSrc: "/assets/images/img/cave2.png",
      title: "I need Fund for a AI software",
      code: "Code: #A00048",
      icons: [
        { src: "/assets/images/img/innovation.png", tooltip: "Innovation" }
      ],
      userType: "Commoner",
      goal: "250,000 MRLN (25.5%)",
      like: "1,249",
      dislike: "248",
    },
    {
      imgSrc: "/assets/images/img/cave3.png",
      title: "We want to build VR",
      code: "Code: #A00047",
      icons: [
        { src: "/assets/images/img/innovation.png", tooltip: "Innovation" },
        { src: "/assets/images/img/social.png", tooltip: "Social Responsibilities" }
      ],
      userType: "Commoner",
      goal: "250,000 MRLN (25.5%)",
      like: "2,566",
      dislike: "121",
    },
    {
      imgSrc: "/assets/images/img/cave4.png",
      title: "Need funding for my next match",
      code: "Code: #A00048",
      icons: [
        { src: "/assets/images/img/sports.png", tooltip: "Sports and Arts" }
      ],
      userType: "Member",
      goal: "250,000 MRLN (25.5%)",
      like: "236",
      dislike: "5",
    },
    {
      imgSrc: "/assets/images/img/cave5.png",
      title: "I want plant 10 million tree",
      code: "Code: #A00045",
      icons: [
        { src: "/assets/images/img/social.png", tooltip: "Social Responsibilities" }
      ],
      userType: "Member",
      goal: "250,000 MRLN (25.5%)",
      like: "459",
      dislike: "36",
    },
    {
      imgSrc: "/assets/images/img/cave6.png",
      title: "I need sports shoes",
      code: "Code: #A00044",
      icons: [
        { src: "/assets/images/img/sports.png", tooltip: "Sports and Arts" }
      ],
      userType: "Commoner",
      goal: "250,000 MRLN (25.5%)",
      like: "130",
      dislike: "85",
    },
    {
      imgSrc: "/assets/images/img/cave7.png",
      title: "Want to visit Maldives",
      code: "Code: #A00043",
      icons: [
        { src: "/assets/images/img/personal.png", tooltip: "Personal Goals" }
      ],
      userType: "Member",
      goal: "250,000 MRLN (25.5%)",
      like: "1,006",
      dislike: "488",
    },
    {
      imgSrc: "/assets/images/img/cave8.png",
      title: "Seeking funds for a Business",
      code: "Code: #A00042 ",
      icons: [
        { src: "/assets/images/img/innovation.png", tooltip: "Innovation" },
        { src: "/assets/images/img/personal.png", tooltip: "Personal Goals" }
      ],
      userType: "Member",
      goal: "250,000 MRLN (25.5%)",
      like: "289",
      dislike: "100",
    },
    {
      imgSrc: "/assets/images/img/cave9.png",
      title: "Wants to build old age home",
      code: "Code: #A00041",
      icons: [
        { src: "/assets/images/img/social.png", tooltip: "Social Responsibilities" }
      ],
      userType: "Member",
      goal: "250,000 MRLN (25.5%)",
      like: "459",
      dislike: "36",
    },
    {
      imgSrc: "/assets/images/img/cave10.png",
      title: "Seeking funds for our group tour",
      code: "Code: #A00040",
      icons: [
        { src: "/assets/images/img/personal.png", tooltip: "Personal Goals" }
      ],
      userType: "Commoner",
      goal: "250,000 MRLN (25.5%)",
      like: "45",
      dislike: "2",
    },
  ];

const TheCrystalCaveTable = () => {
    return (
        <div className='rounded-[40px] backdrop-blur-[15px] p-[60px] 2xl:py-[35px] 2xl:px-[25px] xl:px-[20px]' style={{ background: 'linear-gradient(178deg, rgba(255, 255, 255, 0.05) 2.04%, rgba(255, 255, 255, 0.01) 97.96%)' }}>
            <div className="flex items-center justify-between gap-[20px] flex-wrap mb-[30px] xl:mb-[15px]">
                <h2 className='text-[40px] 2xl:text-[32px] leading-[130%] font-[700] text-white quantico uppercase'>The crystal cave</h2>
                <div className="flex items-center justify-between gap-[20px] lg:gap-[4%] lg:mb-[10px] lg:flex-wrap">
                    <div className='max-w-[300px] xl:max-w-full w-full lg:mb-[20px]'>
                        <ScarchBox />
                    </div>
                  <div className='w-[194px] xl:w-[48%]'>
                        <CategoriesDropdown/>
                    </div>
                  <div className='w-[194px] xl:w-[48%]'>
                        <Dropdown btnTitle="Other Filters" />
                    </div>
                </div>
            </div>

            <div className="lg:overflow-x-scroll">
                <div className="xl:text-[14px] min-w-[950px] ">
                    <ul className="flex items-center justify-between py-[15px] uppercase">
                        <li className="pl-[30px] xl:pl-[15px] pr-[15px] w-[40%]">Raven Message</li>
                        <li className="px-[15px] xl:px-[5px] w-[15%]">GOAL</li>
                        <li className="px-[15px] xl:px-[5px] w-[15%]">Categories</li>
                        <li className="px-[15px] xl:px-[5px] w-[15%]">User Type</li>
                        <li className="px-[15px] xl:px-[5px] pr-15px w-[15%] text-right xl:min-w-[max-content]">Like / Dislike</li>
                    </ul>
                    {crystalData.map((crystal, index) => (
                        <ul key={index} className="rounded-[20px] mb-[15px] relative crystal-table-row backdrop-blur-[10px] py-[15px] flex items-center justify-between" style={{ background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 50%, rgba(255, 255, 255, 0.08) 100%);' }}>
                            <li className="w-[40%] px-[15px] xl:pr-[5px]">
                                <div className="flex items-center justify-start">
                                    <div className="min-h-[60px] min-w-[60px] max-h-[60px] max-w-[60px] rounded-[15px] overflow-hidden">
                                        <Image src={crystal.imgSrc} alt="img" className="object-cover w-full h-full" width="60" height="60" />
                                    </div>
                                    <div className="ml-[14px]">
                                        <h3 className="overflow-hidden text-ellipsis text-[20px] lg:text-[18px] md:text-[16px] font-[500] text-white lexend mb-[5px] text-nowrap max-w-[320px] 2xl:max-w-[260px]">{crystal.title}</h3>
                                        <p className="text-[16px] lg:text-[15px] md:text-[14px] font-[300] lexend uppercase">{crystal.code}</p>
                                    </div>
                                </div>
                            </li>
                            <li className="px-[15px] xl:px-[5px] w-[15%]">
                                <span className="text-[16px] lg:text-[15px] md:text-[14px] text-white font-[400] lexend">{crystal.goal}</span>
                            </li>
                            <li className="px-[15px] xl:px-[5px] w-[15%]">
                                <div className="flex items-center justify-start gap-[20px]">
                                    {crystal.icons.map((icon, idx) => (
                                        <div className="tooltip" data-tip={icon.tooltip} key={idx}>
                                            <Image src={icon.src} alt="icon" width={34} height={34} />
                                        </div>
                                    ))}
                                </div>
                            </li>
                            <li className="px-[15px] xl:px-[5px] w-[15%]">
                                <span className="text-[16px] lg:text-[15px] md:text-[14px] text-white font-[400] lexend">{crystal.userType}</span>
                            </li>
                            <li className="px-[15px] xl:pr-0 w-[15%] text-right pr-[15px]">
                                <div className="flex items-center justify-end gap-[5px]">
                                  <button className="rounded-full flex items-center justify-center gap-[6px] px-[14px] h-[32px] bg-[#19c85f33]">
                                      <Image src="/assets/images/icons/like.svg" alt="icon" width="13" height="12" />
                                      <span>{crystal.like}</span>
                                  </button>
                                  <button className="rounded-full flex items-center justify-center gap-[6px] px-[14px] h-[32px] bg-[#e32d2d26]">
                                      <Image src="/assets/images/icons/dislike.svg" alt="icon" width="13" height="12" />
                                      <span>{crystal.dislike}</span>
                                  </button>
                                </div>
                            </li>
                        </ul>
                    ))}
                </div>
            </div>

            <div className='mt-[30px]'>
                <Pagination2/>
            </div>
        </div>
    )
}

export default TheCrystalCaveTable