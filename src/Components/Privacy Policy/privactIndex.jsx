import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const PrivacyAndPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
}, []); 
  return (
    <>
      {/* Desktop View */}
      <div className="hidden sm:block 2xl:max-w-7xl xl:max-w-5xl lg:max-w-4xl max-w-3xl  mx-auto"
      style={{ fontFamily: "Aeonik Black Light" }}
      >
        <h1 className=" text-[32px] text-start 2xl:text-[32px] xl:text-[32px] lg:text-[32px] font-[695] mt-4">
        Privacy Policy BlocBytes
        </h1>
        <p className=" text-justify font-[400] text-[16px] mt-4">
        Thank you for visiting the BlocBytes website. Your privacy is important to us, and we
are committed to protecting and safeguarding your personal information. This
Privacy Policy outlines how BlocBytes collects, uses, discloses, and manages your
information when you visit our website or interact with our services.
        </p>
        <h1 className="font-[695] text-[20px]  text-start mt-4">
          Information We Collect
        </h1>
        <p className="  text-justify font-[400] text-[16px]  mt-4">
          1. Personal Information
        </p>
        <p className="  text-justify font-[400] text-[16px] mt-4 ">
        When you visit our website, we may collect personal information, such as your
name, email address, and phone number, if voluntarily provided by you
through our contact forms or other communication channels.
        </p>
        <p className="  text-justify font-[400] text-[16px] mt-4">
          2. Usage Information
        </p>
        <p className="  text-justify font-[400] text-[16px] mt-4 ">
        We may collect information about your interactions with our website,
including the pages you visit, the links you click, and the duration of your visit.
This information helps us improve our website and services.
        </p>
        <p className=" ftext-justify font-[400] text-[16px] mt-4">
          3. Cookies
        </p>
        <p className="  text-justify font-[400] text-[16px] mt-4">
        We use cookies to enhance your browsing experience. You can set your
browser to refuse cookies or alert you when cookies are being sent. However,
some features of the website may not function properly without cookies.
        </p>
        <h1 className="font-[695] text-[20px] text-start mt-4">
          How We Use Your Information
        </h1>
        <p className=" text-justify font-[400] text-[16px] mt-4">
          1. Providing Services:{" "}
          <span className="font-[400] text-[16px]">
          We use your personal information to provide the
services you request, such as responding to your inquiries and providing
information about our products and services.
          </span>
        </p>
        <p className=" text-justify font-[400] text-[16px] mt-4">
         2. Analytics:{" "}
          <span className="font-[400] text-[16px]">
          We analyze user behavior on our website to improve its content,
functionality, and user experience. This helps us make our user experience
smoother.
          </span>
        </p>
        <p className="text-justify font-[400] text-[16px] mt-4">
          3. Marketing:{" "}
          <span className="font-[400] text-[16px]">
          With your consent, we may send you marketing communications
about our products, services, and events. You can turn this off by following the
instructions given at the time.
          </span>
        </p>
        <h1 className=" text-start font-[695] text-[20px] mt-4">
          Sharing Your Information
        </h1>
        <p className="text-justify font-[400] text-[16px] mt-4">
          1. Third-Party Service Providers:{" "}
          <span className="font-[400] text-[16px]">
          We may share your information with third-
party service providers who assist us in operating our website and conducting
our business.
          </span>
        </p>
        <p className=" text-justify font-[400] text-[16px] mt-4">
          2. Legal Compliance:{" "}
          <span className="font-[400] text-[16px]">
          We may disclose your information as required by law or
          to protect our rights, property, or safety.
          </span>
        </p>
        <h1 className=" text-start font-[695] text-[20px] mt-4">
          Your Choices
        </h1>
        <p className=" text-justify font-[400] text-[16px] mt-4">
          1. Opt-Out:{" "}
          <span className="font-[400] text-[16px]">
          You can opt out of receiving marketing communications from us by
          following the instructions provided in the communications.
          </span>
        </p>
        <p className="text-justify font-[400] text-[16px] mt-4">
          2. Access And Update:{" "}
          <span className="font-[400] text-[16px]">
          ou may request access to or update your personal
          information by contacting us at <Link className='text-[#D80A8B] hover:text-[#D80A8B]' to="mailto:info@blocbytes.com">info@blocbytes.com</Link>
          </span>
        </p>
        <h1 className="text-start font-[695] text-[20px] mt-4">
          Security Measures
        </h1>
        <p className=" text-justify font-[400] text-[16px] mt-4">
        We implement reasonable security measures to protect your personal information
from unauthorized access, disclosure, alteration, and destruction. For more
information kindly give our Information Security Policy a read as well.
        </p>
        <h1 className=" text-start font-[695] text-[20px] mt-4">
          Changes To This Privacy Policy
        </h1>
        <p className=" text-justify font-[400] text-[16px] mt-4">
        We may update this Privacy Policy to reflect changes in our practices or for other
operational, legal, or regulatory reasons. We encourage you to review this Privacy
Policy periodically. BlocBytes reserves the right to make these changes without any
prior notification.
        </p>
        <h1 className=" text-start font-[695] text-[20px] mt-4">
        Contact Us
        </h1>
        <p className=" text-justify font-[400] text-[16px] mt-4 mb-4">
        If you have any questions or concerns about this Privacy Policy or our data practices,
please contact us at  <Link className='text-[#D80A8B] hover:text-[#D80A8B]' to="mailto:info@blocbytes.com">info@blocbytes.com</Link> <p><Link className='text-[#D80A8B] hover:text-[#D80A8B]' to="tel:+18483458762">or +18483458762</Link></p> 
By using our website, you agree to the terms of this Privacy Policy. If you do not agree
with these terms, please do not use our website.
        </p>
      </div>

      {/* Mobile View */}
      <div className="block sm:hidden container mx-auto"
       style={{ fontFamily: "Aeonik Black Light" }}
      >
        <h1 className="font-[695] text-[32px]  text-center mt-4 mb-4">
        Privacy Policy BlocBytes
        </h1>
        <p className="font-[400] text-[16px] text-justify mt-2 mr-2 ml-2">
        Thank you for visiting the BlocBytes website. Your privacy is important to us, and we
are committed to protecting and safeguarding your personal information. This
Privacy Policy outlines how BlocBytes collects, uses, discloses, and manages your
information when you visit our website or interact with our services.
        </p>
        <h1 className="font-[695] text-[20px] text-start mt-6 ml-2">
          Information We Collect
        </h1>
        <p className="font-[400] text-[16px] text-justify mt-3 ml-2">
          1. Personal Information
        </p>
        <p className="font-[400] text-[16px] text-justify mt-3 ml-2 mr-2">
        When you visit our website, we may collect personal information, such as your
name, email address, and phone number, if voluntarily provided by you
through our contact forms or other communication channels.
        </p>
        <p className="font-[400] text-[16px] text-justify mt-3 ml-2 ">
          2. Usage Information
        </p>
        <p className="font-[400] text-[16px] text-justify mt-3 ml-2 mr-2">
        We may collect information about your interactions with our website,
including the pages you visit, the links you click, and the duration of your visit.
This information helps us improve our website and services.
        </p>
        <p className="font-[400] text-[16px] text-justify mt-3 ml-2">
          3. Cookies
        </p>
        <p className="font-[400] text-[16px] text-justify mt-3 ml-2 mr-2">
        We use cookies to enhance your browsing experience. You can set your
browser to refuse cookies or alert you when cookies are being sent. However,
some features of the website may not function properly without cookies.
        </p>
        <h1 className="font-[695] text-[20px] text-start mt-3 ml-2">
          How We Use Your Information
        </h1>
        <p className="font-[400] text-[16px] text-justify mt-3 ml-2 mr-2">
          1. Providing Services:{" "}
          <span className="font-[400] text-[16px]">
          We use your personal information to provide the
services you request, such as responding to your inquiries and providing
information about our products and services.
          </span>
        </p>
        <p className="font-[400] text-[16px] text-justify mt-3 ml-2 mr-2">
          2. Analytics:{" "}
          <span className="font-[400] text-[16px]">
          We analyze user behavior on our website to improve its content,
functionality, and user experience. This helps us make our user experience
smoother.
          </span>
        </p>
        <p className="font-[400] text-[16px] text-justify mt-3 ml-2 mr-2">
          3. Marketing:{" "}
          <span className="font-[400] text-[16px]">
          With your consent, we may send you marketing communications
about our products, services, and events. You can turn this off by following the
instructions given at the time.
          </span>
        </p>
        <h1 className="font-[695] text-[20px] text-start mt-3 ml-2">
          Sharing Your Information
        </h1>
        <p className="font-[400] text-[16px] text-justify mt-3 ml-2 mr-2">
          1. Third-Party Service Providers:{" "}
          <span className="font-[400] text-[16px]">
          We may share your information with third-
party service providers who assist us in operating our website and conducting
our business.
          </span>
        </p>
        <p className="font-[400] text-[16px] text-justify mt-3 ml-2 mr-2">
          2. Legal Compliance:{" "}
          <span className="font-[400] text-[16px]">
          We may disclose your information as required by law or
          to protect our rights, property, or safety.
          </span>
        </p>
        <h1 className="font-[695] text-[20px] text-start mt-3 ml-2">
          Your Choices
        </h1>
        <p className="font-[400] text-[16px] text-justify mt-3 ml-2 mr-2">
          1. Opt-Out:{" "}
          <span className="font-[400] text-[16px]">
          You can opt out of receiving marketing communications from us by
          following the instructions provided in the communications.
          </span>
        </p>
        <p className="font-[400] text-[16px] text-justify mt-3 ml-2 mr-2">
          2. Access And Update:{" "}
          <span className="font-[400] text-[16px]">
          You may request access to or update your personal
          information by contacting us at <Link className='text-[#D80A8B] hover:text-[#D80A8B]' to="mailto:info@blocbytes.com">info@blocbytes.com</Link>
          </span>
        </p>
        <h1 className="font-[695] text-[20px] text-start mt-3 ml-2">
          Security Measures
        </h1>
        <p className="font-[400] text-[16px] mt-3 ml-2 mr-2">
        We implement reasonable security measures to protect your personal information
from unauthorized access, disclosure, alteration, and destruction. For more
information kindly give our Information Security Policy a read as well.
        </p>
        <h1 className="font-[695] text-[20px] text-start mt-3">
          Changes To This Privacy Policy
        </h1>
        <p className="font-[400] text-[16px] text-justify mt-3 ml-2 mr-2">
        We may update this Privacy Policy to reflect changes in our practices or for other
operational, legal, or regulatory reasons. We encourage you to review this Privacy
Policy periodically. BlocBytes reserves the right to make these changes without any
prior notification.
        </p>
        <h1 className="font-[695] text-[20px] text-start mt-3">
        Contact Us
        </h1>
        <p className="font-[400] text-[16px] text-justify mt-3 ml-2 mr-2 mb-4">
        If you have any questions or concerns about this Privacy Policy or our data practices,
please contact us at <Link className='text-[#D80A8B] hover:text-[#D80A8B]' to="mailto:info@blocbytes.com">info@blocbytes.com</Link> <p><Link className='text-[#D80A8B] hover:text-[#D80A8B]' to="tel:+18483458762">or +18483458762</Link></p> or +18483458762
By using our website, you agree to the terms of this Privacy Policy. If you do not agree
with these terms, please do not use our website
        </p>
      </div>
    </>
  )
}

export default PrivacyAndPolicy