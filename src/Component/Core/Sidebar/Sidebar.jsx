import Image from "next/image";
import React, { useEffect, useState } from "react";
import MenuData from "../MenuData";
import Link from "next/link";

const Sidebar = ({ isSidebarVisible, setIsSidebarVisible }) => {
  const [sidebarStyle, setSidebarStyle] = useState({ width: "270px" });
  const [togglerStyle, setTogglerStyle] = useState({ left: "285px" });

  const [togglerUpStyle, setTogglerUpStyle] = useState({
    background: "#cdcdcd",
    transform: "translateY(2.4px) translateZ(0px) rotate(0deg)",
  });
  const [togglerDownStyle, setTogglerDownStyle] = useState({
    background: "#cdcdcd",
    transform: "translateY(-2.4px) translateZ(0px) rotate(0deg)",
  });

  const toggleSidebarVisible = () => {
    setIsSidebarVisible(!isSidebarVisible);

    if (!isSidebarVisible) {
      setTogglerStyle({
        left: "285px",
      });

      setTogglerUpStyle({
        background: "#cdcdcd",
        transform: "translateY(2.4px) translateZ(0px) rotate(0deg)",
      });

      setTogglerDownStyle({
        background: "#cdcdcd",
        transform: "translateY(-2.4px) translateZ(0px) rotate(0deg)",
      });

      setSidebarStyle({
        width: "270px",
      });
    } else {
      setTogglerStyle({
        left: "95px",
      });

      setTogglerUpStyle({
        background: "#cdcdcd",
        transform: "translateY(2.4px) translateZ(0px) rotate(-15deg)",
      });

      setTogglerDownStyle({
        background: "#cdcdcd",
        transform: "translateY(-2.4px) translateZ(0px) rotate(15deg)",
      });

      setSidebarStyle({
        width: "80px",
      });
    }
  };
  const handleMouseEnter = () => {
    if (!isSidebarVisible) {
      setTogglerUpStyle({
        background: "#cdcdcd",
        transform: "translateY(2.4px) translateZ(0px) rotate(-15deg)",
      });

      setTogglerDownStyle({
        background: "#cdcdcd",
        transform: "translateY(-2.4px) translateZ(0px) rotate(15deg)",
      });
    } else {
      setTogglerUpStyle({
        background: "#cdcdcd",
        transform: "translateY(2.4px) translateZ(0px) rotate(15deg)",
      });

      setTogglerDownStyle({
        background: "#cdcdcd",
        transform: "translateY(-2.4px) translateZ(0px) rotate(-15deg)",
      });
    }
  };

  const handleMouseLeave = () => {
    if (!isSidebarVisible) {
      setTogglerUpStyle({
        background: "#cdcdcd",
        transform: "translateY(2.4px) rotate(-15deg)",
      });

      setTogglerDownStyle({
        background: "#cdcdcd",
        transform: "translateY(-2.4px) rotate(15deg)",
      });
    } else {
      setTogglerUpStyle({
        background: "#cdcdcd",
        transform: "translateY(2.4px) rotate(0deg)",
      });

      setTogglerDownStyle({
        background: "#cdcdcd",
        transform: "translateY(-2.4px) rotate(0deg)",
      });
    }
  };

  useEffect(() => {
    const submenuToggle = document.querySelectorAll(".submenu-toggle");
    if (submenuToggle.length) {
      submenuToggle.forEach((item, i) => {
        item.addEventListener("click", () => {
          item.parentNode.classList.toggle("active");
          item.classList.toggle("active");
          const submenu = item.parentNode.querySelector(".submenu");
          submenu.classList.toggle("active");

          // Remove "active" className from sibling submenus
          const siblings = Array.from(item.parentNode.parentNode.children);
          siblings.forEach((sibling) => {
            if (
              sibling !== item.parentNode &&
              sibling.querySelector(".submenu")
            ) {
              sibling.classList.remove("active");
              sibling.querySelector(".submenu").classList.remove("active");
              sibling
                .querySelector(".submenu-toggle")
                .classList.remove("active");
            }
          });
        });
      });
    }
  }, []);

  return (
    <>
      {/* toggler button */}
      <div
        className="fixed z-[9999] top-[50%] w-[25px] h-[30px] duration-200 flex items-center justify-start xl:hidden"
        style={togglerStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={toggleSidebarVisible}
      >
        <button>
          <div className="flex fixed top-[93px] items-center justify-center">
            <div className="flex flex-col items-center w-6 h-6">
              <div
                className="h-3 w-1 rounded-full duration-200"
                style={togglerUpStyle}
              ></div>
              <div
                className="h-3 w-1 rounded-full duration-200"
                style={togglerDownStyle}
              ></div>
            </div>
          </div>
        </button>
      </div>

      {/* sidebar menu */}
      <div
        className="fixed z-[999] top-[15px] left-[15px] h-[calc(100vh-30px)] duration-[200ms] xl:hidden rounded-[25px] border-[1px] border-[#FFFFFF12] bg-gradient-to-b from-[#ffffff10] to-[#ffffff02] backdrop-blur-[10px]"
        style={sidebarStyle}
      >
        <div className="pt-[22px] pl-[25px] pb-[23px] border-b border-[#ffffff12]">
          {isSidebarVisible ? (
            <Link href="/">
              <Image
                src="/assets/images/logo/logo.svg"
                alt="logo"
                width="145"
                height="45"
              />
            </Link>
          ) : (
            <Link href="#">
              <Image
                src="/assets/images/logo/logo-short.svg"
                alt="logo"
                width="31"
                height="45"
              />
            </Link>
          )}
        </div>
        {isSidebarVisible ? (
          <ul className="sidebar-menu p-[10px]">
            {MenuData?.map((menuItem, menuId) => (
              <li
                key={menuId}
                className={`my-[10px] ${
                  menuItem?.subMenus?.length > 0 ? "has-submenu" : ""
                }`}
              >
                <Link
                  href={menuItem.url}
                  // className={ menuItem.title === "Grants" ? " px-[15px] py-[5px] flex items-center gap-[14px] capitalize text-[16px] font-normal text-[#ffffffcc] bg-transparent hover:text-white hover:bg-transparent active:!bg-transparent pointer-events-none text-gray-500 ": `px-[15px] py-[5px] flex items-center gap-[14px] capitalize text-[16px] font-normal text-[#ffffffcc] bg-transparent hover:text-white hover:bg-transparent active:!bg-transparent ${menuItem?.subMenus ? "submenu-toggle" : ""
                  //   }`}

                  className={`px-[15px] py-[5px] flex items-center gap-[14px] capitalize text-[16px] font-normal text-[#ffffffcc] bg-transparent  hover:bg-transparent active:!bg-transparent ${
                    menuItem.title === "Grants" ||
                    menuItem.title === "Proposals"
                      ? "text-gray-500"
                      : null
                  } text-[#ffffffcc] ${
                    menuItem?.subMenus ? "submenu-toggle" : ""
                  }`}
                >
                  <Image src={menuItem.src} alt="icon" width="18" height="18" />
                  {menuItem.title}
                </Link>
                {menuItem?.subMenus && (
                  <ul className="pl-[20px] submenu">
                    {menuItem.subMenus?.map((submenuItem, submenuId) => (
                      <li key={submenuId}>
                        <Link
                          href={submenuItem.url}
                          className={`py-[5px] px-[15px] ml-[15px] rounded-l-[10px] flex items-center gap-[14px] capitalize text-[16px] font-normal ${
                            submenuItem.title === "projects" ||
                            submenuItem.title === "Grant bonuses" ||
                            submenuItem.title === "Apply for a grant" ||
                            submenuItem.title === "Camelot Proposal" ||
                            submenuItem.title === "community Assesment" ||
                            submenuItem.title === "Senator Assessment" ||
                            submenuItem.title === "Excalibur Proposal"
                              ? "pointer-events-none text-gray-500"
                              : "text-[#ffffffcc] hover:text-[#12CFA7] hover:bg-gradient-to-br hover:from-[#ffffff19] hover:to-[#ffffff00]"
                          }`}
                          // className="py-[5px] px-[15px] ml-[15px] rounded-l-[10px] flex items-center gap-[14px] capitalize text-[16px] font-normal text-[#ffffffcc] hover:text-[#12CFA7] hover:bg-gradient-to-br hover:from-[#ffffff19] hover:to-[#ffffff00]"
                        >
                          {submenuItem.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <ul className="sidebar-menu small p-[10px]">
            {MenuData?.map((menuItem, menuId) => (
              <li
                key={menuId}
                className={`my-[13px] ${
                  menuItem?.subMenus ? "has-submenu" : ""
                }`}
              >
                <a
                  href={menuItem.url}
                  className={`px-[15px] py-[5px] flex items-center gap-[14px] capitalize text-[16px] font-normal text-[#ffffffcc] bg-transparent hover:text-white hover:bg-transparent active:!bg-transparent ${
                    menuItem?.subMenus ? "submenu-toggle" : ""
                  }`}
                >
                  <Image src={menuItem.src} alt="icon" width="16" height="16" />
                  <span> {menuItem.title} </span>
                </a>
                {menuItem?.subMenus && (
                  <ul className="pl-[20px] submenu">
                    {menuItem.subMenus?.map((submenuItem, submenuId) => (
                      <li key={submenuId}>
                        <a
                          href={submenuItem.url}
                          className="py-[5px] px-[15px] ml-[15px] rounded-l-[10px] flex items-center gap-[14px] capitalize text-[16px] font-normal text-[#ffffffcc] hover:text-[#12CFA7] hover:bg-gradient-to-br hover:from-[#ffffff19] hover:to-[#ffffff00]"
                        >
                          <span>{submenuItem.title}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        )}
        <div className="fixed bottom-0 left-0 w-full">
          <div className="p-[10px]">
            {isSidebarVisible ? (
              <a
                href="#"
              className="pl-[15px] flex items-center gap-[14px] h-[40px] w-full text-[16px]  pointer-events-none text-gray-500"
                // className="pl-[15px] flex items-center gap-[14px] h-[40px] w-full text-[16px] font-normal text-white capitalize rounded-full bg-gradient-to-br from-[#ffffff19] to-[#ffffff00]"
              >
                <Image
                  src="/assets/images/icons/help.svg"
                  alt="icon"
                  width="16"
                  height="16"
                />
                Help Center
              </a>
            ) : (
              <a
                href="#"
                className="pl-[0px] flex items-center justify-center gap-[14px] h-[40px] w-full text-[16px] font-normal text-white capitalize rounded-full bg-gradient-to-br from-[#ffffff19] to-[#ffffff00]"
              >
                <Image
                  src="/assets/images/icons/help.svg"
                  alt="icon"
                  width="16"
                  height="16"
                />
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
