import React from 'react'

function Intro() {
  return (
    <div>
        <div className=' w-full h-auto py-20 overflow-hidden'>
            <div className='text-7xl px-40 font-["Founders_Grotesk"]'>
                <h1>Let's craft beauty</h1>
                <h1>from imagination.</h1>
            </div>
            <div className='about-tarun-photo-wrapper px-40 mt-4'>
                <img src="https://assets-global.website-files.com/60db5e59f76ae577e9f50d42/63769165d4de2442394ed214_giulia-cold.jpg"
          loading="lazy"
          alt="Photo of Giulia smiling at the camera"
          className="w-[35vw] h-auto  rounded-3xl overflow-hidden "/>
            </div>
        </div>
        <div>
            <p></p>
        </div>
    </div>
  )
}

export default Intro;
