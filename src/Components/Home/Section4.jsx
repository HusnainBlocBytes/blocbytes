import React from "react";

const RoadmapStep = ({ number, title, description }) => (
  <div className="relative py-6 px-6">
    {/* Border wrapper with opacity */}
    <div className="absolute inset-0 border-t border-b border-[#90E0EF] opacity-50 pointer-events-none"></div>

    {/* Content container */}
    <div className="relative">
      <div className="font-inter text-[17px] leading-[24px] font-bold text-[#03045E] uppercase">
        {number}. {title}
      </div>
      <div className="ml-2">
        <p className="font-inter leading-[24px] text-[16px] text-[#000000] font-medium mt-4">
          {description}
        </p>
      </div>
    </div>
  </div>
);

const Section4 = () => {
  return (
    <div className="bg-[#FFFFFF] p-4 md:p-12 lg:p-18 mx-2 md:mx-8 pt-1 mt-0">
      <p className="font-medium text-[#000000] font-italic text-[25px] leading-[38px]">
        Here is the road map for how we make our solutions happen.
      </p>

      {/* Roadmap grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <RoadmapStep
          number="1"
          title="Discover"
          description="We listen, define goals, explore possibilities, and align."
        />
        <RoadmapStep
          number="2"
          title="Frame"
          description="Define user needs, map experiences, set features, timeline."
        />
        <RoadmapStep
          number="3"
          title="Design"
          description="Brainstorm solutions, create prototypes, test, refine flow."
        />
        <RoadmapStep
          number="4"
          title="Build"
          description="Architect system, roll out in stages, integrate, test."
        />
        <RoadmapStep
          number="5"
          title="Release"
          description="Deploy the solution, monitor performance, ensure stability."
        />
        <RoadmapStep
          number="6"
          title="Optimize"
          description="Gather feedback, enhance features, plan updates."
        />
      </div>
    </div>
  );
};

export default Section4;
