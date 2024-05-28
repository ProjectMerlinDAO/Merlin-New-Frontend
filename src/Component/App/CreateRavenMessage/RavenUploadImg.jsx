import React, { useState } from 'react'
import Image from 'next/image'

const RavenUploadImg = () => {
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className='mt-[40px] xl:mt-[30px]'>
      <label className='font-[400] uppercase text-white'>Raven Message Avatar Photo</label>
      <div className="rounded-[18px] relative cursor-pointer bg-[#FFFFFF05] overflow-hidden h-[250px] p-[20px] w-full mt-[8px] md:mt-[4px] text-center flex items-center justify-center flex-col" style={{border: '2px dashed rgba(255, 255, 255, 0.12)'}}>
        {uploadedImage ? (
          <Image src={uploadedImage} alt="Uploaded preview" fill={true} className="object-cover" />
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
    </div>
  )
}

export default RavenUploadImg
