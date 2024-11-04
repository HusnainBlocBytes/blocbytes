import React from "react";
// motion
import { motion } from "framer-motion";
// Varient
import { fadeIn } from "../../variants";
import backgroundImage from "../../Images/Images/Hero_section_bg.png"; // Adjust the path to your image file


const Section1 = () => {
  return (
    <>
      <div
      className="pt-8 lg:pt-32 lg:h-screen h-[75vh] bg-[#03045E] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: "center -100px",
      }}
    >
      {/* Content for Large Screens */}
      <div className="hidden lg:block mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        <motion.div className="p-1 w-60 rounded-full flex items-center mb-4"
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
        >
          <span className="font-inter lg:text-[14px] font-normal text-[#00ADD3]">
            Solutions
          </span>
          <hr className="w-12 h-px mx-1 bg-[#00ADD3] border-0" />
          <span className="font-inter text-[14px] font-normal text-[#00ADD3]">
            that scale
          </span>
        </motion.div>

        <motion.h1 className="uppercase max-w-2xl mt-12 mx-auto text-center font-inter font-black lg:text-7xl text-[#FFFFFF] mb-5 md:text-4xl text-4xl lg:leading-[90px]"
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
        >
          Building <span className="text-[#90E0EF]">Bytes {" "}</span>In<span className="text-[#00ADD3]"> Blocs</span>
        </motion.h1>
        
        <motion.div className="p-1 mt-12 rounded-full flex lg:justify-end items-center mb-4"
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
        >
          <span className="font-inter text-[14px] font-normal lg:text-right text-[#00ADD3]">
            Code
          </span>
          <hr className="w-12 h-px mx-1 bg-[#00ADD3] border-0" />
          <span className="font-inter text-[14px] font-normal text-[#00ADD3]">
            that excels
          </span>
        </motion.div>
        
        <motion.p className="uppercase max-w-md mt-12 ml-auto font-inter font-medium text-[24px] lg:text-right text-[#FFFFFF] mb-5 leading-[37px]"
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
        >
          From simple concept to complex codes, we know what you need!
        </motion.p>
      </div>

      {/* Content for Mobile Screens */}
      <div className="lg:hidden mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        <motion.div className="p-1 w-60 rounded-full flex items-center mb-4"
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
        >
        </motion.div>

        <motion.h1 className="uppercase max-w-2xl mt-12 mx-auto text-center font-inter font-black text-4xl text-[#FFFFFF] mb-5 leading-[50px]"
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
        >
          Building <span className="text-[#90E0EF]">Bytes {" "}</span>In<span className="text-[#00ADD3]"> Blocs</span>
        </motion.h1>

        <motion.p className="uppercase max-w-md mt-12 mx-auto font-inter font-medium text-[20px] text-[#FFFFFF] mb-5 leading-[30px]"
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
        >
          From simple concept to complex codes, we know what you need!
        </motion.p>
      </div>
    </div>
    </>
  );
};

export default Section1;
