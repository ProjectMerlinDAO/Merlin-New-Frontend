import React, { useState } from 'react';
import Image from 'next/image';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const RavenImages = ({images}) => {
    const [open, setOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleImageClick = (index) => {
        setCurrentIndex(index);
        setOpen(true);
    };
    return (
        <div>
            <div className='grid grid-cols-4 items-start justify-start mx-[-10px] xsm:flex-wrap' style={{ rowGap: '20px' }}>
                { images?.length ? images.map((img, index) => (
                    <div key={index} className="  px-[10px]">
                        <div className="relative overflow-hidden rounded-[20px] group cursor-pointer" onClick={() => handleImageClick(index)}>
                            <Image src={img} alt={`raven image ${index + 1}`} width="100" height="100" className="!h-[100%] !w-[100%] max-h-[200px] object-fill relative z-0" />
                            <div className="h-[100%] w-[100%] absolute left-0 top-0 bg-[#00000080] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <Image src="/assets/images/icons/plus.svg" alt="icon" height='22' width='22' />
                            </div>
                        </div>
                    </div>
                )) : null}
            </div>

            {open && (
                <Lightbox
                    slides={images.map(src => ({ src }))}
                    open={open}
                    index={currentIndex}
                    close={() => setOpen(false)}
                />
            )}
        </div>
    );
};

export default RavenImages;
