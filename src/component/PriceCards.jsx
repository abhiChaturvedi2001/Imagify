import { pricingInfo } from "@/utils/constant";
import { MdDone } from "react-icons/md";
import React from "react";

const PriceCards = () => {
  return (
    <>
      <div className="flex justify-center space-x-10 ">
        {pricingInfo.map((items) => {
          return (
            <>
              <div className="shadow-lg w-[20vw] px-5 py-5 min-h-[60vh] transition-all hover:shadow-xl rounded-xl">
                <h1 className="text-3xl font-bold">{items.plan}</h1>
                <ul className="mt-5 h-[25vh]">
                  {items.benefits.map((benefit) => {
                    return (
                      <li className="flex items-center mt-2">
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
            </>
          );
        })}
      </div>
    </>
  );
};

export default PriceCards;
