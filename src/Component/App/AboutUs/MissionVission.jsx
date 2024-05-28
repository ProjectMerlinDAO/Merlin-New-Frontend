import React from 'react'

const cardData = [
    {
        title: "MISSION",
        text: "Project Merlin aims to provide an innovative and sustainable platform within the DAO and crowdfunding ecosystems, emphasizing democratic participation, transparency, and fairness. By leveraging blockchain technology and NFTs, our platform ensures that every user can directly participate in project selection and funding processes, earning rewards from their involvement. Our goal is to create a more accessible and equitable environment in decentralized finance and governance.",
        shape: "../assets/images/shape/mission-shape.png",
        shapeAlt: "mission shape",
        shapePosition: "top-0 left-0"
    },
    {
        title: "VISION",
        text: "At Project Merlin, our vision is to establish a global, inclusive, and interactive crowdfunding and DAO platform that enables the realization of innovative projects and ideas. Powered by blockchain technology, we aim to construct an ecosystem where every individual can freely express their ideas, every project is evaluated fairly, and every participant receives equitable rewards for their contributions.",
        shape: "../assets/images/shape/vision-shape.png",
        shapeAlt: "vision shape",
        shapePosition: "top-0 right-0"
    }
];

const MissionVission = () => {
    return (
        <div className='pt-[50px] pb-[80px] xl:pt-[40px] xl:pb-[50px] lg:pb-[30px] md:pt-[20px] md:pb-[20px] sm:pt-[10px] sm:pb-[10px]'>
            <div className="px-[20px] md:px-[10px] max-w-[1450px] mx-auto lg:max-w-[720px]">
                <div className="flex items-start justify-center mx-[-15px] flex-wrap">
                    {cardData.map((card, index) => (
                        <div key={index} className="w-1/2 lg:w-full lg:mb-[30px] px-[15px]">
                            <div className="relative mission-vision-card overflow-hidden rounded-[30px] p-[40px] min-h-[390px] lg:min-h-[auto]" style={{ background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)' }}>
                                <div className={`absolute ${card.shapePosition} z-0 shape`}><img src={card.shape} alt={card.shapeAlt} /></div>
                                <h3 className='text-white quantico text-[45px] xl:text-[32px] lg:-text-[36px] md:text-[28px] font-[700] leading-[177.778%] uppercase mb-[10px] relative z-10'>{card.title}</h3>
                                <p className='text-white lexend text-[16px] sm:text-[14px] font-[400] leading-[200%] relative z-10'>{card.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MissionVission
