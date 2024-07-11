import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import MyMessageTable from './MyMessageTable'
import Dropdown from '@/src/Component/Core/Dropdown'
import SectionTitle from '@/src/Component/Core/SectionTitle'

const MyMessages = ({msgList,Type, setType}) => {
  console.log(Type,"TYEPEPEPE")
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
                    <Tab onClick={() =>setType("active")} className={`my-message-btn cursor-pointer ${Type === "active" ? "active-btn" : "passive-btn"} hov-btn bg-[rgba(255,255,255,0.05)] rounded-[15px] h-[50px] relative w-[120px] xsm:w-1/2 flex items-center justify-center text-white text-center  font-[600] text-[16px] uppercase quantico`}>
                        <span className="btn-hov-text">
                        <span className="btn-text" >Active</span>
                        <span className="btn-text" >Active</span>
                        </span>
                    </Tab>
                    <Tab onClick={() =>setType("passive")} className={`my-message-btn cursor-pointer ${Type === "active" ? "active-btn" : "passive-btn"} hov-btn bg-[rgba(255,255,255,0.05)] rounded-[15px] h-[50px] relative w-[120px] xsm:w-1/2 flex items-center justify-center text-white text-center  font-[600] text-[16px] uppercase quantico`}>
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
                 <MyMessageTable data={msgList}/>
            </TabPanel>
            <TabPanel>
                <MyMessageTable data={msgList}/>
            </TabPanel>
        </Tabs>
    </div>
  )
}

export default MyMessages
