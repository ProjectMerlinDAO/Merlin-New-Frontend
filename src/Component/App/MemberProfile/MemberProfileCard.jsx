import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import ProfileCard from './ProfileCard'
import MyMessages from './MyMessages/MyMessages'
import MemberDetail from './MemberDetail'
import StatisticsTable from './StatisticsTable'
import axios from 'axios'
import { useWallet } from '@solana/wallet-adapter-react'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'
import { useWalletModal } from '@solana/wallet-adapter-react-ui'


const MemberProfileCard = ({ isSidebarVisible }) => {
    const router = useRouter();
    const { setVisible } = useWalletModal();
    const baseurl = process.env.NEXT_PUBLIC_BASE_URL;
    const { publicKey } = useWallet();
    const [details, setDetails] = useState();
    const [email, setEmail] = useState();
    const [msgsType, setMsgsType] = useState("active");
    const [msgList, setMsgList] = useState();

  if(router?.query?.ref){
    if(!publicKey){
       setVisible(true)
    }
  }
    const fetchDetails = async () => {
        try {
            const wallet = publicKey.toBase58();
            const response = await axios.post(`${baseurl}/user/fetchUser`, { wallet })
            if (response?.data?.user) {
                setDetails(response.data.user);
            }
        } catch (error) {
            console.log(error);
        }
    }
    const fetchRavenMsgs = async () => {
        try {
            const wallet = publicKey.toBase58();
            const response = await axios.post(`${baseurl}/raven/userRavenList`, {
                wallet,
                type:msgsType
            })
            if(response?.data?.msgs){
                setMsgList(response?.data?.msgs);
            }
        } catch (error) {
            console.log(error);
        }
    }
    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    const handleEmail = async () => {
        try {
            if (email && isValidEmail(email)) {
                const wallet = publicKey.toBase58();
                const res = await axios.patch(`${baseurl}/user/details`, {
                    wallet,
                    email,
                })
                if (res.status === 200) {
                    toast.success(res?.data?.msg);
                    setEmail("");
                    fetchDetails();
                    return;
                }
            } else {
                toast.error("Email is not valid!")
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong!")
        }

    }

    useEffect(() => {
        if (publicKey) {
            fetchDetails();
            fetchRavenMsgs();
        }
    }, [publicKey,msgsType])
  
    return (
        <div className="pt-[110px] relative bg-no-repeat position-top bg-contain" style={{ backgroundImage: 'url(./assets/images/bg/sub-bg.png)', backgroundSize: '100% 388px' }}>
            <div className={`app-home-wrapper ${isSidebarVisible ? "sidebar-visible" : "sidebar-hidden"}`}>
                <div className="px-[20px] md:px-[10px] max-w-[1365px] mx-auto lg:max-w-[720px]">
                    <div className="p-[60px] 2xl:py-[40px] 2xl:px-[20px] rounded-[40px] relative backdrop-blur-[15px] overflow-hidden" style={{ background: 'linear-gradient(178deg, rgba(255, 255, 255, 0.05) 2.04%, rgba(255, 255, 255, 0.01) 97.96%)' }}>
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
                        <MemberDetail details={details} setDetails={setDetails} />
                        <div className="relative z-30">
                            <div className="flex items-start justify-start mx-[-15px] xl:flex-wrap row">
                                <div className="w-[60%] lg:w-full px-[15px]">
                                    <div className="max-w-[611px] pt-[100px] 2xl:pt-[120px]">
                                        <p className='mb-[15px]'>This user is a part of the Great Project Merlin Community. Additionally, this user holds a <span className="text-white font-[500]">Senatorial</span> position in the <span className="text-white font-[500]">Sports and Arts</span> category.</p>
                                        <p>There are <span className="text-white font-[500]">65</span> days remaining until the Senatorial position expires.</p>
                                        <p>There are <span className="text-white font-[500]">0</span> days remaining until the Editorial position expires.</p>
                                    </div>
                                    <StatisticsTable />
                                    {details?.email === "" ?
                                        <div className="mt-[53px] profile-form lg:mb-[40px]">
                                            <label className="text-white uppercase">Email address</label>
                                            <form className="flex xsm:flex-wrap gap-[15px] mt-[15px]">
                                                <input type="email" placeholder="Enter your email address" value={email} onChange={(e) => setEmail(e.target.value)} className="px-[20px] py-[5px] bg-transparent text-white border-2 border-[rgba(255,255,255,0.12)] h-[60px] rounded-[18px] max-w-[418px] xsm:max-w-full w-full" />
                                                <div onClick={handleEmail} className='cursor-pointer hov-btn bg-[#12CFA7] rounded-[15px] h-[58px] relative w-[170px] xsm:w-full flex items-center justify-center text-white text-center  font-[600] text-[16px] uppercase quantico'>
                                                    <span className="btn-hov-text">
                                                        <span className="btn-text">Register</span>
                                                        <span className="btn-text">Register</span>
                                                    </span>
                                                </div>
                                            </form>
                                        </div> : null}
                                </div>
                                <div className="w-[40%] lg:w-full px-[15px]">
                                    <div className="flex items-center justify-between rounded-[18px] mb-[30px] px-[20px] py-[13px] bg-gradient-to-r from-[#ffffff10] to-[#ffffff05] gap-[20px] mb-40px">
                                        <div className="flex items-center justify-start gap-[15px]">
                                            <div className="h-[40px] relative w-[40px] rounded-full overflow-hidden flex items-center justify-center">
                                                <Image src="/assets/images/coins/eth.png" alt="coin" fill={true} />
                                            </div>
                                            <p className="mb-0">
                                                <span className='text-white leading-[16px]'>{publicKey && publicKey?.toBase58().slice(0, 2) + "...." + publicKey?.toBase58().slice(-5)}</span>
                                                <br />
                                                <span className='text-[14px] leading-[14px]'>Solana</span>
                                            </p>
                                        </div>
                                        <button className='text-[14px] text-[#12CFA7] rounded-[10px] px-[15px] py-[4px] bg-[#12cfa615]'>Connected</button>
                                    </div>
                                    <ProfileCard />
                                </div>
                            </div>
                            <MyMessages msgList={msgList} Type={msgsType} setType={setMsgsType}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default MemberProfileCard