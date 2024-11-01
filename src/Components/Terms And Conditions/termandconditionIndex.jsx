import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
}, []); 
  return (
    <>
      {/* Desktop View */}
      <div className="hidden sm:block 2xl:max-w-7xl xl:max-w-5xl lg:max-w-4xl max-w-3xl  mx-auto p-4 sm:p-6 md:p-8"
       style={{ fontFamily: "Aeonik Black Light" }}
      >
        <h1 className="text-[32px] text-start 2xl:text-[32px] xl:text-[32px] lg:text-[32px] font-[695] ">
        Terms And Conditions BlocBytes
        </h1>
        <p className=" text-justify font-[400] text-[16px] mt-4 ">
        Welcome to the BlocBytes website (the "Website"). Please read these Terms and
Conditions carefully before using the Website. By accessing or using the Website,
you agree to be bound by these Terms and Conditions. If you do not agree with any
part of these Terms and Conditions, please do not use the Website.
        </p>
        <h1 className="font-[695] text-[20px] text-start  mt-4">
          Introduction
        </h1>
        <p className="font-[400] text-[16px] text-justify mt-4">
        This Website is owned and operated by BlocBytes.
        </p>
        <p className="font-[695] text-[20px] text-justify mt-4">
          • Contact Information
        </p>
        <p className="font-[400] text-[16px] text-justify mt-4">
          Registered
          Name:{" "}
          <span className="font-normal text-lg">
          BlocBytes
          </span>
        </p>
        <p className=" font-[400] text-[16px] text-justify mt-4">
          Official
          Email:{" "}
          <span className="  font-normal text-lg mt-4 2xl:ml-[0rem] xl:ml-[0rem]">
            <Link className="text-[#D80A8B] hover:text-[#D80A8B]" to="mailto:info@blocbytes.com">info@blocbytes.com</Link><br/>
          </span>
        </p>
        <p className="font-[400] text-[16px] text-justify mt-4 ">
          Official
          Number:{" "}
          <span className="font-normal text-lg mt-4 2xl:ml-[0rem] xl:ml-[0rem]">
            {" "}
            <a className="text-[#D80A8B] hover:text-[#D80A8B]" href="tel:+18483458762">+18483458762</a>
          </span>
        </p>
        <p className="font-[400] text-[16px] text-justify mt-4 ">
          WhatsApp
          Number:{" "}
          <span className="font-normal text-lg mt-4 2xl:ml-[0rem] xl:ml-[0rem]">
            {" "}
            <a className="text-[#D80A8B] hover:text-[#D80A8B]" href="https://wa.me/+18483458762">+18483458762</a>
          </span>
        </p>
        <p className="font-[400] text-[16px] text-justify mt-4">
          Registered
          State:{" "}
          <span className="font-normal text-lg text-[#D80A8B] hover:text-[#D80A8B]">United States of America,  12 S Atlantic Ave, Aberdeen
          Township, 07747</span>
        </p>
        <h1 className="font-[695] text-[20px] text-start mt-4">
          Use of the Website
        </h1>
        <p className="text-lg text-justify mt-4 2xl:text-lg xl:text-lg lg:text-lg md:text-lg sm:text-lg   ">
          • You agree to use the Website in accordance with all applicable laws and regulations
          of your state of residence.
        </p>
        <h1 className="font-[695] text-[20px] text-start  mt-4">
          Intellectual Property
        </h1>
        <p className="text-lg text-justify mt-4 2xl:text-lg xl:text-lg lg:text-lg md:text-lg sm:text-lg ">
        The   content   on   this   Website,   including   but   not   limited   to   text,   graphics,   logos,
images, audio clips, digital downloads, and software, is the property of BlocBytes
and is protected by copyright laws.
        </p>
        <h1 className="font-[695] text-[20px] text-start   mt-4">
          User Account
        </h1>
        <p className="text-lg text-justify mt-4 2xl:text-lg xl:text-lg lg:text-lg md:text-lg sm:text-lg ">
        If you create an account on this Website, you are responsible for maintaining the
        confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account. Given that it is not a present option as of
        now, when such a portal is created this policy is applied.
        </p>
        <h1 className="font-[695] text-[20px] text-start   mt-4">
        Privacy Policy
        </h1>
        <p className="text-lg text-justify mt-4 2xl:text-lg xl:text-lg lg:text-lg md:text-lg sm:text-lg  ">
        Your use of the Website is also governed by our Privacy Policy, which can be found on
our website. For a detailed account on the Privacy Policy, kindly give it a read.
        </p>
        <h1 className="font-[695] text-[20px] text-start  mt-4">
        Limitation of Liability
        </h1>
        <p className="text-lg text-justify mt-4 2xl:text-lg xl:text-lg lg:text-lg md:text-lg sm:text-lg ">
        BlocBytes   shall   not   be   liable   for   any   direct,   indirect,   incidental,   special,   or
consequential   damages   that   result   from   the   use   of,   or   the   inability   to   use,   the
Website.
        </p>
        <h1 className="font-[695] text-[20px] text-start  mt-4">
        Third-Party Links
        </h1>
        <p className="text-lg text-justify mt-4 2xl:text-lg xl:text-lg lg:text-lg md:text-lg sm:text-lg ">
        The Website may contain links to third-party websites. BlocBytes is not responsible
for the content, accuracy, or opinions expressed on such websites, and the inclusion
of any link does not imply endorsement by BlocBytes.
        </p>
        <h1 className="font-[695] text-[20px] text-start mt-4   ">
          Modification of Terms
        </h1>
        <p className="text-lg text-justify mt-4 2xl:text-lg xl:text-lg lg:text-lg md:text-lg sm:text-lg">
        BlocBytes reserves the right to modify these Terms and Conditions at any time.
Changes will be effective immediately upon posting on the Website. Your continued
use of the Website constitutes acceptance of the modified Terms. BlocBytes also
reserves the right to make these changes without any prior notification, so kindly
keep updated with these policies.
        </p>
        <h1 className="font-[695] text-[20px] text-start mt-4   ">
          Governing Law
        </h1>
        <p className="text-lg text-justify mt-3 2xl:text-lg xl:text-lg lg:text-lg md:text-lg sm:text-lg ">
        These Terms and Conditions are governed by and construed in accordance with the
laws of the United States of America. Any disputes arising under or in connection
with these Terms shall be subject to the exclusive jurisdiction of the courts of USA.
        </p>
        <h1 className="font-[695] text-[20px] text-start mt-4  ">
        Contact Information
        </h1>
        <p className="text-lg text-justify mt-4 2xl:text-lg xl:text-lg lg:text-lg md:text-lg sm:text-lg ">
        For any questions or concerns regarding these Terms and Conditions, please contact
us at <Link className="text-[#D80A8B] hover:text-[#D80A8B]" to="mailto:info@blocbytes.com">info@blocbytes.com</Link><br/>
By using this Website, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
        </p>
      </div>

      {/* Mobile View */}
      <div className="block sm:hidden container mx-auto p-2 "
       style={{ fontFamily: "Aeonik Black Light" }}
      >
        <h1 className="font-[695] text-[32px] text-center mt-[7rem]">Terms And Conditions Digital Code</h1>
        <p className="font-[400] text-[16px] text-justify mt-2">
          Welcome to the Digital Code website (the &quot;Website&quot;). Please read these Terms and Conditions carefully before using the Website. By accessing or using the Website, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these Terms and Conditions, please do not use the Website.
        </p>
        <h1 className="font-[695] text-[20px] text-start mt-8">Introduction</h1>
        <p className="font-[400] text-[16px] text-justify mt-2">
          This Website is owned and operated by Digital Code SMC (Pvt.) Ltd. (&quot;Digital Code&quot;).
        </p>
        <p className="font-[695] text-[20px] text-justify mt-2">• Contact Information</p>
        <p className="font-[400] text-[16px]  text-justify mt-2">
          Registered Name: <span className="font-[400] text-[16px]">Digital Code SMC (Pvt.) Ltd.</span>
        </p>
        <p className="font-[400] text-[16px] text-justify mt-2">
          Official Email: <span className="font-[400] text-[16px]">
            <a className="text-[#D80A8B] hover:text-[#D80A8B]" href="mailto:info@digitalcode.pk">info@digitalcode.pk</a>
          </span>
        </p>
        <p className="font-[400] text-[16px] text-justify mt-2">
          Official Number: <span className="font-[400] text-[16px]">
            <a className="text-[#D80A8B] hover:text-[#D80A8B]" href="tel:+92 51 8990491">+92 51 8990491</a>
          </span>
        </p>
        <p className="font-[400] text-[16px] text-justify mt-2">
          Registered State: <span className="font-[400] text-[16px] text-[#D80A8B] hover:text-[#D80A8B]">Islamic Republic of Pakistan (“Pakistan”)</span>
        </p>
        <h1 className="font-[695] text-[20px] text-start mt-8">Use of the Website</h1>
        <p className="font-[400] text-[16px] text-justify mt-2">
          • You must be legal/of age in your country of residence, to use this website. And you comply to use this website as per the laws of your country of residence.
        </p>
        <p className="font-[400] text-[16px] text-justify mt-2">• You agree to use the Website in accordance with all applicable laws and regulations.</p>
        <h1 className="font-[695] text-[20px] text-start mt-8">Intellectual Property</h1>
        <p className="font-[400] text-[16px] text-justify mt-2">
          The content on this Website, including but not limited to text, graphics, logos, images, audio clips, digital downloads, and software, is the property of Digital Code and is protected by copyright laws.
        </p>
        <h1 className="font-[695] text-[20px] text-start mt-8">User Account</h1>
        <p className="font-[400] text-[16px] text-justify mt-2">
          If you create an account on this Website, if such an option is made available to you, you are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account. Given that it is not a present option for now, when such a portal option is created this policy is applied to you.
        </p>
        <h1 className="font-[695] text-[20px] text-start mt-8">Privacy Policy</h1>
        <p className="font-[400] text-[16px] text-justify mt-2">
          Your use of the Website is also governed by our Privacy Policy, which can be found on our website. For a detailed account on the Privacy Policy, kindly give it a read.
        </p>
        <h1 className="font-[695] text-[20px] text-start mt-8">Limitation of Liability</h1>
        <p className="font-[400] text-[16px] text-justify mt-2">
          Digital Code shall not be liable for any direct, indirect, incidental, special, or consequential damages that result from the use of, or the inability to use, the Website.
        </p>
        <h1 className="font-[695] text-[20px] text-start mt-8">Third-Party Links</h1>
        <p className="font-[400] text-[16px] text-justify mt-2">
          The Website may contain links to third-party websites. Digital Code is not responsible for the content, accuracy, or opinions expressed on such websites, and the inclusion of any link does not imply endorsement by Digital Code.
        </p>
        <h1 className="font-[695] text-[20px] text-start mt-8">Modification of Terms</h1>
        <p className="font-[400] text-[16px] text-justify mt-2">
          Digital Code reserves the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting on the Website. Your continued use of the Website constitutes acceptance of the modified Terms. Digital Code also reserves the right to make these changes without any prior notification, so kindly keep updated with these policies.
        </p>
        <h1 className="font-[695] text-[20px] text-start mt-8">Governing Law</h1>
        <p className="font-[400] text-[16px] text-justify mt-2">
          These Terms and Conditions are governed by and construed in accordance with the laws of Pakistan. Any disputes arising under or in connection with these Terms And Conditions shall be subject to the exclusive jurisdiction of the courts of Pakistan.
        </p>
      </div>
    </>
  );
};

export default TermsAndConditions;