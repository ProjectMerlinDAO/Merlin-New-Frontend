import React, { useEffect, useState } from 'react';
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { updateUserDetails } from '@/src/redux/UserSlice';

const LogIn = ({ isOpen, setIsOpen }) => {
    const baseurl = process.env.NEXT_PUBLIC_BASE_URL;
    const router = useRouter();
    const dispatch = useDispatch()
    const [open, setOpen] = useState(true);
    const [user, setUser] = useState();
    const [userDetails, setUserDetails] = useState();
    const [register, setRegister] = useState(false);
    const [check, setCheck] = useState(false);
    const [data, setData] = useState({
        email: "",
        password: "",
        checkPassword: ""
    })
    const[registerBtn, setRegisterBtn] = useState(false);

    const login = useGoogleLogin({
     onSuccess: (codeResponse) => {
     setUser(codeResponse);
        },
        onError: (error) => {
            console.log('Login Failed:', error)
            toast.error("Login Failed")
        },
        prompt: 'select_account' // Forces account selection
    });

    const logOut = () => {
        googleLogout();
    };

    const handleClose = () => {
        setIsOpen(false)
    }

const userGoogleLogin = async () => {
        try {
            const response = await axios.post(`${baseurl}/user/googleLogin`,{
                access_token: user.access_token
            }, {
                headers: {
                  'Content-Type': 'application/json',
                },
                withCredentials: true,
              })
            if(response?.data){
                console.log(response,"RESPONSE");
                let name = response?.data.user.name;
                let email = response.data?.user?.email;
                let token = response.data?.token
                dispatch(updateUserDetails({name, email, token}));
                // toast.success("Login Success")
                handleClose();
            }
        } catch (error) {
            console.log(error);
        }
    }
useEffect(
    () => {
        if (user) {
        userGoogleLogin();
    }
    },
        [user]
    );
    const handleCheckBox = (e) => {
        const isChecked = e.target.checked;
        setCheck(isChecked);
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleRegister = () => {
        setRegister(true);
        setData(() => ({
            email:"",
            password:"",
            checkPassword:""
        }))
    }
    
    useEffect(() => {
    if(check == true){
        setRegisterBtn(true);
    }
    },[check])

    const validate = () => {
        if(data.email === ""){
            toast.error("Email is required!");
            return false;
        }
        if(data.password === "" ){
             toast.error("Password is required");
             return false;
        }
        const emailRegexStrict = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if(!emailRegexStrict.test(data.email)){
          toast.error("Please appropriate correct email");
          return false;
        }
        return true;
    }
    const handleSubmit = async () => {
        try {
            const isValidate = validate();
            if(isValidate){
                const res = await axios.post(`${baseurl}/user/login`,{
                    ...data
                },{
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    withCredentials: true,
                  })
                if(res?.data?.redirectUrl){
                    router.push(res.data.redirectUrl);
                }
                if(res?.data?.user && res.data.token){
                    dispatch(updateUserDetails({
                        name: res?.data?.user?.name, 
                        email: res?.data?.user?.email, 
                        token: res?.data?.token
                    }));
                    handleClose();
                    toast.success("Success")
                } 

            }
        } catch (error) {
            console.log(error)
            toast.error(error?.response?.data?.msg)
        }
    }

    const handleRegisterUser = async () => {
      try {
        const isValidate = validate();
            if(isValidate){
        const response = await axios.post(`${baseurl}/user/register`,{
            email:data?.email,
            password:data?.password
        })
        if(response && response.status === 200){
            toast.success(response?.data.msg);
            setData(() => ({
                email:"",
                password:"",
                checkPassword:""
            }))
            dispatch(updateUserDetails({
                name: response?.data?.user?.name, 
                email: response?.data?.user?.email, 
                token: response?.data?.token
            }));
            handleClose();
            toast.success("Success")
        }
    }
      } catch (error) {
       console.log(error,"error")
        toast.error(error?.response?.data?.msg)
      }
    }
    
    return (
        <>
            {isOpen &&
                <Dialog className="relative z-10" open onClose={setOpen}>
                    <DialogBackdrop
                        transition
                        className="fixed inset-0 bg-black bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
                    />
                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
                            <DialogPanel transition className="relative transform overflow-hidden rounded-lg  w-full max-w-[480px] text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95">
                                <div className="bg-[#27312E]  px-4 pb-4 pt-5 sm:p-6 sm:pb-4 w-full  " style={{ maxWidth: "550px" }} >
                                    <div className='text-gray-500 cursor-pointer absolute top-3 right-5' onClick={handleClose} ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                    </svg>
                                    </div>
                                    <div className="h-[133px] w-[133px] rounded-[50%] bg-[#12CFA7] blur-[100px] mx-auto top-[-65px] z-0 absolute "></div>
                                    {!register ?
                                        <>
                                            <div className='mt-5' >
                                                <input className="rounded-[18px] border-[2px] border-[#FFFFFF12] text-white font-medium h-[60px] w-[100%] px-[20px] py-[16px] bg-transparent mt-[8px] md:mt-[4px] placeholder-white" type="text" placeholder='E-mail Address' value={data.email} name='email' onChange={handleChange} />
                                            </div >
                                            <div className='mt-5'>
                                                <input className="rounded-[18px] border-[2px] border-[#FFFFFF12] text-white font-medium h-[60px] w-[100%] px-[20px] py-[16px] bg-transparent mt-[8px] md:mt-[4px] placeholder-white" type="password" placeholder='Password' name='password' value={data.password} onChange={handleChange} />
                                            </div>
                                            <div className='mt-5'>
                                                <button className=' mt-3 bg-[#12CFA7] h-[60px] text-white quantico font-[700] w-full rounded-[18px] uppercase mb-[30px]' onClick={handleSubmit}>Login</button>
                                            </div>
                                            <div className='flex justify-center'>
                                                <p className="mb-[25px] text-[16px] font-[400] ">
                                                    Don&apos;t have Account? <span className='text-white font-medium cursor-pointer underline' onClick={handleRegister}>Register</span> or <br></br>
                                                    <span className='flex justify-center'>
                                                        Login with;
                                                    </span>
                                                </p>
                                            </div>
                                            <div className=' items-center grid grid-cols-2 gap-[2.75rem]'>
                                                <button class="flex items-center justify-center min-h-[57px]  space-x-2 bg-transparent transition-colors duration-300 border border-gray-600 group  dark:border-gray-400 " onClick={login}>
                                                    <img className='min-h-[57px]' src='/assets/web_dark_rd_SU.svg' />
                                                </button>
                                                <button className="flex items-center rounded-[50px] border border-[#f5f5f5] min-h-[50px] justify-center space-x-2 bg-[#131314] text-white font-semibold w-full transition-colors duration-300 cursor-not-allowed ">
                                                    <img src="./assets/images/icons/x.svg" alt="Icon" className="max-w-3.5 h-5" />
                                                    <span className='text-sm/[17px]'>Sign up with X</span>
                                                </button>

                                                
                                            </div>
                                        </>
                                        :
                                        <>
                                            <div className='mt-5' >
                                                <input className="rounded-[18px] border-[2px] border-[#FFFFFF12] text-white font-medium h-[60px] w-[100%] px-[20px] py-[16px] bg-transparent mt-[8px] md:mt-[4px] placeholder-white" type="text" placeholder='E-mail Address' name="email" value={data.email} onChange={handleChange} />
                                            </div>
                                            <div className='mt-2'>
                                                <input className="rounded-[18px] border-[2px] border-[#FFFFFF12] text-white font-medium h-[60px] w-[100%] px-[20px] py-[16px] bg-transparent mt-[8px] md:mt-[4px] placeholder-white" type="password" placeholder='Password' name='password' value={data.password} onChange={handleChange} />
                                            </div>
                                            <div className='mt-2'>
                                                <input className="rounded-[18px] border-[2px] border-[#FFFFFF12] text-white font-medium h-[60px] w-[100%] px-[20px] py-[16px] bg-transparent mt-[8px] md:mt-[4px] placeholder-white" type="password" placeholder='Re-enter Password' name='checkPassword' value={data.checkPassword} onChange={handleChange} />
                                            </div>
                                            <div className='flex flex-col'>
                                                <div className={data?.email !== "" && data?.password !== "" && data?.password === data?.checkPassword ? 'mt-2 border border-transparent flex flex-row items-center  w-full rounded-[18px] uppercase gap-[10px]  overflow-hidden' : 'mt-2 border border-transparent flex flex-row items-center  w-full rounded-[18px] uppercase gap-[10px]  overflow-hidden cursor-not-allowed opacity-50'}>
                                                    <input  type='checkbox' checked={check} onChange={handleCheckBox}   />
                                                    <span className='text-sm/[10px] text-white'>I accept terms and condition</span>
                                                </div>
                                                <div className='border border-transparent flex flex-auto items-center justify-center w-full rounded-[12px] uppercase mb-[30px] overflow-hidden mt-4 '>
                                                    {/* <button className='bg-[#12CFA7] h-[60px] text-white  font-[600] w-full'> */}
                                                    <button className={registerBtn === true ? 'bg-[#12CFA7] h-[60px] text-white  font-[600] w-full' :'bg-[#12CFA7] h-[60px] text-white font-[600] w-full cursor-not-allowed opacity-50'} onClick={handleRegisterUser}>
                                                        Register
                                                    </button>
                                                </div>
                                            </div>
                                        </>
                                    }
                                </div>
                            </DialogPanel>
                        </div>
                    </div>
                </Dialog>
            }
        </>
    )
}

export default LogIn