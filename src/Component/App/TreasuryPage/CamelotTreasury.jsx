import React from 'react'
import SectionTitle from '../../Core/SectionTitle'
import CamelotTreasuryCard from './CamelotTreasuryCard'

const assessmentData = [
    {
        title: "Winter Chest",
        cardImg: '/assets/images/img/treasury-box1.png',
        months: 'January, February, March',
        description: "In this chest, the revenues from October, November, and December are gathered from the Treasury of Camelot. The chest opens in January, forming the fund for the proposals to be made in January, February, and March. If the targeted amount is not reached, the shortfall is covered by Merlin's Treasury. Any surplus over the targeted amount is transferred back to Merlin's Treasury.",
        timerText: "The chest will Close IN",
        imgSrc: "/assets/images/shape/box-shape1.png",
        Amount: "5,600,000",
        Revenues: "3,472,000",
        Balance: "-2,128,000",
        balanceColor: '#F52D2D',
    },
    {
        title: "Spring Chest",
        cardImg: '/assets/images/img/treasury-box2.png',
        months: 'June, May, April',
        description: "In this chest, the revenues from January, February, and March are gathered from the Treasury of Camelot. The chest opens in June, forming the fund for the proposals to be made in June, May, and April. If the targeted amount is not reached, the shortfall is covered by Merlin's Treasury. Any surplus over the targeted amount is transferred back to Merlin's Treasury.",
        icons: ["/assets/images/icons/glob.svg", "/assets/images/icons/discord-outline.svg"],
        timerText: "The chest will open IN",
        imgSrc: "/assets/images/shape/box-shape2.png",
        Amount: "5,600,000",
        Revenues: "0,000,000",
        Balance: "0,000,000",
        balanceColor: '#FFFFFF',
    },
    {
        title: "Summer Chest",
        cardImg: '/assets/images/img/treasury-box3.png',
        months: 'July, August, September',
        description: "In this chest, the revenues from June, May, and April are gathered from the Treasury of Camelot. The chest opens in July, forming the fund for the proposals to be made in July, August, and September. If the targeted amount is not reached, the shortfall is covered by Merlin's Treasury. Any surplus over the targeted amount is transferred back to Merlin's Treasury.",
        timerText: "The chest will open IN",
        imgSrc: "/assets/images/shape/box-shape3.png",
        Amount: "5,600,000",
        Revenues: "0,000,000",
        Balance: "0,000,000",
        balanceColor: '#FFFFFF',
    },
    {
        title: "Autumn Chest",
        cardImg: '/assets/images/img/treasury-box4.png',
        months: 'October, November, December',
        description: "In this chest, the revenues from July, August, and September are gathered from the Treasury of Camelot. The chest opens in October, forming the fund for the proposals to be made in October, November, and December. If the targeted amount is not reached, the shortfall is covered by Merlin's Treasury. Any surplus over the targeted amount is transferred back to Merlin's Treasury.",
        timerText: "The chest is in use",
        imgSrc: "/assets/images/shape/box-shape4.png",
        Amount: "5,600,000",
        Revenues: "6,100,000",
        Balance: "500,000",
        balanceColor: '#09E16D',
    },
    // Add more objects for additional AssessmentCards if needed
];

const CamelotTreasury = () => {
    return (
        <div className="camelot-treasury-section">
            <SectionTitle
                title="Camelot Treasury"
                subtitle="Camelot Treasury’s Chest"
                alignment="text-left sm:text-center"
                titleMaxW="520px"
                titleMargin="mb-[0px]"
            />

            <div className="flex items-start flex-wrap mx-[-23px] xl:mx-[-15px] mt-[60px]">
                {assessmentData.map((data, index) => (
                    <div key={index} className="px-[23px] xl:px-[15px] w-2/4 md:w-full mb-[40px] lg:mb-[20px]">
                        <CamelotTreasuryCard
                            title={data.title}
                            cardImg={data.cardImg}
                            months={data.months}
                            description={data.description}
                            timerText={data.timerText}
                            imgSrc={data.imgSrc}
                            Amount={data.Amount} 
                            Revenues={data.Revenues}
                            Balance={data.Balance}
                            balanceColor={data.balanceColor}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CamelotTreasury