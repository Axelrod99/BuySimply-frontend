import React from "react";
import logo from "../assets/image 30.png";
import pics from "../assets/image 31.png";
import eye from "../assets/iconamoon_eye-light.png";

const Login = () => {
  return (
    <div className="w-full flex">
      <div className="w-full hidden md:flex flex-col rounded-r-[20px] bg-[#F8EAFF]">
        <div className="ml-4">
          <img className="my-5 w-40" src={logo} />
        </div>

        <div className="flex flex-col items-center w-full">
          <div className="flex justify-center">
            <img className="w-[85%]" src={pics} />
          </div>
          <div className="flex flex-col justify-center items-center mt-3 Lora font-semibold">
            <p className="text-[#61227D] text-[18px] lg:text-[20px]">
              Team Achieve
            </p>
            <p className="text-[16px] lg:text-[18px] text-[#5E5E5E]">
              Your perfect solution for funding your desires
            </p>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#FCFCFC] h-[100vh]">
        <div className="w-full flex justify-center md:mt-14 NoraSans">
          <div className="w-[80%] sm:w-[65%] md:w-[90%] lg:w-[85%] xl:w-[80%] pb-10 flex flex-col gap-[24px] md:gap-[32px]">
         

            <div className="w-full justify-center text-center">
            <div className="flex md:hidden justify-center">
              <img className="mt-10 w-40" src={logo} />
            </div>

              <p className="text-[32px] text-[#61227D] Lora font-semibold">
                Welcome Back
              </p>
              <p className="text-[#5E5E5E]">
                Enter your email address and password to access your account.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-[8px]">
                <p>
                  Email Addess <span className="text-[#EE1A40]">*</span>
                </p>
                <input
                  className="shadow w-full h-[48px] p-[16px] font-normal border border-[#DDDDDD] bg-[#FFFFFF] text-[#ABABAB] rounded-[5px]"
                  placeholder="Enter your email address"
                  required
                />
              </div>

              <div className="flex flex-col gap-[8px]">
                <p>
                  Password <span className="text-[#EE1A40]">*</span>
                </p>
                <div className="flex items-center border border-[#DDDDDD] pr-1 bg-[#F6F6F6] rounded-[5px]">
                  <input
                    className="shadow  w-full h-[49px] p-[16px] font-normal bg-[#fff] text-[#ABABAB] rounded-l-[5px]"
                    placeholder="Enter your Password"
                    required
                  />
                  <div
                    //   onClick={togglePasswordVisibility}
                    className="border-l bg-[#F7F7F7] flex justify-center items-center h-[49px] w-[56px]"
                  >
                    <img
                      src={eye}
                      className="w-[24px] h-[24px] cursor-pointer"
                      alt="/"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-between text-[14px]">
                <div className="flex gap-1">
                  <input type="checkbox" />
                  <p className="">Remember me</p>
                </div>

                <div>
                  <p className="text-[#61227D]">Forgot Password?</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 text-center text-[14px]">
              <button className="shadow bg-[#61227D] text-white font-semibold h-[48px] w-full rounded-[8px] flex justify-center items-center">
                Sign in
              </button>

              <p className="text-[#5E5E5E] font-thin">
                Don’t have an account?{" "}
                <span className="text-[#61227D] font-semibold">Sign up</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
