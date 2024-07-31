import { Button, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import { CgDollar, CgDrop, CgLogOut, CgProfile } from "react-icons/cg";

export default function NftDropdown({ wallet, handleDisconnect }) {
  return (
//     <div
//     className="flex btn-has-shape light-shape items-center justify-center hov-btn rounded-full gap-[8px] nft-connect-btn h-[50px] w-[170px] sm:w-[170px] text-[#0CE466] text-center font-[600] text-[16px] sm:text[14px] uppercase quantico"
//     style={{background: 'linear-gradient(90deg, rgba(12, 228, 102, 0.15) 0%, rgba(255, 255, 255, 0.15) 100%)'}}
// >
//     <Image
//         src="/assets/images/icons/wallet-green.svg"
//         alt="icon"
//         width="20"
//         height="20"
//     />
//     <span className="btn-hov-text">
//         <span className="btn-text cursor-pointer">{publicKey ? publicKey.toBase58().slice(0,3) + "......" + publicKey.toBase58().slice(-4): "Connect"}</span>
//         <span className="btn-text cursor-pointer">{publicKey ? publicKey.toBase58().slice(0,3) + "......" + publicKey.toBase58().slice(-4): "Connect"}</span>
//     </span>
// </div>

    <Menu as="div" className="relative inline-block text-left">
    {/* btn-has-shape */}
  <div>
    <MenuButton className="flex btn-has-shape light-shape items-center justify-center hov-btn rounded-full gap-[8px] nft-connect-btn h-[50px] w-[170px] sm:w-[170px] text-[#0CE466] text-center font-[600] text-[16px] sm:text[14px] uppercase quantico"
    style={{background: 'linear-gradient(90deg, rgba(12, 228, 102, 0.15) 0%, rgba(255, 255, 255, 0.15) 100%)'}}
>
      {wallet && wallet.toBase58().slice(0, 4) + "...." + wallet.toBase58().slice(-4)}
      {/* <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-white-400 absolute top-[14px] right-[15px] " /> */}
    </MenuButton>
  </div>

  <MenuItems
    transition
    className="absolute right-0 z-[999] mt-2 w-56 origin-top-right   bg-gradient-to-t from-[#ffffff10] to-transparent backdrop-blur-[10px] border border-[#ffffff24] w-full top-16 rounded-xl"
  >
    <div className="">
      <MenuItem>
        <Link
          href="/member-profile"
         className="flex items-center justify-start gap-3 px-3 py-2.5 text-white font-semibold rounded-t-xl hover:bg-[#39938030]"
        >
            <CgProfile size={22}/>   
        Profile
        </Link>
      </MenuItem>
      <MenuItem>
        <Link
          href="/airdrop"
          className="flex items-center justify-start gap-3 px-3 py-2.5 text-white font-semibold hover:bg-[#39938030]"
        >
            <CgDollar size={22} />
          Airdrop
        </Link>
      </MenuItem>
        <MenuItem>
          <button
            type="submit"
            onClick={ () => handleDisconnect()}
            className="flex items-center justify-start gap-3 px-3 py-2.5 text-white font-semibold w-full rounded-b-xl hover:bg-[#39938030]"
        >
              <CgLogOut size={22}/>
            Sign out
          </button>
        </MenuItem>
    </div>
  </MenuItems>
</Menu>     
 

  )
}
