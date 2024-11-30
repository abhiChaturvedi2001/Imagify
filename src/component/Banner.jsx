import React from "react";
import starIcon from "/star_icon.svg";

const Banner = () => {
  return (
    <>
      <div className="flex items-center justify-center h-[70vh]">
        <div className="text-center">
          <div className="flex items-center border w-[20rem]  mx-auto px-5 py-1 bg-white rounded-full">
            Best text to image generator{" "}
            <img className="ml-2" src={starIcon} alt="" />
          </div>
          <h1 className="text-7xl mt-7">Turn text to </h1>
          <h1 className="text-7xl">
            <span className="text-[#007AFF]">image,</span> in seconds.
          </h1>
          <p className="my-7">
            Unleash your creativity with AI. Turn your imagination into visual
            art in <br /> seconds – just type, and watch the magic happen.
          </p>
          <button className="bg-black text-white rounded-full w-[12rem] py-2 px-2 cursor-pointer ">
            Generate Images{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default Banner;
