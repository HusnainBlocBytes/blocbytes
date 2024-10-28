import React from "react";
import image from "../../Images/Images/Why_us_section2_image.png"

const Section6 = () => {
  return (
    <div>
      <div className="py-6 flex items-center">
        <span className="lg:px-16 font-inter text-[45px] font-medium text-[#03045E]">
          Why US?
        </span>
        <div className="flex-grow ">
          <hr className="h-px bg-[#03045E] border-0" />
        </div>
      </div>
      <p className="lg:px-16 font-inter text-[22px] font-normal text-[#03045E]">
        Why Choose{" "}
        <span className="bg-[#00ADD3] text-[#03045E] px-2 rounded-xl">
          Blocbytes
        </span>
      </p>
      <div className="my-6 px-4">
  <p className="text-justify font-medium font-inter text-[#03045E] leading-relaxed border border-[#90E0EF] rounded-full max-w-3xl mx-auto p-4 sm:p-6 md:p-8 lg:px-10 lg:py-12 text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px]">
    BlocBytes isn't just about tech, it's about partnership. We bring trust, innovation, and a future-focused mindset to everything we do. Whether you're a startup or an established business, we’re here to help you grow and lead in FinTech, Blockchain, and Web 3.0. Together, let’s shape the future, one byte at a time.
  </p>
</div>
<div className="">
    <p className="lg:px-16 text-[24px] leading-[32px] font-black font-inter text-[#03045E]">WHY US?</p>
</div>
<div>
    {/* 1st grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-0 mt-6 max-w-md sm:max-w-2xl lg:px-16">
  <div className="flex flex-col items-center sm:items-start border px-4">
    <p className="px-2 py-1 text-[14px] sm:text-[16px] md:text-[18px] leading-[24px] sm:leading-[28px] font-normal font-inter text-[#03045E]">
    Efficient Working Methods
    </p>
  </div>
  <div className="flex flex-col items-center sm:items-start border ">
    <p className="px-2 py-1 text-[14px] sm:text-[16px] md:text-[18px] leading-[24px] sm:leading-[28px] font-normal font-inter text-[#03045E]">
      Business Scale Approach
    </p>
  </div>
</div>
{/* 2nd grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-0 mt-6 max-w-md sm:max-w-2xl lg:px-16">
  <div className="flex flex-col items-center sm:items-start border ">
    <p className="px-2 py-1 text-[14px] sm:text-[16px] md:text-[18px] leading-[24px] sm:leading-[28px] font-normal font-inter text-[#03045E]">
    Complete Client Support
    </p>
  </div>
  <div className="flex flex-col items-center sm:items-start border ">
    <p className="px-2 py-1 text-[14px] sm:text-[16px] md:text-[18px] leading-[24px] sm:leading-[28px] font-normal font-inter text-[#03045E]">
    Partnership, innovation, growth.
    </p>
  </div>
</div>
{/* 3rd grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-0 mt-6 max-w-md sm:max-w-2xl lg:px-16">
  <div className="flex flex-col items-center sm:items-start border ">
    <p className="px-2 py-1 text-[14px] sm:text-[16px] md:text-[18px] leading-[24px] sm:leading-[28px] font-normal font-inter text-[#03045E]">
    Market Expansion Approach
    </p>
  </div>
</div>
{/* 4th grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-0 mt-6 max-w-md sm:max-w-2xl lg:px-16">
  <div className="flex flex-col items-center sm:items-start border ">
    <p className="px-2 py-1 text-[14px] sm:text-[16px] md:text-[18px] leading-[24px] sm:leading-[28px] font-normal font-inter text-[#03045E]">
      Efficient Working Methods
    </p>
  </div>
</div>
</div>
<div>
    <img className="mt-6 bg-center bg-cover bg-no-repeat mx-auto " src={image} alt="" />
</div>
    </div>
  );
};

export default Section6;
