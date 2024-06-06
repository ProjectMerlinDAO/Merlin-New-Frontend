import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import MyMessageTable from './MyMessageTable'
import Dropdown from '@/src/Component/Core/Dropdown'
import SectionTitle from '@/src/Component/Core/SectionTitle'

const tableData1 = [
  {
    imgSrc: "/assets/images/img/cave1.png",
    title: "I want sport equipments for ...",
    code: "Code: #A00049",
    icons: [
      { src: "/assets/images/img/personal.png", tooltip: "Personal Goals" },
      { src: "/assets/images/img/sports.png", tooltip: "Sports and Arts" },
    ],
    inProposal: "No",
    balance: '00,000 MRLN',
  },
  {
    imgSrc: "/assets/images/img/cave2.png",
    title: "I need Fund for a AI software",
    code: "Code: #A00048",
    icons: [
      { src: "/assets/images/img/innovation.png", tooltip: "Innovation" }
    ],
    inProposal: "No",
    balance: '00,000 MRLN',
  },
  {
    imgSrc: "/assets/images/img/cave3.png",
    title: "We want to build VR",
    code: "Code: #A00047",
    icons: [
      { src: "/assets/images/img/innovation.png", tooltip: "Innovation" },
      { src: "/assets/images/img/social.png", tooltip: "Social Responsibilities" }
    ],
    inProposal: "No",
    balance: '00,000 MRLN',
  },
  {
    imgSrc: "/assets/images/img/cave4.png",
    title: "Need funding for my next match",
    code: "Code: #A00048",
    icons: [
      { src: "/assets/images/img/sports.png", tooltip: "Sports and Arts" }
    ],
    inProposal: "No",
    balance: '00,000 MRLN',
  },
  {
    imgSrc: "/assets/images/img/cave5.png",
    title: "I want plant 10 million tree",
    code: "Code: #A00045",
    icons: [
      { src: "/assets/images/img/social.png", tooltip: "Social Responsibilities" }
    ],
    inProposal: "No",
    balance: '00,000 MRLN',
  },
  {
    imgSrc: "/assets/images/img/cave6.png",
    title: "I need sports shoes",
    code: "Code: #A00044",
    icons: [
      { src: "/assets/images/img/sports.png", tooltip: "Sports and Arts" }
    ],
    inProposal: "No",
    balance: '00,000 MRLN',
  },
];

const tableData2 = [
  {
    imgSrc: "/assets/images/img/cave6.png",
    title: "I need sports shoes",
    code: "Code: #A00044",
    icons: [
      { src: "/assets/images/img/sports.png", tooltip: "Sports and Arts" }
    ],
    inProposal: "No",
    balance: '00,000 MRLN',
  },
  {
    imgSrc: "/assets/images/img/cave5.png",
    title: "I want plant 10 million tree",
    code: "Code: #A00045",
    icons: [
      { src: "/assets/images/img/social.png", tooltip: "Social Responsibilities" }
    ],
    inProposal: "No",
    balance: '00,000 MRLN',
  },
  {
    imgSrc: "/assets/images/img/cave4.png",
    title: "Need funding for my next match",
    code: "Code: #A00048",
    icons: [
      { src: "/assets/images/img/sports.png", tooltip: "Sports and Arts" }
    ],
    inProposal: "No",
    balance: '00,000 MRLN',
  },
  {
    imgSrc: "/assets/images/img/cave3.png",
    title: "We want to build VR",
    code: "Code: #A00047",
    icons: [
      { src: "/assets/images/img/innovation.png", tooltip: "Innovation" },
      { src: "/assets/images/img/social.png", tooltip: "Social Responsibilities" }
    ],
    inProposal: "No",
    balance: '00,000 MRLN',
  },
  {
    imgSrc: "/assets/images/img/cave2.png",
    title: "I need Fund for a AI software",
    code: "Code: #A00048",
    icons: [
      { src: "/assets/images/img/innovation.png", tooltip: "Innovation" }
    ],
    inProposal: "No",
    balance: '00,000 MRLN',
  },
  {
    imgSrc: "/assets/images/img/cave1.png",
    title: "I want sport equipments for ...",
    code: "Code: #A00049",
    icons: [
      { src: "/assets/images/img/personal.png", tooltip: "Personal Goals" },
      { src: "/assets/images/img/sports.png", tooltip: "Sports and Arts" },
    ],
    inProposal: "No",
    balance: '00,000 MRLN',
  },
];

const MyMessages = () => {
  return (
    <div className='mt-[120px] xl:mt-[100px] lg:mt-[80px] md:mt-[60px]'>
        <SectionTitle
            title="My Messages"
            subtitle="Raven Messages"
            alignment="text-left"
            titleMaxW="390px"
            titleMargin="mb-[60px] lg:mb-[30px]"
        />
        <Tabs>
            <div className="flex items-center justify-between gap-[15px] flex-wrap mb-[35px] sm:flex-wrap]">
                <TabList className="flex items-center justify-start gap-[20px] xsm:w-full">
                    <Tab className='my-message-btn cursor-pointer active-btn hov-btn bg-[rgba(255,255,255,0.05)] rounded-[15px] h-[50px] relative w-[120px] xsm:w-1/2 flex items-center justify-center text-white text-center  font-[600] text-[16px] uppercase quantico'>
                        <span className="btn-hov-text">
                        <span className="btn-text" >Active</span>
                        <span className="btn-text" >Active</span>
                        </span>
                    </Tab>
                    <Tab className='my-message-btn cursor-pointer passive-btn hov-btn bg-[rgba(255,255,255,0.05)] rounded-[15px] h-[50px] relative w-[120px] xsm:w-1/2 flex items-center justify-center text-white text-center  font-[600] text-[16px] uppercase quantico'>
                        <span className="btn-hov-text">
                        <span className="btn-text" >Passive</span>
                        <span className="btn-text" >Passive</span>
                        </span>
                    </Tab>
                </TabList>
                <div className='w-[194px] xsm:w-full'>
                    <Dropdown btnTitle="Filters" /> 
                </div>
            </div>

            <TabPanel>
                 <MyMessageTable data={tableData1}/>
            </TabPanel>
            <TabPanel>
                <MyMessageTable data={tableData2}/>
            </TabPanel>
        </Tabs>
    </div>
  )
}

export default MyMessages
