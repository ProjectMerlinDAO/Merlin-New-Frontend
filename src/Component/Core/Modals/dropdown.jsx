import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

export default function Example({wallet, handleDisconnect}) {
  return (
    <Menu as="div" className="relative inline-block text-left">
        {/* btn-has-shape */}
      <div>
        <MenuButton className="items-center justify-center hov-btn rounded-full gap-[8px] connect-btn bg-12CFA7 h-[50px] w-[170px] sm:w-[140px] bg-[#12CFA7] text-white text-center  font-[600] text-[16px] sm:text[14px] uppercase quantico">
          {wallet && wallet.toBase58().slice(0, 2) + "...." + wallet.toBase58().slice(-5)}
          {/* <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-white-400 absolute top-[14px] right-[15px] " /> */}
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-[#12CFA7] shadow-lg ring-1 ring-white ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1 m-2">
          <MenuItem>
            <Link
              href="/member-profile"
              className="block px-4 py-2 text-sm text-white-900 bg-[#12CFA7] text-white-700 data-[focus]:bg-[#12CFA7] data-[focus]:text-gray-900 font-[600] text-[16px] sm:text[14px] uppercase quantico"
            >
            Profile
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              href="/airdrop"
              className="block px-4 py-2 text-sm text-white-900 bg-[#12CFA7] text-white-700 data-[focus]:bg-[#12CFA7] data-[focus]:text-gray-900 font-[600] text-[16px] sm:text[14px] uppercase quantico"
            >
              Airdrop
            </Link>
          </MenuItem>
            <MenuItem>
              <button
                type="submit"
                onClick={ () => handleDisconnect()}
                className="block px-4 py-2 text-sm text-white-900 bg-[#12CFA7] text-white-700 data-[focus]:bg-[#12CFA7] data-[focus]:text-gray-900 font-[600] text-[16px] sm:text[14px] uppercase quantico"
            >
                Sign out
              </button>
            </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  )
}
