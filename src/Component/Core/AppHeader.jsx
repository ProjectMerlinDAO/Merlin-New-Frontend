import Image from "next/image";
import React, { useEffect, useState } from "react";
import MenuData from "./MenuData";
import Link from "next/link";
import SignInPopup from "../App/Auth/SignInPopup";
// import { useAccount } from "wagmi";
// import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useWallet } from "@solana/wallet-adapter-react";
import axios from "axios";
import Dropdown from "./Modals/dropdown";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import SignIn from "@/pages/sign-in";
import { sign } from "viem/accounts";
import LogIn from "./Modals/Login";
import { updateUserDetails } from "@/src/redux/UserSlice";

const AppHeader = ({ isSidebarVisible }) => {
  const data = useSelector((state) => state.user.referral);
  const userName = useSelector((state) => state.user.userName);
  const dispatch = useDispatch();
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  // const { open } = useWeb3Modal();
  const { publicKey, disconnect } = useWallet();
  // const { address } = useAccount();
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false);
  const [isSign, setIsSign] = useState(false);
  const handleSignin = () => {
    // if (address) {
    // open();
    // } else {
    setIsOpen(true);
  }
  const handleDisconnect =async () => {
    disconnect();
    dispatch(updateUserDetails({
      name: "",
      email: "",
      token: ""
    }));
    const res = await axios.post(`${baseUrl}/user/signOut`,{},{ headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: true,})
    router.push('/');
  }
  const handleClick = () => {
    // if (!publicKey) {
      handleSignin();
    // }
  };

  const registerUser = async () => {
    if (data && data !== "") {
      const user = await axios.post(`${baseUrl}/user/details`, {
        wallet: publicKey?.toBase58(),
        referral: data
      })
      console.log(user)
    } else {
      const user = await axios.post(`${baseUrl}/user/details`, {
        wallet: publicKey?.toBase58()
      })
      console.log(user)
    }
  };

  const handleNft = () => {
    if (!publicKey) {
      toast.error("Please Connect wallet to proceed further");
      return;
    } else {
      router.push("/nft")
      // toast.success("Nft page is in development")
    }
  };

  // useEffect(() => {
  //   if (publicKey) {
  //     registerUser();
  //   }
  // }, [publicKey]);


  return (
    <>
      {isOpen ? <SignInPopup isOpen={isOpen} setIsOpen={setIsOpen} setIsSign={setIsSign} /> : null}
      {isSign && !isOpen ? <LogIn isOpen={isSign} setIsOpen={setIsSign} /> : null}
      <header className="absolute top-0 left-0 z-[555] flex items-center w-full h-[110px]">
        <div
          className={`app-home-wrapper ${isSidebarVisible ? "sidebar-visible" : "sidebar-hidden"
            }`}
        >
          <div className="px-[20px] md:px-[10px] max-w-[1365px] mx-auto lg:max-w-[720px] ">
            <div className="flex items-center app-header-content relative z-[555]">
              <label
                htmlFor="my-drawer"
                className="hidden cursor-pointer drawer-button xl:block"
              >
                <Image
                  src="/assets/images/menuIcons/menu.svg"
                  alt="icon"
                  width="25"
                  height="25"
                />
              </label>
              <label className="hidden cursor-pointer xl:block ml-[25px]">
                <Link href="/">
                  <Image
                    src="/assets/images/logo/logo-short.svg"
                    alt="icon"
                    width="29"
                    height="40"
                  />
                </Link>
              </label>

              <ul className="flex items-center justify-end gap-[20px] ml-auto app-header-right">
                <li className="xl:hidden">
                  <Link
                    href="https://discord.gg/projectmerlin"
                    target="_blank"
                    className="icon-btn btn-has-shape social-icon hov-btn bg-[#ffffff19] h-[50px] w-[50px] rounded-full bg-opacity-10 backdrop-blur-[5px] flex items-center justify-center"
                  >
                    <span className="btn-icons">
                      <span className="btn-icon">
                        <Image
                          src="/assets/images/icons/discord.svg"
                          alt="icon"
                          width="20"
                          height="20"
                        />
                      </span>
                      <span className="btn-icon">
                        <Image
                          src="/assets/images/icons/discord.svg"
                          alt="icon"
                          width="20"
                          height="20"
                        />
                      </span>
                    </span>
                  </Link>
                </li>
                <li className="xl:hidden">
                  <div
                    onClick={handleNft}
                    // href="#"
                    className="cursor-pointer buy-btn btn-has-shape hov-btn bg-[#ffffff19] rounded-full bg-opacity-10 backdrop-blur-[5px] h-[50px] w-[170px] sm:w-[120px] flex items-center justify-center text-white text-center  font-[600] text-[16px] sm:text[14px] uppercase quantico"
                  >
                    <span className="btn-hov-text" >
                      <span className="btn-text">Buy NFT</span>
                      <span className="btn-text">Buy NFT</span>
                    </span>
                  </div>
                </li>
                {userName ?
                  (<li>
                    <Dropdown wallet={publicKey} handleDisconnect={handleDisconnect} name={userName} />
                  </li>) :
                  (<li>
                    <div
                      // href="#"
                      onClick={handleClick}
                      className="cursor-pointer flex btn-has-shape items-center justify-center hov-btn rounded-full gap-[8px] connect-btn bg-12CFA7 h-[50px] w-[170px] sm:w-[140px] bg-[#12CFA7] text-white text-center  font-[600] text-[16px] sm:text[14px] uppercase quantico"
                    >{userName ? null :
                      <Image
                        src="/assets/images/icons/wallet.svg"
                        alt="icon"
                        width="20"
                        height="20"
                      />
                      }
                      <span className="btn-hov-text">
                        <span className="btn-text">
                          {userName ? userName : "Login"}
                        </span>
                        <span className="btn-text">
                          {userName ? userName : "Login"}
                        </span>
                      </span>
                    </div>
                  </li>)
                }
              </ul>
            </div>
          </div>
        </div>
      </header>

      <div className="drawer fixed z-[999999] top-0 left-0">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />

        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>

          <ul className="menu p-4 w-[320px] min-h-full bg-[#ffffff19] backdrop-blur-[10px]">
            <li className="flex flex-row items-center justify-between w-full mb-5">
              <label
                htmlFor="my-drawer"
                className="drawer-button flex items-center justify-end hover:bg-transparent active:!bg-transparent"
              >
                <Image
                  src="/assets/images/menuIcons/menu-close.svg"
                  alt="icon"
                  width="20"
                  height="20"
                />
              </label>

              <a
                href="#"
                className="icon-btn btn-has-shape mr-[-10px] !p-0 social-icon hov-btn bg-[#ffffff19] h-[50px] w-[50px] rounded-full bg-opacity-10 backdrop-blur-[5px] flex items-center justify-center"
              >
                <span className="btn-icons">
                  <span className="btn-icon">
                    <Image
                      src="/assets/images/icons/discord.svg"
                      alt="icon"
                      width="20"
                      height="20"
                    />
                  </span>
                  <span className="btn-icon">
                    <Image
                      src="/assets/images/icons/discord.svg"
                      alt="icon"
                      width="20"
                      height="20"
                    />
                  </span>
                </span>
              </a>
              <a
                href="#"
                className="buy-btn btn-has-shape hov-btn bg-[#ffffff19] rounded-full bg-opacity-10 backdrop-blur-[5px] h-[50px] w-[170px] sm:w-[120px] flex items-center justify-center text-white text-center  font-[600] text-[16px] sm:text[14px] uppercase quantico"
              >
                <span className="btn-hov-text mobile-menu-buy-btn !h-[17px]">
                  <span className="btn-text">Buy NFT</span>
                  <span className="btn-text">Buy NFT</span>
                </span>
              </a>
            </li>

            {MenuData?.map((menuItem, menuId) => (
              <div key={menuId} className="w-full">
                {menuItem?.subMenus ? (
                  <li className="mb-[5px]">
                    <details className="rounded-[15px] open:bg-gradient-to-br open:from-[#ffffff19] open:to-[#ffffff00]">
                      <summary className="hover:bg-transparent active:!bg-transparent">
                        <a
                          href={menuItem.url}
                          className="pt-[5px] pb-[12px] flex items-center gap-[14px] capitalize text-[16px] font-medium text-[#ffffffcc] hover:text-white"
                        >
                          <Image
                            src={menuItem.src}
                            alt="icon"
                            width="16"
                            height="16"
                          />
                          {menuItem.title}
                        </a>
                      </summary>
                      <ul className="mt-[-10px] mb-[12px] before:bg-[#ffffff1f] before:opacity-100">
                        {menuItem.subMenus?.map((submenuItem, submenuId) => (
                          <li key={submenuId}>
                            <span className="absolute top-[50%] left-[-7px] w-[10px] h-[1px] p-0 bg-[#ffffff1f] hover:bg-[#ffffff1f]"></span>
                            <a
                              href={submenuItem.url}
                              className="pt-[10px] pb-[10px] px-[20px] ml-[6px] flex items-center gap-[14px]  capitalize text-[16px] font-medium text-[#ffffffcc] hover:text-[#12CFA7] hover:bg-gradient-to-br hover:from-[#ffffff19] hover:to-[#ffffff00]"
                            >
                              {submenuItem.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </details>
                  </li>
                ) : (
                  <li key={menuId} className="mb-[10px]">
                    <a
                      href={menuItem.url}
                      className="px-[15px] flex items-center gap-[14px] capitalize text-[16px] font-medium text-[#ffffffcc] bg-transparent hover:text-white hover:bg-transparent active:!bg-transparent"
                    >
                      <Image
                        src={menuItem.src}
                        alt="icon"
                        width="16"
                        height="16"
                      />
                      {menuItem.title}
                    </a>
                  </li>
                )}
              </div>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default AppHeader;
