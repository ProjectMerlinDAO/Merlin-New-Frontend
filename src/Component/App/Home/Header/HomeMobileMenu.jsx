import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const HomeMobileMenu = () => {
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
                <div className="max-w-[300px] w-full p-[30px] h-full !rounded-[0px]">
                    <Link href="/">
                        <Image src="/assets/images/logo/main-logo.svg" alt="logo" height="65" width="150" />
                    </Link>
                    <label htmlFor="my-drawer-4" className="drawer-button absolute top-[30px] right-[30px] z-10">
                        <Image src="/assets/images/menuIcons/menu-close.svg" alt="menu-icon" height="22" width="22" />
                    </label>
                    <ul className='text-white uppercase quantico mt-[40px]'>
                        <li className='mb-[30px]'><Link href="#">Home</Link></li>
                        <li className='mb-[30px]'><Link href="#">Token</Link></li>
                        <li className='mb-[30px]'><Link href="#">Docs</Link></li>
                        <li className='mb-[30px]'><Link href="/about">About</Link></li>
                        <li className='mb-[30px]'><Link href="#">FAQ</Link></li>
                        <li className='mb-[30px]'><Link href="#">Articles</Link></li>
                    </ul>
                    <div className="mt-[20px]">
                        <Link href="/launch-app" className="buy-btn btn-has-shape hov-btn bg-[#FFFFFF] rounded-full h-[50px] w-full flex items-center justify-center text-[#111111] text-center leading-trim-both text-edge-cap font-[600] text-[16px] uppercase quantico">
                            <span className="btn-hov-text">
                                <span className="btn-text">Launch App</span>
                                <span className="btn-text">Launch App</span>
                            </span>
                        </Link>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default HomeMobileMenu