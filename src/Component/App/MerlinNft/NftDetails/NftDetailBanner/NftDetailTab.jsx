import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Descriptions from './Descriptions';
import PlaceBidContent from './PlaceBidContent';
import ActivityContent from './ActivityContent';

const NftDetailTab = () => {
  return (
    <div className="relative">
      <Tabs className='nft-detail-tab'>
        <TabList className='flex items-end justify-start text-[16px] sxm:text-[14px] font-[700] text-[#FFFFFF] leading-[162.5%]' style={{borderBottom: '2px solid rgba(255, 255, 255, 0.10)'}}>
          <Tab className='tab-btn px-[20px] xsm:p-[10px] py-[15px] uppercase'>Descriptions</Tab>
          <Tab className='tab-btn px-[20px] xsm:p-[10px] py-[15px] uppercase'>Placed Bid</Tab>
          <Tab className='tab-btn px-[20px] xsm:p-[10px] py-[15px] uppercase'>Activity</Tab>
        </TabList>

        <TabPanel>
          <Descriptions/>
        </TabPanel>
        <TabPanel>
          <PlaceBidContent/>
        </TabPanel>
        <TabPanel>
          <ActivityContent/>
        </TabPanel>
      </Tabs>
    </div>
  )
}

export default NftDetailTab