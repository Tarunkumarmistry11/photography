import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ImageCarousels = () => {
  const leftPhotoRef = useRef(null);
  const rightPhotoRef = useRef(null);

  useEffect(() => {
    gsap.to(leftPhotoRef.current, {
      scrollTrigger: {
        trigger: leftPhotoRef.current,
        start: "top center",
        end: "center center", // Stop animation when center of image reaches center of viewport
        scrub: 10, // Slower scrubbing
      },
      x: "-1%", // Move left by 10% of element width
      rotate: "-6",
      ease: "power1.inOut",
    });

    gsap.to(rightPhotoRef.current, {
      scrollTrigger: {
        trigger: rightPhotoRef.current,
        start: "top center",
        end: "center center", // Stop animation when center of image reaches center of viewport
        scrub: 10, // Slower scrubbing
      },
      x: "1%", // Move right by 10% of element width
      rotate: "6",
      ease: "power1.inOut",
    });
  }, []);

  return (
    <article className="relative h-screen py-20 flex flex-col justify-center items-center font-['Founders_Grotesk']">
      <div className="flex justify-between w-full absolute top-0">
        <div 
          className="transform translate-x-[100%] relative z-40" // z-40 for stacking order
          ref={leftPhotoRef}
        >
          <img 
            src="https://assets-global.website-files.com/60eeb025115a75902b86a796/647e3cc83822b06137a15c00_Header%201%20Left.jpg"
            alt=""
            className="w-[35vw] h-auto rounded-3xl mt-[5vh]"
          />
        </div>
        <div 
          className="transform translate-x-[-100%] relative z-50" // z-50 higher than z-40 to be on top
          ref={rightPhotoRef}
        >
          <img 
            src="https://assets-global.website-files.com/60eeb025115a75902b86a796/647e3ccc6c2ce83328c9b669_Header%202%20Right.jpg"
            alt=""
            className="w-[35vw] h-auto rounded-3xl mt-[5vh]"
          />
        </div>
      </div>
      <div className="relative text-center mt-30">
        <div className="mb-4 flex flex-col items-center">
          <div className="mb-2">
            <div className="inline-block bg-zinc-900 text-white px-3 py-1 rounded-md">Jan 2023</div>
            <div className="inline-block mx-2">
              <svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 4L-8.26528e-07 8L-4.76837e-07 -6.99382e-07L16 4Z" fill="currentcolor"></path>
              </svg>
            </div>
            <div className="inline-block bg-gray-200 text-black px-3 py-1 rounded-md">presets</div>
          </div>
          <div className="mb-4">
            <h2 className="text-5xl mb-2">Beach House</h2>
            <a href="/stills/visit-greenland" className="inline-block px-4 py-2 bg-black text-white rounded-md">Click here</a>
          </div>
          <div className="flex justify-center space-x-2">
            <div className="relative w-10 h-10">
              <div className="absolute inset-0 bg-gradient-to-r from-[#214356] to-[#445f88]"></div>
            </div>
            <div className="w-10 h-10 bg-[#214356]">
              <div className="text-xs text-white"></div>
            </div>
            <div className="w-10 h-10 bg-[#8db2c3]">
              <div className="text-xs text-white"></div>
            </div>
            <div className="w-10 h-10 bg-[#e7e7e9]">
              <div className="text-xs text-black"></div>
            </div>
            <div className="w-10 h-10 bg-[#989598]">
              <div className="text-xs text-white"></div>
            </div>
            <div className="w-10 h-10 bg-[#445f88]">
              <div className="text-xs text-white"></div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ImageCarousels;
