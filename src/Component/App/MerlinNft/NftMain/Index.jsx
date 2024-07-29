import React from 'react'
import NftHeader from '../NftHeader/NftHeader'
import NftMainBanner from './NftMainBanner/NftMainBanner'
import TrandingTop from './TrandingTop/TrandingTop'
import Nftstatistics from './Nftstatistics/Nftstatistics'
import LiveAuctions from './LiveAuctions/LiveAuctions'
import TopCollections from './TopCollections/TopCollections'
import TrendingMembership from './Trending/TrendingMembership'
import NftCategory from './NftCategory'
import NftFooter from '../NftFooter'
import SenatorMember from './SenatorMember/SenatorMember'
import EditorMember from './EditorMember/EditorMember'

const NftMain = () => {
  return (
    <div className='bg-[#121619]' >
        <NftHeader/>
        <NftMainBanner/>
        <TrandingTop/>
        <Nftstatistics/>
        <LiveAuctions/>
        <SenatorMember/>
        <EditorMember/>
        <TopCollections/>
        <TrendingMembership/>
        <NftCategory/>
        <NftFooter/>
    </div>
  )
}

export default NftMain