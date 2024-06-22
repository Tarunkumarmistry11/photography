import React from "react";
import AndamanImage from "../../assets/IMG_20210806_130348749 (1).jpg";
import LandscapeImage from "../../assets/20240101_074807-3.jpg";
import PhotographyFilmmakingImage from "../../assets/IMG_20351119_044005946.jpg";
import { Link } from "react-router-dom";

function LandingPage() {
  const imageStyle = {
    width: "3rem", // Adjust width and height as needed
    height: "4rem",
    border: "none", // Remove the white border
    borderRadius: "8px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)", // Optional: Add a subtle shadow
    transformOrigin: "center", // Ensure transformations originate from the center
    transition: "transform 0.3s ease", // Smooth transition on hover
    cursor: "pointer",
  };

  const handleHover = (event) => {
    event.target.style.transform = "scale(1.9) rotate(6deg)"; // Scale and tilt on hover
  };

  const handleHoverOut = (event) => {
    event.target.style.transform = "scale(1.1) rotate(0deg)"; // Restore to normal on hover out
  };

  return (
    <div className="w-full h-screen bg-zinc-900 pt-2">
      <div className="Intro-text-structure mt-40 px-20 flex justify-between items-center">
        <div className="text-masker">
          <h1 className=" text-2xl font-['Founders_Grotesk']">
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
        <button className="px-3 py-2 uppercase bg-zinc-900 border 2 font-['Founders_Grotesk'] text-white rounded-lg shadow-lg hover:bg-zinc-800 transition-colors duration-300">
          Read my story
        </button>
      </Link>  
      </div>
    </div>
  );
}

export default LandingPage;
