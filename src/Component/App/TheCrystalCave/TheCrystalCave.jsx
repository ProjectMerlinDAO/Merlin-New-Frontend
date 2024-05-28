import React, { useEffect, useState } from "react";
import AppHeader from '../../Core/AppHeader'
import AppFooter from '../../Core/AppFooter/AppFooter'
import Sidebar from '../../Core/Sidebar/Sidebar'
import TheCrystalCaveContent from "./TheCrystalCaveContent";

const TheCrystalCave = () => {
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
            <TheCrystalCaveContent isSidebarVisible={isSidebarVisible}/>

            <AppFooter isSidebarVisible={isSidebarVisible} />
        </>
    )
}

export default TheCrystalCave