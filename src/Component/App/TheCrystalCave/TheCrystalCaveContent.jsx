import Image from "next/image";
import React from "react";
import TheCrystalCaveTable from "./TheCrystalCaveTable";
import OracleSelection from "./OracleSelection";
import Oracle from "./Oracle";

const TheCrystalCaveContent = ({ isSidebarVisible }) => {
  return (
    <div
      className="pt-[110px] relative bg-no-repeat position-top bg-contain z-10"
      style={{
        backgroundImage: "url(./assets/images/bg/sub-bg.png)",
        backgroundSize: "100% 388px",
      }}
    >
      <div
        className={`mt-[-70px] lg:mt-[0px] app-home-wrapper ${
          isSidebarVisible ? "sidebar-visible" : "sidebar-hidden"
        }`}
      >
        <div className="px-[20px] md:px-[10px] max-w-[1365px] mx-auto lg:max-w-[720px]">
          <ul className="flex items-cenetr  justify-start gap-[8px] uppercase relative pl-[48px] z-[99999] mb-[30px] 2xl:text-[14px] xl:ml-[100px] lg:ml-[0px] md:flex-wrap">
            <li className="flex items-center justify-start gap-[8px] mr-10px ml-[-5px]">
              <a href="#" className="flex absolute left-0 top-0">
                <Image
                  src="/assets/images/icons/back-arrow.svg"
                  alt="icon"
                  height="40"
                  width="40"
                />
              </a>
            </li>
            <li className="flex items-center justify-start gap-[8px]">
              <a href="#" className="flex">
                app HOME{" "}
              </a>{" "}
              .{" "}
            </li>
            <li className="flex items-center justify-start gap-[8px]">
              <a href="#" className="flex text-[#12CFA7]">
                The Crystal Cave
              </a>
            </li>
          </ul>
          <TheCrystalCaveTable />
          <div className="mt-[60px] lg:mt-[40px] md-mt-[30px]">
            <OracleSelection />
          </div>
          <div className="mt-[60px] lg:mt-[40px] md-mt-[30px]">
            <Oracle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheCrystalCaveContent;
