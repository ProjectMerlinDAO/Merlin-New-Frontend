import React, { useState } from 'react';
import HomeSectionTitle from '../HomeSectionTitle';
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css'; // Optional CSS for styling

const faqData = [
    {
        id: 1,
        title: 'What distinguishes Project Merlin from other DAO projects and why do you call it DAO v2?',
        content: 'We are an innovative WEB3 project operating as a DAO. There are no other DAO projects that have functioned in this manner before. We are pioneering a new era in the industry, introducing a next-generation DAO tokenomics where the community plays a more active role. A future where proposals are not limited to three options, and the authority to create proposals is not concentrated within a specific minority. The governance system introduced by Project Merlin places the entire authority for proposal creation, candidate selection, and candidate voting, for the first time, entirely under the control of the community. This is why we refer to it as DAO v2. Furthermore, for the first time in a DAO project, the opportunity for the community to earn rewards is diversified to such an extent. An innovative project that combines Vote2Earn, Gamification, and Staking opportunities.',
    },
    {
        id: 2,
        title: 'What networks does Project Merlin run on?',
        content: 'It is built on the multi-chains (Polygon, Avalanche, ETH, BSC, Arbitrum, Zksync and Polkadot Parachains)',
    },
    {
        id: 3,
        title: 'What is the use case of NFTs on the platform?',
        content: "In Project Merlin, Non-Fungible Tokens (NFTs) play a significant role in recognizing and distinguishing users' contributions within the platform. There are three types of NFTs. Community members with the Member NFT have privileges to vote on proposals during the Community Assessment stage and to send Raven Messages. Users with the Editor NFT have the privilege of creating proposals, and users with the Senator NFT have the privilege of voting on proposals during the Senator Assessment stage. Community members with the Member NFT have the right to vote on options in Camelot and Excalibur (Core) proposals.",
    },
    {
        id: 4,
        title: 'What is the Vote2Earn?',
        content: 'The Vote2Earn feature within Project Merlin not only allows users to participate in the voting process but also offers them the opportunity to earn rewards for their engagement. Every community member contributing to the stages necessary for a preliminary proposal to become a Camelot proposal is rewarded. Users with Editor, Senator, and community member NFTs are required to fulfill their respective straightforward tasks in this context.',
    },
    {
        id: 5,
        title: 'How can I earn income with Project Merlin or Merlin Token?',
        content: "Project Merlin embraces the philosophy of 'Not one for all, but all for one,' emphasizing 'All for one.' Therefore, if the dreams, goals, or aspirations you present to the community gain approval, you can secure funding for these. Additionally, by fulfilling your responsibilities as a Senator, Editor, or Member within the community, you can also generate income.",
        content2: "Lastly, Merlin Token is designed with a 'deflationary' structure, as its maximum supply is capped and designed to exhibit a tendency towards decreasing total supply. Therefore, holding Merlin Token and anticipating its value to increase over time is a potential avenue for earning profits.",
    },
];


const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleActiveItem = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className='py-[90px] lg:py-[70px] md:pt-[40px] md:pb-[20px] sm:pb-[10px]' id="faq">
            <div className="px-[20px] md:px-[14px] max-w-[1210px] mx-auto lg:max-w-[720px]">
                <div className='max-w-[596px] mx-auto mb-[30px]'>
                    <HomeSectionTitle title="Frequently Asked Questions" alignment="text-center" />
                </div>
                <div className='max-w-[930px] mx-auto'>
                    <Accordion allowZeroExpanded={true}>
                        {faqData.map((faq, index) => (
                            <AccordionItem 
                                key={faq.id} 
                                className={`mb-[20px] rounded-[20px] bg-[rgba(255,255,255,0.08)] relative faq-accordion-item ${activeIndex === index ? 'active' : ''}`}
                                uuid={faq.id}
                            >
                                <AccordionItemHeading onClick={() => toggleActiveItem(index)} className='relative z-10'>
                                    <AccordionItemButton 
                                        className='text-[22px] lg:text-[20px] md:text-[18px] sm:text-[16px] lexend font-[600] pl-[30px] py-[20px] pr-[60px] leading-[136%] text-white flex justify-between items-center accordion-item-btn'
                                    >
                                        {faq.title}
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel className='px-[30px] py-[0px] pb-[20px] md:text-[14px] md:leading-[200%] text-[rgba(255,255,255,0.90)] relative z-10'>
                                    <p>{faq.content}</p>
                                    {faq.content2 && <p>{faq.content2}</p>}
                                    {faq.content3 && <p>{faq.content3}</p>}
                                </AccordionItemPanel>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </div>
    );
};

export default Faq;
