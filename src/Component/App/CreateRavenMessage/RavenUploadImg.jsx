import React, { useState } from 'react'
import Image from 'next/image'
import { toast } from 'react-toastify';

const RavenUploadImg = ({ image, setImage, errors }) => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const handleImageUpload = (e) => {
    const MAX_SIZE_BYTES = 10.1 * 1024 * 1024
    const file = e.target.files[0];
    const fileSizeInMB = file.size / (1024 * 1024);
    console.log(file.size, "file size", (fileSizeInMB))
    if (file) {
      if (file.size > MAX_SIZE_BYTES) {
        toast.error("Image size is greater than 10mb");
        return
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result);
      };
      reader.readAsDataURL(file);
      setImage((image) => ({
        ...image,
        avatarImage: file
      }))
    }
  };

  return (
    <div className='mt-[40px] xl:mt-[30px]'>
      <label className='font-[400] uppercase text-white'>Raven Message Avatar Photo</label>
      <div className="rounded-[18px] relative cursor-pointer bg-[#FFFFFF05] overflow-hidden h-[250px] p-[20px] w-full mt-[8px] md:mt-[4px] text-center flex items-center justify-center flex-col" style={{ border: '2px dashed rgba(255, 255, 255, 0.12)' }}>
        {uploadedImage ? (
          <img src={uploadedImage} alt="Uploaded preview" fill={true} className="object-cover" />
        ) : (
          <>
            <p className='mb-[35px] relative z-0'>JPEG, JPG, PNG, GIF, WEBP. Max size 10mb.</p>
            <Image src="/assets/images/icons/upload-icon.svg" alt="icon" width="30" height="20" className='relative z-0 mx-auto' />
          </>
        )}
        <input
          type='file'
          accept="image/*"
          className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer'
          onChange={handleImageUpload}

        />
      </div>
      {errors && Object.keys(errors).length > 0 && errors?.hasOwnProperty("avatarImage") ? <div className="error-message">{errors["avatarImage"]}</div> : null}
    </div>
  )
}

export default RavenUploadImg
