import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const ImageCarousels = () => {
  const leftPhotoRef1 = useRef(null);
  const rightPhotoRef1 = useRef(null);
  const leftPhotoRef2 = useRef(null);
  const rightPhotoRef2 = useRef(null);
  const leftPhotoRef3 = useRef(null);
  const rightPhotoRef3 = useRef(null);

  useEffect(() => {
    const animateImage = (leftRef, rightRef) => {
      gsap.to(leftRef.current, {
        scrollTrigger: {
          trigger: leftRef.current,
          start: "top center",
          end: "center center",
          scrub: 10,
        },
        x: "-1%",
        rotate: "-6",
        ease: "power1.inOut",
      });

      gsap.to(rightRef.current, {
        scrollTrigger: {
          trigger: rightRef.current,
          start: "top center",
          end: "center center",
          scrub: 10,
        },
        x: "1%",
        rotate: "6",
        ease: "power1.inOut",
      });
    };

    animateImage(leftPhotoRef1, rightPhotoRef1);
    animateImage(leftPhotoRef2, rightPhotoRef2);
    animateImage(leftPhotoRef3, rightPhotoRef3);
  }, []);

  return (
    <div>
      <div className='absolute text-5xl mt-4 px-4 font-["Founders_Grotesk"] rounded-full flex flex-col items-center w-1/2 left-1/2 transform -translate-x-1/2 mb-4'>Explore Presets</div>
      <article className="relative h-screen py-20 flex flex-col justify-center items-center font-['Founders_Grotesk'] overflow-hidden">
        <div className="flex justify-between w-full absolute top-[15vh]">
          <div 
            className="transform translate-x-[100%] relative z-40"
            ref={leftPhotoRef1}
          >
            <img 
              src="https://assets-global.website-files.com/60eeb025115a75902b86a796/647e3cc83822b06137a15c00_Header%201%20Left.jpg"
              alt=""
              className="w-[35vw] h-auto rounded-3xl mt-[5vh]"
            />
          </div>
          <div 
            className="transform translate-x-[-100%] relative z-50"
            ref={rightPhotoRef1}
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
              <div className="inline-block text-white px-3 py-1 rounded-full">Andaman Islands</div>
            </div>
            <div className="mb-4">
              <h2 className="text-5xl mb-2">Beach House</h2>
              <Link to="/presets">
                <div className="inline-block px-4 py-2 border-[1px] text-white rounded-full">Explore Presets</div>
              </Link>
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
      <article className="relative h-screen py-20 mt-[30vw] flex flex-col justify-center items-center font-['Founders_Grotesk'] overflow-hidden">
        <div className="flex justify-between w-full absolute top-0">
          <div 
            className="transform translate-x-[100%] relative z-40"
            ref={leftPhotoRef2}
          >
            <img 
              src="https://assets-global.website-files.com/60eeb025115a75902b86a796/647e3cc83822b06137a15c00_Header%201%20Left.jpg"
              alt=""
              className="w-[35vw] h-auto rounded-3xl mt-[5vh]"
            />
          </div>
          <div 
            className="transform translate-x-[-100%] relative z-50"
            ref={rightPhotoRef2}
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
              <div className="inline-block text-white px-3 py-1 rounded-full">Andaman Islands</div>
            </div>
            <div className="mb-4">
              <h2 className="text-5xl mb-2">Beach House</h2>
              <Link to="/presets">
                <div className="inline-block px-4 py-2 border-[1px] text-white rounded-full">Explore Presets</div>
              </Link>
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
      <article className="relative h-screen py-20 mt-[30vw] flex flex-col justify-center items-center font-['Founders_Grotesk'] overflow-hidden">
        <div className="flex justify-between w-full absolute top-0">
          <div 
            className="transform translate-x-[100%] relative z-40"
            ref={leftPhotoRef3}
          >
            <img 
              src="https://assets-global.website-files.com/60eeb025115a75902b86a796/647e3cc83822b06137a15c00_Header%201%20Left.jpg"
              alt=""
              className="w-[35vw] h-auto rounded-3xl mt-[5vh]"
            />
          </div>
          <div 
            className="transform translate-x-[-100%] relative z-50"
            ref={rightPhotoRef3}
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
              <div className="inline-block text-white px-3 py-1 rounded-full">Andaman Islands</div>
            </div>
            <div className="mb-4">
              <h2 className="text-5xl mb-2">Beach House</h2>
              <Link to="/presets">
                <div className="inline-block px-4 py-2 border-[1px] text-white rounded-full">Explore Presets</div>
              </Link>
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
    </div>
  );
};

export default ImageCarousels;
