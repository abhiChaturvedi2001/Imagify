import { pricingInfo } from "@/utils/constant";
import { MdDone } from "react-icons/md";
import React from "react";

const PriceCards = () => {
  return (
    <>
      <div className="flex justify-center space-x-10 max-md:flex-col max-md:space-x-0 max-md:items-center max-md:px-5 max-md:py-5">
        {pricingInfo.map((items) => {
          return (
            <div
              key={items.plan} // Added a unique key
              className="shadow-lg w-[20vw] max-md:w-full  min-h-[60vh] px-5 py-5 transition-all hover:shadow-xl rounded-xl max-md:mb-5"
            >
              <h1 className="text-3xl font-bold">{items.plan}</h1>
              <ul className="mt-5 h-[25vh]">
                {items.benefits.map((benefit, index) => {
                  return (
                    <li key={index} className="flex items-center mt-2">
                      <MdDone className="mr-3" /> {benefit.benefit}
                    </li>
                  );
                })}
              </ul>

              <div>
                <h1>
                  <span className="text-4xl">$ {items.price} /</span> month
                </h1>
                <button className="bg-black mt-5 text-white rounded-full w-[10rem] py-2 px-2 cursor-pointer">
                  {items.plan}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default PriceCards;
