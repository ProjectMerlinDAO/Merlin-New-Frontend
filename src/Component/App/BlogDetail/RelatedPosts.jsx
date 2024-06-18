import React from 'react'
import BlogCard from '../Blog/BlogContent/BlogCard'

const blogData = [
    {
        img: "../assets/images/blog/blog1.jpg",
        date: "28 May, 2024",
        title: "Where to Buy, Sell, and Trade Digital Collectibles",
        text: "Project Merlin is a next-generation DAO with a mission to benefit individuals within the community.",
        category: "Proposals"
    },
    {
        img: "../assets/images/blog/blog2.jpg",
        date: "25 May, 2024",
        title: "A Beginner's Guide to Digital Assets and Blockchain",
        text: "Project Merlin is a next-generation DAO with a mission to benefit individuals within the community.",
        category: "Proposals"
    },
    {
        img: "../assets/images/blog/blog3.jpg",
        date: "30 May, 2024",
        title: "Transforming the Music Industry with Blockchain ",
        text: "Project Merlin is a next-generation DAO with a mission to benefit individuals within the community.",
        category: "Dao"
    },
]

const RelatedPosts = () => {
  return (
    <div className='related-post-section pt-[60px] md:pt-[40px] pb-[410px] lg:pb-[370] sm:pb-[350px] xsm:pb-[310px] 2xsm:pb-[290px] bg-[rgba(255,255,255,0.05)]'>
        <div className="relative z-10 px-[20px] md:px-[14px] max-w-[1210px] mx-auto lg:max-w-[720px]">
            <h2 className='text-white quantico uppercase text-[45px] lg:text-[32px] md:text-[24px] font-[600] mt-[30px] lg:mt-[20px] md:mt-[10px]'>
                Related posts
            </h2>

            <div className="blog-grid flex items-start justify-start flex-wrap mx-[-15px] pt-[60px] lg:pt-[20px]">
                    {blogData.map((blog, index) => (
                        <div key={index} className={`blog-item px-[15px] w-2/6 lg:w-1/2 xsm:w-full mb-[40px] ${blog.category}`}>
                            <BlogCard
                                blogImg={blog.img}
                                date={blog.date}
                                blogTitle={blog.title}
                                blogText={blog.text}
                            />
                        </div>
                    ))}
                </div>
        </div>
    </div>
  )
}

export default RelatedPosts