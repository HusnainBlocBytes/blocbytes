import React from 'react';
import banner from "../../Images/Images/Home_banner.png";
// import './Section5.css'; 
import { motion } from "framer-motion";
// Varient
import { fadeIn } from "../../variants";

const Section5 = () => {
  return (
    <motion.div className="banner-container"
    // variants={fadeIn("right", 0.4)}
    //   initial="hidden"
    //   whileInView={"show"}
    //   viewport={{ once: false, amount: 0.3 }}
    >
        <img src={banner} alt="Home Banner" className="responsive-image" />
    </motion.div>
  );
};

export default Section5;
