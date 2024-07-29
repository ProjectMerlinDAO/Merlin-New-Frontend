import React from 'react'

const TopCollectionsCard = ({image, title, avatar, floorPrice, volume }) => {
  return (
    <div className='relative border-[rgba(255, 255, 255, 0.10)] border-1 bg-[rgba(255,255,255,0.05)] overflow-hidden rounded-[20px] nft-auction-card cursor-pointer'>
        <div className="overflow-hidden">
            <img src={image} alt="icon" className="relative z-0 w-full" />
        </div>
        <div className="px-[30px] pb-[25px]">
            <div className="flex items-center justify-center h-[90px] w-[90px] rounded-[50%] overflow-hidden mt-[-45px] relative z-1" style={{border: '3px solid #1f2326'}}>
                <img src={avatar} alt="icon" className="object-cover w-full" />
            </div>
            <h2 className="text-[22px] outfit text-[#FFF] font-[700] leading-[90.909%] my-[20px]">{title}</h2>
            <div className="flex items-start justify-between">
                <h6 className="w-1/2">
                    <span className='text-[14px] outfit text-[#FFF] font-[400] leading-[200%]'>Floor</span> <br/>
                    <span className='text-[18px] outfit text-[#FFF] font-[700] leading-[140%]'>{floorPrice}</span>
                </h6>
                <h6 className="w-1/2">
                    <span className='text-[14px] outfit text-[#FFF] font-[400] leading-[200%]'>24h Volume</span> <br/>
                    <span className='text-[18px] outfit text-[#FFF] font-[700] leading-[140%]'>{volume}</span>
                </h6>
            </div>
        </div>
    </div>
  )
}

export default TopCollectionsCard