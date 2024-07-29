import React from 'react'
import NftContainerWrapper from './NftContainerWrapper'
import Image from 'next/image'
import Link from 'next/link'

const NftFooterBottom = () => {
    return (
        <div className="border-t border-[rgba(255,255,255,0.12)]">
            <NftContainerWrapper>
                <div className="py-[35px] xl:py-[25px] flex items-center justify-between md:justify-center font-[400] md:gap-[16px] md:flex-wrap">
                    <ul className="flex items-center justify-start md:justify-center gap-[25px] flex-wrap sm:justify-center sm:gap-[10px] md:w-full">
                        <li><Link href="terms-and-Conditions" target="_blank" className="hover:text-white delay-[0.3s] xsm:text-[13px]">Terms and conditions</Link></li>
                        <li><Link href="privacyPolicy" target="_blank" className="hover:text-white delay-[0.3s] xsm:text-[13px]">Privacy policy</Link></li>
                        <li><Link href="https://docs.projectmerlin.io/projectmerlin" target="_blank" className="hover:text-white delay-[0.3s] xsm:text-[13px]">Whitepaper</Link></li>
                    </ul>
                    <Link href="#" className='flex items-center justify-end gap-[10px] text-white'>Back to Top <Image src="/assets/images/icons/top-arrow.svg" alt="icon" height="8" width="13" /></Link>
                </div>
            </NftContainerWrapper>
        </div>
    )
}

export default NftFooterBottom