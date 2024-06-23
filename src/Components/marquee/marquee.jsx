import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Marquee = () => {
  const marqueeRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    const video = videoRef.current;

    gsap.to(video, {
      yPercent: -100,
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: marquee,
        start: 'top top',
        end: 'bottom bottom', // Adjust end position to 'bottom bottom' or 'bottom top' based on your layout
        scrub: 10,
      },
    });
  }, []);

  return (
    <div className="w-full h-screen py-[15vh] bg-zinc-900">
      <div ref={marqueeRef} className="video-element w-full flex justify-center items-center">
        <video ref={videoRef} className=" rounded-3xl max-w-8xl" controls loop autoPlay>
          <source
            src="https://ik.imagekit.io/eleven08/Website%20Assests/18512632-uhd_3840_2160_60fps.mp4?updatedAt=1719080887033"
            type="video/mp4"
          />
          Your browser does not support the video.
        </video>
      </div>
    </div>
  );
}

export default Marquee;
