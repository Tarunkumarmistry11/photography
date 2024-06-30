import React from "react";

function Intro() {
  return (
    <div className="py-20 flex flex-col lg:flex-row">
      <div className="lg:w-[35vw] h-auto rounded-3xl overflow-hidden mb-8 lg:mb-0">
        <img
          src="https://assets-global.website-files.com/60db5e59f76ae577e9f50d42/63769165d4de2442394ed214_giulia-cold.jpg"
          loading="lazy"
          alt="Photo of Tarun smiling at the camera"
          className="w-full h-auto rounded-3xl overflow-hidden"
        />
      </div>
      <div className="flex-1 lg:px-8">
        <div className="text-4xl lg:text-7xl font-['Founders_Grotesk'] mb-4">
          <h1>Let's craft beauty</h1>
          <h1>from imagination.</h1>
        </div>
        <div className="py-3 lg:py-5 text-base lg:text-lg font-['Founders_Grotesk']">
          <p>
            Born and raised on a serene island surrounded by nature's
            breathtaking beauty, I've always found solace in its tranquil waters
            and the absence of city clamor. From a young age, my heart belonged
            to the arts, expressing myself through drawing and painting on
            paper. Each stroke was a testament to my fascination with capturing
            the essence of natural wonders around me.
          </p>
        </div>
        <div className="py-3 lg:py-5 text-base lg:text-lg font-['Founders_Grotesk']">
          <p>
            As I matured, my artistic journey evolved. I transitioned from
            static mediums to the dynamic world of photography and short
            cinematic videos. With each click of the shutter and every frame of
            film, I found a new way to explore and interpret the world through
            my lens. The intricate details of nature, from the gentle sway of
            palm trees to the play of light on crystal-clear waters, became my
            muse. I immersed myself in this visual storytelling, driven by a
            passion to preserve and share the exquisite beauty that surrounded
            me.
          </p>
        </div>
        <div className="py-3 lg:py-5 text-base lg:text-lg font-['Founders_Grotesk']">
          <p>
            Through photography and videography, I discovered a profound
            connection to my surroundings. Each moment captured was not just an
            image but a narrative, weaving together the emotions and essence of
            the island life I cherished. Every journey with my camera became a
            quest to unearth hidden treasures and celebrate the sublime beauty
            that often goes unnoticed in the rush of daily life.
          </p>
        </div>
        <div className="py-3 lg:py-5 text-base lg:text-lg font-['Founders_Grotesk']">
          <p>
            In this pursuit, I found my calling—to capture and preserve the
            ephemeral magic of nature, offering others a glimpse into the
            soul-stirring landscapes and moments that define my island home.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Intro;
