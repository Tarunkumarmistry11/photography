import React from "react";
import myImage from "../../assets/IMG_20220415_105203399.jpg";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="w-full h-screen bg-white">
      <div className="HeroImage">
        <div className="masker">
          <img
            src={myImage}
            alt="Description of the image"
            className="w-full h-full object-cover overflow-hidden"
          />
          <div className="Read-me-container mx-auto border rounded-lg shadow-md mt-8 p-6 max-w-8xl">
            <div className="Text-masker">
              <h1 className="text-lg md:text-xl lg:text-2xl font-regular text-center mb-4">
                Meet ELEVEN, a nomadic soul hailing from the enchanting Andaman
                islands. He is not just an outdoor, travel, and landscape
                photographer, but a filmmaker and storyteller whose lens
                captures the untamed beauty of wild landscapes in vivid hues and
                dreamlike compositions. His passion for photography has
                seamlessly transitioned into the realm of filmmaking, where each
                frame tells a tale of its own.
              </h1>
              <div className="flex justify-center">
                <Link
                  to="/about"
                  className="border border-black text-black font-bold py-2 px-5 rounded focus:outline-none focus:shadow-outline"
                >
                  Read Me
                </Link>
              </div>
            </div>
          </div>
          <div className="video-container">
            <div className="video-masker mx-auto border rounded-lg shadow-md mt-8 p-6 max-w-8xl">
              <h1>Cinematic</h1>
            </div>
          </div>
          <div className="top-picks-container">
            <div className="top-picks-masker mx-auto border rounded-lg shadow-md mt-8 p-6 max-w-8xl">
              <h1>top picks</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
