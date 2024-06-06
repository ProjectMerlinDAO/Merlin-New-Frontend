import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


const BlogCard = ({ blogImg, date, blogTitle, blogText }) => {
    return (
        <div className="bg-[rgba(255,255,255,0.05)] rounded-[20px] overflow-hidden">
            <Link href="/blog-detail" className='flex items-center justify-center'>
                <div className="relative w-full blog-img">
                    <img src={blogImg} alt="icon" className="object-cover w-full" />
                </div>
            </Link>
            <div className="p-[30px] md:p-[20px] xsm:p-[30px]">
                <h6 className="text-[16px] font-[700] uppercase quantico mb-[15px]">{date}</h6>
                <Link href="/blog-detail" className='flex items-start justify-start text-[20px] text-white leading-[160%] font-[500] mb-[20px] max-w-[300px] ellips-line2'>
                    {blogTitle}
                </Link>
                <p className='mb-[20px] ellips-line3'>{blogText}</p>

                <Link href="/blog-detail" className="hov-btn blog-card-btn gap-[7px] bg-[transparent] flex items-center justify-start text-white text-left font-[600] text-[16px] uppercase quantico mt-[20px]">
                    <span className="btn-hov-text">
                        <span className="btn-text">Read More</span>
                        <span className="btn-text">Read More</span>
                    </span>
                    <Image
                        src="/assets/images/icons/arrow-right-top.svg"
                        alt="icon"
                        width={25}
                        height={20}
                    />
                </Link>
            </div>
        </div>
    )
}

export default BlogCard