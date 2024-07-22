import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const RavenDetailVideo = ({ url }) => {
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [videoUrl, setVideoUrl] = useState();
  const getYoutubeId = () => {
    let id = url.split('/').pop();
    return id;
  }

  const getVimeoId = () => {
    let id = url.split('/').pop();
    return id;
  }
  const getVideoId = () => {
    let link;
    if (url.includes('youtu.be') || url.includes('youtube')) {
      link = getYoutubeId();
      let video = `https://www.youtube.com/embed/${link}?rel=0&autoplay=1`
      // &autoplay=1`
      // ?rel=0
      setVideoUrl(video);
      return;
    }
    if (url.includes('vimeo')) {
      link = getVimeoId();
      let video = `https://player.vimeo.com/video/${link}`
      setVideoUrl(video);
      return;
    }
  }

  useEffect(() => {
    if (url) {
      getVideoId()
    }
  }, [url])

  const handlePlayButtonClick = () => {
    setVideoPlaying(true);
  };
  return (
    <>
      {url ? (
        <div>
          <div className='rounded-[30px] overflow-hidden relative bg-[#D9D9D9] w-full h-[370px] xsm:h-[260px] mb-[30px]'>
            {videoPlaying ? (
              <iframe
                width="100%"
                height="100%"
                src={videoUrl}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="YouTube video player"
                className='absolute top-0 left-0 w-full h-full'
              ></iframe>
            ) : (
              <>
                <img src="/assets/images/img/raven-video-thambnail.jpg" alt="img" fill={true} className='object-cover' />
                <div className="bg-[#00000099] absolute top-0 left-0 h-full w-full z-10 flex items-center justify-center">
                  <button onClick={handlePlayButtonClick} className='flex items-center justify-center bg-white h-[80px] w-[80px] rounded-[50%] overflow-hidden'>
                    <Image src="/assets/images/icons/play.svg" alt="icon" height={24} width={24} />
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      ) : null}
    </>
  );
  
};

export default RavenDetailVideo;
