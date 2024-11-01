import React, { useEffect } from "react";
import { Link } from 'react-router-dom'

const Cookies = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <>
                {/* Desktop View */}
                <div className="hidden sm:block 2xl:max-w-7xl xl:max-w-5xl lg:max-w-4xl max-w-3xl mx-auto p-4 sm:p-6 md:p-8"
                    style={{ fontFamily: "Aeonik Black Light" }}
                >
                    <h1 className="text-[32px] text-start 2xl:text-[32px] xl:text-[32px] lg:text-[32px] font-[695] ">
                        Cookie Policy BlocBytes
                    </h1>
                    <p className=" text-justify font-[400] text-[16px] 2xl:mt-[2rem]  xl:mt-[2rem] lg:mt-[2rem] md:mt-[2rem] sm:mt-[2rem]  ">
                        Welcome to the website of BlocBytes, also herein mentioned as "we," "us," or "our".
                        This Cookie Policy is designed to inform you about our use of cookies and similar
                        technologies on our website. By using our website, you consent to the use of cookies
                        in accordance with this policy. If you do not agree to our use of cookies, please
                        disable them by following the instructions provided at the time.
                    </p>
                    <h1 className="font-[695] text-[20px] text-start mt-4">
                        What are Cookies?
                    </h1>
                    <p className="font-[400] text-[16px] text-justify mt-4 ">
                        Cookies are small text files that are placed on your device when you visit a website.
                        They are widely used to make websites work more efficiently and to provide
                        information to the owners of the site.
                    </p>
                    <h1 className="font-[695] text-[20px] text-start mt-4 ">
                        How We Use Cookies
                    </h1>
                    <p className="font-[400] text-[16px] text-justify  mt-4">
                        1. Essential Cookies:{" "}
                        <span className="font-[400] text-[16px]">
                            These cookies are necessary for the proper functioning of our
                            website. They enable you to navigate our site and use its
                            features.
                        </span>
                    </p>
                    <p className="font-[400] text-[16px] text-justify  mt-4">
                        2. Analytics Cookies:{" "}
                        <span className="font-[400] text-[16px]">
                            We use analytics cookies to collect information about how visitors
                            interact with our website. This helps us improve the performance
                            of our site and understand which pages are most and least popular.
                        </span>
                    </p>
                    <p className="font-[400] text-[16px] text-justify  mt-4">
                        3. Functionality Cookies:{" "}
                        <span className="font-[400] text-[16px]">
                            These cookies allow our website to remember choices you make (such
                            as your language preference) and provide enhanced features.
                        </span>
                    </p>
                    <p className="font-[400] text-[16px] text-justify  mt-4">
                        4. Marketing Cookies:{" "}
                        <span className="font-[400] text-[16px]">
                            We may use marketing cookies to deliver relevant advertisements to
                            you on other websites based on your interests.
                        </span>
                    </p>
                    <h1 className="font-[695] text-[20px] text-start mt-4">
                        Your Consent
                    </h1>
                    <p className="font-[400] text-[16px]text-justify mt-4">
                        By using our website, you consent to the placement of cookies on
                        your device. You can manage your cookie preferences by adjusting
                        your browser settings. Please note that disabling cookies may affect
                        the functionality of our website.
                    </p>
                    <h1 className="font-[695] text-[20px] text-start  mt-4">
                        Third-Party Cookies
                    </h1>
                    <p className="font-[400] text-[16px]text-justify mt-4">
                        We may also use third-party cookies to analyze traffic and improve our services.
                        These cookies are placed by third-party analytics services and may track your
                        browsing behavior across different websites.
                    </p>
                    <h1 className="font-[695] text-[20px] text-start mt-4">
                        Contact Information
                    </h1>
                    <p className="font-[400] text-[14px]text-justify mt-4">
                        Email: <a href="mailto: info@blocbytes.com">info@blocbytes.com</a>
                    </p>
                    <p className="font-[400] text-[14px]text-justify mt-4">
                        Phone: +18484458762
                    </p>
                    <h1 className="font-[695] text-[20px] text-start mt-4">
                        Changes to this Policy
                    </h1>
                    <p className="font-[400] text-[16px]text-justify mt-4">
                        We may update this Cookie Policy from time to time. Any changes will be posted on
                        this page, and the date of the last update will be indicated. BlocBytes reserves the
                        right to make changes to its policies without any prior notice, so keep updated with
                        the policies here.<br /><br />Thank you for visiting the BlocBytes website.
                    </p>
                </div>

                {/* Mobile View */}
                <div className="block sm:hidden container mx-auto p-2"
                    style={{ fontFamily: "Aeonik Black Light" }}
                >
                    <h1 className="font-[695] text-[32px] text-center mt-4">
                        Cookie Policy BlocBytes
                    </h1>
                    <p className="font-[400] text-[16px] text-justify mt-2 ml-2 mr-2">
                        Welcome to the website of BlocBytes, also herein mentioned as "we," "us," or "our".
                        This Cookie Policy is designed to inform you about our use of cookies and similar
                        technologies on our website. By using our website, you consent to the use of cookies
                        in accordance with this policy. If you do not agree to our use of cookies, please
                        disable them by following the instructions provided at the time.
                    </p>
                    <h1 className="font-[695] text-[20px] text-start mt-8 ml-2">
                        What are Cookies?
                    </h1>
                    <p className="font-[400] text-[16px] text-justify mt-2 ml-2 mr-2">
                        Cookies are small text files that are placed on your device when you visit a website.
                        They are widely used to make websites work more efficiently and to provide
                        information to the owners of the site.
                    </p>
                    <h1 className="font-[695] text-[20px] text-start mt-8 ml-2">
                        How We Use Cookies
                    </h1>
                    <p className="font-[400] text-[16px]  mt-2 ml-2 mr-2">
                        • <span className="">Essential Cookies:</span> These cookies are necessary for the proper functioning of
                        our website. They enable you to navigate our site and use its features.
                    </p>
                    <p className="font-[400] text-[16px] mt-2 ml-2 mr-2">
                        • <span className="">Analytics Cookies:</span> We use analytics cookies to collect information about how
                        visitors interact with our website. This helps us improve the performance of
                        our site and understand which pages are most and least popular.
                    </p>
                    <p className="font-[400] text-[16px] mt-2 ml-2 mr-2">
                        • <span className="">Functionality Cookies:</span>These cookies allow our website to remember
                        choices you make (such as your language preference) and provide enhanced
                        features.
                    </p>
                    <p className="font-[400] text-[16px]  mt-2 ml-2 mr-2">
                        • <span className="">Marketing Cookies:</span> We may use marketing cookies to deliver relevant
                        advertisements to you on other websites based on your interests.
                    </p>
                    <h1 className="font-[695] text-[20px] text-start mt-8 ml-2">Your Consent</h1>
                    <p className="font-[400] text-[16px]  mt-2 ml-2 mr-2">
                        By using our website, you consent to the placement of cookies on your device. You
                        can manage your cookie preferences by adjusting your browser settings. Please note
                        that disabling cookies may affect the functionality of our website.
                    </p>
                    <h1 className="font-[695] text-[20px] text-start mt-8 ml-2">Third-Party Cookies</h1>
                    <p className="font-[400] text-[16px]  mt-2 ml-2 mr-2">
                        We may also use third-party cookies to analyze traffic and improve our services.
                        These cookies are placed by third-party analytics services and may track your
                        browsing behavior across different websites.
                    </p>
                    <h1 className="font-[695] text-[20px] text-start mt-8 ml-2">Contact Information</h1>
                    <p className="font-[400] text-[16px]  mt-2 ml-2 mr-2">If you have any questions about our Cookie Policy, please contact us:</p>
                    <p className="font-[400] text-[16px]  mt-2 ml-2 mr-2">
                        Email: <Link className='text-[#D80A8B] hover:text-[#D80A8B]' to="mailto:info@blocbytes.com">info@blocbytes.com</Link>
                    </p>
                    <p className="font-[400] text-[16px]  mt-2 ml-2 mr-2"><p><Link className='text-[#D80A8B] hover:text-[#D80A8B]' to="tel:+18483458762">or +18483458762</Link></p> or +18483458762</p>
                    <h1 className="font-[695] text-[20px] text-start mt-8 ml-2">Changes to this Policy</h1>
                    <p className="font-[400] text-[16px]  mt-2 ml-2 mr-2">
                        We may update this Cookie Policy from time to time. Any changes will be posted on
                        this page, and the date of the last update will be indicated. BlocBytes reserves the
                        right to make changes to its policies without any prior notice, so keep updated with
                        the policies here.<br /><br />
                        Thank you for visiting the BlocBytes website.
                    </p>
                </div>
            </>
        </div>
    );
};

export default Cookies;