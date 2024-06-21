import React from 'react'
import myImage from "../../assets/IMG_20220415_105203399.jpg";

function LandingPage() {
  return (
    <div className='w-full h-screen bg-white'>
        <div className='HeroImage'>
            <div className='masker'>
            <img src={myImage} alt="Description of the image" className="w-full h-full object-cover" />
            </div>
        </div>
    </div>
  )
}

export default LandingPage;
