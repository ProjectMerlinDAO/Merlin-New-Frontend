import React, { useState } from "react";
import Image from "next/image";

const UploadOptional = ({ formData, setFormData }) => {
  const [images, setImages] = useState(Array(4).fill(null));

  const handleImageUpload = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newImages = [...images];
        newImages[index] = reader.result;
        setImages(newImages);
      };
      reader.readAsDataURL(file);
      setFormData((prevData) => {
        const imageKey = `image${Object.keys(prevData.images).length + 1}`;
        return {
          ...prevData,
          images: {
            ...prevData.images,
            [imageKey]: file,
          },
        };
      });
  };
}

  return (
    <div className="mt-[40px] xl:mt-[30px]">
      <label className="font-[400] uppercase text-white">
        Upload photos <span className="normal-case">(Optional)</span>
      </label>
      <div
        className="rounded-[18px] cursor-pointer bg-transparent px-[18px] py-[20px] w-full mt-[8px] md:mt-[4px]"
        style={{ border: "2px dashed rgba(255, 255, 255, 0.12)" }}
      >
        <p className="relative z-0 max-w-[504px]">
          Upload a few photos related to your application (up to 4 photos).
          JPEG, JPG, PNG, GIF, WEBP. Max size 10mb.
        </p>
        <div
          className="flex items-start justify-between mx-[-10px] mt-[20px] flex-wrap"
          style={{ rowGap: "20px" }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-1/4 xsm:w-1/2 px-[10px]">
              <div className="bg-[#FFFFFF05] flex items-center relative justify-center rounded-[12px] overflow-hidden h-[100px] w-full">
                {image ? (
                  <Image
                    src={image}
                    alt={`Uploaded preview ${index + 1}`}
                    fill={true}
                    className="object-cover"
                  />
                ) : (
                  <Image
                    src="/assets/images/icons/upload-icon.svg"
                    alt="icon"
                    width="22"
                    height="16"
                    className="relative z-0 mx-auto"
                  />
                )}
                <input
                  type="file"
                  accept="image/*"
                  className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                  onChange={(e) => handleImageUpload(e, index)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UploadOptional;
