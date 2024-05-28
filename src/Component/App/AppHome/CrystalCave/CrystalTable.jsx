import React from 'react';
import Image from 'next/image'

const CrystalTable = () => {
  const crystalData = [
    {
      imgSrc: "/assets/images/img/cave1.png",
      title: "I want sport equipments for ...",
      author: "Fargo HKN",
      icons: [
        { src: "/assets/images/img/personal.png", tooltip: "Personal Goals" },
        { src: "/assets/images/img/sports.png", tooltip: "Sports and Arts" },
      ],
      created: "10m ago",
      goal: "250,000 MRLN",
      messageCode: "#A00049"
    },
    {
      imgSrc: "/assets/images/img/cave2.png",
      title: "I need Fund for a AI software",
      author: "Smith",
      icons: [
        { src: "/assets/images/img/innovation.png", tooltip: "Innovation" }
      ],
      created: "2h ago",
      goal: "820,000 MRLN",
      messageCode: "#8996d2"
    },
    {
      imgSrc: "/assets/images/img/cave3.png",
      title: "We want to build VR",
      author: "Estevan",
      icons: [
        { src: "/assets/images/img/innovation.png", tooltip: "Innovation" },
        { src: "/assets/images/img/social.png", tooltip: "Social Responsibilities" }
      ],
      created: "5h ago",
      goal: "896,000 MRLN",
      messageCode: "#86dr66"
    },
    {
      imgSrc: "/assets/images/img/cave4.png",
      title: "Need funding for my next match",
      author: "Cardoso Pereira",
      icons: [
        { src: "/assets/images/img/sports.png", tooltip: "Sports and Arts" }
      ],
      created: "6h ago",
      goal: "100,000 MRLN",
      messageCode: "#8558de"
    },
    {
      imgSrc: "/assets/images/img/cave5.png",
      title: "I want plant 10 million tree",
      author: "Crooks",
      icons: [
        { src: "/assets/images/img/social.png", tooltip: "Social Responsibilities" }
      ],
      created: "2h ago",
      goal: "999,000 MRLN",
      messageCode: "#85x622"
    },
    {
      imgSrc: "/assets/images/img/cave6.png",
      title: "I need sports shoes",
      author: "David E",
      icons: [
        { src: "/assets/images/img/sports.png", tooltip: "Sports and Arts" }
      ],
      created: "18h ago",
      goal: "885,000 MRLN",
      messageCode: "#A00049"
    },
    {
      imgSrc: "/assets/images/img/cave7.png",
      title: "Want to visit Maldives",
      author: "Martens",
      icons: [
        { src: "/assets/images/img/personal.png", tooltip: "Personal Goals" }
      ],
      created: "22h ago",
      goal: "440,000 MRLN",
      messageCode: "#d58f20"
    },
    {
      imgSrc: "/assets/images/img/cave8.png",
      title: "Seeking funds for a Business",
      author: "Melissa ",
      icons: [
        { src: "/assets/images/img/innovation.png", tooltip: "Innovation" },
        { src: "/assets/images/img/personal.png", tooltip: "Personal Goals" }
      ],
      created: "1d ago",
      goal: "500,000 MRLN",
      messageCode: "#45df56"
    },
    {
      imgSrc: "/assets/images/img/cave9.png",
      title: "Wants to build old age home",
      author: "Michael",
      icons: [
        { src: "/assets/images/img/social.png", tooltip: "Social Responsibilities" }
      ],
      created: "2d ago",
      goal: "30,60,000 MRLN",
      messageCode: "#R0f549"
    },
    {
      imgSrc: "/assets/images/img/cave10.png",
      title: "Seeking funds for our group tour",
      author: "K. Hubbard",
      icons: [
        { src: "/assets/images/img/personal.png", tooltip: "Personal Goals" }
      ],
      created: "5d ago",
      goal: "99,000 MRLN",
      messageCode: "#f30852"
    },
  ];

  return (
    <div className="lg:overflow-x-scroll">
      <div className="xl:text-[14px] min-w-[950px] ">
      <ul className="flex items-center justify-between py-[15px] pr-[30px] xl:pr-[15px] uppercase">
        <li className="pl-[30px] xl:pl-[15px] pr-[15px] w-[40%]">Raven Message</li>
        <li className="px-[15px] xl:px-[5px] w-[15%]">Categories</li>
        <li className="px-[15px] xl:px-[5px] w-[15%]">Created</li>
        <li className="px-[15px] xl:px-[5px] w-[15%]">GOAL</li>
        <li className="px-[15px] xl:px-[5px] w-[15%] text-right xl:min-w-[max-content]">Message Code</li>
      </ul>
      {crystalData.map((crystal, index) => (
        <ul key={index} className="rounded-[20px] mb-[15px] relative crystal-table-row backdrop-blur-[10px] py-[15px] flex items-center justify-between pr-[30px] xl:pr-[15px]" style={{background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 50%, rgba(255, 255, 255, 0.08) 100%);'}}>
          <li className="w-[40%] px-[15px] xl:pr-[5px]">
            <div className="flex items-center justify-start">
              <div className="min-h-[60px] min-w-[60px] max-h-[60px] max-w-[60px] rounded-[15px] overflow-hidden">
                <Image src={crystal.imgSrc} alt="img" className="object-cover w-full h-full" width="60" height="60" />
              </div>
              <div className="ml-[14px]">
                <h3 className="overflow-hidden text-ellipsis text-[20px] font-[500] text-white lexend mb-[5px] text-nowrap max-w-[320px] xl:max-w-[260px]">{crystal.title}</h3>
                <p className="text-[16px] font-[500] lexend">{crystal.author}</p>
              </div>
            </div>
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
            <span className="text-[16px] text-white font-[400] lexend">{crystal.created}</span>
          </li>
          <li className="px-[15px] xl:px-[5px] w-[15%]">
            <span className="text-[16px] text-white font-[400] lexend">{crystal.goal}</span>
          </li>
          <li className="px-[15px] xl:pr-0 w-[15%] text-right">
            <span className="text-[16px] text-white font-[400] lexend">{crystal.messageCode}</span>
          </li>
        </ul>
      ))}
    </div>
    </div>
  );
};

export default CrystalTable;
