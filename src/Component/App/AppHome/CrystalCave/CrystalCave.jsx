import React from "react";
import Image from "next/image";
import CrystalTable from "./CrystalTable";
import ApplySection from "./ApplySection";
import SectionTitle from "@/src/Component/Core/SectionTitle";

const CrystalCave = ({ isSidebarVisible }) => {
  return (
    <div className="pt-[100px] xl:pt-[80px] lg:pt-[60px] sm:pt-[50px]">

      <div className={`app-home-wrapper ${isSidebarVisible ? "sidebar-visible" : "sidebar-hidden"}`}>


        <div className="px-[20px] md:px-[10px] max-w-[1365px] mx-auto lg:max-w-[720px]">
          <div className="rounded-[40px] bg-gradient-to-b from-[#ffffff08] to-[#ffffff02] backdrop-blur-[15px] overflow-hidden">
            <div
              className="px-[40px] xl:px-[20px] pb-[40px] pt-[70px] md:pt-[40px] w-[100.5%] bg-no-repeat"
              style={{
                backgroundImage: `url('../assets/images/bg/cave-bg.png')`,
                backgroundSize: '100% auto'
              }}
            >
              <div className="flex items-center justify-between mb-[40px] lg:mb-[30px] sm:justify-center sm:flex-col gap-[16px]">
                <SectionTitle
                  title="The crystal cave"
                  subtitle="February’s Elections"
                  alignment="text-left sm:text-center"
                  titleMaxW="520px"
                  titleMargin="mb-[0px]"
                />
                <a
                  href="#"
                  className="hov-btn btn-has-shape gap-[7px] bg-[#ffffff10] rounded-full bg-opacity-10 backdrop-blur-[5px] h-[50px] w-[170px] flex items-center justify-center text-white text-center leading-trim-both text-edge-cap font-[600] text-[16px] uppercase quantico"
                >
                  <span className="btn-hov-text">
                    <span className="btn-text" >view More</span>
                    <span className="btn-text" >view More</span>
                  </span>
                  <Image
                    src="/assets/images/icons/arrow-right.svg"
                    alt="icon"
                    className="mt-0"
                    width="8"
                    height="13"
                  />
                </a>
              </div>

              <CrystalTable />

              <ApplySection />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrystalCave;
