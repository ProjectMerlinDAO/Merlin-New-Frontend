import React from 'react'
import NftContainerWrapper from '../NftContainerWrapper'
import Link from 'next/link';
import Image from "next/image";
import NftMobileMenu from './NftMobileMenu';
import { useWallet } from '@solana/wallet-adapter-react';
import NftDropdown from '@/src/Component/Core/Modals/nftDropDown';
import { useRouter } from "next/router";

const NftHeader = () => {
    const { publicKey, disconnect } = useWallet();
    const router = useRouter()
    const handleDisconnect = () => {
        disconnect();
        router.push("/");
      }

    return (
        <div className='w-full absolute left-[0] top-[0] z-[999]'>
            <NftContainerWrapper>
                <div className="flex items-center justify-between py-[15px]">
                    <div className="flex items-center justify-start nft-header-left gap-[64px] 2xl:gap-[25px]">
                        <Link className="logo nft-logo" href="/">
                            <img src="./assets/images/logo/nft-logo.svg" alt="logo" />
                        </Link>
                        <form className="search-bar bg-[rgba(255,255,255,0.08)] xl:pl-[10px] lg:hidden rounded-[25px] h-[50px] w-[470px] 2xl:w-[380px] xl:w-[300px] flex items-center justify-start pr-[10px]">
                            <button type='submit' className="flex items-center justify-center w-[10%] no-border">
                                <img src="./assets/images/icons/search.svg" alt="icon" />
                            </button>
                            <input type='search' placeholder='Search by Items, Creator or collectible' className="bg-transparent text-white w-[90%] no-border" />
                        </form>
                    </div>
                    <div className="flex items-center justify-end nft-header-right gap-[35px] xl:gap-[20px] lg:hidden">
                        <ul className="flex items-center justify-end gap-[35px] xl:gap-[20px] text-[16px] font-[700] text-[#FFFFFF] leading-[162.5%]">
                            <li><Link href="launch-app" className="uppercase">Home</Link></li>
                            <li><Link href="/nft" className="uppercase">NFTs</Link></li>
                            <li><a href="#" className="pointer-events-none text-gray-500 uppercase">Drops</a></li>
                        </ul>
                        <div className="header-bts flex items-center justify-end gap-[35px] xl:gap-[20px]">
                            <Link
                                href="https://discord.com/invite/projectmerlin"
                                target='_blank'
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
                            </Link>
                            {/* {{publicKey ?
                    <Dropdown wallet={publicKey} />
                  ) :} */}
                            {publicKey ? <NftDropdown wallet={publicKey} handleDisconnect={handleDisconnect}/> :
                                <div
                                    className="flex btn-has-shape light-shape items-center justify-center hov-btn rounded-full gap-[8px] nft-connect-btn h-[50px] w-[170px] sm:w-[170px] text-[#0CE466] text-center font-[600] text-[16px] sm:text[14px] uppercase quantico"
                                    style={{ background: 'linear-gradient(90deg, rgba(12, 228, 102, 0.15) 0%, rgba(255, 255, 255, 0.15) 100%)' }}
                                >
                                    <Image
                                        src="/assets/images/icons/wallet-green.svg"
                                        alt="icon"
                                        width="20"
                                        height="20"
                                    />
                                    <span className="btn-hov-text">
                                        <span className="btn-text cursor-pointer">{publicKey ? publicKey.toBase58().slice(0, 3) + "......" + publicKey.toBase58().slice(-4) : "Connect"}</span>
                                        <span className="btn-text cursor-pointer">{publicKey ? publicKey.toBase58().slice(0, 3) + "......" + publicKey.toBase58().slice(-4) : "Connect"}</span>
                                    </span>
                                </div>
                            }
                        </div>
                    </div>
                    <div className="hidden lg:block">
                        <NftMobileMenu />
                    </div>
                </div>
            </NftContainerWrapper>
        </div>
    )
}

export default NftHeader