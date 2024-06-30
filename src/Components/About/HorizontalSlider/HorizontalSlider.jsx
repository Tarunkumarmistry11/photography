import React from 'react';

const HorizontalSlider = () => {
  return (
    <div className="relative h-screen py-20 overflow-hidden transform -rotate-2">
      <div className="flex">
        <div className="w-full overflow-x-auto">
          <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
            {/* Images Row 1 */}
            <div className="flex-none">
              <img
                src="https://assets-global.website-files.com/60db5e59f76ae577e9f50d42/635e509877408d75da804c25_Parker%20Scmidt-205.jpg"
                alt="Photo 1"
                className="w-64 h-auto"
              />
            </div>
            <div className="flex-none">
              <img
                src="https://assets-global.website-files.com/60db5e59f76ae577e9f50d42/61f7f6a452675ad591cfd1a8_photo-creative-6.jpg"
                alt="Photo 2"
                className="w-64 h-auto"
              />
            </div>
            <div className="flex-none">
              <img
                src="https://assets-global.website-files.com/60db5e59f76ae577e9f50d42/61f7f6a498d63ab45b056cb8_photo-creative-3.jpg"
                alt="Photo 3"
                className="w-64 h-auto"
              />
            </div>
            <div className="flex-none">
              <img
                src="https://assets-global.website-files.com/60db5e59f76ae577e9f50d42/635e4fddb16556675ceb906f_97660031.jpg"
                alt="Photo 4"
                className="w-64 h-auto"
              />
            </div>
            <div className="flex-none">
              <img
                src="https://assets-global.website-files.com/60db5e59f76ae577e9f50d42/635e4f897080454b764d417c_AG_CORNWALL_DEC2021_10.jpg"
                alt="Photo 5"
                className="w-64 h-auto"
              />
            </div>
            <div className="flex-none">
              <img
                src="https://assets-global.website-files.com/60db5e59f76ae577e9f50d42/61f7f6a3627fccd34acd48ef_photo-creative-2.jpg"
                alt="Photo 6"
                className="w-64 h-auto"
              />
            </div>
            <div className="flex-none">
              <img
                src="https://assets-global.website-files.com/60db5e59f76ae577e9f50d42/61f7f6a45b40c6821923f5cd_photo-creative-7.jpg"
                alt="Photo 7"
                className="w-64 h-auto"
              />
            </div>
            {/* Duplicate Images for Looping Effect */}
            <div className="flex-none">
              <img
                src="https://assets-global.website-files.com/60db5e59f76ae577e9f50d42/635e509877408d75da804c25_Parker%20Scmidt-205.jpg"
                alt="Photo 1"
                className="w-64 h-auto"
              />
            </div>
            <div className="flex-none">
              <img
                src="https://assets-global.website-files.com/60db5e59f76ae577e9f50d42/61f7f6a452675ad591cfd1a8_photo-creative-6.jpg"
                alt="Photo 2"
                className="w-64 h-auto"
              />
            </div>
            <div className="flex-none">
              <img
                src="https://assets-global.website-files.com/60db5e59f76ae577e9f50d42/61f7f6a498d63ab45b056cb8_photo-creative-3.jpg"
                alt="Photo 3"
                className="w-64 h-auto"
              />
            </div>
            <div className="flex-none">
              <img
                src="https://assets-global.website-files.com/60db5e59f76ae577e9f50d42/635e4fddb16556675ceb906f_97660031.jpg"
                alt="Photo 4"
                className="w-64 h-auto"
              />
            </div>
            <div className="flex-none">
              <img
                src="https://assets-global.website-files.com/60db5e59f76ae577e9f50d42/635e4f897080454b764d417c_AG_CORNWALL_DEC2021_10.jpg"
                alt="Photo 5"
                className="w-64 h-auto"
              />
            </div>
            <div className="flex-none">
              <img
                src="https://assets-global.website-files.com/60db5e59f76ae577e9f50d42/61f7f6a3627fccd34acd48ef_photo-creative-2.jpg"
                alt="Photo 6"
                className="w-64 h-auto"
              />
            </div>
            <div className="flex-none">
              <img
                src="https://assets-global.website-files.com/60db5e59f76ae577e9f50d42/61f7f6a45b40c6821923f5cd_photo-creative-7.jpg"
                alt="Photo 7"
                className="w-64 h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalSlider;
