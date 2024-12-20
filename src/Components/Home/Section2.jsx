import React from "react";
import Slider from "react-slick";
// motion
import { motion } from "framer-motion";
// Varient
import { fadeIn } from "../../variants";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const services = [
  {
    id: 1,
    title: "Mobile App Development",
    description: "Bag top-tier apps with BlocBytes, where innovation meets your money-making dreams.",
  },
  {
    id: 2,
    title: "Web Design & Development",
    description: "From pixel to perfection, BlocBytes crafts websites that stand out in every click.",
  },
  {
    id: 3,
    title: "Cryptocurrency Development",
    description: "Opening doors to crypto potential, BlocBytes fuels your growth with our development.",
  },
  {
    id: 4,
    title: "Digital Wallet Development",
    description: "Secure, swift, and future-ready, BlocBytes builds wallets that redefine FinTech ease.",
  },
  {
    id: 5,
    title: "DEX & CEX Development",
    description: "Powering your crypto journey, BlocBytes creates secure exchanges that raise investment games.",
  },
  {
    id: 6,
    title: "NFT Development",
    description: "Own the digital art future with BlocBytes, where NFT innovation meets creative expression.",
  },
  {
    id: 7,
    title: "Smart Contract Development",
    description: "BlocBytes evolves blockchain security, crafting smart contracts that redefine reliability.",
  },
];

