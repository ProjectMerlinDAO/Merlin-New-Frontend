import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Link from 'next/link'
import Image from 'next/image'
import BogBannerContent from './BogBannerContent'

const BlogBanner = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    };

    return (
        <div className='bg-no-repeat bg-cover app-banner-section bg-top-center' style={{ background: 'url(../assets/images/bg/about-bg.png)' }}>
            <div className="pt-[115px] xl:pt-[105px] lg:pt-[100px] md:pt-[90px]" style={{ background: 'linear-gradient(180deg, rgba(13, 16, 20, 0.00) 0%, rgba(13, 16, 20, 0.76) 33%, #0D1014 85.42%)' }}>
                <div className="py-[118px] xl:py-[90px] bg-[#181F28] relative w-full">
                    <Image src="../assets/images/shape/blog-banner-shape1.png" alt="shape" className="absolute top-0 left-0 z-0" />
                    <Image src="../assets/images/shape/blog-banner-shape2.png" alt="shape" className="absolute bottom-0 right-0 z-0" />
                    <div className="relative z-10 px-[20px] 2xl:px-[30px] md:px-[10px] max-w-[1210px] mx-auto lg:max-w-[720px]">
                        <div className="blog-banner-slider lg:max-w-[500px] lg:mx-auto">
                            <Slider {...settings}>
                                <BogBannerContent />
                                <BogBannerContent />
                                <BogBannerContent />
                                <BogBannerContent />
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogBanner
