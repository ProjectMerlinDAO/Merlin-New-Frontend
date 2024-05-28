import React from "react";
import Image from "next/image";
import SectionTitle from "@/src/Component/Core/SectionTitle";

const Treasury = ({ isSidebarVisible }) => {
  return (
    <div className="pt-[90px] xl:pt-[70px] lg:pt-[50px] sm:pt-[40px]">
      <div className={`app-home-wrapper ${isSidebarVisible ? "sidebar-visible" : "sidebar-hidden"}`}>
        <div className="px-[20px] md:px-[10px] max-w-[1365px] mx-auto lg:max-w-[720px]">
            <div className="pt-[70px] px-[40px] 2xl:px-[16px] pb-[40px] bg-center bg-no-repeat bg-cover rounded-[40px] overflow-hidden" style={{backgroundImage: `url('../assets/images/bg/tresure-bg.png')`}}>
                <SectionTitle title="Camelot & Merlin treasury" subtitle="Treasury" alignment="text-left" titleMaxW="600px" titleMargin="mb-[60px] lg:mb-[30px]" />
                <div className="lg:overflow-x-scroll pl-[5px]">
                <div className="flex items-end justify-between mx-[-10px] font-[400] text-white w-full min-w-[960px]">
              <div className="w-1/5 px-[10px] xl:px-[5px]">
                <div className="rounded-[30px] bg-gradient-to-b from-[#ffffff08] to-[#ffffff01] backdrop-blur-[5px] pt-[15px]">
                  <ul className='ml-[-0px] text-right 2xl:text-[13px] treasury-list'>
                    <li className='px-[20px] 2xl:px-[10px] py-[15px] border-b border-[#FFFFFF10]'>Winners&apos; Share</li>
                    <li className='px-[20px] 2xl:px-[10px] py-[15px] border-b border-[#FFFFFF10]'>Community&apos;s Share</li>
                    <li className='px-[20px] 2xl:px-[10px] py-[15px] border-b border-[#FFFFFF10]'>Editors&apos; Share</li>
                    <li className='px-[20px] 2xl:px-[10px] py-[15px] border-b border-[#FFFFFF10]'>Senators&apos; Share</li>
                    <li className='px-[20px] 2xl:px-[10px] py-[15px] border-b border-[#FFFFFF10]'>Collection Owners&apos; Share</li>
                    <li className='px-[20px] 2xl:px-[10px] py-[15px] border-b border-[#FFFFFF10]'>Merlin&apos;s Share</li>
                    <li className='px-[20px] 2xl:px-[10px] py-[15px] border-b border-[#FFFFFF10] text-[#12CFA7]'>Merlin&apos;s Contribution</li>
                    <li className='px-[20px] 2xl:px-[10px] py-[15px] border-b border-[#FFFFFF10] text-[#A06BFD]'>Camelot&apos;s Contribution</li>

                  </ul>
                  <div className="flex items-center justify-end total bg-[#FFFFFF10] h-[62px] rounded-bl-[30px] px-[20px] 2xl:px-[10px]">
                    <h6 className="text-white 2xl:text-[14px]">Total Treasury</h6>
                  </div>
                </div>
              </div>
              <div className="w-1/5 px-[10px] xl:px-[5px]">
                <div className="rounded-[30px] bg-gradient-to-b from-[#6E38CD10] to-[#ffffff01] backdrop-blur-[5px] pt-[15px]">

                  <div className='text-center mb-[15px]'>
                    <Image src="/assets/images/img/box1.png" alt="img" width="130" height="128" className='m-auto' />
                    <h3 className='text-[24px] 2xl:text-[20px] font-[700] text-white leading-[125%] mb-0 quantico uppercase'>Winter Chest</h3>
                    <h6 className='text-white 2xl:text-[14px]'>(Jan- Mar) 2024</h6>
                  </div>
                  <ul className='text-center 2xl:text-[13px] treasury-list'>
                    <li className='px-[20px] 2xl:px-[10px] py-[15px] border-b border-[#FFFFFF10]'>4,200,000 MRLN</li>
                    <li className='px-[20px] 2xl:px-[10px] py-[15px] border-b border-[#FFFFFF10]'>560,000 MRLN</li>
                    <li className='px-[20px] 2xl:px-[10px] py-[15px] border-b border-[#FFFFFF10]'>168,000 MRLN</li>
                    <li className='px-[20px] 2xl:px-[10px] py-[15px] border-b border-[#FFFFFF10]'>392,000 MRLN</li>
                    <li className='px-[20px] 2xl:px-[10px] py-[15px] border-b border-[#FFFFFF10]'>168,000 MRLN</li>
                    <li className='px-[20px] 2xl:px-[10px] py-[15px] border-b border-[#FFFFFF10]'>112,000 MRLN</li>
                    <li className='px-[20px] 2xl:px-[10px] py-[15px] border-b border-[#FFFFFF10] relative'>
                      <div className="bg-[#12CFA720] absolute left-0 top-[11px] h-[40px] w-[38%] z-0"></div>
                      <span className="z-10">2,128,000 MRLN (38%)</span>
                    </li>
                    <li className='px-[20px] 2xl:px-[10px] py-[15px] border-b border-[#FFFFFF10] relative'>
                      <div className="bg-[#A06BFD20] absolute right-0 top-[11px] h-[40px] w-[62%] z-0"></div>

                      <span className="z-10">3,472,000 MRLN (62%)</span>
                    </li>
                  </ul>
                  <div className="flex items-center justify-center bg-[#FFFFFF10] total h-[62px] rounded-[0px] pr-[30px] pl-[30px]">
                    <h6 className="text-white 2xl:text-[14px]">5,600,000 MRLN</h6>
                  </div>
                </div>
              </div>
              <div className="w-1/5 px-[10px] xl:px-[5px]">
                <div className="rounded-[30px] bg-gradient-to-b from-[#FFAF5C10] to-[#ffffff01] backdrop-blur-[5px] pt-[15px]">

                  <div className='text-center mb-[15px]'>
                    <Image src="/assets/images/img/box2.png" alt="img" width="130" height="128" className='m-auto' />
                    <h3 className='text-[24px] 2xl:text-[20px] font-[700] text-white leading-[125%] mb-0 quantico uppercase'>Spring Chest</h3>
                    <h6 className='text-white 2xl:text-[14px]'>(Apr- Jun) 2024</h6>
                  </div>
                  <ul className='text-center 2xl:text-[13px] treasury-list'>
                    <li className='px-[20px] 2xl:px-[10px] py-[15px] border-b border-[#FFFFFF10]'>168,000 MRLN</li>
                    <li className='px-[20px] 2xl:px-[10px] py-[15px] border-b border-[#FFFFFF10]'>560,000 MRLN</li>
                    <li className='px-[20px] 2xl:px-[10px] py-[15px] border-b border-[#FFFFFF10]'>4,200,000 MRLN</li>
                    <li className='px-[20px] 2xl:px-[10px] py-[15px] border-b border-[#FFFFFF10]'>168,000 MRLN</li>
                    <li className='px-[20px] 2xl:px-[10px] py-[15px] border-b border-[#FFFFFF10]'>4,200,000 MRLN</li>
                    <li className='px-[20px] 2xl:px-[10px] py-[15px] border-b border-[#FFFFFF10]'>392,000 MRLN</li>
                    <li className='px-[20px] 2xl:px-[10px] py-[15px] border-b border-[#FFFFFF10] relative'>
                      <div className="bg-[#12CFA720] absolute left-0 top-[11px] h-[40px] w-[100%] z-0"></div>
                      <span className="z-10">5,600,000 MRLN (100%)</span>
                    </li>
                    <li className='px-[20px] 2xl:px-[10px] py-[15px] border-b border-[#FFFFFF10] relative'>
                      <div className="bg-[#A06BFD20] absolute right-[10px] 2xl:right-[0px] top-[11px] h-[40px] w-[0%] z-0"></div>

                      <span className="z-10">0 MRLN (0%)</span>
                    </li>
                  </ul>
                  <div className="flex items-center justify-center bg-[#FFFFFF10] total h-[62px] rounded-[0px] pr-[30px] pl-[30px]">
                    <h6 className="text-white 2xl:text-[14px]">5,600,000 MRLN</h6>
                  </div>
                </div>
              </div>
              <div className="w-1/5 px-[10px] xl:px-[5px]">
                <div className="rounded-[30px] bg-gradient-to-b from-[#0BA7FF10] to-[#ffffff01] backdrop-blur-[5px] pt-[15px]">

                  <div className='text-center mb-[15px]'>
                    <Image src="/assets/images/img/box3.png" alt="img" width="130" height="128" className='m-auto' />
                    <h3 className='text-[24px] 2xl:text-[20px] font-[700] text-white leading-[125%] mb-0 quantico uppercase'>Summer Chest</h3>
                    <h6 className='text-white 2xl:text-[14px]'>(Jul- Sep) 2024</h6>
                  </div>
                  <ul className='text-center 2xl:text-[13px] treasury-list'>
                    <li className='px-[20px] 2xl:px-[10px] py-[15px] border-b border-[#FFFFFF10]'>4,200,000 MRLN</li>
                    <li className='px-[20px] 2xl:px-[10px] py-[15px] border-b border-[#FFFFFF10]'>168,000 MRLN</li>
                    <li className='px-[20px] 2xl:px-[10px] py-[15px] border-b border-[#FFFFFF10]'>560,000 MRLN</li>
                    <li className='px-[20px] 2xl:px-[10px] py-[15px] border-b border-[#FFFFFF10]'>392,000 MRLN</li>
                    <li className='px-[20px] 2xl:px-[10px] py-[15px] border-b border-[#FFFFFF10]'>112,000 MRLN</li>
                    <li className='px-[20px] 2xl:px-[10px] py-[15px] border-b border-[#FFFFFF10]'>4,200,000 MRLN</li>
                    <li className='px-[20px] 2xl:px-[10px] py-[15px] border-b border-[#FFFFFF10] relative'>
                      <div className="bg-[#12CFA720] absolute left-0 top-[11px] h-[40px] w-[100%] z-0"></div>
                      <span className="z-10">5,600,000 MRLN (100%)</span>
                    </li>
                    <li className='px-[20px] 2xl:px-[10px] py-[15px] border-b border-[#FFFFFF10] relative'>
                      <div className="bg-[#A06BFD20] absolute right-[10px] 2xl:right-[0px] top-[11px] h-[40px] w-[0%] z-0"></div>

                      <span className="z-10">0 MRLN (0%)</span>
                    </li>
                  </ul>
                  <div className="flex items-center justify-center bg-[#FFFFFF10] total h-[62px] rounded-[0px] pr-[30px] pl-[30px]">
                    <h6 className="text-white 2xl:text-[14px]">5,600,000 MRLN</h6>
                  </div>
                </div>
              </div>
              <div className="w-1/5 px-[10px] xl:px-[5px]">
                <div className="rounded-[30px] bg-gradient-to-b from-[#F3236210] to-[#ffffff01] backdrop-blur-[5px] pt-[15px]">

                  <div className='text-center mb-[15px]'>
                    <Image src="/assets/images/img/box4.png" alt="img" width="130" height="128" className='m-auto' />
                    <h3 className='text-[24px] 2xl:text-[20px] font-[700] text-white leading-[125%] mb-0 quantico uppercase'>Autumn Chest</h3>
                    <h6 className='text-white 2xl:text-[14px]'>(Oct- Dec) 2024</h6>
                  </div>
                  <ul className='text-center 2xl:text-[13px] treasury-list last'>
                    <li className='pl-[30px] pr-[20px] py-[15px] border-b border-[#FFFFFF10]'>392,000 MRLN</li>
                    <li className='pl-[30px] pr-[20px] py-[15px] border-b border-[#FFFFFF10]'>168,000 MRLN</li>
                    <li className='pl-[30px] pr-[20px] py-[15px] border-b border-[#FFFFFF10]'>4,200,000 MRLN</li>
                    <li className='pl-[30px] pr-[20px] py-[15px] border-b border-[#FFFFFF10]'>560,000 MRLN</li>
                    <li className='pl-[30px] pr-[20px] py-[15px] border-b border-[#FFFFFF10]'>168,000 MRLN</li>
                    <li className='pl-[30px] pr-[20px] py-[15px] border-b border-[#FFFFFF10]'>112,000 MRLN</li>
                    <li className='px-[20px] 2xl:px-[10px] py-[15px] border-b border-[#FFFFFF10] relative'>
                      <div className="bg-[#12CFA720] absolute left-0 top-[11px] h-[40px] w-[0%] z-0"></div>
                      <span className="z-10">0 MRLN (0%)</span>
                    </li>
                    <li className='px-[20px] 2xl:px-[10px] py-[15px] border-b border-[#FFFFFF10] relative'>
                      <div className="bg-[#A06BFD20] absolute right-[0px] top-[11px] h-[40px] w-[100%] z-0"></div>
                      <span className="z-10">5,600,000 MRLN (100%)</span>
                    </li>
                  </ul>
                  <div className="flex items-center justify-center bg-[#FFFFFF10] total last h-[62px] rounded-br-[30px] mr-[0px] pr-[20px] pl-[30px]">
                    <h6 className="text-white 2xl:text-[14px]">5,600,000 MRLN</h6>
                  </div>
                </div>
              </div>
            </div>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default Treasury;