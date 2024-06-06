import React from 'react'

const ProfileCard = () => {
  return (
    <div className='py-[50px] px-[35px] xsm:px-[20px] rounded-[18px] overflow-hidden' style={{background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.01) 100%)'}}>
        <div className="relative overflow-hidden rounded-[20px] max-w-[212px] mx-auto flex items-center justify-center flex-col">
            <img src="../assets/images/img/merlin.png" alt="img" className='relative z-0 object-cover w-full h-full' />
            <a href="#" className='absolute bottom-[54px] z-10 hov-btn btn-has-shape bg-[rgba(22,25,29,0.70)] backdrop-blur-[5px] rounded-full h-[40px] w-[120px] flex items-center justify-center text-white text-center  font-[600] text-[16px] uppercase quantico' >
              <span className="btn-hov-text">
                <span className="btn-text" >Buy NFT</span>
                <span className="btn-text" >Buy NFT</span>
              </span>
            </a>
        </div>
        <div className="flex items-start justify-between gap-[10px] mt-[15px]">
            <div className="relative overflow-hidden rounded-[20px] max-w-[113px] mr-auto flex items-center justify-center flex-col">
                <img src="../assets/images/img/check-img1.png" alt="img" className='relative z-0 object-cover w-full h-full' />
                <a href="#" className='absolute bottom-0 rounded-b-[20px] z-10 bg-[rgba(22,25,29,0.70)] backdrop-blur-[5px] h-[30px] w-full flex items-center justify-center text-white text-center font-[600] text-[16px] xsm:text-[14px] uppercase quantico' >
                    Check NFT
                </a>
            </div>
            <div className="relative overflow-hidden rounded-[20px] max-w-[113px] ml-auto flex items-center justify-center flex-col">
                <img src="../assets/images/img/check-img2.png" alt="img" className='relative z-0 object-cover w-full h-full' />
                <a href="#" className='absolute bottom-0 z-10 rounded-b-[20px] bg-[rgba(22,25,29,0.70)] backdrop-blur-[5px] h-[30px] w-full flex items-center justify-center text-white text-center font-[600] text-[16px] xsm:text-[14px] uppercase quantico' >
                    Check NFT
                </a>
            </div>
        </div>
    </div>
  )
}

export default ProfileCard