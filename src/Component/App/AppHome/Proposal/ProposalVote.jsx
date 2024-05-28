import Image from "next/image";
import React, { useEffect, useState } from "react";

const ProposalVote = ({ leftVoteImages, rightVoteImages }) => {
  const [showFirstSet, setShowFirstSet] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setShowFirstSet((prevShowFirstSet) => !prevShowFirstSet);
    }, 1500);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="max-w-[1225px] mx-auto px-[20px] mb-[70px]">
      <div className="flex items-center justify-between lg:flex-col lg:gap-[20px] rounded-[20px] p-[15px] overflow-hidden bg-gradient-to-r from-[#ffffff09] via-[#ffffff02] to-[#ffffff09]">
        <ul className="flex items-center justify-between max-w-[405px] w-full mx-[-6px] lg:w-full">
          {leftVoteImages
            .slice(showFirstSet ? 0 : 5, showFirstSet ? 5 : 10)
            ?.map((image, index) => (
              <li key={index} className="px-[6px] w-[25%] relative">
                <Image
                  src={image}
                  alt={`vote-img-${index}`}
                  className="min-w[70px] max-w[70px] w-full overflow-hidden rounded-[15px]"
                  width="70"
                  height="70"
                />
              </li>
            ))}
        </ul>
        <a
          href="#"
          className="h-[50px] btn-has-shape w-[170px] flex items-center justify-center hov-btn bg-[#12CFA7] rounded-full text-white text-center leading-trim-both text-edge-cap font-[600] text-[16px] uppercase quantico"
        >
          <span className="btn-hov-text">
            <span className="btn-text">Vote Now</span>
            <span className="btn-text">Vote Now</span>
          </span>
        </a>
        <ul className="flex items-center justify-between max-w-[405px] w-full mx-[-6px] lg:w-full">
          {rightVoteImages
            .slice(showFirstSet ? 0 : 5, showFirstSet ? 5 : 10)
            ?.map((image, index) => (
              <li key={index} className="w-[25%] px-[6px] relative">
                <Image
                  src={image}
                  alt={`vote-img-${index + 5}`}
                  className="min-w[70px] max-w[70px] w-full overflow-hidden rounded-[15px]"
                  width="70"
                  height="70"
                />
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default ProposalVote;
