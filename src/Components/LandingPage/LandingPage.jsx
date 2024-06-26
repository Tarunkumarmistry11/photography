import React, { useEffect, useRef } from "react";
import AndamanImage from "../../assets/IMG_20210806_130348749 (1).jpg";
import LandscapeImage from "../../assets/20240101_074807-3.jpg";
import PhotographyFilmmakingImage from "../../assets/IMG_20351119_044005946.jpg";
import { Link } from "react-router-dom";
import { FaArrowUpLong } from "react-icons/fa6";
import Marquee from "../marquee/marquee";
import { gsap } from "gsap";
import ImageCarousels from "../ImageCarousels/imageCarousels";

function LandingPage() {
  const imageStyle = {
    width: "3rem",
    height: "4rem",
    border: "none",
    borderRadius: "8px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)",
    transformOrigin: "center",
    transition: "transform 0.2s ease",
    cursor: "pointer",
  };

  const handleHover = (event) => {
    event.target.style.transform = "scale(2.9) rotate(6deg)";
  };

  const handleHoverOut = (event) => {
    event.target.style.transform = "scale(1.1) rotate(0deg)";
  };

  const dotsRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      dotsRef.current.children,
      { y: 0 },
      {
        y: -10,
        stagger: 0.2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      }
    );
  }, []);

  return (
    <div className="w-full min-h-screen bg-zinc-900 pt-2 flex flex-col">
      <Marquee />

      <div className="Intro-text-structure mt-20 md:mt-40 px-5 md:px-20 flex flex-col md:flex-row justify-between items-center">
        <div className="text-masker mb-8 md:mb-0 md:mr-8">
          <h1 className="text-4xl md:text-8xl font-['Founders_Grotesk']">
            From
            <img
              src={AndamanImage}
              alt="Andaman Islands"
              className="inline-block mx-2"
              style={imageStyle}
              onMouseOver={handleHover}
              onMouseOut={handleHoverOut}
            />
            a small group of islands
            <img
              src={LandscapeImage}
              alt="Landscapes"
              className="inline-block mx-2"
              style={imageStyle}
              onMouseOver={handleHover}
              onMouseOut={handleHoverOut}
            />
            where it all began{" "}
            <span ref={dotsRef} className="inline-block">
              {[".", ".", "."].map((dot, index) => (
                <span key={index} className="inline-block">
                  {dot}
                </span>
              ))}
            </span>
            <img
              src={PhotographyFilmmakingImage}
              alt="Photography and Filmmaking"
              className="inline-block mx-2"
              style={imageStyle}
              onMouseOver={handleHover}
              onMouseOut={handleHoverOut}
            />
          </h1>
        </div>
      </div>

      <div className="Read-more-button mt-8 text-center">
        <Link to="/About">
          <button className="px-3 py-2  bg-zinc-900 border-[1px] font-['Founders_Grotesk'] text-white rounded-full shadow-lg hover:bg-zinc-100 hover:text-black transition-colors duration-300">
            Read my story
          </button>
        </Link>
      </div>

      <div className="border-t-[1px] border-zinc-800 mt-32"></div>

      <div className="mt-2 flex items-center space-x-2 justify-end">
        <Link to="/contact">
          <h1 className="w-38 h-10 flex justify-between items-center px-4 py-2 border-2 border-zinc-500 font-regular capitalize font-['Founders_Grotesk'] hover:bg-zinc-100 hover:text-black rounded-full">
            Connect with me
          </h1>
        </Link>
        <Link to="/contact">
          <div className="w-10 h-10 border-2 flex items-center justify-center border-zinc-500  hover:bg-zinc-100 hover:text-black rounded-full">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </Link>
      </div>

      <ImageCarousels />
    </div>
  );
}

export default LandingPage;
