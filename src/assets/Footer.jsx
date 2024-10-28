import React from "react";
import getintouch from "../Images/Icons/footer_icon.png"

const Footer = () => {
  return (
    <div>
      {/* <!-- Footer container --> */}
      <div className="bg-[#03045E] px-12 ">
  {/* Main container div: holds the entire content of the footer */}
  <div className="mx-6 py-10 text-center md:text-left">
    <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
      {/* TW Elements section */}
      <div>
        <p className="text-[34px] md:text-[34px] text-[#FFFFFF] font-light font-inter leading-[43px] ">
          Ready to revolutionize your business communications with BlocBytes.
        </p>
        <button className="text-white font-bold font-inter mt-6 text-[12px] leading-[27px] bg-[#00ADD3] py-3 px-6 rounded-full">GET IN TOUCH</button>
      </div>
      {/* Contact section */}
      <div className="">
        <h6 className="mb-4 flex justify-center font-bold text-[#00ADD3] uppercase md:justify-start">
          Address
        </h6>
        <p className="mb-4 flex flex-col text-base md:text-[17px] text-[#00ADD3] font-semibold font-inter leading-[27px] items-start">
          <span className="flex items-center justify-center md:justify-start">
            <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
              </svg>
            </span>
            <span className="text-[#90E0EF]">HEAD OFFICE</span>
          </span>
          <span className="text-[#FFFFFF] ml-6 ">
            12 S Atlantic Ave, Aberdeen Township, 07747
          </span>
        </p>
        <p className="mb-4 flex items-center uppercase text-[#FFFFFF] justify-center md:justify-start  md:text-[17px]">
          <img className="me-3" src={getintouch} alt="" />
          Get Directions
        </p>
        <p className="mb-4 flex items-center text-[#00ADD3] justify-center md:justify-start text-base md:text-[17px]">
          <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          <span className="text-[#00ADD3] text-[14px] leading-[13px] font-bold mr-2">Phone</span>
         <p className="text-[#FFFFFF]">+18483458762</p>
        </p>
        <p className="flex items-center justify-center md:justify-start text-base md:text-[17px]">
        <span class="me-3 [&>svg]:h-5 [&>svg]:w-5 text-[#00ADD3]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor">
              <path
                d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
              <path
                d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
            </svg>
          </span>
          <a className="text-[#FFFFFF]" href="mailto:info@blocbytes.com">info@blocbytes.com</a>
        </p>
      </div>
      {/* Products section */}
      <div>
        <h6 className="mb-4 flex justify-center font-bold text-[#00ADD3] uppercase md:justify-start">
          Products
        </h6>
        <ul className="list-inside text-base md:text-[17px] font-inter text-[#FFFFFF] font-normal leading-[30px]">
          <li>About Us</li>
          <li>Careers</li>
          <li>Partners</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
    </div>
    <div className="flex flex-col mt-10">
      <div className="border-t border-[#00ADD3]"></div>
      <div className="py-5 text-[#90E0EF] text-center md:text-[17px]">
        © 2024 BlocBytes. All Rights Reserved.
      </div>
    </div>
  </div>
</div>

    </div>
  );
};

export default Footer;