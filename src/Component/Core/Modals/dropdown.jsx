import { Button, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import { CgDollar, CgDrop, CgLogOut, CgProfile } from "react-icons/cg";

export default function Example({ wallet, handleDisconnect }) {
  return (
    <Menu as="div" className="relative inline-block text-left">
    {/* btn-has-shape */}
  <div>
    <MenuButton className="items-center justify-center hov-btn rounded-full gap-[8px] connect-btn bg-12CFA7 h-[50px] w-[170px] sm:w-[140px] bg-[#12CFA7] text-white text-center  font-[600] text-[16px] sm:text[14px] uppercase quantico">
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
