import Link from "next/link";
import Image from "next/image";

// Image Import
import logo from "../../../images/logo/logo.png";

// Icons Import
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

export default function Footer() {
  return (
    <div className=" bg-[#F7F9FA] py-24 z-[100]">
      <div className=" container xl:px-20 px-5 mx-auto z-[100]">
        <div className=" grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-16 lg:gap-0 mb-10">
          <div className=" md:col-span-2">
            <Link href="/" className=" flex items-center ">
              <Image src={logo} alt="Picture of the author" className=" h-34" />
              <h1 className=" text-[#212936] text-3xl font-bold">
                MyIEP <span className=" text-[#43A4F5]">Buddy</span>
              </h1>
            </Link>
            <p className="  text-xl text-[#4D4D4D] lg:w-1/2 mt-7">
              Your Ultimate Sidekick In Writing Exceptional IEPs.
            </p>
          </div>

          <div>
            <h1 className=" text-[#4D4D4D] text-2xl font-semibold mb-5">
              Quick Links
            </h1>
            <p className=" text-[#4D4D4D] text-lg mb-4">
              <Link href={"/terms-and-conditions"}>Tream & Conditions</Link>
            </p>
            {/* <p className=" text-[#4D4D4D] text-lg mb-4">
              <Link href={"/terms-and-conditions"}>Privacy Policy</Link>{" "}
            </p> */}
            <p className=" text-[#4D4D4D] text-lg xl:w-1/2 ">
              <Link href={"/affiliate-program"}>Affiliate Program</Link>
            </p>
          </div>
          <div className=" flex flex-col justify-between ">
            <div>
              <h1 className=" text-[#4D4D4D] text-2xl font-semibold mb-3">
                Contact us
              </h1>
              <p className=" text-[#4D4D4D] text-lg ">support@myiepbuddy.com</p>
            </div>
            <div className=" mt-7">
              <h1 className=" text-[#4D4D4D] text-2xl font-semibold mb-3">
                Suggestion Box
              </h1>
              <p className=" text-[#4D4D4D] text-lg ">
                suggestion@myiepbuddy.com
              </p>
            </div>
          </div>
        </div>
        <div className=" h-[1px] w-full bg-[#0a142f37]"></div>
        <div className=" md:flex items-center justify-between  py-10 text-[#4D4D4D]">
          <h1 className=" text-[#4D4D4D]">Copyright © 2023 MyIEP Buddy</h1>
          <div className=" sm:flex items-center gap-5 mt-10 md:mt-0">
            <p className="  text-[#363636] text-lg font-medium">
              Follow Our Social Media
            </p>
            <div className="flex items-center gap-5 mt-5 sm:mt-0">
              <Link href={"https://www.instagram.com/myiepbuddy"}>
                <div className=" w-[34px] h-[34px] rounded-full flex items-center justify-center text-xs border border-[#4D4D4D] ">
                  <AiFillInstagram size={13} />
                </div>
              </Link>
              <Link href={"https://www.facebook.com/myiepbuddy"}>
                <div className=" w-[34px] h-[34px] rounded-full flex items-center justify-center text-xs  border border-[#4D4D4D] ">
                  <FaFacebookF size={13} />
                </div>
              </Link>
              <Link href={"https://twitter.com/myiepbuddy"}>
                <div className=" w-[34px] h-[34px] rounded-full flex items-center justify-center text-xs  border border-[#4D4D4D]">
                  <BsTwitter size={13} />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
