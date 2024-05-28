import SectionTitle from "@/src/Component/Core/SectionTitle";
import React from "react";

const HowWork = ({ isSidebarVisible }) => {
  const steps = [
    {
      number: "01.",
      title: "Buy Community NFTs",
      description:
        "Connect your wallet, participate in NFT auctions, and win one of the community NFTs.",
    },
    {
      number: "02.",
      title: "Participate Assessments",
      description:
        "The NFT you own grants you a role in the community; complete the assessment corresponding to this role.",
    },
    {
      number: "03.",
      title: "Claim Tokens",
      description:
        "If you vote in agreement with the community during the voting process, you can claim your reward.",
    },
  ];

  return (
    <div className="pt-[100px] xl:pt-[80px] lg:pt-[60px] sm:pt-[50px]">

      <div className={`app-home-wrapper ${isSidebarVisible ? "sidebar-visible" : "sidebar-hidden"}`}>

        <div className="px-[20px] md:px-[10px] max-w-[1365px] mx-auto lg:max-w-[720px]">
          <SectionTitle
            title="How does it work"
            subtitle="How does it work"
            alignment="text-left"
            titleMaxW="390px"
            titleMargin="mb-[60px] lg:mb-[30px]"
          />
          <div className="flex items-start justify-between mx-[-12px] flex-wrap">
            {steps.map((step, index) => (
              <div key={index} className="w-1/3 lg:w-1/2 sm:w-full mb-[20px] lg:mb-[30px] px-[12px]">
                <h2 className="rounded-[25px] px-[30px] py-[10px] mb-[25px] 2xl:mb-[16px] bg-gradient-to-r from-[#12cfa726] to-[transparent] text-[24px] 2xl:text-[18px] font-[500] text-white">
                  <span className="text-[#12CFA7]">{step.number}</span> {step.title}

                </h2>
                <p className="px-[30px] max-w-[369px] font-[400]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWork;
