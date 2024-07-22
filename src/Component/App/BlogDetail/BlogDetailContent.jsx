import { useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import BlogQuote from './BlogQuote'
import BlogCategoriesCard from './BlogCategoriesCard'
import SubscribeCard from './SubscribeCard'


const BlogDetailContent = () => {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        const dummy = document.createElement('textarea');
        dummy.value = window.location.href;
        document.body.appendChild(dummy);
        dummy.select();
        document.execCommand('copy');
        document.body.removeChild(dummy);

        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
    };
    return (
        <div className="relative pb-[430px] lg:pb-[390] sm:pb-[370px] xsm:pb-[330px] 2xsm:pb-[300px] z-0">
            <img src="../assets/images/bg/about-bg.png" alt="bg" className="absolute top-0 left-0 z-0 w-full h-[22%]" />
            <div className="absolute top-0 left-0 w-full h-[22%]" style={{background: 'linear-gradient(180deg, rgba(13, 16, 20, 0.00) 0%, rgba(13, 16, 20, 0.76) 33%, #0D1014 85.42%)'}}></div>
            <div className="pt-[115px] xl:pt-[105px] lg:pt-[100px] relative z-20 md:pt-[90px]" style={{ background: 'linear-gradient(180deg, rgba(13, 16, 20, 0.00) 0%, rgba(13, 16, 20, 0.76) 33%, #0D1014 85.42%)' }}>
            <div className="relative z-10 px-[20px] md:px-[10px] max-w-[1210px] mx-auto lg:max-w-[720px]">
                <ul className='flex items-center justify-start gap-[8px] relative pt-[5px] pl-[48px] z-[999] mt-[40px] mb-[30px] 2xl:text-[14px] md:flex-wrap'>
                    <li className='flex items-center justify-start gap-[8px] uppercase hover:text-white mr-10px ml-[-5px]'><Link href="/blog" className="absolute top-0 left-0 flex"  ><Image src="/assets/images/icons/back-arrow.svg" alt="icon" height="40" width="40" /></Link></li>
                    <li className='flex items-center justify-start gap-[8px] uppercase hover:text-white'><Link href="/" className="flex">HOME</Link> . </li>
                    <li className='flex items-center justify-start gap-[8px] uppercase hover:text-white'><Link href="/blog" className="flex">Articles</Link> . </li>
                    <li className='flex items-center justify-start gap-[8px] hover:text-white'><Link href="/blog-detail" className="flex">How NFTs Are Revolutionizing the Creative World</Link></li>
                </ul>

                <div className="flex items-start justify-start lg:flex-wrap mx-[-25px] lg:mx-[-15px]">
                    <div className="w-4/6 lg:w-full px-[25px] lg:px-[15px]">
                        <h2 className='text-[45px] xl:text-[40px] md:text-[32px] sm:text-[28px] md:max-w-[500px] leading-[144.444%] font-[500] text-white lexend mb-[30px] xl:mb-[20px]'>How NFTs Are Revolutionizing the Creative World</h2>
                        <h6 className="flex items-center justify-start gap-[10px] mb-[30px] uppercase text-white text-[16px] sm:text-[14px] font-[600] quantico"><span>Proposals</span><span>.</span><span>10 May, 2024</span><span>.</span><span>7 min read</span> </h6>
                        <div className="px-[25px] py-[16px] flex items-center justify-between max-w-[376px] gap-[30px] rounded-[15px] bg-[rgba(255,255,255,0.08)] mb-[40px]">
                            <h5 className='uppercase quantico text-[16px] font-[700] text-white'>Share</h5>
                            <ul className="flex items-center justify-between max-w-[268px] ml-auto w-full">
                                <li><Link href="#"><Image src="/assets/images/icons/x.svg" alt="icon" height="16" width="16" /></Link></li>
                                <li><Link href="#"><Image src="/assets/images/icons/fb-f.svg" alt="icon" height="16" width="12" /></Link></li>
                                <li><Link href="#"><Image src="/assets/images/icons/telegram.svg" alt="icon" height="16" width="18" /></Link></li>
                                <li><Link href="#"><Image src="/assets/images/icons/invelop.svg" alt="icon" height="16" width="18" /></Link></li>
                                <li>
                                    <Link href="#" onClick={(e) => { e.preventDefault(); copyToClipboard(); }}>
                                        {copied ? (
                                            <Image src="/assets/images/icons/check-green.svg" alt="check icon" height="16" width="18" />
                                        ) : (
                                            <Image src="/assets/images/icons/copy.svg" alt="copy icon" height="16" width="18" />
                                        )}
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="rounded-[30px] mb-[35px] overflow-hidden bg-[#D9D9D9]">
                            <img src="../assets/images/blog/blog-detail-img.png" alt="img" className='w-full' />
                        </div>
                        <h6 className="text-white font-[500] text-[18px] leading-[200%] mb-[20px]">Project Merlin is a next-generation DAO with a mission to benefit individuals within the community. We have redesigned the DAO governance mechanism and coined it as DAO v2</h6>
                        <div className="my-[30px] text-white">
                            <h2 className="font-[600] text-[30px] lexend mb-[20px]">Mission</h2>
                            <p>Project Merlin aims to provide an innovative and sustainable platform within the DAO and crowdfunding ecosystems, emphasizing democratic participation, transparency, and fairness. By leveraging blockchain technology and NFTs, our platform ensures that every user can directly participate in project selection and funding processes, earning rewards from their involvement. Our goal is to create a more accessible and equitable environment in decentralized finance and governance.</p>
                        </div>
                        <div className="my-[30px] text-white">
                            <h2 className="font-[600] text-[30px] lexend mb-[20px]">Vision</h2>
                            <p>At Project Merlin, our vision is to establish a global, inclusive, and interactive crowdfunding and DAO platform that enables the realization of innovative projects and ideas. Powered by blockchain technology, we aim to construct an ecosystem where every individual can freely express their ideas, every project is evaluated fairly, and every participant receives equitable rewards for their contributions.</p>    
                        </div>
                        <div className="mt-[30px] mb-[65px] text-white">
                            <h2 className="font-[600] text-[30px] lexend mb-[20px]">Benefits of NFTs</h2>
                            <ul className='blog-info-list'>
                                <li>Regulated, fully reserved and always redeemable 1:1 for US dollars</li>
                                <li>Enables institutional on/off-ramps like Circle Mint for eligible users</li>
                                <li>Easy integration into your existing dApps</li>
                            </ul>    
                        </div>

                        <div className="">
                            <BlogQuote/>
                        </div>


                        <div className="my-[30px] text-white">
                            <p className='mb-[25px]'>At Project Merlin, our vision is to establish a global, inclusive, and interactive crowdfunding and DAO platform that enables the realization of innovative projects and ideas.</p>
                            <p>Powered by blockchain technology, we aim to construct an ecosystem where every individual can freely express their ideas, every project is evaluated fairly, and every participant receives equitable rewards for their contributions.</p>
                        </div>
                    </div>
                    <div className="w-2/6 lg:w-full px-[25px] lg:px-[15px]">
                        <BlogCategoriesCard/>
                        <SubscribeCard/>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default BlogDetailContent