import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { CgListTree } from 'react-icons/cg';
import { toast } from 'react-toastify';

const Rename = ({isOpen, setIsOpen, wallet,title, details ,setDetails, detailFun, email}) => {
    const baseurl = process.env.NEXT_PUBLIC_BASE_URL;
    const [name, setName] = useState(title);
    const [progress, setProgress] = useState(false);
    const handleClose = () => {
        setName("");
        setIsOpen(false);
    }
    
    const handleName = async() => {
     try {
        setProgress(true);
        const res  = await axios.put(`${baseurl}/user/details`,{
            email,
            name
        });
        if(res.status == 200){
            setProgress(false);
            handleClose();
            detailFun();
            toast.success("Name Updated !!")
        }
     } catch (error) {
       console.log(error);
       setProgress(false);
     }
    }

    useEffect(() => {
        setName(title);
    }, [title]);
    return (
        <>
            {isOpen &&
                <Dialog className="relative z-10" open onClose={setIsOpen}>
                    <DialogBackdrop
                        transition
                        className="fixed inset-0 bg-black bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
                    />
                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
                            <DialogPanel
                                transition
                                className="relative transform overflow-hidden rounded-lg  w-full max-w-[650px] text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                            >
                                <div className="bg-[#2e2e2e] px-4 pb-4 pt-5 sm:p-6 sm:pb-4 w-full " style={{ maxWidth: "550px" }} >
                                    <div className="sm:flex sm:items-start">
                                        <div className="Sharetext">
                                            <div className='text-gray-500 cursor-pointer' onClick={handleClose}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                            </svg>
                                            </div>
                                        </div>
                                        <div className="modalinner">
                                            <div className="modalLink text-gray-500">
                                                <label for="">Name</label>
                                            </div>
                                            <div className="modalLink">
                                                <input type="text" value={name !== "" ? name : null} onChange={(e) => setName(e.target.value)} />
                                                <button onClick={handleName}>{progress ? "Processing..." : "Update Name"}</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </DialogPanel>
                        </div>
                    </div>
                </Dialog>
            }
        </>
    )
}

export default Rename;