"use client"
import React, { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import ScarchBox from '@/src/Component/Core/ScarchBox';
import BlogCard from './BlogCard';
import Link from 'next/link';
import Image from 'next/image';


// Dynamic import for Isotope, disabling server-side rendering
const Isotope = dynamic(() => import('isotope-layout'), { ssr: false });;

const blogData = [
    {
        img: "../assets/images/blog/blog1.jpg",
        date: "28 May, 2024",
        title: "Where to Buy, Sell, and Trade Digital Collectibles",
        text: "Project Merlin is a next-generation DAO with a mission to benefit individuals within the community.",
        category: "Proposals"
    },
    {
        img: "../assets/images/blog/blog2.jpg",
        date: "25 May, 2024",
        title: "A Beginner's Guide to Digital Assets and Blockchain",
        text: "Project Merlin is a next-generation DAO with a mission to benefit individuals within the community.",
        category: "Proposals"
    },
    {
        img: "../assets/images/blog/blog3.jpg",
        date: "30 May, 2024",
        title: "Transforming the Music Industry with Blockchain ",
        text: "Project Merlin is a next-generation DAO with a mission to benefit individuals within the community.",
        category: "Dao"
    },
    {
        img: "../assets/images/blog/blog4.jpg",
        date: "24 April, 2024",
        title: "A Step-by-Step Guide for Artists and Creators",
        text: "Project Merlin is a next-generation DAO with a mission to benefit individuals within the community.",
        category: "Proposals"
    },
    {
        img: "../assets/images/blog/blog5.jpg",
        date: "08 April, 2024",
        title: "Monetizing Digital Creations in the Blockchain Era",
        text: "Project Merlin is a next-generation DAO with a mission to benefit individuals within the community.",
        category: "Dao"
    },
    {
        img: "../assets/images/blog/blog6.jpg",
        date: "29 March, 2024",
        title: "A New Paradigm for Collectors",
        text: "Project Merlin is a next-generation DAO with a mission to benefit individuals within the community.",
        category: "Reports"
    },
    {
        img: "../assets/images/blog/blog7.jpg",
        date: "22 April, 2024",
        title: "Emerging Technologies and Innovations in the Digital Art",
        text: "Project Merlin is a next-generation DAO with a mission to benefit individuals within the community.",
        category: "Nft"
    },
    {
        img: "../assets/images/blog/blog8.jpg",
        date: "8 April, 2024",
        title: "From Collectibles to Real Estate Tokenization",
        text: "Project Merlin is a next-generation DAO with a mission to benefit individuals within the community.",
        category: "Nft"
    },
    {
        img: "../assets/images/blog/blog9.jpg",
        date: "28 March, 2024",
        title: "Sustainability Concerns in the Blockchain Art Space",
        text: "Project Merlin is a next-generation DAO with a mission to benefit individuals within the community.",
        category: "Nft"
    },
    // Add more blog items here
];

const BlogContent = () => {
    const isotopeRef = useRef(null);
    const [filterKey, setFilterKey] = useState('*');

    useEffect(() => {
        let iso;
        const initIsotope = async () => {
            if (typeof window !== 'undefined') {
                const Isotope = (await import('isotope-layout')).default;
                iso = new Isotope('.blog-grid', {
                    itemSelector: '.blog-item',
                    layoutMode: 'fitRows',
                });
                isotopeRef.current = iso;
            }
        };

        initIsotope();

        // Cleanup on unmount
        return () => {
            if (iso) {
                iso.destroy();
            }
        };
    }, []);

    useEffect(() => {
        if (isotopeRef.current) {
            if (filterKey === '*') {
                isotopeRef.current.arrange({ filter: '*' });
            } else {
                isotopeRef.current.arrange({ filter: `.${filterKey}` });
            }
        }
    }, [filterKey]);

    const handleFilterChange = (key) => () => {
        setFilterKey(key);
    };

    const buttonClass = (key) => {
        const isActive = filterKey === key;
        const baseClass = 'py-[10px] px-[35px] xl:px-[30px] text-[16px] rounded-full font-[700] text-white border-2 quantico uppercase';
        const activeClass = '!text-[#12CFA7] border-[rgba(18,207,167,0.30)] bg-[rgba(255,255,255,0.10)]';
        const inactiveClass = 'border-[rgba(255,255,255,0.10)] hover:text-[#12CFA7] hover:border-[rgba(18,207,167,0.30)] bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.10)]';

        return `${baseClass} ${isActive ? activeClass : inactiveClass}`;
    };

    return (
        <div className='pt-[80px] pb-[440px] lg:pb-[400] sm:pb-[380px] xsm:pb-[340px] 2xsm:pb-[310px]'>
            <div className="relative z-10 px-[20px] md:px-[10px] max-w-[1210px] mx-auto lg:max-w-[720px]">
                <div className="flex lg:flex-wrap items-center justify-between gap-[15px]">
                    <ul className='flex items-center justify-start lg:justify-between sm:justify-start lg:w-full gap-[15px] lg:flex-wrap'>
                        <li>
                            <button onClick={handleFilterChange('*')} className={buttonClass('*')}>
                                All
                            </button>
                        </li>
                        <li>
                            <button onClick={handleFilterChange('Proposals')} className={buttonClass('Proposals')}>
                                Proposals
                            </button>
                        </li>
                        <li>
                            <button onClick={handleFilterChange('Dao')} className={buttonClass('Dao')}>
                                Dao
                            </button>
                        </li>
                        <li>
                            <button onClick={handleFilterChange('Nft')} className={buttonClass('Nft')}>
                                Nft
                            </button>
                        </li>
                        <li>
                            <button onClick={handleFilterChange('Reports')} className={buttonClass('Reports')}>
                                Reports
                            </button>
                        </li>
                    </ul>

                    <div className='max-w-[300px] lg:max-w-full w-full lg:mb-[20px]'>
                        <ScarchBox placeholder="Search articles" />
                    </div>
                </div>
                <div className="blog-grid flex items-start justify-start flex-wrap mx-[-15px] pt-[60px] lg:pt-[20px]">
                    {blogData.map((blog, index) => (
                        <div key={index} className={`blog-item px-[15px] w-2/6 lg:w-1/2 xsm:w-full mb-[40px] ${blog.category}`}>
                            <BlogCard
                                blogImg={blog.img}
                                date={blog.date}
                                blogTitle={blog.title}
                                blogText={blog.text}
                            />
                        </div>
                    ))}
                </div>
                <Link href="#" className="hov-btn btn-has-shape gap-[7px] bg-[rgba(255,255,255,0.10)] mx-auto rounded-full backdrop-blur-[5px] h-[60px] w-[230px] flex items-center justify-center text-white text-center font-[600] text-[16px] uppercase quantico mt-[10px]">
                    <span className="btn-hov-text">
                        <span className="btn-text">Load More</span>
                        <span className="btn-text">Load More</span>
                    </span>
                </Link>
            </div>
        </div>
    );
};

export default BlogContent;
