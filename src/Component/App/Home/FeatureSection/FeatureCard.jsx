import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const FeatureCard = ({ tag, featureTitle, featureParagraph, linkText, featureImgUrl }) => {
    return (
        <div className='rounded-[30px] overflow-hidden bg-[rgba(255,255,255,0.05)] p-[40px] xl:p-[30px] relative home-feature-card'>
            <img src="../assets/images/shape/feature-card-shape.png" alt="bg-img" className='absolute top-0 left-0 z-0 fetaure-card-shape' />
            <img src="../assets/images/shape/feature-card-bg.png" alt="shape" className='absolute top-0 left-0 z-10 fetaure-card-bg' />
            <div className="relative z-20">
                <div className="rounded-full text-[16px] lexend text-white px-[20px] py-[5px] mb-[22px] w-[max-content]" style={{ background: 'linear-gradient(90deg, rgba(208, 46, 190, 0.20) 0%, rgba(108, 211, 108, 0.20) 100%)' }}>
                    {tag}
                </div>
                <h3 className='uppercase quantico text-[30px] xl:text-[26px] leading-[120%] text-white font-[700] mb-[28px] xl:max-w-[200px]'>{featureTitle}</h3>
                <p className='font-[400] leading-[187.5%] mb-[24px] max-w-[295px]'>{featureParagraph}</p>
                <Link href="#" className='text-[#12CFA7] font-[600] uppercase quantico flex items-center justify-start gap-[10px]'>{linkText} <Image src="/assets/images/icons/arrow-right-green.svg" alt="icon" width='16' height='14' /></Link>

                <div className='mt-[80px]'>
                    <Image src={featureImgUrl} alt="icon" width='91' height='80' />
                </div>
            </div>
        </div>
    )
}

export default FeatureCard