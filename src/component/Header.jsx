import React from "react";
import appLogo from "/logo.svg";
import { Link } from "react-router";

const Header = () => {
  return (
    <>
      <nav className="flex items-center justify-around min-h-[8vh]">
        <Link to={"/"}>
          <img src={appLogo} alt="" className="logo" />
        </Link>
        <ul className="flex items-center space-x-6">
          <Link to={"/pricing"}>
            <li className="capitalize">pricing</li>
          </Link>
          <button className=" w-[8rem] rounded-full px-2 py-2 text-white bg-black ">
            Login
          </button>
        </ul>
      </nav>
    </>
  );
};

export default Header;
