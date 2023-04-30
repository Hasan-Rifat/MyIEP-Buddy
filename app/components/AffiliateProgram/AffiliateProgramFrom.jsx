import Link from "next/link";
import React from "react";

const AffiliateProgramFrom = () => {
  return (
    <section className="py-[139px]">
      <div className="container mx-auto">
        <div className="mx-auto max-w-[597px] pt-[33px] pb-[82px] bg-[#fcfcfd] rounded-[10px] shadow-[0_10px_15px_rgba(0,0,0,0.05)]">
          <h2 className="text-[40px] leading-[56px] text-black font-medium text-center mb-10">
            Affiliate Program
          </h2>
          <form className="max-w-[410px] mx-auto rounded ">
            <div className="mb-6">
              <input
                className="appearance-none border border-[#C4C4C4] rounded w-full p-[19px] text-[#5D7183] placeholder-[#5D7183] leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Name"
              />
            </div>
            <div className="mb-6">
              <input
                className="appearance-none border border-[#C4C4C4] rounded w-full p-[19px] text-[#5D7183] placeholder-[#5D7183] leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="mb-6">
              <input
                className="appearance-none border border-[#C4C4C4] rounded w-full p-[19px] text-[#5D7183] placeholder-[#5D7183] leading-tight focus:outline-none focus:shadow-outline"
                id="paymentEmail"
                type="email"
                placeholder="Payment Email"
              />
            </div>
            <div className="mb-6">
              <input
                className="appearance-none border border-[#C4C4C4] rounded w-full p-[19px] text-[#5D7183] placeholder-[#5D7183] leading-tight focus:outline-none focus:shadow-outline"
                id="phoneNumber"
                type="tel"
                placeholder="Phone Number"
              />
            </div>
            <div className="mb-6">
              <input
                className="appearance-none border border-[#C4C4C4] rounded w-full p-[19px] text-[#5D7183] placeholder-[#5D7183] leading-tight focus:outline-none focus:shadow-outline"
                id="address"
                rows="3"
                placeholder="Address"
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
                  and <span className="text-[#0060AF]">Privacy Policy</span>
                </p>
              </label>
            </div>
            <div className="mt-[48px]">
              <button
                className="bg-[#A9F8FD] w-full rounded-[6px] py-2 text-base font-medium text-[#555555] "
                type="button"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AffiliateProgramFrom;
