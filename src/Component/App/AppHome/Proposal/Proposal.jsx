import React, { useEffect, useRef, useState } from "react";
import ProposalTimer from "./ProposalTimer";
import ProposalVote from "./ProposalVote";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderData from "./SliderData";

const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <Image
        src="/assets/images/icons/arrow-prev.svg"
        alt="prev"
        width={12}
        height={24}
      />
    </div>
  )
}

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <Image
        src="/assets/images/icons/arrow-next.svg"
        alt="prev"
        width={12}
        height={24}
      />
    </div>
  )
}

const Proposal = ({ isSidebarVisible }) => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);

  const settings = {
    arrows: true,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    focusOnSelect: false,
    pauseOnHover: false,
    pauseOnFocus: false,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div
      className={`app-home-wrapper mt-[-273px]  ${
        isSidebarVisible ? "sidebar-visible" : "sidebar-hidden"
      }`}
    >
      <div className="px-[20px] md:px-[10px] max-w-[1365px] mx-auto lg:max-w-[720px]">
        <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-b from-[#ffffff12] to-[#ffffff05] pb-[10px]">
          <div className="absolute top-0 left-0 z-0 opacity-[50%]">
            <Image
              src="/assets/images/shape/proposal-shape1.png"
              alt="shape"
              width={345}
              height={373}
            />
          </div>
          <div className="absolute top-0 right-0 z-0 opacity-[50%]">
            <Image
              src="/assets/images/shape/proposal-shape2.png"
              alt="shape"
              width={345}
              height={373}
            />
          </div>

          <Slider
            {...settings}
            className="proposal-slider mb-[-20px]"
            asNavFor={nav2}
            ref={(slider) => (sliderRef1 = slider)}
          >
            {SliderData?.map((sliderItem, i) => (
              <div key={i} className="relative overflow-hidden rounded-[40px]">
                <div className="relative z-10 flex flex-wrap items-start justify-between">
                  <div className="w-2/4 lg:w-full">
                    <div className="propasal-text pt-[60px] pl-[70px] pr-[70px] pb-[48px] xl:p-[40px]">
                      <h2 className="text-[40px] lg:text-[32px] md:text-[26px] font-semibold text-white uppercase quantico max-w-[414px] leading-[112%] mb-[32px] lg:text-center lg:mx-auto">
                        {sliderItem.title}
                      </h2>
                      <h6 className="flex lg:justify-center gap-[10px] text-[16px] font-[500] text-white lexend leading-[112%] mb-[40px]">
                        <span className="text-[#ffffffcc]">Category:</span>
                        <Image
                          src="/assets/images/icons/ball-small.svg"
                          alt="icon"
                          width={14}
                          height={14}
                        />
                        <span>{sliderItem.category}</span>
                      </h6>
                      <ul className="flex max-w-[310px] lg:mx-auto justify-between items-center mb-[35px]">
                        {sliderItem.sponsors?.map((sponsorsItem, sid) => (
                          <li key={sid}>
                            <a href="#">
                              <Image
                                src={sponsorsItem.icon}
                                alt={sponsorsItem.title}
                                width={60}
                                height={40}
                              />
                            </a>
                          </li>
                        ))}
                      </ul>

                      <a
                        href="#"
                        className="flex hov-btn no-border lg:justify-center items-center gap-[7px] text-white uppercase"
                      >
                        <span className="btn-hov-text">
                          <span className="btn-text">become a sponsor</span>
                          <span className="btn-text">become a sponsor</span>
                        </span>
                        <Image
                          src="/assets/images/icons/arrow-right.svg"
                          alt="icon"
                          className="mt-[3px]"
                          width={8}
                          height={8}
                        />
                      </a>
                    </div>
                  </div>
                  <div className="w-2/4 lg:w-full">
                    <div className="relative w-full">
                      <div className="absolute left-0 top-0 h-full w-[1px] bg-gradient-to-b from-[#ffffff1e] to-opacity-[transparent]"></div>
                      <div className="w-full border-t-0 border-b-0 border-r-0 border-white border-solid proposal-timer bg-gradient-to-r from-[#ffffff10] to-white-[transparent] border-l-40 backdrop-blur-md px-[40px] py-[20px] ">
                        <h6 className="font-[500] lg:text-center text-[18px] text-white lexend uppercase mb-[20px]">
                          Proposal Ends in
                        </h6>
                        <ProposalTimer />
                      </div>
                      <ul className="py-[15px]">
                        {sliderItem.proposals?.map((proposalItem, pid) => (
                          <li
                            key={pid}
                            className="flex proposal-table-list relative items-center justify-between lg:justify-between gap-[10px] text-white uppercase quantico py-[10px] px-[40px] font-[700]"
                          >
                            <p className="w-2/5 lg:w-2/4">
                              {proposalItem.label}
                            </p>
                            <p className="flex items-end justify-start gap-[5px] w-3/5 lg:w-2/4 text-right lg:ml-auto lg:justify-end">
                              {proposalItem.amount}
                              <span className="text-[12px]">
                                {proposalItem.unit}
                              </span>
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <ProposalVote
                  leftVoteImages={sliderItem.leftVoteImages}
                  rightVoteImages={sliderItem.rightVoteImages}
                />
              </div>
            ))}
          </Slider>

          <Slider
            asNavFor={nav1}
            ref={(slider) => (sliderRef2 = slider)}
            slidesToShow={5}
            // slidesToScroll={1}
            infinite={true}
            swipeToSlide={true}
            focusOnSelect={true}
            pauseOnHover={false}
            pauseOnFocus={false}
            arrows={false}
            dots={false}
            autoplay={true}
            autoplaySpeed={3000}
            className="flex relative z-10 proposal-slider-nav gap-[5px] justify-center max-w-[270px] mx-auto mt-[-65px]"
          >
            <div className="min-h-[50px] min-w-[50px] max-h-[50px] max-w-[50px] rounded-[50%] mx-auto hover:bg-[#ffffff26] !flex items-center justify-center cursor-pointer">
              <Image
                src="/assets/images/icons/icon-personal.png"
                alt="icon"
                height="30"
                width="30"
              />
            </div>
            <div className="min-h-[50px] min-w-[50px] max-h-[50px] max-w-[50px] rounded-[50%] mx-auto hover:bg-[#ffffff26] !flex items-center justify-center cursor-pointer">
              <Image
                src="/assets/images/icons/icon-sport.png"
                alt="icon"
                height="30"
                width="30"
              />
            </div>
            <div className="min-h-[50px] min-w-[50px] max-h-[50px] max-w-[50px] rounded-[50%] mx-auto hover:bg-[#ffffff26] !flex items-center justify-center cursor-pointer">
              <Image
                src="/assets/images/icons/icon-social.png"
                alt="icon"
                height="30"
                width="30"
              />
            </div>
            <div className="min-h-[50px] min-w-[50px] max-h-[50px] max-w-[50px] rounded-[50%] mx-auto hover:bg-[#ffffff26] !flex items-center justify-center cursor-pointer">
              <Image
                src="/assets/images/icons/iconInno.png"
                alt="icon"
                height="30"
                width="30"
              />
            </div>
            <div className="min-h-[50px] min-w-[50px] max-h-[50px] max-w-[50px] rounded-[50%] mx-auto hover:bg-[#ffffff26] !flex items-center justify-center cursor-pointer">
              <Image
                src="/assets/images/icons/slider-icon5.png"
                alt="icon"
                height="30"
                width="30"
              />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Proposal;
