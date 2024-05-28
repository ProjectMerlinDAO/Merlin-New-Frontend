import React from "react";

const SectionTitle = ({ title, subtitle, alignment, titleMaxW, titleMargin, }) => {
  return (
    <div className={`${alignment} max-w-${titleMaxW} ${titleMargin} section-title`}>
      {subtitle && (
        <span className={`text-[#12CFA7] quantico text-[18px] md:text-[16px] font-[700] uppercase`}>
          {subtitle}
        </span>
      )}
      {title && (
        <h2 className={`text-white quantico uppercase text-[40px] lg:text-[32px] md:text-[24px] font-[700] mt-[30px] lg:mt-[20px] md:mt-[10px]`}>
          {title}
        </h2>
      )}
    </div>
  );
};

export default SectionTitle;
