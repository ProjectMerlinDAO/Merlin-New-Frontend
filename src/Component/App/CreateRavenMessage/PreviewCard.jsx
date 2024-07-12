import React, { useEffect, useState } from 'react'
import Image from 'next/image'

const PreviewCard = ({title,goal,img,category}) => {
    const [uploadedImage, setUploadedImage] = useState(null);
    const [previewCategory, setPreviewCategory] = useState();

    const handleImageUpload = (e) => {
    if(img){
        const reader = new FileReader();
        reader.onloadend = () => {
          setUploadedImage(reader.result);
        };
        reader.readAsDataURL(img);
    }
    };
    useEffect(() => {
    handleImageUpload()
    },[img])

    console.log(img,"vbhdfjhhj")
    return (
        <div classNAme="mt-[50px]">
            <label className="text-white uppercase">Preview</label>
            <div className="p-[30px] mt-[10px] rounded-[30px]" style={{ background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%)' }}>
                <div className="rounded-[15px] bg-[#D9D9D9] overflow-hidden h-[200px] w-[100%] relative mb-[22px]">
                    <Image src={uploadedImage ? uploadedImage : "/assets/images/img/preview-img.jpg"} alt="img" fill={true} className='object-cover' />
                    {/* <Image src= "/assets/images/img/preview-img.jpg" alt="img" fill={true} className='object-cover' /> */}
                </div>
                <h4 className="text-white text-[20px] font-[400] lexend mb-25px">{title ? title : "Untitled"}</h4>
                <ul className="preview-card-list">
                    <li className="flex items-center relative justify-between py-[20px]" ><span>Goal</span> <span>{goal ? goal : 0.00} MRLN</span></li>
                    <li className="flex items-center relative justify-between py-[20px]" ><span>Category</span> <span>{category ? category[0] : "--"}</span></li>
                </ul>

                {/* <div className="flex items-center justify-between gap-[20px] mt-[20px]">
                    <a href="#" className='hov-btn relative gap-[7px] bg-[#ffffff10] rounded-full bg-opacity-10 backdrop-blur-[5px] h-[45px] w-[114px] flex items-center justify-center text-white text-center leading-trim-both text-edge-cap font-[600] text-[16px] uppercase quantico' >
                        <span className="btn-hov-text">
                            <span className="btn-text" ></span>
                            <span className="btn-text" ></span>
                        </span>
                    </a>
                    <div className='gap-[7px] rounded-full backdrop-blur-[5px] h-[45px] w-[114px] flex items-center justify-center text-white text-center leading-trim-both text-edge-cap font-[600] text-[16px] uppercase quantico' style={{background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.00) 10%, rgba(255, 255, 255, 0.10) 90%)'}} >
                        
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default PreviewCard