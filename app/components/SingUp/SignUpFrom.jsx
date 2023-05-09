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

const SignUpFrom = () => {
  const [passwordIcon, setPasswordIcon] = useState(false);
  const [confirmPasswordIcon, setConfirmPasswordIcon] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handelSubmit = async (e) => {
    e.preventDefault();

    const fullName = e.target.name.value;
    const email = e.target.email.value;
    const regex = /^.{1,6}$/;
    if (regex.test(password)) {
      alert("Password must be more than 7 carecter.");
      console.log("Password must be more than 6 carecter.");
      return;
    } else if (password !== confirmPassword) {
      alert("confirm Password dose not match");
      console.log("confirm Password dose not match");
      return;
    } else if (fullName && email && password && confirmPassword) {
      const response = await fetch(
        "http://localhost:5000/api/v1/user/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ fullName, email, password }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        // Registration successful
        console.log(data);

        const token = localStorage.setItem("token", data.token);

        // Redirect or show a success message
      } else {
        // Registration failed
        console.log(data.error);
        // Show an error message
      }
    }
  };

  return (
    <section className={` ${dmSans.className} relative`}>
      <div>
        <Image
          src={leftImg}
          alt="left img"
          className="absolute hidden lg:block transform translate-y-1/2"
        />
        <div className=" grid grid-cols-1 lg:grid-cols-2">
          <div
            className={`px-5 md:pl-[120px] pt-[42px]  order-last lg:order-first pb-10`}
          >
            <p className="text-[#111827] text-base leading-5 ">
              Already have an account?{" "}
              <Link className="text-[#0060AF] underline" href={"/sign-in"}>
                Sign in
              </Link>
            </p>
            <div className="lg:h-screen  flex items-center w-full">
              <div className="mt-[35px] w-full">
                <form
                  onSubmit={handelSubmit}
                  className="px-5 xl:px-0 xl:max-w-[410px] xl:ml-[115px] xl:mr-[107px] rounded "
                >
                  <p>Welcome to</p>
                  <h2 className="text-2xl lg:text-[40px] leading-[56px] text-black font-bold mb-10">
                    MyIEP Buddy
                  </h2>
                  <div className="mb-6">
                    <input
                      className="appearance-none border border-[#C4C4C4] rounded w-full p-[19px] text-[#5D7183] placeholder-[#5D7183] leading-tight focus:outline-none focus:shadow-outline"
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Full Name*"
                    />
                  </div>
                  <div className="mb-6">
                    <input
                      className="appearance-none border border-[#C4C4C4] rounded w-full p-[19px] text-[#5D7183] placeholder-[#5D7183] leading-tight focus:outline-none focus:shadow-outline"
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="Email*"
                    />
                  </div>

                  <div className="mb-6 relative">
                    <input
                      className="appearance-none border border-[#C4C4C4] rounded w-full p-[19px] text-[#5D7183] placeholder-[#5D7183] leading-tight focus:outline-none focus:shadow-outline"
                      id="password"
                      name="password"
                      required
                      onChange={(e) => setPassword(e.target.value)}
                      type={passwordIcon ? "text" : "password"}
                      placeholder="Password*"
                      value={password}
                    />
                    <Image
                      onClick={() => setPasswordIcon(!passwordIcon)}
                      className="absolute top-1/2 right-[0%] transform -translate-x-full -translate-y-1/2 cursor-pointer"
                      src={passwordIcon ? eyeHidden : eyeShow}
                      alt="show icon"
                    />
                  </div>

                  <div className="mb-6 relative">
                    <input
                      className={`${
                        password === confirmPassword ? "" : " border-red-500"
                      } appearance-none border border-[#C4C4C4] rounded w-full p-[19px] text-[#5D7183] placeholder-[#5D7183] leading-tight focus:outline-none focus:shadow-outline`}
                      id="confirmpassword"
                      name="confirmpassword"
                      required
                      type={confirmPasswordIcon ? "text" : "password"}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Confirm Password*"
                      value={confirmPassword}
                    />
                    <Image
                      onClick={() =>
                        setConfirmPasswordIcon(!confirmPasswordIcon)
                      }
                      className="absolute top-1/2 right-[0%] transform -translate-x-full -translate-y-1/2"
                      src={confirmPasswordIcon ? eyeHidden : eyeShow}
                      alt="show icon"
                    />
                  </div>
                  <div className="mb-6">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        name="checkbox"
                      />
                      <p className="ml-2 text-sm text-[#111827] max-w-[236.68px]">
                        I agree to the{" "}
                        <Link
                          href={"/terms-and-conditions"}
                          className="text-[#0060AF]"
                        >
                          Terms and Conditions
                        </Link>{" "}
                        and{" "}
                        <span className="text-[#0060AF]">Privacy Policy</span>
                      </p>
                    </label>
                  </div>
                  <div className="mt-[48px]">
                    <button
                      className="bg-[#A9F8FD] w-full rounded-[6px] py-2 text-base font-bold text-[#555555] "
                      type="submit"
                    >
                      Sign Up
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

export default SignUpFrom;
