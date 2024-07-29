import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import NftContainerWrapper from '../../NftContainerWrapper';
import NftSectionTitle from '../../NftSectionTitle';
import NftAuctionCard from '../../NftAuctionCard';

const moreCollectionsData = [
  { id: '003', itemImg: './assets/images/nft/char1.jpg', title: 'The Merlin', price: '0.85', change: '+ 2.54%', supply: '2 / 48', showTimer: false },
  { id: '008', itemImg: './assets/images/nft/char2.jpg', title: 'The Merlin', price: '0.85', change: '+ 1.22%', supply: '15 / 84', showTimer: false },
  { id: '013', itemImg: './assets/images/nft/char3.jpg', title: 'The Merlin', price: '0.85', change: '+ 5.07%', supply: '0 / 100', showTimer: true },
  { id: '019', itemImg: './assets/images/nft/char4.jpg', title: 'The Merlin', price: '0.85', change: '+ 0.98%', supply: '8 / 76', showTimer: false }
];

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1297,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 1023,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

const MoreCollections = () => {
  return (
    <div className="py-[120px] xl:py-[100px] lg:py-[80px] md:pt-[70px] xsm:py-[50px]">
      <NftContainerWrapper>
        <div className="md:max-w-[300px]">
          <NftSectionTitle title="More from this collections" />
        </div>
        <div className="nft-slider mt-[40px] xl:mt-[25px] mx-[-15px]">
          <Slider {...settings}>
            {moreCollectionsData.map((auction, index) => (
              <div key={index} className="px-[15px]">
                <NftAuctionCard {...auction} />
              </div>
            ))}
          </Slider>
        </div>
      </NftContainerWrapper>
    </div>
  );
};

export default MoreCollections;
