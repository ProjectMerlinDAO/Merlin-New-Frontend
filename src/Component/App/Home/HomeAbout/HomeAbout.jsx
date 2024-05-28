import React from 'react'
import HomeSectionTitle from '../HomeSectionTitle'

const HomeAbout = () => {
    return (
        <div className='py-[140px] xl:pt-[110px] lg:py-[80px] md-[60px] xsm:py-[40px]'>
            <div className="px-[20px] md:px-[10px] max-w-[1210px] mx-auto lg:max-w-[720px]">
                <div className="flex items-start justify-between flex-wrap mx-[-15px]">
                    <div className="w-1/2 md:w-full px-[15px] md:text-center">
                        <HomeSectionTitle title="About Project MErlin" alignment="left" titleMaxW="496px" />
                        <p className='text-white mt-[20px] max-w-[570px] md:mx-auto'>Project Merlin is a next-generation DAO with a mission to benefit individuals within the community. We have redesigned the DAO governance mechanism and coined it as DAO v2. Through this unique governance system of Project Merlin, community members not only achieve their own dreams but also earn rewards by assisting other community members in realizing their aspirations.</p>
                    </div>
                    <div className="w-1/2 md:w-full px-[15px] lg:mt-[30px]">
                        <div className="about-marlin-img relative max-w-[450px] ml-auto md:max-w-[300px] md:mx-auto md:min-h-[320px] flex items-center justify-center">
                            <div className="min-w-[300px] min-h-[300px] max-w-[300px] max-h-[300px] lg:max-w-[200px] lg:max-h-[200px] lg:min-w-[200px] lg:min-h-[200px] absolute rounded-[30px] overflow-hidden left-0 top-0 z-0">
                                <img src="../assets/images/img/merlin1.gif" alt="img" className='w-full m-auto rounded-[30px]' />
                            </div>
                            <div className="min-w-[300px] min-h-[300px] max-w-[300px] max-h-[300px] lg:max-w-[200px] lg:max-h-[200px] lg:min-w-[200px] lg:min-h-[200px] absolute rounded-[35px] bg-[rgba(13,16,20,0.50)] backdrop-blur-[5px] p-[10px] flex items-center justify-center overflow-hidden right-0 top-[130px] z-20">
                                <img src="../assets/images/img/merlin2.gif" alt="img" className='w-full m-auto rounded-[30px]' />
                            </div>
                            <div className='absolute w-[150%] top-[-120px] z-10 left-[-26%]'>
                                <img src="../assets/images/shape/shape.png" alt="img" className="rotate-[-16.905deg]" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeAbout
