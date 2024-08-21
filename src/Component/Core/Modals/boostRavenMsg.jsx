import React, { useEffect, useState } from 'react';
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'

const BoostRavenModal = ({ isOpen, setIsOpen }) => {
    const [open, setOpen] = useState(true)
    const handleClose = () => {
        setIsOpen(false)
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
                            <DialogPanel
                                transition
                                className="relative transform overflow-hidden rounded-lg  w-full max-w-[480px] text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                            >

                                <div className="bg-[#000000]  border border-solid border-[#12cfa7] rounded-2xl px-4 pb-4 mb-4 pt-5 sm:p-2 sm:pb-2 w-full " >
                                    <div className="grid">
                                        <div className="Sharetext mb-4  w-full">
                                            <h2 className=' text-3xl font-medium text-center text-white '>🚀 Boost Raven Message</h2>
                                            <div className='text-gray-500 cursor-pointer' onClick={handleClose}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                            </svg>
                                            </div>
                                        </div>
                                        <div className="modalinner">
                                            <section class="">
                                                <div class=" mx-auto max-w-screen-xl ">
                                                    <div class=" grid grid-cols-3 gap-[10px] xs:grid-cols-1">

                                                        <div class="flex mt-0 flex-col p-3 mx-auto max-w-lg text-center text-gray-900 bg-[#204634] rounded-lg border border-gray-100 shadow dark:border-gray-600  dark:text-white w-full hover:bg-[#1b9b7f]">
                                                            <h3 class="mb-4 text-1 font-semibold">Platinum</h3>
                                                            <div class="flex justify-center items-baseline">
                                                                <span class=" text-3xl sm:text-base font-extrabold">100 MRLN</span>
                                                            </div>
                                                            <div class="flex justify-center items-baseline mt-2">
                                                                <span class="">/month</span>
                                                            </div>

                                                            <a href="#" class="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-1 py-1 text-center dark:text-white  dark:focus:ring-primary-900">Get started</a>
                                                        </div>

                                                        <div class="flex mt-0 flex-col p-3 mx-auto max-w-lg text-center text-gray-900 bg-[#204634] rounded-lg border border-gray-100 shadow dark:border-gray-600  dark:text-white w-full hover:bg-[#1b9b7f]">
                                                            <h3 class="mb-4 text-1 font-semibold">Gold</h3>
                                                            <div class="flex justify-center items-baseline">
                                                                <span class=" text-3xl sm:text-base font-extrabold">50 MRLN</span>
                                                            </div>
                                                            <div class="flex justify-center items-baseline mt-2">
                                                                <span class="">/month</span>
                                                            </div>

                                                            <a href="#" class="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-1 py-1 text-center dark:text-white  dark:focus:ring-primary-900">Get started</a>
                                                        </div>

                                                        <div class="flex mt-0 flex-col p-3 mx-auto max-w-lg text-center text-gray-900 bg-[#204634] rounded-lg border border-gray-100 shadow dark:border-gray-600  dark:text-white w-full hover:bg-[#1b9b7f]">
                                                            <h3 class="mb-4 text-1 font-semibold">Silver</h3>
                                                            <div class="flex justify-center items-baseline">
                                                                <span class="text-3xl sm:text-base font-extrabold">25 MRLN</span>
                                                            </div>
                                                            <div class="flex justify-center items-baseline mt-2">
                                                                <span class="">/month</span>
                                                            </div>

                                                            <a href="#" class="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-1 py-1 text-center dark:text-white  dark:focus:ring-primary-900">Get started</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
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

export default BoostRavenModal;