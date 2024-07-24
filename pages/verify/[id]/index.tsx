import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import axios from 'axios'

const Verify = () => {
    const router = useRouter();
    const id = router?.query?.id;
    const baseurl = process.env.NEXT_PUBLIC_BASE_URL;

    const verification = async() => {
      try {
        const res = await axios.get(`${baseurl}/user/verify/${id}`);
        console.log(res,"RES")
      } catch (error) {
        console.log(error)
      }
    }
    useEffect(() => {
    if(id){
      verification();
    }
    },[id])
  return (
    <div className="flex items-center h-screen">
    <div className="flex items-center justify-center flex-col w-full max-w-4xl m-auto">
      <section className="w-full mx-auto bg-white">
        <header className="py-4 flex justify-center w-full bg-[rgb(26,109,20)]">
          <a href="#">
          <img className='w-[150px] '  src="https://www.projectmerlin.io/assets/images/logo/main-logo.svg" alt="logo" />
          </a>
        </header>
        <div className="h-[200px] bg-[#ffffff] w-full text-black flex items-center justify-center flex-col gap-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-[1px] bg-black"></div>

            <div className="w-10 h-[1px] bg-black"></div>
          </div>
          <div className="flex flex-col gap-3 px-5">
            <div className="text-center text-sm sm:text-xl tracking-widest font-normal">
            <h2 className="text-gray-700 ">Hello John Deo,</h2>
              THANKS FOR SIGNING UP!
            </div>
            <div className="text-xl sm:text-3xl tracking-wider font-bold capitalize">
              Verify your E-mail Address
            </div>
          </div>
        </div>
        <main className="mt-8 px-5 sm:px-10 text-center">
          <button className="px-6 py-2 mt-6 text-lg font-bold tracking-wider text-white capitalize transition-colors duration-300 transform bg-[#1a6d14] rounded-3xl hover:bg-[#12cfa7] focus:outline-none ">
            Verify email
          </button>
          <p className="mt-8 text-gray-600">
            Thank you, <br />
            Merlin Team
          </p>
        </main>
        <footer className="mt-8">
          <div className="bg-[rgb(26,109,20)]  py-1 text-white text-center">
            <p className="mt-3 ">
              © {new Date().getFullYear()} Merlin. All Rights Reserved.
            </p>
          </div>
        </footer>
      </section>
    </div>
    </div>
  )
}

export default Verify;