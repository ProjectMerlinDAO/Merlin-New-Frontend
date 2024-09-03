import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import AppHome from '@/src/Component/App/AppHome/AppHome'
import { usePathname, useRouter } from 'next/navigation';
import { updateUserDetails } from "../redux/UserSlice";
import Loader from '../Component/App/Loader'
const Layout = ({ children }) => {
    const baseurl = process.env.NEXT_PUBLIC_BASE_URL;
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true)
    const [auth, setAuth] = useState(false)
    const pathname = usePathname();
    const router = useRouter();
    const emailId = useSelector((state) => state.user.email);

    // This use effect is for public routes
    useEffect(() => {
        if (!auth && isPageWithoutAuthentication()) {    
        console.log("1")
            validateToken()
        }
    }, []);
    //This use effect is for private routes
    useEffect(() => {
        if (!isPageWithoutAuthentication() && !auth) {
            console.log("2")
            validateToken()
        }
    }, [pathname]);
    useEffect(() => {
        if (!loading && !auth && !isPageWithoutAuthentication()) {
            console.log("3")
            router.push('/launch-app')
        }
    }, [auth, loading]);
    const isPageWithoutAuthentication = () => {
        const pagesWithoutAuthentication = ["/launch-app", "/create-raven-message","/member-profile","/wormhole","/","/crystal-cave"];
        return pagesWithoutAuthentication.includes(pathname);
    };
    // const handleUnauthenticated = () => {
    //     console.log("2")
    //     setLoading(false);
    //     router.push('/launch-app')
    // };
    console.log(pathname, "Pathname")
    const validateToken = async () => {
        setLoading(true)
        try {
            const response = await axios.post(`${baseurl}/user/verifyToken`, {}, {
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: true,
            })
            let name = response?.data?.details?.name;
            let email = response.data?.details?.email;
            let token = response.data?.details?.token
            dispatch(updateUserDetails({ name, email, token }));
            setAuth(true)
            setLoading(false)

        } catch (error) {
            // handleUnauthenticated();
            console.log("Something went wrong", error)
            setAuth(false)
            setLoading(false)
        }
        // setLoading(false)

    }
    console.log(auth, "autyh")
    return (
        <>
            <div>
                {loading ? (<div> <Loader />  </div>) :
                    (<div>
                        {isPageWithoutAuthentication() ? children : auth ? children : <AppHome />}
                    </div>)
                }
            </div>
        </>
    )
}

export default Layout