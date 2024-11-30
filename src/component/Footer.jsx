import React from "react";
import appLogo from "/logo.svg";

const Footer = () => {
  return (
    <>
      <div className="h-[60vh] flex justify-center items-center">
        <div className="text-center">
          <h1 className="text-4xl">See the magic. Try now</h1>
          <button className="bg-black mt-5 text-white rounded-full w-[10rem] py-2 px-2 cursor-pointer">
            Generate Images
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center space-x-5 py-10">
        <img src={appLogo} alt="" />
        <div className="border-l border-black pl-4">
          All right reserved. Copyright @imagify
        </div>
      </div>
    </>
  );
};

export default Footer;
