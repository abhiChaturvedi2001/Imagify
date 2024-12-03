import React from "react";
import appLogo from "/logo.svg";
import { Link } from "react-router";

const ForgotPassword = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-[70vh]">
        <div className="p-5">
          <img className="w-[100px] mx-auto" src={appLogo} alt="" />
          <h1 className="text-2xl font-bold my-3">Forgot Password</h1>
          <p className="w-[80%]">
            Enter your email address we send you to link for reset the password
          </p>
          <input
            className="block w-full my-3 py-2 px-2 rounded-md bg-gray-100 outline-none"
            type="text"
          />
          <button className="w-full bg-black text-white py-2 rounded-md font-bold">
            Reset Password
          </button>
          <Link to={"/"}>
            <p className="text-center mt-4 hover:underline cursor-pointer font-poppins font-bold">
              Back to login
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
