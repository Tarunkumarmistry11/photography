import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HorizontalSlider from './HorizontalSlider/HorizontalSlider';
import Intro from './Intro/intro';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const AboutOneRef = useRef(null);
  const AboutRef = useRef(null);
  const videoRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const AboutOverlayOne = AboutOneRef.current;
    const AboutOverlay = AboutRef.current;
    const videoOverlay = videoRef.current;
    const textOverlay = textRef.current;

    // GSAP animation for text
    gsap.to(textOverlay, {
      type: 'word',
      opacity: 0.3,
      duration: 0.5,
      ease: 'power1.out',
      stagger: 0.1,
    })

    gsap.to(AboutOverlay, {
      y: -100, // Example offset, adjust as needed
      opacity: 0, // Fade out effect
      ease: 'power1.Out',
      scrollTrigger: {
        trigger: AboutOverlay,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      },
    });

    gsap.to(AboutOverlayOne, {
      y: -100, // Example offset, adjust as needed
      opacity: 0, // Fade out effect
      ease: 'power1.Out',
      scrollTrigger: {
        trigger: AboutOverlay,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 5,
      },
    });

    // GSAP animation for video
    gsap.to(videoOverlay, {
      yPercent: -100,
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: videoOverlay,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 10,
      },
    });
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-zinc-900">
      <div ref={AboutOneRef} className="fixed top-[20vh] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full z-10">
        <h1  className="text-9xl font-bold font-['Founders_Grotesk']">Tarun</h1>
      </div>
      <div  ref={AboutRef} className="fixed top-[40vh] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full">
        <h1 className="text-9xl font-bold font-['Founders_Grotesk']">Mistry</h1>
      </div>
      <div className="w-full py-[50vh] flex justify-center items-center">
        <div className="w-full h-full flex justify-center items-center">
          <video ref={videoRef} className="rounded-3xl max-w-8xl w-[30vw] h-auto" controls loop autoPlay muted playsInline>
            <source
              src="https://assets-global.website-files.com/60db5e59f76ae577e9f50d42/6139d03190e20858dec6d960_Video%20Portrait%20BW-transcode.mp4"
              type="video/mp4"
            />
            Your browser does not support the video.
          </video>
        </div>
      </div>
      <div className="section-title about-wrapper py-20">
        <div ref={textRef} className="page-paragraph text-wrap px-[30vw] text-2xl font-['Founders_Grotesk']">
          <h1>The symphony of nature, the earthy scent of grass, the whispering breeze carrying stories of old trees and fallen leaves, and above all, the lingering aroma of pure joy, forever etched in my heart. Growing up on the serene island of Andaman and Nicobar, I nurtured a deep, playful bond with nature..</h1>
        </div>
      </div>
      <div>
      <HorizontalSlider />
      </div>
      <div>
        <Intro />
      </div>
    </div>
  );
}

export default About;
