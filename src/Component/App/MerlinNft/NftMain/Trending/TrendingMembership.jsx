import React from 'react'
import NftContainerWrapper from '../../NftContainerWrapper'
import NftAuctionCard from '../../NftAuctionCard';

const TrendingCardData = [
  { id: '019', itemImg: './assets/images/nft/trending-member1.jpg', title: 'The Merlin', price: '0.85', change: '+ 0.98%', supply: '8 / 76', showTimer: false },
  { id: '019', itemImg: './assets/images/nft/trending-member2.jpg', title: 'The Merlin', price: '0.85', change: '+ 0.98%', supply: '8 / 76', showTimer: false },
  { id: '019', itemImg: './assets/images/nft/trending-member3.jpg', title: 'The Merlin', price: '0.85', change: '+ 0.98%', supply: '8 / 76', showTimer: false },
];

const TrendingMembership = () => {
  return (
    <div className="pt-[120px] xl:pt-[100px] lg:pt-[80px] md:pt-[70px] xsm:pt-[50px]">
      <NftContainerWrapper>
        <div className="relative overflow-hidden p-[30px] rounded-[30px]" style={{ background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.03) 100%)' }}>
          <img src="./assets/images/nft/green-shape.png" alt="shape" className='absolute top-0 left-0 z-0' />
          <div className="relative z-10 flex items-start justify-between xl:flex-wrap">
            <div className="w-1/4 xl:w-[100%]">
              <div className='h-ful'>
                <h3 className='text-[40px] xl:text-[36px] lg:text-[32px] font-[700] leading-[137.5%] uppercase text-[#FFFFFF] max-w-[291px]'>The Highest Bids</h3>
                <div className="absolute bottom-[40px] left-0 xl:relative xl:bottom-0 lg:mt-[20px] xl:mb-[30px]">
                  <a
                    href="#"
                    className="flex btn-has-shape items-center btn-no-border justify-center hov-btn rounded-full gap-[8px] backdrop-blur-[5px] h-[60px] w-[179px] sm:w-[160px] text-[#ffffff] text-center font-[600] text-[16px] sm:text[14px] uppercase"
                    style={{ background: 'rgba(255, 255, 255, 0.15)' }}
                  >
                    {/* <span className="btn-hov-text"> */}
                      <span className="pointer-events-none text-gray-500 ">Explore all</span>
                      {/* <span className="btn-text">Explore all</span> */}
                    {/* </span> */}
                  </a>
                </div>
              </div>
            </div>
            <div className="w-3/4 xl:w-full">
              <div className="flex items-start jsutify-start lg:flex-wrap mx-[-15px]">
                {TrendingCardData.map((TrendingMembers, index) => (
                  <div key={index} className="px-[15px] w-2/6 lg:w-[50%] sm:w-full mb-[30px] last:mb-0 ">
                    <NftAuctionCard {...TrendingMembers} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </NftContainerWrapper>
    </div>
  )
}

export default TrendingMembership