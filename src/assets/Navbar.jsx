import React, { useState } from "react";
import { Dialog, DialogPanel } from '@headlessui/react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import defaultlogo from "../Images/Logos/LOGO.png";
// motion
import { motion } from "framer-motion";
// Varient
import { fadeIn } from "../variants";


const navigation = [
  { name: 'Home', href: '#' },
  { name: 'Services', href: '#' },
  { name: 'About us', href: '#' },
  { name: 'Company Principals', href: '#' },
  { name: 'Why Us?', href: '#' },
  { name: 'Industries', href: '#' },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleClose = () => setMobileMenuOpen(false);
  const handleOpen = () => setMobileMenuOpen(true);

  return (
    <>
    {/* fixed top-0 */}
      <motion.nav className=" border-solid border-gray-200  mx-auto px-4 sm:px-6 lg:px-8 py-3 bg-[#03045E] z-50"
      
      >
        <div className="mx-aut">
          <div className=" flex flex-col lg:flex-row">
            <motion.div className="flex justify-between items-center  lg:w-auto"
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            >
              <Link to="/" className="flex items-center ml-6 ">
                <img src={defaultlogo} alt="Logo" />
              </Link>
              <div className="lg:hidden">
                <button
                  onClick={handleOpen}
                  className="text-gray-200 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                >
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </motion.div>

            <motion.div className="hidden lg:flex lg:pl-11 "
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            >
              <ul className="flex items-center flex-col mt-4  lg:mt-0 lg:ml-auto lg:flex-row gap-4">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="flex items-center justify-between text-[#FFFFFF] hover:text-[#90E0EF] text-[15px] lg:text-base font-medium transition-all duration-500 mb-2 lg:mr-6 md:mb-0 md:mr-3"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Mobile Menu Dialog */}
        <Dialog open={mobileMenuOpen} onClose={handleClose} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50  overflow-y-auto bg-[#03045E] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              {/* <a href="/" className="-m-1.5 p-1.5">
                <img alt="Logo" src={defaultlogo} className="h-8 w-auto" />
              </a> */}
              <button
                type="button"
                onClick={handleClose}
                className="-m-2.5 rounded-md p-2.5 text-white text-right"
              >
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[#90E0EF]"
                      onClick={handleClose}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </motion.nav>
    </>
  );
};

export default Navbar;
