import React from "react";
import backgroundImage from "../../Images/Images/Services_section_bg.png";
import backgroundImage2 from "../../Images/Images/Services_section2_bg.png";
import IconImage from "../../Images/Icons/Text_1_image.png";
import IconImage2 from "../../Images/Icons/Text_2_image.png";
// motion
import { motion } from "framer-motion";
// Varient
import { fadeIn } from "../../variants";

const Section3 = () => {
  return (
    <>
      <div className="h- bg-[#03045E] p-6 md:p-12 lg:p-22 mx-4 md:mx-20 pt-1 mt-20">
        {/* Image and bold Text */}
        <div
          className="flex justify-end items-center"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "top center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <motion.div
            className="text-white  py-12 md:py-12"
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
          >
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
          </motion.div>
        </div>

        {/* Grid of 3 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          {/* 1st grid */}
          <div>
            <motion.div
              className="font-inter text-[20px] md:text-[24px] leading-[28px] md:leading-[34px] font-black text-[#FFFFFF]"
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
            >
              Mission
            </motion.div>
            <div>
              <motion.p
                className="font-inter leading-[24px] md:leading-[28px] text-[14px] md:text-[16px] text-[#FFFFFF] font-normal"
                variants={fadeIn("down", 0.7)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
              >
                Empowering growth through digital innovation.
              </motion.p>
            </div>
          </div>
          {/* 2nd Grid */}
          <div>
            <motion.div
              className="font-inter text-[20px] md:text-[24px] leading-[28px] md:leading-[34px] font-black text-[#FFFFFF]"
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
            >
              Vision
            </motion.div>
            <div>
              <motion.p
                className="font-inter leading-[24px] md:leading-[28px] text-[14px] md:text-[16px] text-[#FFFFFF] font-normal"
                variants={fadeIn("down", 0.7)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
              >
                Shaping tomorrow with adaptations and learning.
              </motion.p>
            </div>
          </div>
          {/* 3rd Grid */}
          <div>
            <motion.div
              className="font-inter text-[20px] md:text-[24px] leading-[28px] md:leading-[34px] font-black text-[#FFFFFF]"
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
            >
              Code Values
            </motion.div>
            <div>
              <motion.p
                className="font-inter leading-[24px] md:leading-[28px] text-[14px] md:text-[16px] text-[#FFFFFF] font-normal"
                variants={fadeIn("down", 0.7)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
              >
                Committing to trust, excellence, and transparency.
              </motion.p>
            </div>
          </div>
        </div>
        <motion.p
          className="text-[24px] md:text-[32px] leading-[32px] font-inter font-black text-[#FFFFFF] mt-6"
          variants={fadeIn("left", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
        >
          Our BlocBytes Story
        </motion.p>
        <motion.p
          className="text-[14px] md:text-[16px] leading-[24px] font-inter font-normal text-[#FFFFFF] mt-6"
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
        >
          BlocBytes started with one belief, the future is digital, and we’re
          here to mold it. With the rise of FinTech, Blockchain, and Web 3.0, we
          saw the need for IT services that don’t just keep up but lead in this
          era. We’re all about creating tech that empowers businesses and
          people. BlocBytes isn’t just about building tech, it’s about building
          trust and opportunities. We’re here to collaborate, innovate, and grow
          with you.
        </motion.p>
        <motion.p
          className="lg:text-[65px] text-[30px] font-semibold text-[#FFFFFF] lg:leading-[84px] uppercase mt-4"
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
        >
          Together, let’s <span className="text-[#90E0EF]">build</span> <br />
          the future
        </motion.p>
      </div>
      <div
        className="p-6 md:p-12 lg:p-22 mx-4 md:mx-20 pt-1 mt-0"
        style={{
          backgroundImage: `url(${backgroundImage2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p className="lg:text-[80px] text-[50px] font-semibold text-[#FFFFFF] lg:leading-[117px] font-inter max-w-lg">
          <motion.span
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
          >
            How We Make It Work
          </motion.span>
        </p>
      </div>
    </>
  );
};

export default Section3;
