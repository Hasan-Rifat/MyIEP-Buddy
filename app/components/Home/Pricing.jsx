"use client";
import { setUserInfo } from "@/redux/features/user/userSlice";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { BsCheckCircle } from "react-icons/bs";
import { useDispatch } from "react-redux";
import Loading from "../shared/Loading";

export default function Pricing() {
  const [activePricing, setActivePricing] = useState(0);
  const data =
    typeof window !== "undefined" && JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setUserInfo(data));
  }, [data, dispatch]);

  // prevent hydration error
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);
  if (!hydrated) {
    return null;
  }

  if (!data) {
    return <Loading />;
  }

  return (
    <div className="bg-[#F7F9FA] py-20">
      <div className=" container mx-auto md:px-20 px-5">
        <h1 className=" text-4xl text-center font-semibold text-[#232933]">
          Ready To Get <span className=" text-[#43A4F5]">Started ?</span>
        </h1>

        <div className=" xl:w-1/2 lg:w-2/3 w-full mx-auto rounded-2xl bg-red-100 mt-16 shadow-xl">
          <div className=" flex items-center bg-[#F5F5F5] rounded-t-2xl h-40  ">
            <div
              onClick={() => setActivePricing(0)}
              className={` ${
                activePricing == 0 && "border border-[#8DDBE0]"
              } w-1/2 h-full flex flex-col items-center justify-center rounded-tl-2xl cursor-pointer `}
            >
              <div>
                <p className=" text-[#00000090] sm:text-lg font-medium">
                  Pay Monthly
                </p>
                <h1 className=" sm:text-2xl text-xl text-[#00000090] font-semibold">
                  $17/ Month
                </h1>
              </div>
            </div>
            <div
              onClick={() => setActivePricing(1)}
              className={`${
                activePricing == 1 && "border border-[#8DDBE0]"
              } w-1/2 flex flex-col items-center justify-center h-full  rounded-tr-2xl cursor-pointer`}
            >
              <div>
                <p className=" text-black text-sm font-medium">Pay Yearly</p>
                <h1 className=" sm:text-2xl text-xl font-semibold">
                  $180/ Year
                </h1>
                <button className=" py-1.5 px-5 bg-[#A9F8FD] rounded-lg mt-1 text-sm font-medium">
                  Biggest Saving
                </button>
              </div>
            </div>
          </div>
          <div className=" bg-white sm:p-14 p-5 rounded-b-2xl">
            <div className=" flex items-center gap-4 mb-7">
              <BsCheckCircle className=" text-[#A9F8FD] text-3xl w-1/12 " />
              <p className=" w-11/12 text-[#757575] text-sm">
                Access to customizable IEP goals, objectives, and accommodations
                tailored to your students&apos needs.
              </p>
            </div>
            <div className=" flex items-center gap-4 mb-7">
              <BsCheckCircle className=" text-[#A9F8FD] text-3xl w-1/12 " />
              <p className=" w-11/12 text-[#757575] text-sm">
                Time-saving features, including intuitive progress monitoring
                suggestions and progress monitoring creation tools
              </p>
            </div>
            <div className=" flex items-center gap-4 mb-7">
              <BsCheckCircle className=" text-[#A9F8FD] text-3xl w-1/12 " />
              <p className=" w-11/12 text-[#757575] text-sm">
                Exclusive access to insightful resource and expert advice on IEP
                best practices and the latest trends in special education.
              </p>
            </div>
            <div className=" flex items-center gap-4 mb-7">
              <BsCheckCircle className=" text-[#A9F8FD] text-3xl w-1/12 " />
              <p className=" w-11/12 text-[#757575] text-sm">
                Exclusive access to insightful resource and expert advice on IEP
                best practices and the latest trends in special education.
              </p>
            </div>
            <Link
              href={`${
                activePricing == 1
                  ? "https://buy.stripe.com/test_bIYeWV5o09l9aRi3cc"
                  : "https://buy.stripe.com/test_6oEcON6s4cxl5wY5kl"
              }`}
            >
              <button className=" mt-5 py-2.5 w-full bg-[#A9F8FD] text-[#555555] font-semibold rounded-md">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
