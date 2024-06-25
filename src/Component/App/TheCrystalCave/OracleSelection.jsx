import React, { useEffect, useState } from 'react'
import Dropdown from '../../Core/Dropdown'
import Image from 'next/image';
import CategoriesDropdown from '../../Core/CategoriesDropdown';
import StampsDropdown from '../../Core/StampsDropdown';
import axios from 'axios';

const crystalData = [
    {
        imgSrc: "/assets/images/img/cave4.png",
        title: "Need funding for my next match",
        code: "Code: #A00048",
        icons: [
            { src: "/assets/images/img/SportsAndArts.png", tooltip: "Sports and Arts" }
        ],
        userType: "Member",
        goal: "250,000 MRLN (25.5%)",
        like: "459",
        dislike: "36",


    },
    {
        imgSrc: "/assets/images/img/cave5.png",
        title: "I want plant 10 million tree",
        code: "Code: #A00045",
        icons: [
            { src: "/assets/images/img/Social.png", tooltip: "Social Responsibilities" }
        ],
        userType: "Member",
        goal: "250,000 MRLN (25.5%)",
        like: "459",
        dislike: "36",

    },
    {
        imgSrc: "/assets/images/img/cave6.png",
        title: "I need sports shoes",
        code: "Code: #A00044",
        icons: [
            { src: "/assets/images/img/SportsAndArts.png", tooltip: "Sports and Arts" }
        ],
        userType: "Commoner",
        goal: "250,000 MRLN (25.5%)",
        like: "130",
        dislike: "85",

    },
    {
        imgSrc: "/assets/images/img/cave7.png",
        title: "Want to visit Maldives",
        code: "Code: #A00043",
        icons: [
            { src: "/assets/images/img/Personal.png", tooltip: "Personal Goals" }
        ],
        userType: "Member",
        goal: "250,000 MRLN (25.5%)",
        like: "1,006",
        dislike: "488",

    },
    {
        imgSrc: "/assets/images/img/cave8.png",
        title: "Seeking funds for a Business",
        code: "Code: #A00042",
        icons: [
            { src: "/assets/images/img/Innovation.png", tooltip: "Innovation" },
            { src: "/assets/images/img/Personal.png", tooltip: "Personal Goals" }
        ],
        userType: "Member",
        goal: "250,000 MRLN (25.5%)",
        like: "289",
        dislike: "100",

    },

];

