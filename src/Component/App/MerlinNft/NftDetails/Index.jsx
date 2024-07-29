import React from 'react'
import NftFooter from '../NftFooter'
import NftHeader from '../NftHeader/NftHeader'
import MoreCollections from './MoreCollections/MoreCollections';
import NftDetailBanner from './NftDetailBanner/NftDetailBanner';
const NftDetails = () => {
  return (
    <div className='bg-[#121619]' >
        <NftHeader/>
        <NftDetailBanner/>
        <MoreCollections/>
        <NftFooter/>
    </div>
  )
}

export default NftDetails