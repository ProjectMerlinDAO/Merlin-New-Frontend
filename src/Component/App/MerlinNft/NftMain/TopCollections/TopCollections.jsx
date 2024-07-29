import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import NftContainerWrapper from '../../NftContainerWrapper';
import NftSectionTitle from '../../NftSectionTitle';
import TopCollectionsCard from './TopCollectionsCard';

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1023,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 540,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

const topCollectionsData = [
  { 
    id: 1, 
    image: './assets/images/nft/collection1.jpg', 
    avatar: './assets/images/nft/collection-avater1.png', 
    title: 'Merlin Sir Ector', 
    floorPrice: '0.02', 
    volume: '0.10' 
  },
  { 
    id: 2, 
    image: './assets/images/nft/collection2.jpg', 
    avatar: './assets/images/nft/collection-avater2.png', 
    title: 'Arthur King', 
    floorPrice: '0.03', 
    volume: '0.15' 
  },
  { 
    id: 3, 
    image: './assets/images/nft/collection3.jpg', 
    avatar: './assets/images/nft/collection-avater3.png', 
    title: 'Lancelot Knight', 
    floorPrice: '0.04', 
    volume: '0.20' 
  },
  { 
    id: 4, 
    image: './assets/images/nft/collection2.jpg', 
    avatar: './assets/images/nft/collection-avater2.png', 
    title: 'Guinevere Queen', 
    floorPrice: '0.05', 
    volume: '0.25' 
  },
  // Add more collections as needed
];

const TopCollections = () => {
  return (
    <div className="pt-[120px] xl:pt-[100px] lg:pt-[80px] md:pt-[70px] xsm:pt-[50px]">
      <NftContainerWrapper>
        <NftSectionTitle title="Collections ✨️ " />
        <div className="nft-slider mt-[40px] mx-[-15px]">
          <Slider {...settings}>
            {topCollectionsData.map((collection) => (
              <div className="px-[15px]" key={collection.id}>
                <TopCollectionsCard 
                  image={collection.image} 
                  avatar={collection.avatar} 
                  title={collection.title} 
                  floorPrice={collection.floorPrice} 
                  volume={collection.volume} 
                />
              </div>
            ))}
          </Slider>
        </div>
      </NftContainerWrapper>
    </div>
  );
};

export default TopCollections;
