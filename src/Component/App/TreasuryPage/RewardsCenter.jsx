import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SectionTitle from '../../Core/SectionTitle';
import Image from 'next/image';
import RewardsInfo from './RewardsInfo';
import Dropdown from '../../Core/Dropdown';
import RewardsTable from './RewardsTable';

const RewardsCenter = () => {
  const unclaimedRewards = [
    { proposal: '#PA00049', winner: '0 MRLN', senator: '1,000 MRLN', editor: '0 MRLN', member: '200 MRLN', donor: '0 MRLN', bonus: '50 XYZ' },
    { proposal: '#PA00049', winner: '0 MRLN', senator: '1,000 MRLN', editor: '0 MRLN', member: '200 MRLN', donor: '0 MRLN', bonus: '50 XYZ' },
    { proposal: '#PA00049', winner: '0 MRLN', senator: '1,000 MRLN', editor: '0 MRLN', member: '200 MRLN', donor: '0 MRLN', bonus: '50 XYZ' },
    { proposal: '#PA00049', winner: '0 MRLN', senator: '1,000 MRLN', editor: '0 MRLN', member: '200 MRLN', donor: '0 MRLN', bonus: '50 XYZ' },
    { proposal: '#PA00049', winner: '0 MRLN', senator: '1,000 MRLN', editor: '0 MRLN', member: '200 MRLN', donor: '0 MRLN', bonus: '50 XYZ' },
    { proposal: '#PA00049', winner: '0 MRLN', senator: '1,000 MRLN', editor: '0 MRLN', member: '200 MRLN', donor: '0 MRLN', bonus: '50 XYZ' },
    { proposal: '#PA00049', winner: '0 MRLN', senator: '1,000 MRLN', editor: '0 MRLN', member: '200 MRLN', donor: '0 MRLN', bonus: '50 XYZ' },
    { proposal: '#PA00049', winner: '0 MRLN', senator: '1,000 MRLN', editor: '0 MRLN', member: '200 MRLN', donor: '0 MRLN', bonus: '50 XYZ' },
    { proposal: '#PA00049', winner: '0 MRLN', senator: '1,000 MRLN', editor: '0 MRLN', member: '200 MRLN', donor: '0 MRLN', bonus: '50 XYZ' },
    { proposal: '#PA00049', winner: '0 MRLN', senator: '1,000 MRLN', editor: '0 MRLN', member: '200 MRLN', donor: '0 MRLN', bonus: '50 XYZ' },
    // Add more unclaimed rewards here
  ];

  const claimedRewards = [
    { proposal: '#PA00050', winner: '0 MRLN', senator: '500 MRLN', editor: '0 MRLN', member: '150 MRLN', donor: '0 MRLN', bonus: '25 XYZ' },
    { proposal: '#PA00050', winner: '0 MRLN', senator: '500 MRLN', editor: '0 MRLN', member: '150 MRLN', donor: '0 MRLN', bonus: '25 XYZ' },
    { proposal: '#PA00050', winner: '0 MRLN', senator: '500 MRLN', editor: '0 MRLN', member: '150 MRLN', donor: '0 MRLN', bonus: '25 XYZ' },
    { proposal: '#PA00050', winner: '0 MRLN', senator: '500 MRLN', editor: '0 MRLN', member: '150 MRLN', donor: '0 MRLN', bonus: '25 XYZ' },
    { proposal: '#PA00050', winner: '0 MRLN', senator: '500 MRLN', editor: '0 MRLN', member: '150 MRLN', donor: '0 MRLN', bonus: '25 XYZ' },
    { proposal: '#PA00050', winner: '0 MRLN', senator: '500 MRLN', editor: '0 MRLN', member: '150 MRLN', donor: '0 MRLN', bonus: '25 XYZ' },
    { proposal: '#PA00050', winner: '0 MRLN', senator: '500 MRLN', editor: '0 MRLN', member: '150 MRLN', donor: '0 MRLN', bonus: '25 XYZ' },
    { proposal: '#PA00050', winner: '0 MRLN', senator: '500 MRLN', editor: '0 MRLN', member: '150 MRLN', donor: '0 MRLN', bonus: '25 XYZ' },
    { proposal: '#PA00050', winner: '0 MRLN', senator: '500 MRLN', editor: '0 MRLN', member: '150 MRLN', donor: '0 MRLN', bonus: '25 XYZ' },
    { proposal: '#PA00050', winner: '0 MRLN', senator: '500 MRLN', editor: '0 MRLN', member: '150 MRLN', donor: '0 MRLN', bonus: '25 XYZ' },
    { proposal: '#PA00050', winner: '0 MRLN', senator: '500 MRLN', editor: '0 MRLN', member: '150 MRLN', donor: '0 MRLN', bonus: '25 XYZ' },
    // Add more claimed rewards here
  ];

  return (
    <div className="pt-[40px] pb-[60px] px-[60px] 2xl:px-[25px] rounded-[40px] backdrop-blur-[15px]" style={{ background: 'linear-gradient(178deg, rgba(255, 255, 255, 0.05) 2.04%, rgba(255, 255, 255, 0.01) 97.96%)' }}>
      <div className="flex flex-wrap items-center justify-between md:flex-wrap md:gap:[16px]">
        <div className="w-1/2 md:w-full">
          <SectionTitle title="Claim Rewards" subtitle="Rewards Center" alignment="text-left" titleMaxW="600px" titleMargin="mb-[60px] lg:mb-[30px]" />
        </div>
        <div className="w-1/2 md:w-full">
          <div className="flex items-center justify-between rounded-[18px] mb-[30px] px-[20px] py-[13px] bg-gradient-to-r from-[#ffffff10] to-[#ffffff05] gap-[20px] mb-40px">
            <div className="flex items-center justify-start gap-[15px]">
              <div className="h-[40px] relative w-[40px] rounded-full overflow-hidden flex items-center justify-center">
                <img src="/assets/images/coins/eth.png" alt="coin" fill={true} />
              </div>
              <p className="mb-0">
                <span className='text-white leading-[16px]'>0x478...2f32</span>
                <br />
                <span className='text-[14px] leading-[14px]'>Ethereum</span>
              </p>
            </div>
            <button className='text-[14px] text-[#12CFA7] rounded-[10px] px-[15px] py-[4px] bg-[#12cfa615]'>Connected</button>
          </div>
        </div>
      </div>

      <RewardsInfo />
      <div className="pt-[60px] xl:pt-[40px] md:pt-[30px] sm:pt-[25px]">
        <Tabs>
          <div className="flex items-center justify-between gap-[15px] flex-wrap mb-[35px] xl:mb-[10px] sm:flex-wrap]">
            <TabList className="flex items-center justify-start gap-[20px] xsm:w-full">
              <Tab className='my-message-btn cursor-pointer active-btn hov-btn bg-[rgba(255,255,255,0.05)] rounded-[15px] h-[50px] relative w-[120px] xsm:w-1/2 flex items-center justify-center text-white text-center  font-[600] text-[16px] uppercase quantico'>
                <span className="btn-hov-text">
                  <span className="btn-text">Unclaimed</span>
                  <span className="btn-text">Unclaimed</span>
                </span>
              </Tab>
              <Tab className='my-message-btn cursor-pointer passive-btn hov-btn bg-[rgba(255,255,255,0.05)] rounded-[15px] h-[50px] relative w-[120px] xsm:w-1/2 flex items-center justify-center text-white text-center  font-[600] text-[16px] uppercase quantico'>
                <span className="btn-hov-text">
                  <span className="btn-text">Claimed</span>
                  <span className="btn-text">Claimed</span>
                </span>
              </Tab>
            </TabList>
            <div className='w-[194px] xsm:w-full'>
              <Dropdown btnTitle="Filters" />
            </div>
          </div>

          <TabPanel>
            <RewardsTable data={unclaimedRewards} />
          </TabPanel>
          <TabPanel>
            <RewardsTable data={claimedRewards} />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default RewardsCenter;
