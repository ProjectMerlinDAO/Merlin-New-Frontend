import { useWallet } from '@solana/wallet-adapter-react';
import axios from 'axios';
import Image from 'next/image'
import React, { useState } from 'react'
import { toast } from 'react-toastify';

const LikeShareCard = ({ id, like, dislike, fetch, isOpen ,setIsOpen, wallet, isPayment, setIsPayment, setIsBoost }) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const [isLiked, setIsLiked] = useState(false); // Track like button state
  const [isDisliked, setIsDisliked] = useState(false); // Track dislike button state
  const { publicKey } = useWallet();
  const key = publicKey?.toBase58();


  const handleLikeApi = async () => {
    if (!key) {
      return toast.error("Please connect wallet to proceed further")
    }
    try {
      const like = await axios.post(`${baseUrl}/raven/like`, {
        id,
        key,
      });
      if (like.status === 200 && like.data.msg === "Success") {
        fetch();
        return;
      }
    } catch (error) {
      console.log(error)
    }
   
  };
 
  const handleDislikeApi = async () => {
    if(!key){
       toast.error("Please connect wallet to proceed further");
       return;
    }
      const disLike = await axios.post(`${baseUrl}/raven/dislike`, {
        id,
        key,
      });
     if(disLike.status === 200 && disLike.data.msg === "Success"){
      fetch();
      return;
     }
  };

  const handleLikeClick = () => {
    if (isDisliked) {
      setIsDisliked(false); // Deactivate dislike button if it was active
    }
    setIsLiked(true); // Toggle like state on click
    handleLikeApi();
  }

  const handleDislikeClick = () => {
    if (isLiked) {
      setIsLiked(false); // Deactivate like button if it was active
    }
    setIsDisliked(true); // Toggle dislike state on click
    handleDislikeApi();
  }
 
  const openModal = () => {
    if (!wallet) {
      toast.error("Please connect wallet");
      return;
    }
    setIsOpen(true);
  }

  const handleBoost = (e) => {
    e.preventDefault();
    if(!wallet){
      toast.error("Please Connect wallet");
      return;
    }
    setIsPayment(true);
    setIsBoost(true);
  }

  return (
    <>
    <div className='rounded-[20px] backdrop-blur-[5px] p-[40px] 2xl:p-[20px] relative personal-info-card' style={{ background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.00) 100%)' }}>
      <div className="flex items-center justify-between gap-[20px] relative z-10">
        <button
          className={`rounded-[18px] flex items-center justify-center gap-[10px] w-1/2 h-[60px] text-${isLiked ? 'white' : ''} ${isLiked ? 'like-active' : 'like-btn'}`}
          onClick={handleLikeClick}
        >
          <Image src="/assets/images/icons/like.svg" alt="icon" width="21" height="20" />
          <span>{like?.length}</span>  {/* Update text content based on like state */}
        </button>
        <button className={`rounded-[18px] flex items-center justify-center gap-[10px] w-1/2 h-[60px] text-${isDisliked ? 'white' : ''} ${isDisliked ? 'dislike-active' : 'dislike-btn'}`} onClick={handleDislikeClick}>
          <Image src="/assets/images/icons/dislike.svg" alt="icon" width="21" height="20" />
          <span>{dislike?.length}</span>
        </button>
      </div>
      <button type='submit' onClick={openModal} className="hov-btn no-border btn-has-shape flex items-center justify-center gap-[10px] bg-[#ffffff0c] h-[60px] text-white quantico font-[700] w-full rounded-[18px] uppercase mt-[30px]">
        <Image src="/assets/images/icons/share-icon.svg" alt="icon" width="16" height="18" />
        <span className="btn-hov-text">
          <span className="btn-text">Share</span>
          <span className="btn-text">Share</span>
        </span>
      </button>
      

      <button type='submit' onClick={handleBoost} className="hov-btn no-border btn-has-shape flex items-center justify-center gap-[10px] bg-[#ffffff0c] h-[60px] text-white quantico font-[700] w-full rounded-[18px] uppercase mt-[30px]">
        <span className="btn-hov-text">
          <span className="btn-text">🚀 Boost Raven Message</span>
          <span className="btn-text">🚀 Boost Raven Message</span>
        </span>
      </button>
      <button type='submit' className="hov-btn no-border btn-has-shape flex items-center justify-center gap-[10px] bg-[#ffffff0c] h-[60px] text-white quantico font-[700] w-full rounded-[18px] uppercase mt-[30px]">
        <span className="btn-hov-text">
          <span className="btn-text">🚩 Report</span>
          <span className="btn-text">🚩 Report</span>
        </span>
      </button>
    </div>
    </>
  )
}

export default LikeShareCard
