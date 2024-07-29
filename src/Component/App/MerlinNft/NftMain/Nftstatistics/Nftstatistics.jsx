import React, { useState, useEffect } from 'react';
import NftContainerWrapper from './../../NftContainerWrapper';

const Nftstatistics = () => {
  const [totalVolume, setTotalVolume] = useState(0);
  const [floorPrice, setFloorPrice] = useState(0);
  const [nftMinted, setNftMinted] = useState(0);
  const [nftListed, setNftListed] = useState(0);

  useEffect(() => {
    const finalTotalVolume = 198.25;
    const finalFloorPrice = 1.9;
    const finalNftMinted = 568;
    const finalNftListed = 0.08;

    const totalVolumeInterval = setInterval(() => {
      setTotalVolume((prev) => {
        const increment = finalTotalVolume / 500;
        return prev + increment > finalTotalVolume ? finalTotalVolume : prev + increment;
      });
    }, 10);

    const floorPriceInterval = setInterval(() => {
      setFloorPrice((prev) => {
        const increment = finalFloorPrice / 500;
        return prev + increment > finalFloorPrice ? finalFloorPrice : prev + increment;
      });
    }, 10);

    const nftMintedInterval = setInterval(() => {
      setNftMinted((prev) => {
        const increment = finalNftMinted / 500;
        return prev + increment > finalNftMinted ? finalNftMinted : prev + increment;
      });
    }, 10);

    const nftListedInterval = setInterval(() => {
      setNftListed((prev) => {
        const increment = finalNftListed / 500;
        return prev + increment > finalNftListed ? finalNftListed : prev + increment;
      });
    }, 10);

    return () => {
      clearInterval(totalVolumeInterval);
      clearInterval(floorPriceInterval);
      clearInterval(nftMintedInterval);
      clearInterval(nftListedInterval);
    };
  }, []);

  return (
    <div className='relative'>
      <div className="w-full h-[1px]" style={{ background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.12) 50%, rgba(255, 255, 255, 0.05) 100%)' }} />
      <NftContainerWrapper>
        <div className="flex py-[70px] xl:py-[50px] lg:py-[40px] xl:flex-wrap">
          <div className="w-1/4 xl:w-[30%] lg:w-1/2 xsm:w-full xsm:text-center lg:mb-[20px]">
            <div className="w-full nft-stastics-text">
              <h3>{totalVolume.toFixed(2)} MRLN</h3>
              <p>Total Volume</p>
            </div>
          </div>
          <div className="w-1/4 xl:w-[25%] lg:w-1/2 xsm:w-full xsm:text-center lg:mb-[20px]">
            <div className="w-full nft-stastics-text">
              <h3>{floorPrice.toFixed(2)} MRLN</h3>
              <p>Floor Price</p>
            </div>
          </div>
          <div className="w-1/4 xl:w-[20%] lg:w-1/2 xsm:w-full xsm:text-center xsm:mb-[20px]">
            <div className="w-full nft-stastics-text">
              <h3>{Math.floor(nftMinted)}</h3>
              <p>NFT Minted</p>
            </div>
          </div>
          <div className="w-1/4 xl:w-[25%] lg:w-1/2 xsm:w-full xsm:text-center">
            <div className="w-full nft-stastics-text">
              <h3>{nftListed.toFixed(2)}%</h3>
              <p>NFT Listed</p>
            </div>
          </div>
        </div>
      </NftContainerWrapper>
      <div className="w-full h-[1px]" style={{ background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.12) 50%, rgba(255, 255, 255, 0.05) 100%)' }} />
    </div>
  );
}

export default Nftstatistics;
