import React, { useState, useEffect } from 'react';
import HeaderH from './HeaderH';

const videos = [
  { src: '/assets/media/video/frontVideo.mp4', text: 'First Video Text' },
  { src: '/assets/media/video/frontVideo2.mp4', text: 'Second Video Text' },
  { src: '/assets/media/video/frontVideo.mp4', text: 'Third Video Text' },
  { src: '/assets/media/video/frontVideo2.mp4', text: 'Fourth Video Text' },
];

function ViNav() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [nextVideoIndex, setNextVideoIndex] = useState(1);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
        setNextVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
        setFade(false);
      }, 1000); // Duration of the fade transition
    }, 5000); // Change video every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="relative w-full h-screen overflow-hidden z-[-1]">
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${fade ? 'opacity-0' : 'opacity-80'}`}
            style={{ zIndex: fade ? 0 : 1 }}
          >
            <source src={videos[currentVideoIndex].src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video
            autoPlay
            loop
            muted
            playsInline
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${fade ? 'opacity-80' : 'opacity-0'}`}
            style={{ zIndex: fade ? 1 : 0 }}
          >
            <source src={videos[nextVideoIndex].src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <h1 className="text-white text-4xl">{videos[currentVideoIndex].text}</h1>
        </div>
      </div>
      <HeaderH/>
    </>
  );
}

export default ViNav;
