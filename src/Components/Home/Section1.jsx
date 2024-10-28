import React from "react";
import backgroundImage from "../../Images/Images/Hero_section_bg.png"; // Adjust the path to your image file


const Section1 = () => {
  return (
    <>
      <div
        className="pt-8 lg:pt-32 lg:h-screen h-[75vh] bg-[#03045E] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition : "top 10px",
        }}
      >
        <div className="mx-auto  max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center">
          <div className="p-1 w-60 rounded-full flex items-center mb-4">
            <span className="font-inter lg:text-[14px] font-normal text-[#00ADD3]">
              Solutions
            </span>
            <hr className="w-12 h-px mx-1 bg-[#00ADD3] border-0" />
            <span className="font-inter text-[14px] font-normal text-[#00ADD3]">
              that scale
            </span>
          </div>

          <h1 className="uppercase max-w-2xl mt-12 mx-auto text-center font-inter font-black lg:text-7xl text-[#FFFFFF] mb-5 md:text-4xl text-4xl lg:leading-[90px]">
            Building Bytes <span>In Blocs</span>
          </h1>
          <div className="p-1 mt-12 rounded-full flex lg:justify-end items-center mb-4">
            <span className="font-inter text-[14px] font-normal lg:text-right text-[#00ADD3]">
            Code
            </span>
            <hr className="w-12 h-px mx-1 bg-[#00ADD3] border-0" />
            <span className="font-inter text-[14px] font-normal text-[#00ADD3]">
            that excels
            </span>
          </div>
          <p className="uppercase max-w-md mt-12 ml-auto font-inter font-medium text-[24px] lg:text-right text-[#FFFFFF] mb-5 leading-[37px]">
            From simple concept to complex codes, we know what you need!
          </p>
        </div>
      </div>
    </>
  );
};

export default Section1;
