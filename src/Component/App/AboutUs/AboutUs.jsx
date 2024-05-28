import React from 'react'
import Header from '../Home/Header/Header'
import HomeFooter from '../../Core/HomeFooter/HomeFooter'
import AboutBanner from './AboutBanner'
import AboutVideo from './AboutVideo'
import MissionVission from './MissionVission'
import AboutTestimonial from './AboutTestimonial'
import Team from './Team/Team'

const AboutUs = () => {
  return (
    <>
        <Header/>
        <AboutBanner/>
        <AboutVideo/>
        <MissionVission/>
        <AboutTestimonial/>
        <Team/>
        <div className="mt-[335px] lg:mt-[290px] xsm:mt-[200px]">
          <HomeFooter/>
        </div>
    </>
  )
}

export default AboutUs;