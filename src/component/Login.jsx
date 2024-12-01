import React, { useState } from "react";
import appLogo from "/logo.svg";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { handleToggle } from "@/utils/toggleSlice";
import { Link } from "react-router";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const dispatch = useDispatch();
  const toggle = useSelector((store) => store.toggle.toggle);
  return (
    <>
      <div
        className={`absolute top-0 h-[100vh] w-full transition-all duration-100 ${
          toggle ? "block" : "hidden"
        } backdrop-blur-sm bg-black/30`}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <form
            className="w-[25rem] min-h-[40vh] rounded-lg shadow-lg  px-5 py-5 backdrop-blur-sm bg-white/80"
            action=""
          >
            <div className="relative">
              <RxCross2
                onClick={() => dispatch(handleToggle())}
                className="absolute right-0 text-3xl cursor-pointer"
              />
              <img className="w-[100px] mx-auto" src={appLogo} alt="" />
              <div className="text-center my-5">
                <h1>Welcome to Imagfiy </h1>
                <p>Download AI - Generated Images using Text</p>
              </div>
            </div>
            {isSignUp && (
              <div className="my-5">
                <label className="block font-semibold">Name</label>
                <input
                  className="mt-2 w-full px-2 py-2 rounded-lg outline-none"
                  type="text"
                  placeholder="name"
                />
              </div>
            )}
            <div>
              <label className="block font-semibold">Email</label>
              <input
                className="mt-2 w-full px-2 py-2 rounded-lg outline-none"
                type="email"
                placeholder="email"
              />
            </div>
            <div className="my-5">
              <label className="block font-semibold">Password</label>
              <input
                className="mt-2 w-full px-2 py-2 rounded-lg outline-none"
                type="password"
                placeholder="password"
              />
            </div>
            {!isSignUp && (
              <Link to={"/forgot-password"} target="__blank">
                <p className="text-right mt-2 font-bold hover:underline">
                  Forgout Password ?{" "}
                </p>
              </Link>
            )}
            <button className="bg-black mt-5 text-white rounded-full w-full py-2 px-2 cursor-pointer">
              {isSignUp ? "Register" : "Login"}
            </button>
            {isSignUp ? (
              <p className="mt-2 text-center">
                Have an Account ?{" "}
                <span
                  onClick={() => setIsSignUp(false)}
                  className="hover:underline"
                >
                  Login
                </span>
              </p>
            ) : (
              <p className="mt-2 text-center">
                Not a Member ?{" "}
                <span
                  onClick={() => setIsSignUp(true)}
                  className="hover:underline"
                >
                  Register
                </span>
              </p>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
