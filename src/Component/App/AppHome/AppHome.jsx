import React, { useEffect, useState } from "react";
import AppHeader from "../../Core/AppHeader";
import Sidebar from "../../Core/Sidebar/Sidebar";
import AppBanner from "./AppBanner/AppBanner";
import Proposal from "./Proposal/Proposal";
import HowWork from "./HowWork/HowWork";
import CommunityAssessment from "./CommunityAssessment/CommunityAssessment";
import SenatorAssessment from "./SenatorAssessment/SenatorAssessment";
import CrystalCave from "./CrystalCave/CrystalCave";
import CamelotProposals from "./CamelotProposals/CamelotProposals";
import Treasury from "./Treasury/Treasury";
import AppFooter from "../../Core/AppFooter/AppFooter";

const AppHome = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [contentStyle, setContentStyle] = useState({ marginLeft: "285px" });

  useEffect(() => {
    if (isSidebarVisible) {
      setContentStyle({
        marginLeft: "285px",
      });
    } else {
      setContentStyle({
        marginLeft: "0px",
      });
    }
  }, [isSidebarVisible]);

  return (
    <>
      <AppHeader isSidebarVisible={isSidebarVisible} />
      <Sidebar
        isSidebarVisible={isSidebarVisible}
        setIsSidebarVisible={setIsSidebarVisible}
      />
      <AppBanner isSidebarVisible={isSidebarVisible} />
      <Proposal isSidebarVisible={isSidebarVisible} />
      <HowWork isSidebarVisible={isSidebarVisible} />
      <CommunityAssessment isSidebarVisible={isSidebarVisible} />
      <SenatorAssessment isSidebarVisible={isSidebarVisible} />
      <CrystalCave isSidebarVisible={isSidebarVisible} />
      <CamelotProposals isSidebarVisible={isSidebarVisible} />
      <Treasury isSidebarVisible={isSidebarVisible} />
      <AppFooter isSidebarVisible={isSidebarVisible} />
    </>
  );
};

export default AppHome;
