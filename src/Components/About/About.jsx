import React from "react";

function About() {
  return (
    <div className="w-full h-screen py-[20vh]">
      <h1 className="text-8xl text-center font-['Founders_Grotesk'] ">Tarun</h1>
      <h1 className="relative text-8xl text-center font-['Founders_Grotesk'] ">Mistry</h1>
      <div className="about-video-wrapper">
        <video className="about-video" src="https://www.youtube.com/watch?v=6ZfZGjKtXnE" autoPlay loop muted></video>

      </div>
    </div>
  )
}

export default About
