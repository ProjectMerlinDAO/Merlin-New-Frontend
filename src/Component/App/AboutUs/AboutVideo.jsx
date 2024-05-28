import Link from 'next/link'
import React, { useState } from 'react'

const AboutVideo = () => {
  const [videoSrc, setVideoSrc] = useState('../assets/images/img/about-video-thambnail.jpg')

  const handlePlayButtonClick = () => {
    setVideoSrc('https://www.youtube.com/embed/CLkxRnRQtDE?autoplay=1')
  }

  return (
    <div className='pt-[70px] pb-[130px] lg:pb-[100px] md:pt-[50px] xsm:pt-[30px] md:pb-[70px]'>
      <div className="px-[20px] md:px-[10px] max-w-[1210px] mx-auto lg:max-w-[720px]">
        <div className="w-full rounded-[30px] relative overflow-hidden h-[650px] lg:h-[400px] sm:h-[350px] xsm:h-[280px]">
          {videoSrc === '../assets/images/img/about-video-thambnail.jpg' ? (
            <video 
              loop 
              autoPlay 
              playsInline 
              muted 
              poster={videoSrc}
              className='z-0 w-full h-full object-fill rounded-[30px]'
            >
              <source src="https://youtu.be/CLkxRnRQtDE" type="video/mp4" />
            </video>
          ) : (
            <iframe
              src={videoSrc}
              className='z-0 w-full h-[650px] lg:h-[400px] sm:h-[350px] xsm:h-[280px] object-fill rounded-[30px]'
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
          {videoSrc === '../assets/images/img/about-video-thambnail.jpg' && (
            <div className="video-overlay flex items-center justify-center rounded-[30px] bg-[rgba(0,0,0,0.50)] absolute top-0 left-0 w-full h-full">
              <button
                onClick={handlePlayButtonClick}
                className='play-btn flex items-center justify-center h-[100px] w-[100px] lg:h-[80px] lg:w-[80px] md:h-[60px] md:w-[60px] bg-[#FFFFFF] p-[20px] rounded-[50%]'
              >
                <img src="../assets/images/icons/play.svg" alt="Play button" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default AboutVideo
