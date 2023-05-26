import React from "react";

const HeroContent = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mt-40 gap-x-2">
        <p
          className={`text-md text-fontColor1 font-semibold md:text-xl  lg:text-2xl`}
        >
          JUNE 5TH-7TH 2023
        </p>
        <h1
          className={`text-[40px] font-normal text-yellow md:text-[86px] lg:text-[90px]`}
        >
          HACK STORY
        </h1>
      </div>
      <div className="mx=15 mt-5">
        <p
          className={`text-fontColor1 text-center text-sm font-semibold md:text-lg lg:text-xl`}
        >
          Hack your way through the world,where innovation writes the next
          chapter!
        </p>
      </div>
      {/* Test components added for now. To be changed later */}
      <div className="mt-12 flex flex-row">
        <a className="cursor-pointer rounded-md bg-marquee px-3 py-4 text-[12px] font-extrabold md:text-[15px] lg:text-[20px] ">
          REGISTER NOW{" "}
        </a>
      </div>
    </div>
  );
};

export default HeroContent;
