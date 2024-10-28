import React from "react";

const Section2 = () => {
  return (
    <div className="mx-auto  px-4 sm:px-6 lg:px-8">
      <div className="py-6 flex items-center">
        <span className="lg:px-16 font-inter text-[45px] font-medium text-[#03045E]">
          Services
        </span>
        <div className="flex-grow ">
          <hr className="h-px bg-[#03045E] border-0" />
        </div>
      </div>
      <p className="lg:px-16 font-inter text-[22px] font-normal text-[#03045E]">
        The splendor in{" "}
        <span className="bg-[#00ADD3] text-[#03045E] px-2 rounded-xl">what we do!</span>
      </p>

      {/* First 2 Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
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
      </div>

      {/* Single Grid Item */}
      <div className="flex flex-row justify-center items-center mt-12">
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
      </div>

      {/* Second 2 Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
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
      </div>

      {/* Single Grid Item */}
      <div className="flex flex-row justify-center items-center mt-12">
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
      </div>

      {/* Third 2 Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
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
      </div>
    </div>
  );
};

export default Section2;
