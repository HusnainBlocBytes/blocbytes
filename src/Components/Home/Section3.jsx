import React from "react";
import backgroundImage from "../../Images/Images/Services_section_bg.png";
import IconImage from "../../Images/Icons/Text_1_image.png";
import IconImage2 from "../../Images/Icons/Text_2_image.png";

const Section3 = () => {
  return (
    <>
      <div className="h- bg-[#03045E] p-6 md:p-12 lg:p-22 mx-4 md:mx-20 pt-1 mt-20">
        {/* Image and bold Text */}
        <div
          className="flex justify-end items-center"
          style={{
            backgroundImage: `url(${backgroundImage})`,
              backgroundSize: 'cover',
            backgroundPosition: "top center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="text-white  py-12 md:py-12">
            <p className="uppercase text-[32px] md:text-[56px] font-normal font-inter leading-[42px] md:leading-[62px]">
              Building <br /> Tomorrow <br /> with
              <img
                src={IconImage}
                alt="Icon"
                className="inline-flex items-baseline h-10 w-8 md:h-12 md:w-8 mx-2" // Adjust size as needed
              />
              Bloc
              <img
                src={IconImage2}
                alt="Icon"
                className="inline-flex items-center h-10 w-8 md:h-12 md:w-8 mx-2" // Adjust size as needed
              />
              Bytes <br />
              Fuel success
            </p>
          </div>
        </div>

        {/* Grid of 3 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          {/* 1st grid */}
          <div>
            <div className="font-inter text-[20px] md:text-[24px] leading-[28px] md:leading-[34px] font-black text-[#FFFFFF]">
              Mission
            </div>
            <div>
              <p className="font-inter leading-[24px] md:leading-[28px] text-[14px] md:text-[16px] text-[#FFFFFF] font-normal">
                Empowering growth through digital innovation.
              </p>
            </div>
          </div>
          {/* 2nd Grid */}
          <div>
            <div className="font-inter text-[20px] md:text-[24px] leading-[28px] md:leading-[34px] font-black text-[#FFFFFF]">
              Vision
            </div>
            <div>
              <p className="font-inter leading-[24px] md:leading-[28px] text-[14px] md:text-[16px] text-[#FFFFFF] font-normal">
                Shaping tomorrow with adaptations and learning.
              </p>
            </div>
          </div>
          {/* 3rd Grid */}
          <div>
            <div className="font-inter text-[20px] md:text-[24px] leading-[28px] md:leading-[34px] font-black text-[#FFFFFF]">
              Code Values
            </div>
            <div>
              <p className="font-inter leading-[24px] md:leading-[28px] text-[14px] md:text-[16px] text-[#FFFFFF] font-normal">
                Committing to trust, excellence, and transparency.
              </p>
            </div>
          </div>
        </div>
        <p className="text-[24px] md:text-[32px] leading-[32px] font-inter font-black text-[#FFFFFF] mt-6">
          Our BlocBytes Story
        </p>
        <p className="text-[14px] md:text-[16px] leading-[24px] font-inter font-normal text-[#FFFFFF] mt-6">
          BlocBytes started with one belief, the future is digital, and we’re
          here to mold it. With the rise of FinTech, Blockchain, and Web 3.0, we
          saw the need for IT services that don’t just keep up but lead in this
          era. We’re all about creating tech that empowers businesses and
          people. BlocBytes isn’t just about building tech, it’s about building
          trust and opportunities. We’re here to collaborate, innovate, and grow
          with you.
        </p>
        <p className="lg:text-[65px] font-semibold text-[#FFFFFF] lg:leading-[84px] uppercase mt-4">
        Together, let’s {" "} <span className="text-[#90E0EF]">build</span>  <br/>
        the future
        </p>
      </div>
      <div className="bg-[#90E0EF] p-6 md:p-12 lg:p-22 mx-4 md:mx-20 pt-1 mt-0">
        <p className="lg:text-[80px]  font-semibold text-[#03045E] lg:leading-[117px] font-inter max-w-lg">How We Make It Work</p>
      </div>
    </>
  );
};

export default Section3;
