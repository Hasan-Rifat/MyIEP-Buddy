import React from "react";
import Image from "next/image";

import arrow from "../../../images/checkout/left arrow.svg";
import icon from "../../../images/checkout/icon.svg";
import stripeLogo from "../../../images/checkout/stripe powered logo.svg";

import paymentCard from "../../../images/checkout/paymentCard.svg";

import { DM_Sans } from "next/font/google";
import Link from "next/link";
const dmSans = DM_Sans({
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const CheckOutFrom = () => {
  return (
    <section className={`${dmSans.className}`}>
      <div className="grid lg:grid-cols-2 ">
        <div className="bg-[#32364e]  py-10 px-5">
          <div className="max-w-[328px] mx-auto">
            <div className=" h-[85vh] flex items-center">
              <div>
                <div className="flex gap-5">
                  <Image src={arrow} alt="arrow" />
                  <h2 className="font-bold text-xl text-white ">
                    MyIEP <span className="text-[#43A4F5]">Buddy</span>
                  </h2>
                </div>
                <div className="pt-[59px]">
                  <p className="text-[12px] font-medium leading-4 text-white">
                    Pay Yearly
                  </p>
                  <h3 className="text-[32px] leading-[40px] font-bold text-white">
                    $180
                  </h3>
                  <p className="text-[12px] leading-4 text-white">1 Year</p>
                </div>
                <div className="mt-[31px]">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      defaultValue=""
                      className="sr-only peer"
                      defaultChecked=""
                    />
                    <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
                    <span className="ml-3 text-sm font-medium text-white dark:text-gray-300">
                      Switch to Monthly
                    </span>
                  </label>
                </div>
                <div className="mt-[28px]">
                  <Image className="-ml-[20px]" src={icon} alt="icon" />
                  <h4 className="font-bold text-xl text-white mt-[11px]">
                    MyIEP <span className="text-[#43A4F5]">Buddy</span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#32364e]  pb-[107px]">
            <div className="max-w-[328px] mx-auto flex items-center gap-4">
              <Image src={stripeLogo} alt="stripe Logo" />
              <div className="flex gap-3">
                <Link
                  target="_blank"
                  className="text-base text-[#ffffffb3]"
                  href="https://stripe.com/legal/end-users"
                >
                  Terms
                </Link>
                <Link
                  target="_blank"
                  className="text-base text-[#ffffffb3]"
                  href="https://stripe.com/privacy"
                >
                  Privacy
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#f7f8f9] py-20 lg:py-0 flex items-center px-5">
          <div className="max-w-[410px] mx-auto">
            <div className=" ">
              <div>
                <h4 className="text-xl font-bold text-[#1C1C1D] mb-6">
                  Pay with Card
                </h4>
                <form className="">
                  <div className="mb-6">
                    <input
                      className="appearance-none border border-[#0000000a] rounded-[5px] w-full px-[19px] py-[14px] text-[#5D7183] placeholder-[#5D7183] leading-tight focus:outline-none focus:shadow-outline"
                      id="email"
                      type="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="mb-6">
                    <span className="text-[10px] mb-[5px] leading-[13px] font-medium text-[#00000066]">
                      Card information
                    </span>
                    <div className="relative">
                      <input
                        className="appearance-none border border-[#0000000a] rounded-[5px] w-full pl-[19px] py-[14px] text-[#5D7183] placeholder-[#5D7183] leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="4242 4242 4242 4242 "
                      />
                      <Image
                        className="absolute top-1/2 -right-[28%] transform -translate-x-full -translate-y-1/2 cursor-pointer"
                        src={paymentCard}
                        alt="paymentCard"
                      />
                    </div>

                    <div className="flex">
                      <input
                        className="appearance-none border border-[#0000000a] rounded-[5px] w-full pl-[19px] py-[14px] text-[#5D7183] placeholder-[#5D7183] leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="MM / YY"
                      />
                      <input
                        className="appearance-none border border-[#0000000a] rounded-[5px] w-full pl-[19px] py-[14px] text-[#5D7183] placeholder-[#5D7183] leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="CVC"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <span className="text-[10px] mb-[5px] leading-[13px] font-medium text-[#00000066]">
                      Name on card
                    </span>
                    <div className=" mb-6">
                      <input
                        className="appearance-none border border-[#0000000a] rounded-[5px] w-full pl-[19px] py-[14px] text-[#5D7183] placeholder-[#5D7183] leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="card"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <span className="text-[10px] mb-[5px] leading-[13px] font-medium text-[#00000066]">
                      Country or Region
                    </span>
                    <div className=" mb-6">
                      <select className=" border border-[#0000000a] rounded-[5px] w-full pl-[19px] py-[14px] text-[#5D7183] placeholder-[#5D7183] leading-tight focus:outline-none focus:shadow-outline bg-white">
                        <option>United States</option>
                        <option>United States</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-6 bg-white pt-[7px] rounded-[5px]  pb-[13px] px-[10px]">
                    <div>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          className="form-checkbox"
                          name="checkbox"
                        />
                        <p className="ml-[5px] text-[10px] leading-[13px] text-[#111827] font-medium">
                          Securely save my information for 1-click checkout
                        </p>
                      </label>
                    </div>
                    <p className="mt-[5px] text-[10px] leading-[13px] text-[#00000099] font-medium">
                      Pay faster on MyIEP Buddy. and everywhere Link is
                      accepted.
                    </p>
                  </div>

                  <div className="mt-[30px]">
                    <button
                      className="bg-[#32364E]  rounded-[6px] py-[13px] px-[87px] text-sm font-medium text-white "
                      type="button"
                    >
                      Pay
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckOutFrom;
