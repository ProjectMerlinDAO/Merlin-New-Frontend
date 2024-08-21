import React from 'react'

const index = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
        <div className="bg-black w-full max-w-[800px] py-10 px-10 flex flex-col gap-5 rounded-[12px]">
            <h2 className=' text-center font-bold text-2xl text-white' >Setup Password</h2>
            <div className="d">
                <div className='mt-5' >
                    <input className="rounded-[18px] border-[2px] border-[#FFFFFF12] text-white font-medium h-[60px] w-[100%] px-[20px] py-[16px] bg-transparent mt-[8px] md:mt-[4px] placeholder-white" type="password" placeholder='Password' name='password'  />
                </div >
                <div className='mt-5' >
                    <input className="rounded-[18px] border-[2px] border-[#FFFFFF12] text-white font-medium h-[60px] w-[100%] px-[20px] py-[16px] bg-transparent mt-[8px] md:mt-[4px] placeholder-white" type="password" placeholder='Confirm Password' name='password'  />
                </div >
                <div className='mt-5 flex justify-center' >
                    <button className='bg-[#12CFA7] h-[60px] text-white font-[600] px-20 rounded-[15px]'>
                        Submit
                    </button>
                   
                </div >






            </div>


        </div>




    </div>
  )
}

export default index