const OracleSelection = () => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const [oracleList, setOracleList] = useState();
    const [category, setCategory] = useState("all");
    const [stamp, setStamp] = useState("Stamps");

    const handleOracle = async () => {
        try {
            const url = `category=${category}`
            const data = await axios.get(`${baseUrl}/raven/oracleList?${url}`);
            if (data?.status === 200 && data?.data?.msg === "Success") {
                setOracleList(data?.data?.result)
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        handleOracle();
    }, [])  
    console.log(stamp,"STAMP")
    return (
        <div className='rounded-[40px] backdrop-blur-[15px] p-[60px] 2xl:py-[35px] 2xl:px-[25px] xl:px-[20px]' style={{ background: 'linear-gradient(178deg, rgba(255, 255, 255, 0.05) 2.04%, rgba(255, 255, 255, 0.01) 97.96%)' }}>
            <div className="flex items-end justify-between gap-[4%] flex-wrap mb-[30px] xl:mb-[15px]">
                <div className='w-[48%] lg:w-[100%]'>
                    <h2 className='text-[40px] 2xl:text-[32px] leading-[130%] font-[700] text-white quantico uppercase'>The Oracle’s selection</h2>
                    <p>Editors can create pre-proposals by selecting from the candidates presented by the oracle. They may choose a minimum of 5 and a maximum of 20 candidates to form a pre-proposal.</p>
                </div>
                <div className="w-[48%] lg:w-[100%] lg:mt-[20px] flex items-center justify-end gap-[20px] lg:gap-[4%] lg:mb-[10px] lg:flex-wrap">
                    <div className='w-[194px] xl:w-[48%]'>
                        <CategoriesDropdown setCategory={setCategory} category={category} />
                    </div>
                    <div className='w-[153px] xl:w-[48%]'>
                        <button type='submit' onClick={() => handleOracle()} className="hov-btn no-border btn-has-shape bg-[#12CFA7] h-[50px] text-white quantico font-[700] w-full rounded-[18px] uppercase">
                            <span className="btn-hov-text">
                                <span className="btn-text">once more</span>
                                <span className="btn-text">once more</span>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="lg:overflow-x-scroll">
                <div className="xl:text-[14px] min-w-[950px] ">
                    <ul className="flex items-center justify-between py-[15px] uppercase">
                        <li className="pl-[30px] xl:pl-[15px] pr-[15px] w-[40%]">Raven Message</li>
                        <li className="px-[15px] xl:px-[5px] w-[15%]">GOAL</li>
                        <li className="px-[15px] xl:px-[5px] w-[15%]">Categories</li>
                        <li className="px-[15px] xl:px-[5px] w-[15%]">User Type</li>
                        <li className="px-[15px] xl:px-[5px] pr-[30px] w-[15%] text-right xl:min-w-[max-content]">Like / Dislike</li>
                    </ul>
                    {oracleList ? (
                        oracleList.map((data, index) => (
                            <ul key={index} className={`rounded-[20px] mb-[15px] relative crystal-table-row backdrop-blur-[10px] py-[15px] flex items-center justify-between`} style={{ background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 50%, rgba(255, 255, 255, 0.08) 100%)', zIndex: crystalData.length - index }}>
                                <li className="w-[40%] px-[15px] xl:pr-[5px]">
                                    <div className="flex items-center justify-start">
                                        <div className="min-h-[60px] min-w-[60px] max-h-[60px] max-w-[60px] rounded-[15px] overflow-hidden">
                                            <Image src={data.avatarImage} alt="Avatar" className="object-cover w-full h-full" width="60" height="60" />
                                        </div>
                                        <div className="ml-[14px]">
                                            <h3 className="overflow-hidden text-ellipsis text-[20px] lg:text-[18px] md:text-[16px] font-[500] text-white lexend mb-[5px] text-nowrap max-w-[320px] 2xl:max-w-[260px]">{data.title}</h3>
                                            <p className="text-[16px] lg:text-[15px] md:text-[14px] font-[300] lexend uppercase">{data.code}</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="px-[15px] xl:px-[5px] w-[15%]">
                                    <span className="text-[16px] lg:text-[15px] md:text-[14px] text-white font-[400] lexend">{data.projectGoal}</span>
                                </li>
                                <li className="px-[15px] xl:px-[5px] w-[15%]">
                                    <div className="flex items-center justify-start gap-[20px]">
                                        <div className="flex items-center justify-start gap-[20px]">
                                            {data.categories.map((item, index) => {
                                                return (
                                                    <div
                                                        className="tooltip"
                                                        data-tip={item}
                                                        key={index}
                                                    >
                                                        <Image
                                                            src={`/assets/images/img/${item}.png`}
                                                            alt="icon"
                                                            width={34}
                                                            height={34}
                                                        />
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </li>
                                <li className="px-[15px] xl:px-[5px] w-[15%]">
                                    <span className="text-[16px] lg:text-[15px] md:text-[14px] text-white font-[400] lexend">{data.UserType}</span>
                                </li>
                                <li className="px-[15px] w-[15%] relative z-[999]">
                                    <div className='w-full justify-end flex'>
                                        <StampsDropdown stamp={stamp} setStamp={setStamp} />
                                    </div>
                                </li>
                            </ul>
                        ))
                    ) : (
                        <p>No list</p>
                    )}

                </div>
            </div>

        </div>
    )
}
export default OracleSelection

