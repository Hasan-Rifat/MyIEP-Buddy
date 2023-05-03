"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// Image Import
import logo from "../../../images/logo/logo.png";
import FrontendMenuActive from "./FrontendMenuActive";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // For Menu
  const ref = useRef();
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (isMenuOpen && ref.current && !ref.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isMenuOpen]);

  // prevent hydration error
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);
  if (!hydrated) {
    return null;
  }

  const main_menu = [
    {
      route: "Home",
      path: "/",
      id: 1,
    },
    {
      route: "About",
      path: "/about-us",
      id: 2,
    },
    {
      route: "Goals",
      path: "/goals",
      id: 3,
    },
    {
      route: "Accommodations",
      path: "/accommodations",
      id: 91,
    },
    {
      route: "Levels",
      path: "/levels",
      id: 4,
    },
    {
      route: "Progress",
      path: "/progress",
      id: 5,
    },

    {
      route: "Blog",
      path: "/blog",
      id: 7,
    },
    {
      route: "FAQ",
      path: "/faq",
      id: 8,
    },
    {
      route: "Pricing",
      path: "/pricing",
      id: 9,
    },
    {
      route: "Contact",
      path: "/contact",
      id: 10,
    },
    {
      route: "Affiliate",
      path: "/affiliate-program",
      id: 11,
    },
  ];

  return (
    <>
      <div className="z-[100000000] sticky top-0 bg-white ">
        <nav className="container mx-auto 2xl:px-[14px] px-2   py-2  flex  items-center justify-between  transition-all duration-300 ease-in-out">
          <div
            className={`transition-all   py-4 lg:py-0  duration-300  flex  xl:justify-end ease-in-out cursor-pointer`}
          >
            <Link href="/" className=" flex items-center ">
              <Image src={logo} alt="Picture of the author" className=" h-70" />
              <h1 className=" text-[#212936] text-2xl font-bold">
                MyIEP <span className=" text-[#43A4F5]">Buddy</span>
              </h1>
            </Link>
          </div>

          <div className=" xl:flex items-center 2xl:gap-16 gap-5 hidden ">
            {/* website navigation */}
            <div className=" items-center nav ">
              <div className="hidden ml-auto xl:block  w-full ">
                <div className=" flex w-full justify-between  items-center ">
                  <div className="h-full w-full flex items-center relative ">
                    <div className=" flex items-center ">
                      {main_menu.map((item) => (
                        <FrontendMenuActive key={item.id} href={item?.path}>
                          <Link href={item?.path}>
                            <p className=" py-6   2xl:px-[7px] px-[5px] cursor-pointer rounded-md text-[15px] font-[550]  ">
                              {item.route}
                            </p>
                          </Link>
                        </FrontendMenuActive>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Button */}
            <div className=" flex items-center gap-6  ">
              <Link
                href={"/sign-in"}
                className=" py-[7px] font-medium 2xl:px-7 px-5 border border-[#43A4F5] hover:bg-[#43A4F5] hover:text-black cursor-pointer text-[#43A4F5] rounded-[10px]"
              >
                Sign in
              </Link>
              <Link
                href={"/sign-up"}
                className=" py-[7px] font-medium 2xl:px-7 cursor-pointer hover:bg-transparent hover:text-[#43A4F5]  border border-[#43A4F5] bg-[#43A4F5] text-black rounded-[10px] px-5 "
              >
                Sign up
              </Link>
            </div>
          </div>

          {/* For Mobile cancle button */}
          <div className="flex h-full items-center justify-between xl:hidden">
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 md:mr-4 rounded-md xl:hidden text-black"
            >
              <svg
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                aria-hidden="true"
                className="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`w-full fixed xl:hidden transition-all duration-300 ease-in-out h-screen top-0 bottom-0 left-0 right-0 bg-black opacity-40  ${
              isMenuOpen ? "block" : "hidden"
            }`}
          ></div>
          <div
            ref={ref}
            className={`${
              isMenuOpen
                ? "left-0 bottom-0 top-0 z-20 "
                : "-left-96 bottom-0 top-0"
            } transition-all duration-300 ease-in-out fixed xl:hidden  flex flex-col w-full md:w-1/2  max-w-sm py-6 px-6 bg-white overflow-y-auto`}
          >
            <div className="h-full flex flex-col gap-3  items-start pl-1">
              <div className=" flex justify-end items-end w-full">
                <button onClick={() => setIsMenuOpen(false)}>
                  <svg
                    className="h-6 w-6 text-black cursor-pointer hover:text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </div>
              <div
                className={`transition-all mb-4 duration-300 ease-in-out cursor-pointer`}
              >
                <Link href="/">
                  <Image src={logo} alt="Picture of the author" />
                </Link>
              </div>
              <div className=" flex flex-col gap-2   text-left">
                {main_menu.map((item) => (
                  <FrontendMenuActive key={item.id} href={item?.path}>
                    <Link href={item?.path}>
                      <p className=" py-2   2xl:px-[14px] px-[10px] cursor-pointer rounded-md text-[15px] font-[550]  text-black hover:text-[#FFAAA9] ">
                        {item.route}
                      </p>
                    </Link>
                  </FrontendMenuActive>
                ))}
              </div>

              {/* Button */}
              <div className=" flex flex-col items-center gap-6  ">
                <Link
                  href={"/sign-in"}
                  className=" py-[7px] font-medium 2xl:px-7 px-5 border border-[#43A4F5] hover:bg-[#43A4F5] hover:text-black cursor-pointer text-[#43A4F5] rounded-[10px]"
                >
                  Sign in
                </Link>
                <Link
                  href={"/sign-up"}
                  className=" py-[7px] font-medium 2xl:px-7 cursor-pointer hover:bg-transparent hover:text-[#43A4F5]  border border-[#43A4F5] bg-[#43A4F5] text-black rounded-[10px] px-5 "
                >
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
