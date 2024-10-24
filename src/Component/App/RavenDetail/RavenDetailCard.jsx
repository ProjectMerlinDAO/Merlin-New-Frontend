import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import RavenDetailVideo from './RavenDetailVideo'
import RavenImages from './RavenImages'
import TransactionLogs from './TransactionLogs'
import Fundrising from './Fundrising'
import ProposalInfoCard from './ProposalInfoCard'
import LikeShareCard from './LikeShareCard'
import { useStickyBox } from "react-sticky-box";
import Link from 'next/link'
import axios from 'axios'
import ShareModal from '../../Core/Modals/shareModal'
import PaymentModal from '../../Core/Modals/paymentModal'
import { useWallet } from '@solana/wallet-adapter-react'
import BoostRavenModal from '../../Core/Modals/boostRavenMsg'

const RavenDetailCard = ({ isSidebarVisible, id }) => {
    const baseurl = process.env.NEXT_PUBLIC_BASE_URL;
    const { publicKey } = useWallet();
    const [isOpen, setIsOpen] = useState(false);
    const [isPayment, setIsPayment] = useState(false);
    const [page, setPage] = useState(1);
    const [transactions, setTransactions] = useState();
    const [pageCount, setPageCount] = useState(0);
    const stickyRef = useStickyBox({ offsetTop: 20, offsetBottom: 20 })
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const [detail, setDetail] = useState();
    const [isBoost, setIsBoost] = useState(false);
    const[boostAmt, setBoostAmt] = useState(0);

    const fetchDetails = async () => {
        try {
            const details = await axios.get(`${baseUrl}/raven/fetch-raven/${id}`);
            if (details.status === 200 && details.data.msg === "Raven message fetched successfully!!") {
                setDetail(details.data.ravenMsg);
                calculateBoostAmt(details.data.ravenMsg.projectGoal, details.data.ravenMsg.amtRaised);
            }
        } catch (error) {
            console.log(error)
        }
    }

    const fetchTransactions = async (id) => {
        try {
            const data = await axios.post(`${baseurl}/solana/fetchTransactions`, {
                id,
                page
            });
            if (data?.data?.transactions) {
                setTransactions(data?.data?.transactions)
                setPageCount(data?.data?.totalPages)

            }
        } catch (error) {
            console.log(error)
        }
    }

    const calculateCount = async () => {
        try {
            const response = await axios.post(`${baseUrl}/raven/countRavenMsgs`, {
                wallet: detail?.walletAddress
            })
        } catch (error) {
            console.log(error)
        }
    }

    const calculateBoostAmt = (projectGoal, amtRaised) => {
        const diff = Number(projectGoal) - Number(amtRaised);
        if(diff > 0){
          let amt = Number((diff * 10)/100);
            setBoostAmt(amt);
        }
    }

    useEffect(() => {
        if (id) {
            fetchTransactions(id);
        }
    }, [page, id])


    useEffect(() => {
        if (id) {
            fetchDetails();
        }
    }, [id, transactions])

    return (
        <>
            <BoostRavenModal isOpen={isBoost} setIsOpen={setIsBoost} />
            <ShareModal isOpen={isOpen} setIsOpen={setIsOpen} />
            <PaymentModal  isOpen={isPayment} setIsOpen={setIsPayment} publicKey={publicKey} id={id} fetchTransactions={fetchTransactions} page={page} goal={detail?.projectGoal} amtRaised={detail?.amtRaised} />
            <div className="pt-[110px]  bg-no-repeat relative position-top bg-contain" style={{ backgroundImage: 'url(./assets/images/bg/sub-bg.png)', backgroundSize: '100% 388px' }}>
                <div className={`app-home-wrapper lg:mt-[0px]  ${isSidebarVisible ? "sidebar-visible" : "sidebar-hidden"}`}>
                    <div className="px-[20px] md:px-[10px] max-w-[1365px] mx-auto lg:max-w-[720px] relative  max-w-screen-2xl">
                        <ul className='cursor-pointer flex items-cenetr  justify-start gap-[8px] mt-[-70px] uppercase absolute lg:mt-0 lg:static   pl-[48px] z-[99999] mb-[30px] 2xl:text-[14px] xl:ml-[100px] lg:ml-[0px] max-w-2xl md:flex-wrap'>
                            <li className='flex items-center justify-start gap-[8px] mr-10px ml-[-5px]'><Link href="/crystal-cave" className="flex absolute left-0 top-0"  ><Image src="/assets/images/icons/back-arrow.svg" alt="icon" height="40" width="40" /></Link></li>
                            <li className='flex items-center justify-start gap-[8px]'><a href="#" className="flex cursor-pointer">app HOME  </a> . </li>
                            <li className='flex items-center justify-start gap-[8px]'><a href="#" className="flex cursor-pointer">The Crystal Cave</a> . </li>
                            <li className='flex items-center justify-start gap-[8px]'><a href="#" className="flex cursor-pointer">Raven Message</a> . </li>
                            <li className='flex items-center justify-start gap-[8px]'><a href="#" className="flex cursor-pointer text-[#12CFA7]">{detail ? detail.code : null}</a></li>
                        </ul>
                        <div className="p-[60px] 2xl:py-[40px] 2xl:px-[20px] rounded-[40px] relative backdrop-blur-[15px] overflow-hidden" style={{ background: 'linear-gradient(178deg, rgba(255, 255, 255, 0.05) 2.04%, rgba(255, 255, 255, 0.01) 97.96%)' }}>
                            <Image src='/assets/images/shape/raven-detail-shape.png' fill={true} className='top-0 right-0 z-0 mt-[-30%] mr-[-15%]' />
                            <div className="relative z-10">
                                <div className="flex items-start justify-between mx-[-15px] lg:flex-wrap row">
                                    <div className="w-[65%] px-[15px] lg:w-full raven-detail-left lg:mb-[30px]">
                                        <div className="max-w-[715px]">
                                            <div className="flex items-start justify-start gap-[25px] mb-[40px] md:mb-[30px] sm:mb-[20px]" >
                                                <div className="min-h-[120px] min-w-[120px] max-h-[120px] sm:min-h-[80px] sm:min-w-[80px] xm:max-h-[80px] xm:max-w-[80px] xsm:absolute relative rounded-[20px] overflow-hidden">
                                                    <Image src={detail?.avatarImage} alt="icon" fill={true} />
                                                </div>
                                                <div className='text-white xsm:w-full'>
                                                    <h3 className='mb-[20px] md:mb-[15px] text-[40px] 2xl:text-[32px] lg:text-[26px] leading-[150%] xsm:pl-[100px]'>{detail ? detail.title : null}</h3>
                                                    <p className='xsm:mt-[58px] 2xsm:mt-[50px]'>{detail?.shortBrief}</p>
                                                </div>
                                            </div>
                                            <p className='mb-[30px]'>{detail?.proposalDetail.slice(0, 300)}</p>
                                            <RavenDetailVideo url={detail?.videoLink} />
                                            <p className='mb-[30px]'>{detail?.proposalDetail.slice(301, 400)}</p>
                                            {/* <p className='mb-[30px]'>These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled.</p> */}
                                            <RavenImages images={detail?.images} />
                                            <TransactionLogs transactions={transactions} page={page} pageCount={pageCount} setPage={setPage} />
                                        </div>
                                    </div>
                                    <aside ref={stickyRef} className="w-[35%] px-[15px] lg:w-full raven-detail-right">
                                        <Fundrising timer={detail?.endDate} fundRaiseTimer={detail?.fundsEndDate} goal={detail?.projectGoal} isOpen={isPayment} setIsOpen={setIsPayment} wallet={publicKey} amtRaised={detail?.amtRaised} />
                                        <ProposalInfoCard detail={detail} wallet={detail?.walletAddress} />
                                        <LikeShareCard id={id} setIsBoost={setIsBoost} isPayment={isPayment} setIsPayment={setIsPayment} wallet={publicKey} like={detail?.like} dislike={detail?.dislike} fetch={fetchDetails} isOpen={isOpen} setIsOpen={setIsOpen} amtRaised={detail?.amtRaised} goal={detail?.projectGoal} />
                                    </aside>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RavenDetailCard;