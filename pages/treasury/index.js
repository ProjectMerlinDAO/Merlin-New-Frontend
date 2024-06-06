import Treasury from '@/src/Component/App/AppHome/Treasury/Treasury';
import AppFooter from '@/src/Component/Core/AppFooter/AppFooter';
import AppHeader from '@/src/Component/Core/AppHeader';
import Sidebar from '@/src/Component/Core/Sidebar/Sidebar';
import React, { useEffect, useState } from 'react'

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
    <Treasury/>
    <AppFooter isSidebarVisible={isSidebarVisible} />
  </>
  )
}

export default Index;