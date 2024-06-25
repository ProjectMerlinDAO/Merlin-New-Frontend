import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const RavenDetailVideo = ({url}) => {
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [id, setId] = useState();

  const getYouTubeVideoId = ()=> {
    var videoId = null;
    var regexShort = /youtu\.be\/([a-zA-Z0-9_-]{11})/;
    var regexStandard = /youtube\.com\/watch\?v=([a-zA-Z0-9_-]{11})/;
    var regexStandardAlternate = /youtube\.com\/.*\/([a-zA-Z0-9_-]{11})/;

    var match = url.match(regexShort);
    if (match && match[1]) {
        videoId = match[1];
    } else {
        match = url.match(regexStandard);
        if (match && match[1]) {
            videoId = match[1];
        } else {
            match = url.match(regexStandardAlternate);
            if (match && match[1]) {
                videoId = match[1];
            }
        }
    }
    setId(videoId)
    // return videoId;
}
useEffect(() => {
if(url){
  getYouTubeVideoId()
}
},[url])
  console.log(id,"URL")

  // const videoUrl = "https://www.youtube.com/embed/CLkxRnRQtDE?si=vzqo0zI26lnozjBt&autoplay=1";
  const videoUrl = `https://www.youtube.com/embed/${id}`
  

  const handlePlayButtonClick = () => {
    setVideoPlaying(true);
  };

  return (
    <div>
      <div className='rounded-[30px] overflow-hidden relative bg-[#D9D9D9] w-full h-[370px] xsm:h-[260px] mb-[30px]'>
        {videoPlaying ? (
          <iframe
            width="100%"
            height="100%"
            src={videoUrl}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="YouTube video player"
            className='absolute top-0 left-0 w-full h-full'
          ></iframe>
        ) : (
          <>
            <Image src="/assets/images/img/raven-video-thambnail.jpg" alt="img" fill={true} className='object-cover' />
            <div className="bg-[#00000099] absolute top-0 left-0 h-full w-full z-10 flex items-center justify-center">
              <button onClick={handlePlayButtonClick} className='flex items-center justify-center bg-white h-[80px] w-[80px] rounded-[50%] overflow-hidden'>
                <Image src="/assets/images/icons/play.svg" alt="icon" height={24} width={24} />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default RavenDetailVideo;
