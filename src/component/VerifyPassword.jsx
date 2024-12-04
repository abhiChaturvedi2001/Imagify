import { toast } from "@/hooks/use-toast";
import axios from "axios";
import React, { useState } from "react";
import OtpInput from "react-otp-input";
import { useNavigate } from "react-router";

const VerifyPassword = () => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const verifyOtp = async () => {
    if (otp.length < 6) {
      return toast({ title: "OTP is not " });
    }
    try {
      const response = await axios.post(
        `https://imagify-backend-lilac.vercel.app/auth/verify-otp`,
        { otp: otp },
        { withCredentials: true }
      );
      if (response?.data?.success) {
        toast({ title: response?.data?.message });
        navigate("/reset-password");
      } else {
        toast({ title: response?.data?.message });
      }
    } catch (error) {
      toast({ title: error.message });
    }
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-[70vh]">
        <div className="p-5">
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            renderSeparator={<span className="mx-1 text-xl">-</span>}
            renderInput={(props) => (
              <input
                {...props}
                className=" w-16 box-border h-16  text-center text-xl border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            )}
          />
          <button
            onClick={verifyOtp}
            className="w-full my-5 bg-black text-white py-2 rounded-md font-bold"
          >
            Verify OTP
          </button>
          <p>
            Didn't receive the OTP?{" "}
            <span className="hover:underline cursor-pointer">Resend</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default VerifyPassword;
