import React, { useState } from 'react';
import OracalCard from './OracalCard';
import Pagination from '../../Core/Pagination';
import { useSelector } from 'react-redux';


const Oracle = () => {
    const data = useSelector((state) => state.oracleList.oracleList);
    const [deleteList, setDeleteList] = useState([]);
    return (
        <div className='rounded-[40px] backdrop-blur-[15px] overflow-hidden' style={{ background: 'linear-gradient(178deg, rgba(255, 255, 255, 0.05) 2.04%, rgba(255, 255, 255, 0.01) 97.96%)' }}>
            <div className='px-[60px] pt-[60px] 2xl:pt-[35px] 2xl:px-[25px] xl:px-[20px]'>            
                <div className='max-w-[598px] w-full mb-[40px] xl:mb-[25px]'>
                    <h2 className='text-[40px] 2xl:text-[32px] leading-[130%] font-[700] text-white quantico uppercase'>List of Selected Crystals</h2>
                    <p>This list consists of crystals carefully selected from the nearest prophecies that the oracle expects to come true. An editor can select between 5 and 20 of these crystals as candidates to create a pre-proposal.</p>
                </div>

                <div className="flex justify-start items-start mx-[-15px] flex-wrap">
                    <div className="px-[15px] w-1/4 xl:w-1/3 lg:w-1/2 sm:w-full mb-[30px]">
                        <div className="rounded-[20px] py-[30px] px-[20px] min-h-[923px] sm:min-h-[auto]" style={{ background: 'linear-gradient(180deg, rgba(15, 229, 127, 0.10) 0%, rgba(255, 255, 255, 0.01) 100%)' }}>
                            <h3 className='font-[300] text-[18px] lexend text-[#0fe57ebb] uppercase text-center mb-[20px]'>Green Stamp</h3>
                            <ul>
                                {data?.GreenStamp.length > 0 ? data.GreenStamp.map((card, index) => (
                                    <li key={index} className={index === data?.GreenStamp - 1 ? 'mb-[15px]' : 'mb-[15px] last:mb-0'}>
                                        <OracalCard
                                            messageCode={card.code}
                                            oracalImg={card.image}
                                            id={card.id}
                                            deleteList={deleteList}
                                            setDeleteList={setDeleteList}
                                        />
                                    </li>
                                )) : "No data"}
                            </ul>
                        </div>
                    </div>
                    <div className="px-[15px] w-1/4 xl:w-1/3 lg:w-1/2 sm:w-full mb-[30px]">
                        <div className="rounded-[20px] py-[30px] px-[20px] min-h-[923px] sm:min-h-[auto]" style={{ background: 'linear-gradient(180deg, rgba(251, 198, 10, 0.10) 0%, rgba(255, 255, 255, 0.01) 100%)' }}>
                            <h3 className='font-[300] text-[18px] lexend text-[#fbc70ad0] uppercase text-center mb-[20px]'>Yellow Stamp</h3>
                            <ul>
                                {data.YellowStamp.length > 0 ?  data.YellowStamp.map((card, index) => (
                                    <li key={index} className={index === data.YellowStamp.length - 1 ? 'mb-[15px]' : 'mb-[15px] last:mb-0'}>
                                        <OracalCard
                                            messageCode={card.code}
                                            oracalImg={card.image}
                                            id={card.id}
                                            list={deleteList}
                                            setList={setDeleteList}
                                        />
                                    </li>
                                )) : "No data"}
                            </ul>
                        </div>
                    </div>
                    <div className="px-[15px] w-1/4 xl:w-1/3 lg:w-1/2 sm:w-full mb-[30px]">
                        <div className="rounded-[20px] py-[30px] px-[20px] min-h-[923px] sm:min-h-[auto]" style={{ background: 'linear-gradient(180deg, rgba(21, 143, 255, 0.10) 0%, rgba(255, 255, 255, 0.01) 100%)' }}>
                            <h3 className='font-[300] text-[18px] lexend text-[#158effc7] uppercase text-center mb-[20px]'>Blue Stamp</h3>
                            <ul>
                                {data.BlueStamp.length > 0 ? data.BlueStamp.map((card, index) => (
                                    <li key={index} className={index === data.BlueStamp.length - 1 ? 'mb-[15px]' : 'mb-[15px] last:mb-0'}>
                                        <OracalCard
                                            messageCode={card.code}
                                            oracalImg={card.image}
                                            id={card.id}
                                        />
                                    </li>
                                )) : "No Data"}
                            </ul>
                        </div>
                    </div>
                    <div className="px-[15px] w-1/4 xl:w-1/3 lg:w-1/2 sm:w-full mb-[30px]">
                        <div className="rounded-[20px] py-[30px] px-[20px] min-h-[923px] sm:min-h-[auto]" style={{ background: 'linear-gradient(180deg, rgba(235, 26, 26, 0.10) 0%, rgba(255, 255, 255, 0.01) 100%)' }}>
                            <h3 className='font-[300] text-[18px] lexend text-[#eb1a1acb] uppercase text-center mb-[20px]'>Red Stamp</h3>
                            <ul>
                                {data?.RedStamp.length > 0 ? data.RedStamp.map((card, index) => (
                                    <li key={index} className={index === data?.RedStamp.length - 1 ? 'mb-[15px]' : 'mb-[15px] last:mb-0'}>
                                        <OracalCard
                                            messageCode={card.code}
                                            oracalImg={card.image}
                                            id={card.id}
                                        />
                                    </li>
                                )) : "No Data"}
                            </ul>
                        </div>
                    </div>
                </div>
                <Pagination/>
            </div>

            <div className="card-footer py-[15px] px-[60px] 2xl:px-[25px] xl:px-[20px] mt-[30px] bg-[#ffffff0c] backdrop-blur-[15px] flex justify-end sm:justify-between sm:flex-wrap gap-[30px] sm:gap-[16px]">
                <button type='submit' className="hov-btn no-border btn-has-shape bg-[#FFFFFF10] border-1 border-[#FFFFFF15] px-[10px] h-[60px] text-white quantico font-[700] max-w-[146px] sm:max-w-[47%] w-full rounded-[18px] uppercase">
                    <span className="btn-hov-text">
                        <span className="btn-text">Delete all</span>
                        <span className="btn-text">Delete all</span>
                    </span>
                </button>
                <button type='submit' className="hov-btn no-border btn-has-shape bg-[#FFFFFF10] border-1 border-[#FFFFFF15] px-[10px] h-[60px] text-white quantico font-[700] max-w-[195px] sm:max-w-[47%] w-full rounded-[18px] uppercase">
                    <span className="btn-hov-text">
                        <span className="btn-text">Delete Selected</span>
                        <span className="btn-text">Delete Selected</span>
                    </span>
                </button>
                <button type='submit' className="hov-btn no-border btn-has-shape bg-[#12CFA7] h-[60px] text-white quantico font-[700] px-[10px] max-w-[246px] sm:max-w-full w-full rounded-[18px] uppercase">
                    <span className="btn-hov-text">
                        <span className="btn-text">Create  Pre-Proposal</span>
                        <span className="btn-text">Create  Pre-Proposal</span>
                    </span>
                </button>
            </div>
        </div>
    );
};

export default Oracle;
