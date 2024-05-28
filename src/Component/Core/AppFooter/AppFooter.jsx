import React from "react";
import ApplyGrant from "./ApplyGrant";
import FooterCard from "./FooterCard";
import FooterBottom from "./FooterBottom";

const AppFooter = ({ isSidebarVisible }) => {

    return (
        <div className="bg-no-repeat bg-cover bg-center-bottom" style={{backgroundImage: `url('../assets/images/bg/footer-main-bg.png')`}}>
            <div className="pt-[120px] xl:pt-[90px] lg:pt-[70px] sm:pt-[60px]">
            <div className={`app-home-wrapper ${isSidebarVisible ? "sidebar-visible" : "sidebar-hidden"}`}>
                <div className="px-[20px] md:px-[10px] max-w-[1365px] mx-auto lg:max-w-[720px]">
                    <ApplyGrant/>
                    <FooterCard/>
                    <FooterBottom/>
                </div>
            </div>

        </div>
      </div>
  );
};

export default AppFooter;
