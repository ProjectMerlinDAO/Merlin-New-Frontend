import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import NftBannerSliderContent from './NftBannerSliderContent';

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                // arrows: false,
                // dots: true,
            }
        },
    ]
};

const NftBannerSlider = () => {
    return (
        <div className="nft-banner-slider">
            <Slider {...settings}>
                <NftBannerSliderContent/>
                <NftBannerSliderContent/>
                <NftBannerSliderContent/>
            </Slider>
        </div>
    )
}

export default NftBannerSlider