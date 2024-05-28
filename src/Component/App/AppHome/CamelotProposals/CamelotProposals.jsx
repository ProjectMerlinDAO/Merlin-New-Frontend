import React from "react";
import CamelotCard from "./CamelotCard";
import SectionTitle from "@/src/Component/Core/SectionTitle";

const CamelotProposals = ({ isSidebarVisible }) => {
  // Define array of objects containing data for each CamelotCard
  const camelotData = [
    {
      title: "I want plant 10 million trees",
      imageSrc: "/assets/images/img/camelot1.png",
      editorAvatar: "/assets/images/avater/avater1.png",
      editorName: "Smith",
      treasury: "700,000",
      category: "Personal Goals",
      date: "Jan 2nd",
    },
    {
      title: "Seeking funds for our gro...",
      imageSrc: "/assets/images/img/camelot2.png",
      editorAvatar: "/assets/images/avater/avater2.png",
      editorName: "K. Deemer",
      treasury: "700,000",
      category: "Personal Goals",
      date: "Jan 2nd",
    },
    {
      title: "Want to visit Maldives",
      imageSrc: "/assets/images/img/camelot3.png",
      editorAvatar: "/assets/images/avater/avater3.png",
      editorName: "Birdsong",
      treasury: "700,000",
      category: "Personal Goals",
      date: "Jan 2nd",
    },
    {
      title: "I need sports shoes",
      imageSrc: "/assets/images/img/camelot4.png",
      editorAvatar: "/assets/images/avater/avater4.png",
      editorName: "Thompson",
      treasury: "700,000",
      category: "Personal Goals",
      date: "Jan 2nd",
    },
    {
      title: "Wants to build old age h...",
      imageSrc: "/assets/images/img/camelot5.png",
      editorAvatar: "/assets/images/avater/avater5.png",
      editorName: "Stephen",
      treasury: "700,000",
      category: "Personal Goals",
      date: "Jan 2nd",
    },
    {
      title: "I want sport equipments...",
      imageSrc: "/assets/images/img/camelot6.png",
      editorAvatar: "/assets/images/avater/avater6.png",
      editorName: "Nilsson",
      treasury: "700,000",
      category: "Personal Goals",
      date: "Jan 2nd",
    },
    {
      title: "We want to build VR",
      imageSrc: "/assets/images/img/camelot7.png",
      editorAvatar: "/assets/images/avater/avater7.png",
      editorName: "Smith",
      treasury: "700,000",
      category: "Personal Goals",
      date: "Jan 2nd",
    },
    {
      title: "I need Fund for a AI sof...",
      imageSrc: "/assets/images/img/camelot8.png",
      editorAvatar: "/assets/images/avater/avater8.png",
      editorName: "D. Barnes",
      treasury: "700,000",
      category: "Personal Goals",
      date: "Jan 2nd",
    },
    // Add more objects for additional CamelotCards if needed
  ];

  return (
    <div className="pt-[100px] xl:pt-[80px] lg:pt-[60px] sm:pt-[50px]">
      <div  className={`app-home-wrapper ${
          isSidebarVisible ? "sidebar-visible" : "sidebar-hidden"
        }`}>
        <div className="px-[20px] md:px-[10px] max-w-[1365px] mx-auto lg:max-w-[720px]">
          <SectionTitle title="Camelot Proposals" subtitle="This month" alignment="center" titleMaxW="450px" titleMargin="mb-[60px] lg:mb-[30px]" />

          <div className="flex items-start justify-start mx-[-15px] flex-wrap">
            {/* Map over camelotData to render CamelotCard dynamically */}
            {camelotData.map((data, index) => (
              <div
                key={index}
                className="w-1/4 2xl:w-1/3 lg:w-2/4 sm:w-full mb-[30px] px-[15px]"
              >
                <CamelotCard
                  title={data.title}
                  imageSrc={data.imageSrc}
                  editorAvatar={data.editorAvatar}
                  editorName={data.editorName}
                  treasury={data.treasury}
                  category={data.category}
                  date={data.date}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CamelotProposals;
