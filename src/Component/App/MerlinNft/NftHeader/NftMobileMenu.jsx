import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const NftMobileMenu = () => {
  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="rounded-none drawer-content">
        {/* Page content here */}
        <label htmlFor="my-drawer-4" className="drawer-button">
          <Image src="/assets/images/menuIcons/menu.svg" alt="menu-icon" height="22" width="22" />
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
        <div className="max-w-[375px] w-full p-[30px] h-full !rounded-[0px]">
          <Link href="/nft">
            <Image src="/assets/images/logo/nft-logo.svg" alt="logo" height="65" width="150" />
          </Link>
          <label htmlFor="my-drawer-4" className="drawer-button absolute top-[30px] right-[30px] z-10">
            <Image src="/assets/images/menuIcons/menu-close.svg" alt="menu-icon" height="22" width="22" />
          </label>

          <form className="search-bar bg-[rgba(255,255,255,0.08)] mt-[40px] xl:pl-[10px] rounded-[25px] h-[50px] w-full flex items-center justify-start pr-[10px]">
            <button type='submit' className="flex items-center justify-center w-[10%] no-border">
              <img src="./assets/images/icons/search.svg" alt="icon" />
            </button>
            <input type='search' placeholder='Search by Items, Creator or collectible' className="bg-transparent text-white w-[90%] no-border" />
          </form>

          <ul className='text-white uppercase mt-[30px]'>
            <li className='mb-[20px]'><Link href="#">Home</Link></li>
            <li className='mb-[20px]'><Link href="#">NFTs</Link></li>
            <li className='mb-[20px]'><Link href="#">Drops</Link></li>
          </ul>
          <div className="header-bts mt-[20px] flex items-center justify-start gap-[35px] xl:gap-[20px]">
            <a
              href="#"
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
                <span className="btn-text">Connect</span>
                <span className="btn-text">Connect</span>
              </span>
            </a>
            
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

          </div>
        </div>

      </div>
    </div>
  )
}

export default NftMobileMenu