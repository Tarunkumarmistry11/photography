import React from "react";
import AndamanImage from "../../assets/IMG_20210806_130348749 (1).jpg";
import LandscapeImage from "../../assets/20240101_074807-3.jpg";
import PhotographyFilmmakingImage from "../../assets/IMG_20351119_044005946.jpg";
import { Link } from "react-router-dom";
import { FaArrowUpLong } from "react-icons/fa6";
import Marquee from "../marquee/marquee";
import ImageCarousels from "../ImageCarousels/ImageCarousels";

function LandingPage() {
  const imageStyle = {
    width: "3rem",
    height: "4rem",
    border: "none",
    borderRadius: "8px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)",
    transformOrigin: "center",
    transition: "transform 0.3s ease",
    cursor: "pointer",
  };

  const handleHover = (event) => {
    event.target.style.transform = "scale(1.9) rotate(6deg)";
  };

  const handleHoverOut = (event) => {
    event.target.style.transform = "scale(1.1) rotate(0deg)";
  };

  return (
    <div className="w-full h-screen bg-zinc-900 pt-2">
      <div className="Intro-text-structure mt-40 px-20 flex justify-between items-center">
        <div className="text-masker">
          <h1 className="text-2xl font-['Founders_Grotesk']">
            ELEVEN, from the enchanting Andaman islands,
            <img
              src={AndamanImage}
              alt="Andaman Islands"
              className="inline-block mx-2"
              style={imageStyle}
              onMouseOver={handleHover}
              onMouseOut={handleHoverOut}
            />
            is a photographer, filmmaker, and storyteller. He captures wild
            landscapes
            <img
              src={LandscapeImage}
              alt="Landscapes"
              className="inline-block mx-2"
              style={imageStyle}
              onMouseOver={handleHover}
              onMouseOut={handleHoverOut}
            />
            in vivid hues and dreamlike compositions, seamlessly blending his
            passion for photography with filmmaking
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
          <button className="px-3 py-2 uppercase bg-zinc-900 border-2 font-['Founders_Grotesk'] text-white rounded-full shadow-lg hover:bg-zinc-800 transition-colors duration-300">
            Read my story
          </button>
        </Link>
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-32"></div>
      <div className="absolute right-2 mt-2 flex items-center space-x-2">
        <Link to="/contact">
        <h1 className="w-38 h-10 flex justify-between items-center px-4 py-2 border-2 border-zinc-500 font-regular capitalize font-['Founders_Grotesk'] rounded-full">
          Connect with me
        </h1>
        </Link>
        <Link to="/contact">
        <div className="w-10 h-10 border-2 flex items-center justify-center border-zinc-500 rounded-full">
          <span className="rotate-[45deg]">
            <FaArrowUpLong />
          </span>
        </div>
        </Link>
      </div>
      <div className="mt-20">
        <Marquee />
      </div>
      <div>
        <ImageCarousels />
      </div>
    </div>
  );
}

export default LandingPage;