import React, { useState, useEffect } from 'react';

const InfiniteVideo = () => {
    const [activeWordIndex, setActiveWordIndex] = useState(0);
    const words = ['dimensions', 'World', 'Realms'];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 2000); // Change word every 2 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="banner-video-section pt-[50px]">
            <div className="px-[20px] md:px-[10px] max-w-[1210px] mx-auto lg:max-w-[720px] relative z-[4]">
                <div className="banner-video-card w-full relative xl:max-w-[800px] mx-auto rounded-[40px] h-[550px] lg:h-[450px] md:h-[400px] xsm:h-[360px] overflow-hidden flex items-center justify-center">
                    <video loop autoPlay muted className='object-fill w-full h-full'>
                        <source src="../assets/videos/meta_video.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute top-0 left-0 z-10 flex items-center justify-center w-full h-full text-center ">
                        <div className="m-0 cd-intro">
                            <h2 className="cd-headline slide mb-0 text-[60px] xl:text-[50px] lg:text-[40px] md:text-[32px] font-[700] uppercase text-white leading-[120%]">
                                <span className="wt-700 quantico mt-[-30px]">Escape to infinite</span>
                                <br />
                                <div className="relative h-[60px] overflow-hidden">
                                    <span className="cd-words-wrapper dm-sans quantico">
                                        {words.map((word, index) => (
                                            <b
                                                key={index}
                                                className={index === activeWordIndex ? 'is-visible' : 'is-hidden'}
                                            >
                                                {word}
                                            </b>
                                        ))}
                                    </span>
                                </div>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfiniteVideo;
