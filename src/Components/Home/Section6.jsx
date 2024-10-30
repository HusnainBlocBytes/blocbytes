import React from "react";
import image from "../../Images/Images/Why_us_section2_image.png";
import Image1 from "../../Images/Images/Why_us_section3_image.png";
import { motion } from "framer-motion";
// Varient
import { fadeIn } from "../../variants";

const Section6 = () => {
  return (
    <div>
      <div className="py-6 flex items-center">
        <motion.span className="lg:px-16 font-inter text-[45px] font-medium text-[#03045E]"
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        >
          Why US?
        </motion.span>
        <motion.div className="flex-grow "
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        >
          <hr className="h-px bg-[#03045E] border-0" />
        </motion.div>
      </div>
      <motion.p className="lg:px-16 font-inter text-[22px] font-normal text-[#03045E]"
      variants={fadeIn("right", 0.9)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
      >
        Why Choose{" "}
        <span className="bg-[#90e0ef] text-[#03045E] px-2 rounded-xl">
          Blocbytes
        </span>
      </motion.p>
      <motion.div className="my-6 px-4"
      variants={fadeIn("left", 0.6)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
      >
        <p className="text-center font-medium font-inter text-[#03045E] leading-relaxed border border-[#90E0EF] rounded-[50%] max-w-4xl mx-auto p-8 sm:p-6 md:p-8 lg:px-28 lg:py-16 text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px]">
          BlocBytes isn't just about tech, it's about partnership. We bring{" "}
          <span className="bg-[#90e0ef] text-[#03045E] px-2 rounded-xl">
            trust,innovation
          </span>{" "}
          and a{" "}
          <span className="bg-[#90e0ef] text-[#03045E] px-2 rounded-xl">
            future-focused mindset
          </span>{" "}
          to everything we do. Whether you're a startup or an established
          business, we’re here to help you{" "}
          <span className="bg-[#90e0ef] text-[#03045E] px-2 py-1 rounded-xl">
            grow and lead in FinTech, Blockchain, and Web 3.0.
          </span>{" "}
          Together, let’s shape the future, one byte at a time.
        </p>
      </motion.div>

      <motion.div className=""
      variants={fadeIn("right", 0.4)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
      >
        <p className="lg:px-16 text-[24px] leading-[32px] font-black font-inter text-[#03045E]">
          WHY US?
        </p>
      </motion.div>
      <motion.div className="flex flex-col lg:flex-row items-center lg:items-start mt-6 lg:px-16"
      variants={fadeIn("left", 0.5)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
      >
        {/* Left side - Text Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 max-w-md sm:max-w-2xl">
          {/* 1st row */}
          <div className="flex items-center border px-4 py-2">
            <p className="text-[14px] sm:text-[16px] md:text-[18px] leading-[24px] sm:leading-[28px] font-normal font-inter text-[#03045E]">
              Efficient Working Methods
            </p>
          </div>
          <div className="flex items-center border px-4 py-2">
            <p className="text-[14px] sm:text-[16px] md:text-[18px] leading-[24px] sm:leading-[28px] font-normal font-inter text-[#03045E]">
              Business Scale Approach
            </p>
          </div>

          {/* 2nd row */}
          <div className="flex items-center border px-4 py-2">
            <p className="text-[14px] sm:text-[16px] md:text-[18px] leading-[24px] sm:leading-[28px] font-normal font-inter text-[#03045E]">
              Complete Client Support
            </p>
          </div>
          <div className="flex items-center border px-4 py-2">
            <p className="text-[14px] sm:text-[16px] md:text-[18px] leading-[24px] sm:leading-[28px] font-normal font-inter text-[#03045E]">
              Partnership, innovation, growth.
            </p>
          </div>

          {/* 3rd row */}
          <div className="flex items-center border px-4 py-2">
            <p className="text-[14px] sm:text-[16px] md:text-[18px] leading-[24px] sm:leading-[28px] font-normal font-inter text-[#03045E]">
              Market Expansion Approach
            </p>
          </div>

          {/* 4th row */}
          <div className="flex items-center border px-4 py-2">
            <p className="text-[14px] sm:text-[16px] md:text-[18px] leading-[24px] sm:leading-[28px] font-normal font-inter text-[#03045E]">
              Efficient Working Methods
            </p>
          </div>
        </div>

        {/* Right side - Image */}
        <div className="mt-6 lg:mt-auto  lg:ml-auto flex-shrink-0 mt-auto">
          <img src={Image1} alt="Description of image" className="h-[120px]" />
        </div>
      </motion.div>

      {/* <div className=" flex justify-center overflow-hidden">
        <img className="mt-6  h-auto " src={image} alt="Home Banner" />
    </div> */}
    </div>
  );
};

export default Section6;
