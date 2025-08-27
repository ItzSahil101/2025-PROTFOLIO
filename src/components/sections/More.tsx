import React from 'react';
import mypic from '../../assets/sahil.png';
import '../../globals.css';

const More: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-[rgb(16,13,37)] p-6">
      {/* Left Side - Description */}
      <div className="flex-1 flex items-center justify-center mt-6 md:mt-0">
        <div
          className="relative max-w-2xl bg-white text-gray-900 px-10 py-8 shadow-2xl 
                     rounded-[60%_40%_55%_45%/50%_60%_40%_50%] overflow-hidden"
        >
          <p className="story-script-regular text-xl md:text-2xl font-normal leading-relaxed text-center">
            I am Sahil Jogi, a 16 years boy.
            <br />A dreamer, a creator, and a passionate web developer. I love blending design,
            technology, and innovation to bring ideas into reality ✨
          </p>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="flex-1 flex items-center justify-center">
        <img
          src={mypic}
          alt="My Picture"
          className="w-80 md:w-[520px] lg:w-[600px] object-cover drop-shadow-[0_10px_40px_rgba(0,0,0,0.7)]"
          style={{ borderRadius: '50% / 40%' }}
        />
      </div>
    </div>
  );
};

export default More;
