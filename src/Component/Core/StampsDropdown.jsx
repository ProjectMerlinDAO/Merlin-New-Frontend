import { addToList } from '@/src/redux/oracleListSlice';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const StampsDropdown = ({ stamp, setStamp, id, image, code }) => {
    const [localStamp, setLocalStamp] = useState(stamp);
    const dispatch = useDispatch();

    const handleClick = (e) => {
        let value = e.target.getAttribute('value');
        setLocalStamp(value);
        let type;
        if (value === "Green Stamp") {
            type = "GreenStamp";
        }
        if (value === "Yellow Stamp") {
            type = "YellowStamp";
        }
        if (value === "Blue Stamp") {
            type = "BlueStamp"
        }
        if (value === "Red Stamp") {
            type = "RedStamp"
        }
        let details = { id, image, code };
        dispatch(addToList({ type, details }));
    }
    return (
        <div className="w-full relative z-0 dropdown rounded-[15px] border border-[#ffffff26] bg-[#ffffffc] h-[50px] flex items-center justify-start">
            <div tabIndex={0} role="button" className="relative z-10 w-full px-[15px]">{localStamp}</div>
            {/* <ul className="dropdown-content z-[999] menu p-2 shadow bg-[#000000] rounded-box w-full absolute top-[50px] left-0"> */}
            <ul tabIndex={0} className="dropdown-content z-[999] menu p-2 shadow bg-[#000000] rounded-box w-full absolute top-[50px] left-0">
                <li className='hover:bg-[#FFFFFF20] rounded-[4px] px-0'><div onClick={(e) => handleClick(e)} value="Green Stamp" className='px-[5px]' >Green Stamp</div></li>
                <li className='hover:bg-[#FFFFFF20] rounded-[4px] px-0'><div onClick={(e) => handleClick(e)} value="Yellow Stamp" className='px-[5px]' >Yellow Stamp</div></li>
                <li className='hover:bg-[#FFFFFF20] rounded-[4px] px-0'><div onClick={(e) => handleClick(e)} value="Blue Stamp" className='px-[5px]' >Blue Stamp</div></li>
                <li className='hover:bg-[#FFFFFF20] rounded-[4px] px-0'><div onClick={(e) => handleClick(e)} value="Red Stamp" className='px-[5px]' >Red Stamp</div></li>
            </ul>
        </div>
    );
}

export default StampsDropdown;
