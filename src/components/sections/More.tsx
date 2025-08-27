import React from 'react';
import mypic from '../../assets/sahil.png';
import cehPic from '../../assets/ceh.png';
import '../../globals.css';

const cehModules = [
  "Introduction to Ethical Hacking",
  "Footprinting & Reconnaissance",
  "Scanning Networks",
  "Enumeration",
  "Vulnerability Analysis",
  "System Hacking",
  "Malware Threats",
  "Sniffing",
  "Social Engineering",
  "Denial of Service",
  "Session Hijacking",
  "Hacking Web Servers",
  "Hacking Web Applications",
  "SQL Injection",
  "Hacking Wireless Networks",
  "Evading IDS, Firewalls",
  "Cryptography",
  "Cloud Computing",
  "IoT Hacking",
  "Mobile Hacking"
];

const More: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[rgb(16,13,37)] p-6">
      {/* Top Section: Profile & Description */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl gap-12">
        {/* Left Side - Description */}
        <div className="flex-1 flex items-center justify-center mt-6 md:mt-0">
          <div
            className="relative max-w-2xl bg-white text-gray-900 px-10 py-8 shadow-2xl 
                       rounded-[60%_40%_55%_45%/50%_60%_40%_50%] overflow-hidden"
          >
            <p className="story-script-regular text-xl md:text-2xl font-normal leading-relaxed text-center">
              I am Sahil Jogi, a 16-year-old boy.
              <br />A dreamer, a creator, and a passionate web developer. I love blending design,
              technology, and innovation to bring ideas into reality ✨
            </p>
          </div>
        </div>

        {/* Right Side - Profile Image */}
        <div className="flex-1 flex items-center justify-center">
          <img
            src={mypic}
            alt="My Picture"
            className="w-80 md:w-[520px] lg:w-[600px] object-cover drop-shadow-[0_10px_40px_rgba(0,0,0,0.7)]"
            style={{ borderRadius: '50% / 40%' }}
          />
        </div>
      </div>

      {/* Bottom Section: CEH Certificate & Modules */}
      <div className="flex flex-col items-center justify-center mt-16 w-full max-w-6xl">
        {/* CEH Certificate Image */}
        <img
          src={cehPic}
          alt="CEH Certificate"
          className="w-60 md:w-80 lg:w-96 object-cover drop-shadow-[0_10px_40px_rgba(0,0,0,0.7)] mb-12 rounded-xl"
        />

        {/* CEH Modules Diagram */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 relative">
          {cehModules.map((module, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Circle */}
              <div className="w-28 h-28 flex items-center justify-center rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 text-white font-semibold text-center shadow-lg p-2 hover:scale-105 transition-transform break-words text-sm md:text-xs">
                {module}
              </div>
              {/* Optional connecting line */}
              {index < cehModules.length - 1 && (
                <div className="w-1 h-8 bg-gray-400 mx-auto mt-2 hidden md:block"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default More;
