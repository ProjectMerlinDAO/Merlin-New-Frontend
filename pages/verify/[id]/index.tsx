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
    <div>Link has been verified</div>
  )
}

export default Verify;