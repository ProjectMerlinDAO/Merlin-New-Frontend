import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import AirdropDetail from './AirdropDetail'
import AirdropStatistics from './AirdropStatistics'
import AirdropStatisticsTable from './AirdropStatisticsTable'
import AirdropTasks from './AirdropTasks'
import AirdropReferralProgram from './AirdropReferralProgram'
import { useWallet } from '@solana/wallet-adapter-react'
import axios from 'axios'
import Link from 'next/link'
import { toast } from 'react-toastify'
import { useSelector } from 'react-redux'
import { useWalletModal } from '@solana/wallet-adapter-react-ui'



const AirdropCard = ({ isSidebarVisible }) => {
const userEmail = useSelector((state) => state.user.email);
const baseurl = process.env.NEXT_PUBLIC_BASE_URL;
const [details, setDetails] = useState();
const [loading, setIsLoading] = useState(false);
const { setVisible } = useWalletModal();
const { wallet, connect, connected, connecting, publicKey, disconnect } = useWallet();
const fetchDetails = async () => {
    try {
        // const wallet = publicKey.toBase58();
        const response = await axios.post(`${baseurl}/user/fetchUser`, { email: userEmail });
        if (response?.data?.user) {
            setDetails(response.data.user);
        }
    } catch (error) {
        console.log(error);
    }
}

const handleVerification = async () => {
 try {
    setIsLoading(true);
    const wallet = publicKey.toBase58();
    const res = await axios.post(`${baseurl}/user/verifyEmail`,{
        wallet
    })
    if(res?.status === 200){
        setIsLoading(false);
        toast.success(res.data?.message);
    }else{
        setIsLoading(false);
        toast.error(res.data?.message)
    }
 } catch (error) {
    console.log(error)
    setIsLoading(false);

 }
}

const handleConnection = async () => {
    console.log("Starting wallet connection process...");
    // try {
    //   console.log("Starting wallet connection process...");
    //   if (!wallet) {
    //     console.log("No wallet found. Showing wallet modal...");
    //     setVisible(true);
    //   }
    //   if (!connected) {
    //     console.log("Wallet not connected. Attempting to connect...");
    //     await connect();
    //     console.log('Connected to wallet:', publicKey ? publicKey.toString() : 'No public key');
    //   } else if (wallet && publicKey) {
    //     console.log("Wallet already connected. Disconnecting...");
    //     await disconnect();
    //     toast.error("Wallet is Disconnected");
    //     setMsgList();
    //   } else {
    //     console.log('Wallet already connected:', publicKey ? publicKey.toString() : 'No public key');
    //   }
    // } catch (error) {
    //   console.error('Wallet connection error:', error);
    // }
  }
useEffect(() => {
 fetchDetails();
},[publicKey,userEmail])
console.log(publicKey,"publickey")
    return (
        <div className="pt-[110px] relative bg-no-repeat position-top bg-contain" style={{ backgroundImage: 'url(./assets/images/bg/sub-bg.png)', backgroundSize: '100% 388px' }}>
            <div className={`app-home-wrapper ${isSidebarVisible ? "sidebar-visible" : "sidebar-hidden"}`}>
                <div className="px-[20px] md:px-[10px] max-w-[1365px] mx-auto lg:max-w-[720px]">
                    <div className="p-[60px] 2xl:py-[40px] 2xl:px-[20px] sm:px-[15px] rounded-[40px] relative backdrop-blur-[15px] overflow-hidden" style={{ background: 'linear-gradient(178deg, rgba(255, 255, 255, 0.05) 2.04%, rgba(255, 255, 255, 0.01) 97.96%)' }}>
                        <div className="absolute top-0 left-0 z-0 opacity-[50%]">
                            <Image
                                src="/assets/images/shape/proposal-shape1.png"
                                alt="shape"
                                width={345}
                                height={373}
                            />
                        </div>
                        <div className="absolute top-0 right-0 z-0 opacity-[50%]">
                            <Image
                                src="/assets/images/shape/proposal-shape2.png"
                                alt="shape"
                                width={345}
                                height={373}
                            />
                        </div>
                        <AirdropDetail detail={details}/>
                        <div className="relative z-30">
                            <div className="flex items-start justify-start mx-[-15px] xl:flex-wrap row">
                                <div className="w-[60%] lg:w-full px-[15px]">
                                    <div className="max-w-[611px] pt-[100px] 2xl:pt-[120px]">
                                        <p><span className="text-white">Merlin&apos;s beard! Look at this...</span><br />
                                            I sense a great power within you, waiting to be noticed. It&apos;s clear that wizard blood runs through your veins. You can be sure you&apos;re making the right choice by joining the Project Merlin community. Both sides are sure to gain something from it. Stay on Merlin&apos;s path, and may Merlin always be with you...</p>
                                    </div>
                                    <AirdropStatistics />
                                    {/* <div className="mt-[35px] lg:mt-[25px] md:mt-[15px] profile-form lg:mb-[40px]">
                                        <label className="text-white uppercase">Email address</label>
                                        <form className="flex xsm:flex-wrap gap-[15px] mt-[15px]">
                                            <input type="email"  readOnly value={details?.email} className="px-[20px] py-[5px] bg-transparent text-white border-2 border-[rgba(255,255,255,0.12)] h-[60px] rounded-[18px] max-w-[418px] xsm:max-w-full w-full" />
                                            <div  className=' hov-btn bg-[#12CFA7] rounded-[15px] h-[58px] relative w-[170px] xsm:w-full flex items-center justify-center text-white text-center  font-[600] text-[16px] uppercase quantico'>
                                                {details?.emailVerified === true ? 
                                                <span className="btn-text cursor-none">
                                                    {/* <span className="btn-text">Verified</span> */}
                                                    {/* <span className="btn-text">Verified</span> */}
                                                {/* </span> */}
                                                {/* :   <span className="btn-hov-text cursor-pointer" onClick={handleVerification}> */}
                                                {/* <span className="btn-text">{loading ? "Sending...." : "Verify"}</span> */}
                                                {/* <span className="btn-text">{loading ? "Sending...." : "Verify"}</span> */}
                                            {/* </span>} */}
                                            {/* </div> */}
                                        {/* </form> */}
                                    {/* </div> */} 
                                </div>
                                <div className="w-[40%] lg:w-full px-[15px]">
                                    <div className="flex items-center justify-between rounded-[18px] mb-[30px] px-[20px] py-[13px] bg-gradient-to-r from-[#ffffff10] to-[#ffffff05] gap-[20px] mb-40px">
                                        <div className="flex items-center justify-start gap-[15px]">
                                            <div className="h-[40px] relative w-[40px] rounded-full overflow-hidden flex items-center justify-center">
                                                <img src="/assets/images/coins/eth.png" alt="coin" fill={true} />
                                            </div>
                                            <p className="mb-0">
                                                <span className='text-white leading-[16px]'>{publicKey ? publicKey?.toBase58().slice(0,4) + "...." + publicKey.toBase58().slice(-4) : null }</span>
                                                <br />
                                                <span className='text-[14px] leading-[14px]'>Solana</span>
                                            </p>
                                        </div>
                                        <button className='text-[14px] text-[#12CFA7] rounded-[10px] px-[15px] py-[4px] bg-[#12cfa615] pointer-events-none' onClick={()=>handleConnection()}>{publicKey ? "Disconnect" : "Connect"}</button>
                                    </div>
                                    <AirdropStatisticsTable />
                                </div>
                            </div>
                            <AirdropTasks />
                            <AirdropReferralProgram referralCode={details?.referralCode}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AirdropCard