import Image from "next/image";
import Link from "next/link";
import React from "react";

const ApplyGrant = () => {
  return (
    <div
      className="bg-cover overflow-hidden bg-center bg-no-repeat rounded-[40px]"
      style={{
        backgroundImage: `url('../assets/images/bg/apply-grant-bg.jpg')`,
      }}
    >
      <div className="p-[70px] lg:py-[40px] lg:px-[30px] bg-[#22334883]">
        <div className="flex items-center justify-between gap-[20px] md:flex-wrap md:text-center">
          <div className="max-w-[788px] xl:w-[70%] md:w-full md:mx-auto mb-0">
            <h2 className="font-[700] text-white text-[40px] lg:text-[32px] leading-[152%] lg:leading-[125%] quantico uppercase mb-[20px] lg:mb-[10px]">
              APPLY FOR a Grant
            </h2>
            <p className="text-white lg:text-[14px]">
              Project Merlin offers financial support and various opportunities
              to numerous projects under development, primarily in Web3 and
              GameFi. Apply now to develop your project and introduce it to The
              Great Project Merlin Community.
            </p>
          </div>
          <Link
            href="/launch-app"
            className="hov-btn btn-has-shape gap-[10px] bg-[#12CFA7] rounded-full h-[60px] min-w-[220px] md:mx-auto flex items-center justify-center text-white text-center leading-trim-both text-edge-cap font-[600] text-[16px] uppercase quantico"
          >
            <span className="btn-hov-text">
              <span className="btn-text" >Apply Now</span>
              <span className="btn-text" >Apply Now</span>
            </span>
            <Image
              src="/assets/images/icons/arrow-right.svg"
              alt="icon"
              className="mt-[0px]"
              width={8}
              height={8}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ApplyGrant;
