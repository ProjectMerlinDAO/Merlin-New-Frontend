import React, { useEffect, useState } from "react";
import SenatorAssessment from "@/src/Component/App/AppHome/SenatorAssessment/SenatorAssessment";
import AppHeader from "@/src/Component/Core/AppHeader";
import Sidebar from "@/src/Component/Core/Sidebar/Sidebar";
import AppFooter from "@/src/Component/Core/AppFooter/AppFooter";

const Index = () => {
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
      <SenatorAssessment isSidebarVisible={isSidebarVisible} />
      <AppFooter isSidebarVisible={isSidebarVisible} />
    </>
  );
};
export default Index;
