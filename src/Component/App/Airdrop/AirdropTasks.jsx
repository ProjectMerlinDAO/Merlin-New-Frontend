import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Dropdown from '@/src/Component/Core/Dropdown';
import SectionTitle from '@/src/Component/Core/SectionTitle';
import AirdropTaskTable from './AirdropTaskTable';

const AirdropTasks = () => {
  const tasksData = [
    {
      id: 1,
      taskUrl: '#',
      number: 1,
      icon: "../assets/images/icons/glob2.svg",
      description: 'Signup Project Merlin website',
      status: 'Completed',
      points: 50,
      pointsClass: 'text-[#12CF69] bg-[rgba(18,207,105,0.15)]',
      statusIcon: "../assets/images/icons/green-check.svg"
    },
    {
      id: 2,
      taskUrl: '#',
      number: 4,
      icon: "../assets/images/icons/x.svg",
      description: 'Follow @projectmerlin on Twitter',
      status: 'Completed',
      points: 200,
      pointsClass: 'text-[#12CF69] bg-[rgba(18,207,105,0.15)]',
      statusIcon: "../assets/images/icons/green-check.svg"
    },
    {
      id: 3,
      taskUrl: '#',
      number: 3,
      icon: "../assets/images/icons/telegram.svg",
      description: 'Join @projectmerlin on Telegram',
      status: 'Pending',
      points: 300,
      pointsClass: 'text-[#FFFFFF] bg-[#12CF69]'
    },
    {
      id: 4,
      taskUrl: '#',
      number: 5,
      icon: "../assets/images/icons/discord-outline2.svg",
      description: 'Join Discord Server',
      status: 'Pending',
      points: 100,
      pointsClass: 'text-[#FFFFFF] bg-[#12CF69]'
    },
    {
      id: 5,
      taskUrl: '#',
      number: 6,
      icon: "../assets/images/icons/fb-f2.svg",
      description: 'Visit @projectmerlin on Facebook',
      status: 'Pending',
      points: 50,
      pointsClass: 'text-[#FFFFFF] bg-[#12CF69]'
    },
    {
      id: 6,
      taskUrl: '#',
      number: 7,
      icon: "../assets/images/icons/presale.svg",
      description: 'Visit our Presale Website',
      status: 'Pending',
      points: 200,
      pointsClass: 'text-[#FFFFFF] bg-[#12CF69]'
    },
    {
      id: 7,
      taskUrl: '#',
      number: 7,
      icon: "../assets/images/icons/wallet.svg",
      description: 'Submit Presale Wallet Address',
      status: 'Pending',
      points: 500,
      pointsClass: 'text-[#FFFFFF] bg-[#12CF69]'
    },
    {
      id: 8,
      taskUrl: '#',
      number: 8,
      icon: "../assets/images/icons/refer-friend.svg",
      description: 'Refer Friends For Extra Entries',
      status: 'Pending',
      points: 100,
      pointsClass: 'text-[#FFFFFF] bg-[#12CF69]'
    }
  ];

  const tasksData2 = [
    {
      id: 1,
      taskUrl: '#',
      number: 1,
      icon: "../assets/images/icons/glob2.svg",
      description: 'Signup Project Merlin website',
      status: 'Completed',
      points: 50,
      pointsClass: 'text-[#12CF69] bg-[rgba(18,207,105,0.15)]',
      statusIcon: "../assets/images/icons/green-check.svg"
    },
    {
      id: 2,
      taskUrl: '#',
      number: 4,
      icon: "../assets/images/icons/x.svg",
      description: 'Follow @projectmerlin on Twitter',
      status: 'Completed',
      points: 200,
      pointsClass: 'text-[#12CF69] bg-[rgba(18,207,105,0.15)]',
      statusIcon: "../assets/images/icons/green-check.svg"
    },
  ];

  const tasksData3 = [
    {
      id: 1,
      taskUrl: '#',
      number: 1,
      icon: "../assets/images/icons/telegram.svg",
      description: 'Join @projectmerlin on Telegram',
      status: 'Expired',
      points: 300,
      pointsClass: 'text-[#FFFFFF] bg-[#12CF69]'
    },
    {
      id: 2,
      taskUrl: '#',
      number: 2,
      icon: "../assets/images/icons/discord-outline2.svg",
      description: 'Join Discord Server',
      status: 'Expired',
      points: 100,
      pointsClass: 'text-[#FFFFFF] bg-[#12CF69]'
    },
    {
      id: 3,
      taskUrl: '#',
      number: 3,
      icon: "../assets/images/icons/fb-f2.svg",
      description: 'Visit @projectmerlin on Facebook',
      status: 'Expired',
      points: 50,
      pointsClass: 'text-[#FFFFFF] bg-[#12CF69]'
    },
    {
      id: 4,
      taskUrl: '#',
      number: 4,
      icon: "../assets/images/icons/presale.svg",
      description: 'Visit our Presale Website',
      status: 'Expired',
      points: 200,
      pointsClass: 'text-[#FFFFFF] bg-[#12CF69]'
    },
    {
      id: 5,
      taskUrl: '#',
      number: 5,
      icon: "../assets/images/icons/wallet.svg",
      description: 'Submit Presale Wallet Address',
      status: 'Expired',
      points: 500,
      pointsClass: 'text-[#FFFFFF] bg-[#12CF69]'
    },
  ];

  return (
    <div className='mt-[120px] xl:mt-[100px] lg:mt-[80px] md:mt-[60px]'>
      <SectionTitle
        title="Airdrop Tasks"
        subtitle="List of tasks"
        alignment="text-left"
        titleMaxW="390px"
        titleMargin="mb-[60px] lg:mb-[30px]"
      />
      <Tabs>
        <div className="flex items-center justify-between gap-[15px] flex-wrap mb-[35px] sm:flex-wrap]">
          <TabList className="flex items-center justify-start gap-[20px] xsm:w-full">
            <Tab className='my-message-btn cursor-pointer active-btn hov-btn bg-[rgba(255,255,255,0.05)] rounded-[15px] h-[50px] relative w-[max-content] px-[20px] sm:px-[15px] flex items-center justify-center text-white text-center font-[600] text-[16px] md:text-[14px] uppercase quantico'>
              <span className="btn-hov-text">
                <span className="btn-text">Active</span>
                <span className="btn-text">Active</span>
              </span>
            </Tab>
            <Tab className='my-message-btn cursor-pointer completed-btn hov-btn bg-[rgba(255,255,255,0.05)] rounded-[15px] h-[50px] relative w-[max-content] px-[20px] sm:px-[15px] flex items-center justify-center text-white text-center font-[600] text-[16px] md:text-[14px] uppercase quantico'>
              <span className="btn-hov-text">
                <span className="btn-text">Completed</span>
                <span className="btn-text">Completed</span>
              </span>
            </Tab>
            <Tab className='my-message-btn cursor-pointer expired-btn hov-btn bg-[rgba(255,255,255,0.05)] rounded-[15px] h-[50px] relative w-[max-content] px-[20px] sm:px-[15px] flex items-center justify-center text-white text-center font-[600] text-[16px] md:text-[14px] uppercase quantico'>
              <span className="btn-hov-text">
                <span className="btn-text">Expired</span>
                <span className="btn-text">Expired</span>
              </span>
            </Tab>
          </TabList>
          <div className='w-[194px] xsm:w-full'>
            <Dropdown btnTitle="Filters" />
          </div>
        </div>

        <TabPanel>
          <AirdropTaskTable tasks={tasksData} />
        </TabPanel>
        <TabPanel>
          <AirdropTaskTable tasks={tasksData2} />
        </TabPanel>
        <TabPanel>
          <AirdropTaskTable tasks={tasksData3} />
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default AirdropTasks;
