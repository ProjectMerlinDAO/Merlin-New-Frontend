import Image from 'next/image';
import React, { useState, useEffect } from 'react';

const MakeOfferPopup = () => {
    useEffect(() => {
        const dialog = document.getElementById('MakeOfferPopup');
        
        // Close the dialog when clicking outside
        const handleOutsideClick = (event) => {
            if (event.target === dialog) {
                dialog.close();
            }
        };

        dialog.addEventListener('click', handleOutsideClick);

        return () => {
            dialog.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    const closeDialog = () => {
        document.getElementById('MakeOfferPopup').close();
    };

    return (
        <div className='make-offer-popup'>
            <div onClick={() => document.getElementById('MakeOfferPopup').showModal()} className="flex btn-has-shape cursor-pointer items-center btn-no-border justify-center hov-btn rounded-full backdrop-blur-[5px] h-[60px] w-full text-[#111] text-center font-[600] text-[16px] sm:text[14px] uppercase bg-[#FFFFFF]">
                <span className="btn-hov-text">
                    <span className="btn-text">Make an offer</span>
                    <span className="btn-text">Make an offer</span>
                </span>
            </div>
            
            <dialog id="MakeOfferPopup" className="modal">
                <div className="modal-box max-w-[450px] w-full bg-[#1F282F] rounded-[20px] p-0">
                    <div className="p-[30px] relative">
                        <h3 className='text-[30px] font-[700] leading-[93.333%] text-white uppercase'>Make an Offer</h3>
                        <button type="button" onClick={closeDialog} className="text-[rgba(255,255,255,0.8)] absolute top-[30px] right-[30px] bg-transparent hover:text-white rounded-lg text-[24px] w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    <div className="rounded-[20px]" style={{background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 100%)'}}>
                        <div className="px-[30px] py-[25px]">
                            <div className="flex items-center justify-start">
                                <div className="w-[42px] h-[60px] rounded-[10px] overflow-hidden relative">
                                    <img src="./assets/images/nft/merlin-img-small.png" alt="img" className='absolute object-cover w-full h-full' />
                                </div>
                                <div className="ml-[15px]">
                                    <p className='text-[rgba(255,255,255,0.800] text-[16px] font-[400] leading-[160%] m-0'>You are bidding on</p>
                                    <h3 className='text-[22px] font-[400] leading-[225%] text-white m-0'>Merlin Avaters</h3>
                                </div>
                            </div>
                            <div className="flex items-center justify-between mt-[30px]">
                                <label className='text-[16px] font-[700] leading-[normal] text-white'>Your Price</label>
                                <span className='text-[14px] font-[500] leading-[normal] text-[rgba(255,255,255,0.50)]'> Minimum 0.027 MRLN  (~$288.50)</span>
                            </div>
                            <div className="flex make-offer-form items-center justify-between rounded-[15px] bg-[rgba(255,255,255,0.05)] mt-[15px]" style={{border: '2px solid rgba(255, 255, 255, 0.12)'}}>
                                <input type="text" placeholder='Enter Price' className='px-[20px] py-[10px] text-[16px] font-[600] bg-transparent text-white w-[55%] h-[55px]' />
                                <div className="w-[45%] h-[55px] relative make-offer-form-dropdown" style={{borderLeft: '2px solid rgba(255, 255, 255, 0.12)'}}>
                                    <select name="" id="" className="w-full h-full no-border bg-transparent px-[12px] relative z-10 cursor-pointer text-[16px] font-[500] text-white">
                                        <option value="" className="bg-[#1F282F]">MRLN</option>
                                        <option value="" className="bg-[#1F282F]">ETH</option>
                                        <option value="" className="bg-[#1F282F]">BTC</option>
                                        <option value="" className="bg-[#1F282F]">BNB</option>
                                        <option value="" className="bg-[#1F282F]">USDT</option>
                                        <option value="" className="bg-[#1F282F]">USDC</option>
                                    </select>
                                </div>
                            </div>

                            <ul className='mt-[40px]'>
                                <li className='flex items-center justify-between text-[16px] font-[500] leading-[225%] outfit'><p className="m-0 text-[rgba(255,255,255,0.80)]">Your balance <span className='rounded-[20px] bg-[rgba(12,228,102,0.20)] uppercase px-[8px] py-[4px] hover:bg-[#0CE466] hover:text-[#111111] text-[#0CE466] cursor-pointer'>DEPOSIT</span></p> <span className="text-white uppercase">2.586 MRLN</span></li>
                                <li className='flex items-center justify-between text-[16px] font-[500] leading-[225%] outfit'><p className="m-0 text-[rgba(255,255,255,0.80)]">Last Offer</p> <span className="text-white uppercase">0.027 MRLN</span></li>
                                <li className='flex items-center justify-between text-[16px] font-[500] leading-[225%] outfit'><p className="m-0 text-[rgba(255,255,255,0.80)]">Best offer</p> <span className="text-white uppercase">0.0002 MRLN</span></li>
                                <li className='flex items-center justify-between text-[16px] font-[500] leading-[225%] outfit'><p className="m-0 text-[rgba(255,255,255,0.80)]">Royalties</p> <span className="text-white uppercase">0.002%</span></li>
                            </ul>
                        </div>
                        <div className="rounded-[20px] px-[30px] py-[25px]" style={{background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.00) 100%)'}}>
                            <div className="flex items-center justify-between text-[16px] font-[500] leading-[225%] outfit ">
                                <span className="text-[rgba(255,255,255,0.80)]">Total Price</span>
                                <span className="text-white uppercase">0.00 MRLN</span>
                            </div>
                            <div className="flex btn-has-shape mt-[15px] make-offer-btn items-center btn-no-border justify-center hov-btn rounded-full backdrop-blur-[5px] h-[60px] w-full text-[#111] hover:text-white text-center font-[600] text-[16px] sm:text[14px] uppercase bg-[#0CE466]">
                                <span className="relative z-10 btn-hov-text">
                                    <span className="btn-text">Make Offer</span>
                                    <span className="btn-text">Make Offer</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </dialog>
        </div>
    )
}

export default MakeOfferPopup;
