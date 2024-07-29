import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import NftContainerWrapper from '../../NftContainerWrapper';
import NftSectionTitle from '../../NftSectionTitle';
import NftAuctionCard from '../../NftAuctionCard';

const editorMemberData = [
  { id: '003', itemImg: './assets/images/nft/char9.jpg', title: 'The Merlin', price: '0.85', change: '+ 2.54%', supply: '2 / 48', showTimer: false },
  { id: '008', itemImg: './assets/images/nft/char2.jpg', title: 'The Merlin', price: '0.85', change: '+ 1.22%', supply: '15 / 84', showTimer: true },
  { id: '013', itemImg: './assets/images/nft/char10.jpg', title: 'The Merlin', price: '0.85', change: '+ 5.07%', supply: '0 / 100', showTimer: false },
  { id: '019', itemImg: './assets/images/nft/char11.jpg', title: 'The Merlin', price: '0.85', change: '+ 0.98%', supply: '8 / 76', showTimer: false }
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

const EditorMember = () => {
  return (
    <div className="pt-[120px] xl:pt-[100px] lg:pt-[80px] md:pt-[70px] xsm:pt-[50px]">
      <NftContainerWrapper>
        <NftSectionTitle title="Editor Member ✍🏻" />
        <div className="nft-slider mt-[40px] mx-[-15px]">
          <Slider {...settings}>
            {editorMemberData.map((auction, index) => (
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

export default EditorMember;
