import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import HomeMobileMenu from './HomeMobileMenu'
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  return (
    <div className='main-header absolute z-[9999] top-0 left-0 w-full'>
      <div className="px-[20px] md:px-[10px] max-w-[1450px] mx-auto lg:max-w-[720px]">
        <div className="flex items-center justify-between py-[9px]">
          <div className="left">
            <Link href="/" className='logo'>
              <Image src="/assets/images/logo/main-logo.svg" alt="logo" height="80" width="190" className="h-[80px] w-[190px] md:h-[65px] md:w-[150px]" />
            </Link>
          </div>
          <div className="center max-w-[529px] w-full mx-auto lg:hidden">
            <ul className='flex items-center justify-between w-full text-white uppercase quantico'>
              <li><Link href={router.pathname === "/" ? "#home" : "/#home"}>Home</Link></li>
              <li><Link href={router.pathname === "/" ? "#Tokeneconomics" : "/#Tokeneconomics"}>Token</Link></li>
              <li><Link target="_blank" href="https://docs.projectmerlin.io/projectmerlin">Docs</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href={router.pathname === "/" ? "#faq" : "/#faq"}>FAQ</Link></li>
              <li className="pointer-events-none text-gray-500"><Link  href="#">Articles</Link></li>
              <li><Link  href="/blog">Blog</Link></li>
            </ul>
          </div>
          <div className="right">
            <Link href="/launch-app" className="buy-btn btn-has-shape hov-btn bg-[#FFFFFF] rounded-full h-[50px] w-[150px] sm:w-[120px] flex items-center justify-center text-[#111111] text-center leading-trim-both text-edge-cap font-[600] text-[16px] sm:text[14px] uppercase quantico lg:hidden">
              <span className="btn-hov-text">
                <span className="btn-text">Launch App</span>
                <span className="btn-text">Launch App</span>
              </span>
            </Link>
            <div className="hidden lg:block mr-[20px]">
              <HomeMobileMenu/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
