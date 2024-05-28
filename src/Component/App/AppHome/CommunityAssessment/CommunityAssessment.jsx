import React from "react";
import AssessmentCard from "../../../Core/AssessmentCard";
import SectionTitle from "@/src/Component/Core/SectionTitle";

const CommunityAssessment = ({ isSidebarVisible }) => {
  // Define array of objects containing data for each AssessmentCard
  const assessmentData = [
    {
      title: "Personal Goals",
      cardImg: "/assets/images/img/personal.png",
      totalPreProposal: 20,
      description: 'At this stage, 20 different pre-proposals are evaluated by the community. Community members participating in this stage are rewarded with both Merlin Tokens and bonus tokens.',
      description2: 'Evaluate the pre-proposals created by the editors and the candidates in these pre-proposals. Vote for the pre-proposal that you believe will benefit the community or deserves it, and make it become the Camelot Proposal.',
      voteLink: "#",
      icons: [
        "/assets/images/icons/glob.svg",
        "/assets/images/icons/discord-outline.svg",
      ],
      timerText: "Election Ends in",
      imgSrc: "/assets/images/img/community-shape.png",
    },
    {
      title: "Sports and Arts",
      cardImg: "/assets/images/img/sports.png",
      totalPreProposal: 20,
      description: 'At this stage, 20 different pre-proposals are evaluated by the community. Community members participating in this stage are rewarded with both Merlin Tokens and bonus tokens.',
      description2: 'Evaluate the pre-proposals created by the editors and the candidates in these pre-proposals. Vote for the pre-proposal that you believe will benefit the community or deserves it, and make it become the Camelot Proposal.',
      voteLink: "#",
      icons: [
        "/assets/images/icons/glob.svg",
        "/assets/images/icons/discord-outline.svg",
      ],
      timerText: "Election Ends in",
      imgSrc: "/assets/images/img/community-shape.png",
    },
    {
      title: "Social Responsibilities",
      cardImg: "/assets/images/img/social.png",
      totalPreProposal: 20,
      description: 'At this stage, 20 different pre-proposals are evaluated by the community. Community members participating in this stage are rewarded with both Merlin Tokens and bonus tokens.',
      description2: 'Evaluate the pre-proposals created by the editors and the candidates in these pre-proposals. Vote for the pre-proposal that you believe will benefit the community or deserves it, and make it become the Camelot Proposal.',
      voteLink: "#",
      icons: [
        "/assets/images/icons/glob.svg",
        "/assets/images/icons/discord-outline.svg",
      ],
      timerText: "Election Ends in",
      imgSrc: "/assets/images/img/community-shape.png",
    },
    {
      title: "Innovation",
      cardImg: "/assets/images/img/innovation.png",
      totalPreProposal: 20,
      description: 'At this stage, 20 different pre-proposals are evaluated by the community. Community members participating in this stage are rewarded with both Merlin Tokens and bonus tokens.',
      description2: 'Evaluate the pre-proposals created by the editors and the candidates in these pre-proposals. Vote for the pre-proposal that you believe will benefit the community or deserves it, and make it become the Camelot Proposal.',
      voteLink: "#",
      icons: [
        "/assets/images/icons/glob.svg",
        "/assets/images/icons/discord-outline.svg",
      ],
      timerText: "Election Ends in",
      imgSrc: "/assets/images/img/community-shape.png",
    },
    // Add more objects for additional AssessmentCards if needed
  ];

  return (
    <div className="pt-[100px] xl:pt-[80px] lg:pt-[60px] sm:pt-[50px]">
      <div  className={`app-home-wrapper ${
          isSidebarVisible ? "sidebar-visible" : "sidebar-hidden"
        }`}>
        <div className="px-[20px] md:px-[10px] max-w-[1365px] mx-auto lg:max-w-[720px]">
          <SectionTitle title="Community Assessment" subtitle="February’s Elections" alignment="text-left" titleMaxW="520px" titleMargin="mb-[60px] lg:mb-[30px]" />
          <div className="flex items-start flex-wrap mx-[-23px] xl:mx-[-15px]">

            {/* Map over assessmentData to render AssessmentCard dynamically */}
            {assessmentData.map((data, index) => (
              <div key={index} className="px-[23px] xl:px-[15px] w-2/4 md:w-full mb-[40px] lg:mb-[20px]">
                <AssessmentCard
                  title={data.title}
                  cardImg={data.cardImg}
                  totalPreProposal={data.totalPreProposal}
                  description={data.description}
                  description2={data.description2}
                  voteLink={data.voteLink}
                  icons={data.icons}
                  timerText={data.timerText}
                  imgSrc={data.imgSrc}
                  tagBg="linear-gradient(90deg, rgba(100, 3, 223, 0.00) 0%, rgba(100, 3, 223, 0.30) 100%)"
                  assesmentTag="Community"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityAssessment;
