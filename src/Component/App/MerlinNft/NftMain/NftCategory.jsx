import React, { useState } from 'react';
import NftContainerWrapper from '../NftContainerWrapper';
import Link from 'next/link';
import Modal from '@/src/Component/Core/Modals/Modal';
import { useRouter } from 'next/router';

const categories = [
  {
    name: 'Project Merlin',
    bgColor: '#1571CE',
    iconSrc: './assets/images/icons/mrln.svg',
  },
  {
    name: 'Community',
    bgColor: '#0CE466',
    iconSrc: './assets/images/icons/sms.svg',
  },
  {
    name: 'Supported Projects',
    bgColor: '#3A34E1',
    iconSrc: './assets/images/icons/hart-big.svg',
  },
];

const NftCategory = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter()
  const openModal = () => {
    // if (!wallet) {
    //   toast.error("Please connect wallet");
    //   return;
    // }
    // console.log("nvjkfnvjk")
    // setOpen(true);
    router.push("https://docs.projectmerlin.io/projectmerlin")
  }
  return (
    <>
    {/* <Modal isOpen={open} setIsOpen={setOpen}  /> */}
    <div className='py-[120px] xl:py-[100px] lg:py-[80px] md:py-[70px] xsm:py-[50px]'>
      <NftContainerWrapper>
        <div className="flex items-center justify-between mx-[-15px] lg:flex-wrap">
          {categories.map((category, index) => (
            <div className="w-2/6 lg:w-1/2 sm:w-full px-[15px] lg:mb-[20px] last:mb-0 cursor-pointer" key={index} onClick={category.name === "Project Merlin" ? () => openModal() : null}>
              <div  className="flex items-center justify-between px-[30px] py-[25px] rounded-[20px] relative overflow-hidden bg-[rgba(255,255,255,0.05)]" style={{ border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                <div className="bg-[#51209B] rounded-[271.826px] blur-[40px] absolute bottom-[-40%] left-[-20%] w-[70%] h-[85%] z-0" style={{ backgroundColor: category.bgColor, transform: 'rotate(21deg)' }} />
                <span className='text-[22px] xl:text-[18px] lg:text-[16px] font-[700] text-white leading-[90.909%] relative z-10'  >{category.name}</span>
                <img src={category.iconSrc} alt="icon" className='absolute bottom-0 right-[30px] z-10' />
              </div>
            </div>
          ))}
        </div>
      </NftContainerWrapper>
    </div>
    </>
  );
}

export default NftCategory;
