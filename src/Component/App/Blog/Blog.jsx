import React from 'react'
import Header from '../Home/Header/Header'
import BlogBanner from './BlogBanner/BlogBanner'
import HomeFooter from '../../Core/HomeFooter/HomeFooter'
import BlogContent from './BlogContent/BlogContent'

const Blog = () => {
  return (
    <>
        <Header/>
        <BlogBanner/>
        <BlogContent/>
        
        <HomeFooter/>
    </>
  )
}

export default Blog