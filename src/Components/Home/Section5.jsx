import React from 'react';
import banner from "../../Images/Images/BLOCBYTES_banner_image.png"; 
import smallImage from "../../Images/Images/Home_banner.png"; 

const Section5 = () => {
  return (
    <div className="relative lg:h-[350px] md:h-[250px] h-[100px] flex items-center justify-center bg-cover bg-center">
      {/* Background Image for Large Screens */}
      <div
        className="absolute inset-0 bg-[#0B0F40] bg-cover bg-center hidden sm:block"
        style={{ backgroundImage: `url(${banner})` }}
      />

      {/* Static Image for Small Screens */}
      <img 
        src={smallImage} 
        alt="Small Screen Banner" 
        className="absolute inset-0 bg-cover object-cover sm:hidden md:block lg:hidden" 
      />

      {/* Foreground Text */}
      <h1 className="relative text-[40px] hidden lg:block  sm:text-[60px] md:text-[100px] lg:text-[150px] xl:text-[210px] text-[#7AB5FF] font-bold uppercase tracking-wide z-10">
        BlocBytes
      </h1>

      {/* Tag Bubbles */}
      <div className="z-20 space-x-4 flex flex-wrap justify-center hidden lg:block md:hidden sm:flex">
        <Tag text="Trust" color="bg-[#03045E] text-[#00ADD3]" position="top-16 left-4 sm:top-24 sm:left-8 lg:top-24 lg:left-16" />
        <Tag text="Honesty" color="bg-[#00ADD3]" position="top-24 left-6 sm:top-32 sm:left-[10%] lg:top-42 lg:left-[17%]" />
        <Tag text="Communication" color="bg-[#FFFFFF] text-[#00ADD3]" position="top-[150px] left-[15%] sm:top-[180px] sm:left-[22%] lg:top-[220px] lg:left-[29%]" />
        <Tag text="Passion" color="bg-[#03045E] text-[#00ADD3]" position="top-[120px] right-8 sm:top-[140px] sm:right-[25%] lg:top-[165px] lg:right-[40%]" />
        <Tag text="Work Integrity" color="bg-[#FFFFFF] text-[#00ADD3]" position="bottom-24 right-4 sm:bottom-1/3 sm:right-[15%] lg:right-[22%]" />
        <Tag text="Innovation" color="bg-[#00ADD3] text-[#03045E]" position="bottom-16 right-6 sm:bottom-12 sm:right-8 lg:bottom-16 lg:right-16" />
      </div>
      
      {/* Inline styles for keyframes */}
      <style>
        {`
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
              transform: translateY(0);
            }
            40% {
              transform: translateY(-30px);
            }
            60% {
              transform: translateY(-10px);
            }
          }
          .tag:hover {
            animation: bounce 0.8s ease ;
          }
        `}
      </style>
    </div>
  );
};

// Tag Component
const Tag = ({ text, color, position }) => (
  <div
    className={`absolute ${color} ${position} py-1 px-4 rounded-full text-sm sm:text-base md:text-lg lg:text-xl shadow-lg tag`}
  >
    {text}
  </div>
);

export default Section5;
