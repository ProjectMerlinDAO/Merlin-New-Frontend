import { addToList } from '@/src/redux/oracleListSlice';
import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const StampsDropdown = ({ stamp, setStamp, id, image, code ,getStamp}) => {
    const [localStamp, setLocalStamp] = useState(stamp);
    const dispatch = useDispatch();
    const baseurl = process.env.NEXT_PUBLIC_BASE_URL;
    const userEmail = useSelector((state) => state.user.email);
    const handleClick = async (e) => {
        let value = e.target.getAttribute('value');
        setLocalStamp(value);

        try {
            const api = await axios.post(`${baseurl}/user/add-selected-raven-msg`, { email: userEmail, ravenId: id, stamp: value })
            console.log(api, "Response ")
        } catch (error) {
            console.log(error, "Something went wrong ")
        }
        await getStamp();
        // let type;
        // if (value === "greenStamp") {
        //     type = "GreenStamp";
        // }
        // if (value === "yellowStamp") {
        //     type = "YellowStamp";
        // }
        // if (value === "blueStamp") {
        //     type = "BlueStamp"
        // }
        // if (value === "Red Stamp") {
        //     type = "RedStamp"
        // }
        // let details = { id, image, code };
        // dispatch(addToList({ type, details }));
    }
    return (
        <div className="w-full relative z-0 dropdown rounded-[15px] border border-[#ffffff26] bg-[#ffffffc] h-[50px] flex items-center justify-start">
            <div tabIndex={0} role="button" className="relative z-10 w-full px-[15px]">{localStamp}</div>
            {/* <ul className="dropdown-content z-[999] menu p-2 shadow bg-[#000000] rounded-box w-full absolute top-[50px] left-0"> */}
            <ul tabIndex={0} className="dropdown-content z-[999] menu p-2 shadow bg-[#000000] rounded-box w-full absolute top-[50px] left-0">
                <li className='hover:bg-[#FFFFFF20] rounded-[4px] px-0'><div onClick={(e) => handleClick(e)} value="greenStamp" className='px-[5px]' >Green Stamp</div></li>
                <li className='hover:bg-[#FFFFFF20] rounded-[4px] px-0'><div onClick={(e) => handleClick(e)} value="yellowStamp" className='px-[5px]' >Yellow Stamp</div></li>
                <li className='hover:bg-[#FFFFFF20] rounded-[4px] px-0'><div onClick={(e) => handleClick(e)} value="blueStamp" className='px-[5px]' >Blue Stamp</div></li>
                <li className='hover:bg-[#FFFFFF20] rounded-[4px] px-0'><div onClick={(e) => handleClick(e)} value="redStamp" className='px-[5px]' >Red Stamp</div></li>
            </ul>
        </div>
    );
}

export default StampsDropdown;
