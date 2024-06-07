import React, { useEffect, useState } from "react";
import AppHeader from "../../Core/AppHeader";
import Sidebar from "../../Core/Sidebar/Sidebar";
import AppFooter from "../../Core/AppFooter/AppFooter";
import TreasuryContent from "./TreasuryContent";

const TreasuryPageContent = () => {
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
            <TreasuryContent isSidebarVisible={isSidebarVisible}/>

            <AppFooter isSidebarVisible={isSidebarVisible} />
        </>
    )
}

export default TreasuryPageContent