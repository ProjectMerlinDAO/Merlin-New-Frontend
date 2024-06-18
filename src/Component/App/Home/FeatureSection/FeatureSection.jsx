import React from 'react'
import FeatureCard from './FeatureCard'

const featureData = [
    {
        tag: "Blockchain",
        featureTitle: "Trust revolution",
        featureParagraph: "I must explain to you how all this mistaken main denouncing pleasure and praising pain was born",
        linkText: "Learn More",
        featureImgUrl: "/assets/images/img/featureImg1.svg"
    },
    {
        tag: "Financial Autonomy",
        featureTitle: "Immutable DeFi",
        featureParagraph: "Combined with a handful of model sentence structures, to generate is therefore always",
        linkText: "Discover",
        featureImgUrl: "/assets/images/img/featureImg2.svg"
    },
    {
        tag: "Metaverse Web 3.0",
        featureTitle: "Virtual existence",
        featureParagraph: "In a free hour, when our power of choice is untrammelled and when nothing prevents our being able",
        linkText: "Explore Metaverse",
        featureImgUrl: "/assets/images/img/featureImg3.svg"
    }
];

const FeatureSection = () => {
    return (
        <div className='feature-section'>
            <div className="px-[20px] md:px-[14px] max-w-[1450px] mx-auto lg:max-w-[720px]">
                <div className="flex items-start justify-between flex-wrap mx-[-15px]">
                    {featureData.map((feature, index) => (
                        <div key={index} className="w-2/6 lg:w-1/2 xsm:w-full px-[15px] lg:mb-[30px]">
                            <FeatureCard
                                tag={feature.tag}
                                featureTitle={feature.featureTitle}
                                featureParagraph={feature.featureParagraph}
                                linkText={feature.linkText}
                                featureImgUrl={feature.featureImgUrl}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FeatureSection
