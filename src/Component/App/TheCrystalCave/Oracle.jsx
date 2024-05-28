import React from 'react';
import OracalCard from './OracalCard';
import Pagination from '../../Core/Pagination';


const Oracle = () => {
    // Define an array of data for OracalCard components
    const cardsData = [
        {
            messageCode: "#A00041",
            oracalImg: "/assets/images/img/cave7.png",
            title: "I want to plant 10 million trees",
            oracalParagraph: "Get funds for your project by creating a Raven message. Send us details of your proposal to publish it."
        },
        {
            messageCode: "#A00089",
            oracalImg: "/assets/images/img/cave5.png",
            title: "Support renewable energy in rural areas",
            oracalParagraph: "Contribute to the adoption of renewable energy sources in underserved communities. Join us in making a difference."
        },
        {
            messageCode: "#A00015",
            oracalImg: "/assets/images/img/cave1.png",
            title: "Empower women through education",
            oracalParagraph: "Promote gender equality and empower women and girls through access to quality education. Together, we can create a brighter future for all."
        },
        {
            messageCode: "#A00088",
            oracalImg: "/assets/images/img/cave9.png",
            title: "Combatting climate change with sustainable agriculture",
            oracalParagraph: "Implement sustainable agricultural practices to mitigate the effects of climate change and ensure food security for future generations."
        },
        {
            messageCode: "#A00056",
            oracalImg: "/assets/images/img/cave2.png",
            title: "Protecting endangered species habitats",
            oracalParagraph: "Preserve habitats and protect endangered species from extinction. Your support can make a difference in conservation efforts worldwide."
        },
        {
            messageCode: "#A00022",
            oracalImg: "/assets/images/img/cave8.png",
            title: "Clean water for all",
            oracalParagraph: "Provide access to clean and safe drinking water for communities in need. Together, we can ensure that everyone has the basic necessity of life."
        },
        {
            messageCode: "#A00077",
            oracalImg: "/assets/images/img/cave10.png",
            title: "Promoting sustainable transportation",
            oracalParagraph: "Invest in sustainable transportation infrastructure to reduce carbon emissions and improve air quality in urban areas. Join us in building a greener future."
        },
        {
            messageCode: "#A00010",
            oracalImg: "/assets/images/img/cave3.png",
            title: "Ending hunger in impoverished communities",
            oracalParagraph: "Combat food insecurity and malnutrition by supporting initiatives that provide sustainable solutions to hunger. Together, we can create a world without hunger."
        },
        {
            messageCode: "#A00099",
            oracalImg: "/assets/images/img/cave6.png",
            title: "Promoting mental health awareness",
            oracalParagraph: "Raise awareness about mental health issues and advocate for access to mental health services and support for those in need. Let's break the stigma surrounding mental illness."
        },
        {
            messageCode: "#A00072",
            oracalImg: "/assets/images/img/cave4.png",
            title: "Empowering youth through sports",
            oracalParagraph: "Promote youth development and social inclusion through sports programs. Let's empower the next generation to reach their full potential both on and off the field."
        }
    ];
    const cardsData2 = [
        {
            messageCode: "#A00077",
            oracalImg: "/assets/images/img/cave10.png",
            title: "Promoting sustainable transportation",
            oracalParagraph: "Invest in sustainable transportation infrastructure to reduce carbon emissions and improve air quality in urban areas. Join us in building a greener future."
        },
        {
            messageCode: "#A00010",
            oracalImg: "/assets/images/img/cave3.png",
            title: "Ending hunger in impoverished communities",
            oracalParagraph: "Combat food insecurity and malnutrition by supporting initiatives that provide sustainable solutions to hunger. Together, we can create a world without hunger."
        },
        {
            messageCode: "#A00099",
            oracalImg: "/assets/images/img/cave6.png",
            title: "Promoting mental health awareness",
            oracalParagraph: "Raise awareness about mental health issues and advocate for access to mental health services and support for those in need. Let's break the stigma surrounding mental illness."
        },
        {
            messageCode: "#A00072",
            oracalImg: "/assets/images/img/cave4.png",
            title: "Empowering youth through sports",
            oracalParagraph: "Promote youth development and social inclusion through sports programs. Let's empower the next generation to reach their full potential both on and off the field."
        }
    ];
    const cardsData3 = [
        {
            messageCode: "#A00056",
            oracalImg: "/assets/images/img/cave2.png",
            title: "Protecting endangered species habitats",
            oracalParagraph: "Preserve habitats and protect endangered species from extinction. Your support can make a difference in conservation efforts worldwide."
        },
        {
            messageCode: "#A00022",
            oracalImg: "/assets/images/img/cave8.png",
            title: "Clean water for all",
            oracalParagraph: "Provide access to clean and safe drinking water for communities in need. Together, we can ensure that everyone has the basic necessity of life."
        },
        {
            messageCode: "#A00077",
            oracalImg: "/assets/images/img/cave10.png",
            title: "Promoting sustainable transportation",
            oracalParagraph: "Invest in sustainable transportation infrastructure to reduce carbon emissions and improve air quality in urban areas. Join us in building a greener future."
        },
        {
            messageCode: "#A00010",
            oracalImg: "/assets/images/img/cave3.png",
            title: "Ending hunger in impoverished communities",
            oracalParagraph: "Combat food insecurity and malnutrition by supporting initiatives that provide sustainable solutions to hunger. Together, we can create a world without hunger."
        },
        {
            messageCode: "#A00015",
            oracalImg: "/assets/images/img/cave1.png",
            title: "Empower women through education",
            oracalParagraph: "Promote gender equality and empower women and girls through access to quality education. Together, we can create a brighter future for all."
        },
        {
            messageCode: "#A00088",
            oracalImg: "/assets/images/img/cave9.png",
            title: "Combatting climate change with sustainable agriculture",
            oracalParagraph: "Implement sustainable agricultural practices to mitigate the effects of climate change and ensure food security for future generations."
        },
    ];
    const cardsData4 = [
        {
            messageCode: "#A00056",
            oracalImg: "/assets/images/img/cave2.png",
            title: "Protecting endangered species habitats",
            oracalParagraph: "Preserve habitats and protect endangered species from extinction. Your support can make a difference in conservation efforts worldwide."
        },
        {
            messageCode: "#A00022",
            oracalImg: "/assets/images/img/cave8.png",
            title: "Clean water for all",
            oracalParagraph: "Provide access to clean and safe drinking water for communities in need. Together, we can ensure that everyone has the basic necessity of life."
        },
        {
            messageCode: "#A00077",
            oracalImg: "/assets/images/img/cave10.png",
            title: "Promoting sustainable transportation",
            oracalParagraph: "Invest in sustainable transportation infrastructure to reduce carbon emissions and improve air quality in urban areas. Join us in building a greener future."
        },
    ];

    return (
        <div className='rounded-[40px] backdrop-blur-[15px] overflow-hidden' style={{ background: 'linear-gradient(178deg, rgba(255, 255, 255, 0.05) 2.04%, rgba(255, 255, 255, 0.01) 97.96%)' }}>
            <div className='px-[60px] pt-[60px] 2xl:pt-[35px] 2xl:px-[25px] xl:px-[20px]'>            
                <div className='max-w-[598px] w-full mb-[40px] xl:mb-[25px]'>
                    <h2 className='text-[40px] 2xl:text-[32px] leading-[130%] font-[700] text-white quantico uppercase'>List of Selected Crystals</h2>
                    <p>This list consists of crystals carefully selected from the nearest prophecies that the oracle expects to come true. An editor can select between 5 and 20 of these crystals as candidates to create a pre-proposal.</p>
                </div>

                <div className="flex justify-start items-start mx-[-15px] flex-wrap">
                    <div className="px-[15px] w-1/4 xl:w-1/3 lg:w-1/2 sm:w-full mb-[30px]">
                        <div className="rounded-[20px] py-[30px] px-[20px] min-h-[923px] sm:min-h-[auto]" style={{ background: 'linear-gradient(180deg, rgba(15, 229, 127, 0.10) 0%, rgba(255, 255, 255, 0.01) 100%)' }}>
                            <h3 className='font-[300] text-[18px] lexend text-[#0fe57ebb] uppercase text-center mb-[20px]'>Green Stamp</h3>
                            <ul>
                                {/* Map through cardsData array and generate OracalCard components */}
                                {cardsData.map((card, index) => (
                                    <li key={index} className={index === cardsData.length - 1 ? 'mb-[15px]' : 'mb-[15px] last:mb-0'}>
                                        <OracalCard
                                            messageCode={card.messageCode}
                                            oracalImg={card.oracalImg}
                                            title={card.title}
                                            oracalParagraph={card.oracalParagraph}
                                        />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="px-[15px] w-1/4 xl:w-1/3 lg:w-1/2 sm:w-full mb-[30px]">
                        <div className="rounded-[20px] py-[30px] px-[20px] min-h-[923px] sm:min-h-[auto]" style={{ background: 'linear-gradient(180deg, rgba(251, 198, 10, 0.10) 0%, rgba(255, 255, 255, 0.01) 100%)' }}>
                            <h3 className='font-[300] text-[18px] lexend text-[#fbc70ad0] uppercase text-center mb-[20px]'>Yellow Stamp</h3>
                            <ul>
                                {/* Map through cardsData2 array and generate OracalCard components */}
                                {cardsData2.map((card, index) => (
                                    <li key={index} className={index === cardsData2.length - 1 ? 'mb-[15px]' : 'mb-[15px] last:mb-0'}>
                                        <OracalCard
                                            messageCode={card.messageCode}
                                            oracalImg={card.oracalImg}
                                            title={card.title}
                                            oracalParagraph={card.oracalParagraph}
                                        />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="px-[15px] w-1/4 xl:w-1/3 lg:w-1/2 sm:w-full mb-[30px]">
                        <div className="rounded-[20px] py-[30px] px-[20px] min-h-[923px] sm:min-h-[auto]" style={{ background: 'linear-gradient(180deg, rgba(21, 143, 255, 0.10) 0%, rgba(255, 255, 255, 0.01) 100%)' }}>
                            <h3 className='font-[300] text-[18px] lexend text-[#158effc7] uppercase text-center mb-[20px]'>Blue Stamp</h3>
                            <ul>
                                {/* Map through cardsData3 array and generate OracalCard components */}
                                {cardsData3.map((card, index) => (
                                    <li key={index} className={index === cardsData3.length - 1 ? 'mb-[15px]' : 'mb-[15px] last:mb-0'}>
                                        <OracalCard
                                            messageCode={card.messageCode}
                                            oracalImg={card.oracalImg}
                                            title={card.title}
                                            oracalParagraph={card.oracalParagraph}
                                        />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="px-[15px] w-1/4 xl:w-1/3 lg:w-1/2 sm:w-full mb-[30px]">
                        <div className="rounded-[20px] py-[30px] px-[20px] min-h-[923px] sm:min-h-[auto]" style={{ background: 'linear-gradient(180deg, rgba(235, 26, 26, 0.10) 0%, rgba(255, 255, 255, 0.01) 100%)' }}>
                            <h3 className='font-[300] text-[18px] lexend text-[#eb1a1acb] uppercase text-center mb-[20px]'>Red Stamp</h3>
                            <ul>
                                {/* Map through cardsData4 array and generate OracalCard components */}
                                {cardsData4.map((card, index) => (
                                    <li key={index} className={index === cardsData4.length - 1 ? 'mb-[15px]' : 'mb-[15px] last:mb-0'}>
                                        <OracalCard
                                            messageCode={card.messageCode}
                                            oracalImg={card.oracalImg}
                                            title={card.title}
                                            oracalParagraph={card.oracalParagraph}
                                        />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <Pagination/>
            </div>

            <div className="card-footer py-[15px] px-[60px] 2xl:px-[25px] xl:px-[20px] mt-[30px] bg-[#ffffff0c] backdrop-blur-[15px] flex justify-end sm:justify-between sm:flex-wrap gap-[30px] sm:gap-[16px]">
                <button type='submit' className="hov-btn no-border btn-has-shape bg-[#FFFFFF10] border-1 border-[#FFFFFF15] px-[10px] h-[60px] text-white quantico font-[700] max-w-[146px] sm:max-w-[47%] w-full rounded-[18px] uppercase">
                    <span className="btn-hov-text">
                        <span className="btn-text">Delete all</span>
                        <span className="btn-text">Delete all</span>
                    </span>
                </button>
                <button type='submit' className="hov-btn no-border btn-has-shape bg-[#FFFFFF10] border-1 border-[#FFFFFF15] px-[10px] h-[60px] text-white quantico font-[700] max-w-[195px] sm:max-w-[47%] w-full rounded-[18px] uppercase">
                    <span className="btn-hov-text">
                        <span className="btn-text">Delete Selected</span>
                        <span className="btn-text">Delete Selected</span>
                    </span>
                </button>
                <button type='submit' className="hov-btn no-border btn-has-shape bg-[#12CFA7] h-[60px] text-white quantico font-[700] px-[10px] max-w-[246px] sm:max-w-full w-full rounded-[18px] uppercase">
                    <span className="btn-hov-text">
                        <span className="btn-text">Create  Pre-Proposal</span>
                        <span className="btn-text">Create  Pre-Proposal</span>
                    </span>
                </button>
            </div>
        </div>
    );
};

export default Oracle;
