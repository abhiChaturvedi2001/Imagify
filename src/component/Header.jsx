import React from "react";
import appLogo from "/logo.svg";
import { Link } from "react-router";
import { useDispatch } from "react-redux";
import { handleToggle } from "@/utils/toggleSlice";

const Header = () => {
  const dispatch = useDispatch();
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
          <button
            onClick={() => dispatch(handleToggle())}
            className=" w-[8rem] rounded-full px-2 py-2 text-white bg-black "
          >
            Login
          </button>
        </ul>
      </nav>
    </>
  );
};

export default Header;
