"use client";

import Link from "next/link";
import React, { useState } from "react";
import { DM_Sans } from "@next/font/google";

import leftImg from "../../../images/authImg/left.svg";
import top from "../../../images/authImg/top.svg";
import icon from "../../../images/authImg/icon.svg";
import bottom from "../../../images/authImg/bottom.svg";

import eyeShow from "../../../images/authImg/eyeshow.svg";
import eyeHidden from "../../../images/authImg/eyehiddenEye.svg";

import Image from "next/image";
const dmSans = DM_Sans({
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const SignInFrom = () => {
  const [password, setPassword] = useState(false);
  return (
    <section className={` ${dmSans.className} relative`}>
      <div>
        <Image
          src={leftImg}
          alt="left img"
          className="absolute hidden lg:block transform translate-y-1/2"
        />
        <div className=" grid grid-cols-1 lg:grid-cols-2 ">
          <div
            className={`px-5 md:pl-[120px] pt-[42px]  order-last lg:order-first pb-10 `}
          >
            {" "}
            <p className="text-[#111827] text-base leading-5 ">
              Don&apos;t have an account?{" "}
              <Link className="text-[#0060AF] underline" href={"/sign-up"}>
                Sign in
              </Link>
            </p>
            <div className="w-full flex items-center lg:h-screen">
              <div className="mt-[35px] w-full">
                <form className="px-5 xl:px-0 xl:max-w-[410px] xl:ml-[115px] xl:mr-[107px] rounded ">
                  <p>Welcome to</p>
                  <h2 className="text-2xl lg:text-[40px] leading-[56px] text-black font-bold mb-10">
                    MyIEP Buddy
                  </h2>

                  <div className="mb-6">
                    <input
                      className="appearance-none border border-[#C4C4C4] rounded w-full p-[19px] text-[#5D7183] placeholder-[#5D7183] leading-tight focus:outline-none focus:shadow-outline"
                      id="email"
                      type="email"
                      placeholder="Email*"
                    />
                  </div>
                  <div className="mb-6 relative">
                    <input
                      className="appearance-none border border-[#C4C4C4] rounded w-full p-[19px] text-[#5D7183] placeholder-[#5D7183] leading-tight focus:outline-none focus:shadow-outline"
                      id="paymentEmail"
                      type={password ? "text" : "password"}
                      placeholder="Password*"
                    />
                    <Image
                      onClick={() => setPassword(!password)}
                      className="absolute top-1/2 right-[0%] transform -translate-x-full -translate-y-1/2 cursor-pointer"
                      src={password ? eyeHidden : eyeShow}
                      alt="show icon"
                    />
                  </div>

                  <div className="mb-6">
                    <label className="">
                      <div className="ml-2 text-sm text-[#111827] flex justify-between">
                        <span>
                          <input
                            type="checkbox"
                            className="form-checkbox"
                            name="checkbox"
                          />{" "}
                          Remember me
                        </span>
                        <Link href={"/"} className="text-[#0060AF] underline">
                          Forgot password?
                        </Link>{" "}
                      </div>
                    </label>
                  </div>
                  <div className="mt-[48px]">
                    <button
                      className="bg-[#A9F8FD] w-full rounded-[6px] py-2 text-base font-bold text-[#555555] "
                      type="button"
                    >
                      Sign in
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="bg-[#a9f8fd] relative h-[50vh] lg:h-full order-first lg:order-last">
            <div>
              <Image
                src={top}
                alt="top image"
                className="absolute left-0 top-0 hidden lg:block"
              />
            </div>
            <div className="h-full flex items-center justify-center relative z-40">
              <Image src={icon} alt="icon image" />
            </div>
            <div>
              <Image
                src={bottom}
                alt="bottom image"
                className="absolute right-0 bottom-0 hidden lg:block"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignInFrom;