const Section2 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,    
  autoplaySpeed: 3000,
  };
  return (
    <>
      {/* Desktop View */}
      <div className="hidden mx-auto  px-4 sm:px-6 lg:px-8">
        <motion.div className="py-6 flex items-center"
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
        >
          <span className="lg:px-16 font-inter text-[45px] font-medium text-[#03045E]">
            Services
          </span>
          <div className="flex-grow ">
            <hr className="h-px bg-[#03045E] border-0" />
          </div>
        </motion.div>
        <motion.p className="lg:px-16 font-inter text-[22px] font-normal text-[#03045E]"
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
        >
          The splendor in{" "}
          <span className="bg-[#90e0ef] text-[#03045E] px-2 text-[24px]">what we do!</span>
        </motion.p>

        {/* First 2 Grid */}
        <motion.div className="  grid grid-cols-1 md:grid-cols-2 gap-6 mt-6"
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="flex flex-row justify-center items-center">
            <div className="font-inter text-[100px] leading-[110px] font-medium text-[#03045E]">
              01
            </div>
            <div className="ml-2">
              <p className="font-inter leading-[24px] text-[22px] text-[#00ADD3] font-medium">
                Mobile App Development
              </p>
              <p className="font-inter text-[#03045E] font-normal text-[20px] mt-2 leading-[24px] max-w-sm">
                Bag top-tier apps with BlocBytes, where innovation meets your
                money-making dreams.
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-center items-center">
            <div className="font-inter text-[100px] leading-[110px] font-medium text-[#03045E]">
              02
            </div>
            <div className="ml-2">
              <p className="font-inter leading-[24px] text-[22px] text-[#00ADD3] font-medium">
                Web Design & Development
              </p>
              <p className="font-inter text-[#03045E] font-normal text-[20px] mt-2 leading-[24px] max-w-sm">
                From pixel to perfection, BlocBytes crafts websites that stand out
                in every click.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Single Grid Item */}
        <motion.div className="flex flex-row justify-center items-center mt-12"
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="font-inter text-[100px] leading-[110px] font-medium text-[#03045E]">
            03
          </div>
          <div className="ml-2">
            <p className="font-inter leading-[24px] text-[22px] text-[#00ADD3] font-medium">
              Cryptocurrency Development
            </p>
            <p className="font-inter text-[#03045E] font-normal text-[20px] mt-2 leading-[24px] max-w-sm">
              Opening doors to crypto potential, BlocBytes fuels your growth with
              our development.
            </p>
          </div>
        </motion.div>

        {/* Second 2 Grid */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6"
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="flex flex-row justify-center items-center">
            <div className="font-inter text-[100px] leading-[110px] font-medium text-[#03045E]">
              04
            </div>
            <div className="ml-2">
              <p className="font-inter leading-[24px] text-[22px] text-[#00ADD3] font-medium">
                Digital Wallet Development
              </p>
              <p className="font-inter text-[#03045E] font-normal text-[20px] mt-2 leading-[24px] max-w-sm">
                Secure, swift, and future-ready, BlocBytes builds wallets that
                redefine FinTech ease.
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-center items-center">
            <div className="font-inter text-[100px] leading-[110px] font-medium text-[#03045E]">
              05
            </div>
            <div className="ml-2">
              <p className="font-inter leading-[24px] text-[22px] text-[#00ADD3] font-medium">
                DEX & CEX Development
              </p>
              <p className="font-inter text-[#03045E] font-normal text-[20px] mt-2 leading-[24px] max-w-sm">
                Powering your crypto journey, BlocBytes creates secure exchanges
                that raise investment games.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Single Grid Item */}
        <motion.div className="flex flex-row justify-center items-center mt-12"
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="font-inter text-[100px] leading-[110px] font-medium text-[#03045E]">
            06
          </div>
          <div className="ml-2">
            <p className="font-inter leading-[24px] text-[22px] text-[#00ADD3] font-medium">
              NFT Development
            </p>
            <p className="font-inter text-[#03045E] font-normal text-[20px] mt-2 leading-[24px] max-w-sm">
              Own the digital art future with BlocBytes, where NFT innovation
              meets creative expression.
            </p>
          </div>
        </motion.div>

        {/* Third 2 Grid */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6"
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="flex flex-row justify-center items-center">
            <div className="font-inter text-[100px] leading-[110px] font-medium text-[#03045E]">
              07
            </div>
            <div className="ml-2">
              <p className="font-inter leading-[24px] text-[22px] text-[#00ADD3] font-medium">
                Smart Contract Development
              </p>
              <p className="font-inter text-[#03045E] font-normal text-[20px] mt-2 leading-[24px] max-w-sm">
                BlocBytes evolves blockchain security, crafting smart contracts
                that redefine reliability.
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-center items-center">
            <div className="font-inter text-[100px] leading-[110px] font-medium text-[#03045E]">
              08
            </div>
            <div className="ml-2">
              <p className="font-inter leading-[24px] text-[22px] text-[#00ADD3] font-medium">
                Web Design & Development
              </p>
              <p className="font-inter text-[#03045E] font-normal text-[20px] mt-2 leading-[24px] max-w-sm">
                From pixel to perfection, BlocBytes crafts websites that stand out
                in every click.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      {/* Mobile view */}
      <div className="block md:hidden mt-6">
        <motion.div className="ml-2 py-6 flex items-center"
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
        >
          <span className="lg:px-16  font-inter text-[45px] font-medium text-[#03045E]">
            Services
          </span>
          <div className="flex-grow items-center justify-center ">
            <hr className="h-px bg-[#03045E] border-0 w-[200px] ml-2 " />
          </div>
        </motion.div>
        <motion.p className="lg:px-16 ml-2 font-inter text-[22px] font-normal text-[#03045E]"
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
        >
          The splendor in{" "}
          <span className="bg-[#90e0ef] text-[#03045E] px-2 text-[24px]">what we do!</span>
        </motion.p>
        <Slider {...settings}>
          {services.map((service) => (
            <div key={service.id} className="flex flex-col items-left p-4">
              <div className="font-inter text-[100px] leading-[110px] font-medium text-[#03045E]">
                {service.id < 10 ? `0${service.id}` : service.id}
              </div>
              <p className="font-inter leading-[24px] text-[22px] text-[#00ADD3] font-medium">
                {service.title}
              </p>
              <p className="font-inter text-[#03045E] font-normal text-[20px] mt-2 leading-[24px] max-w-sm text-left">
                {service.description}
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Section2;
