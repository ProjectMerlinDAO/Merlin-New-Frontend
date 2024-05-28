import React from 'react'
import Header from './Header/Header'
import HomeBanner from './HomeBanner/HomeBanner'
import InfiniteVideo from './InfiniteVideo/InfiniteVideo'
import HomeAbout from './HomeAbout/HomeAbout'
import FeatureSection from './FeatureSection/FeatureSection'
import TokenTag from './TokenTag/TokenTag'
import TokenPartners from './TokenPartners/TokenPartners'
import Faq from './Faq/Faq'
import Tokenomics from './Tokenomics/Tokenomics'
import HomeFooter from '../../Core/HomeFooter/HomeFooter'

const HomeComponent = () => {
  return (
    <div className="overflow-x-hidden">
      <Header/>
      <HomeBanner/>
      <InfiniteVideo/>
      <HomeAbout/>
      <FeatureSection/>
      <TokenTag/>
      <TokenPartners/>
      <Faq/>
      <Tokenomics/>
      <HomeFooter/>
    </div>
  )
}

export default HomeComponent
