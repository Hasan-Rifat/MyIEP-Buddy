"use client";
import Link from "next/link";
import Image from "next/image";

// Image import
import icon1 from "../../../images/dashboard/DIcon1.svg";
import icon2 from "../../../images/dashboard/DIcon2.svg";
import icon3 from "../../../images/dashboard/DIcon3.svg";
import icon4 from "../../../images/dashboard/DIcon4.svg";
import icon5 from "../../../images/dashboard/DIcon5.svg";

import dynamic from "next/dynamic";

// Image Import
import logo from "../../../images/logo/logo.png";
import { useEffect } from "react";
import ActiveLink from "./ActiveLink";

const DashboardNav = ({ close, setClose }) => {
  const main_menu = [
    {
      Route: "Dashboard",
      Path: "/dashboard",
      icon: icon2,
      height: "11rem",
      id: 1,
    },
    {
      Route: "Goals and Objectives Generator",
      Path: "/dashboard/goals-and-objectives-generator",
      icon: icon1,
      height: "11rem",
      id: 2,
    },
    {
      Route: "Accommodations Generator",
      Path: "/dashboard/accommodations-generator",
      icon: icon3,
      height: "11rem",
      id: 3,
    },
    {
      Route: "Present Levels Generator",
      Path: "/dashboard/present-levels-generator",
      icon: icon4,
      height: "11rem",
      id: 4,
    },
    {
      Route: "Progress Monitoring Ideas Generator",
      Path: "/dashboard/monitoring-ideas-generator",
      icon: icon5,
      height: "11rem",
      id: 5,
    },
  ];

  return (
    <div className=" h-full ">
      {/* <!-- Component Start --> */}
      <div
        class={`flex flex-col  items-center justify-between h-full overflow-x-hidden scrollbar overflow-y-auto transition-all duration-300  ease-in-out bg-[#a9f8fd] text-[#405859b3] shadow-[0_0_15px_0_rgba(0,0,0,0.11)]  ${close ? "w-16 duration-500" : "w-80 "
          }`}
      >
        <div className=" w-full flex flex-col justify-between ">
          {/* Bar icons */}
          <div
            className={` absolute  top-4 right-[1.2rem] group cursor-pointer `}
          >
            <div
              onClick={() => {
                setClose(!close);
              }}
            >
              <div className={`h-[2px] w-[21px] bg-black mb-1 `}></div>
              <div
                className={`h-[2px]  bg-black mb-1 transition-all duration-500 ease-in-out ${close ? "w-[21px]" : "w-[15px] group-hover:w-[21px]"
                  }`}
              ></div>
              <div
                className={`h-[2px]  bg-black transition-all duration-500 ease-in-out ${close ? " w-[21px]" : "w-2 group-hover:w-[21px]"
                  }`}
              ></div>
            </div>
          </div>

          <div className={`w-full  ${close ? "px-0" : "px-4"}`}>
            <div
              class={` w-full flex flex-col justify-center items-center mt-16  h-24 `}
            >
              <div>
                <Image
                  src={logo}
                  alt="Picture of the author"
                  className={` h-16 `}
                />
              </div>

              <div className=" overflow-hidden  ">
                <span
                  className={`transition-all duration-300 ease-out  overflow-hidden  text-xl leading-6 text-[#212936] font-medium ${close
                    ? " translate-x-[-28rem] -ml-32 "
                    : " translate-x-0 duration-500 -ml-0"
                    }`}
                >
                  MyIEP <span>Buddy</span>
                </span>
              </div>
            </div>
          </div>

          {/* Menu Items */}

          <div class="w-full px-2">
            <div class="flex flex-col  w-full mt-3 ">
              {main_menu.map((menu, index) => (
                <ActiveLink key={menu.id} href={menu.Path}>
                  <Link
                    href={menu?.Path}
                    className={`w-full mt-3  rounded-b-none
                    `}
                  >
                    <div
                      class={` flex w-full items-center h-12 px-3  rounded transition-all duration-150 ease-in hover:pl-5`}
                    >
                      <div className={` ${close ? " py-1 " : "py-1"}`}>
                        <div
                          class={` text-xl p-0.5  rounded text-[#405859] w-6 `}
                        >
                          <Image
                            src={menu?.icon}
                            alt="Picture of the author"
                            className=" w-6"
                          />
                        </div>
                      </div>
                      <div className=" overflow-hidden flex h-6  w-[100%]  ">
                        <span
                          className={`transition-all  w-[100%]  duration-500 ease-out overflow-hidden text-sm font-semibold ${close
                            ? " translate-x-[-24rem] -ml-28  "
                            : "duration-500 translate-x-0 pl-2"
                            }`}
                        >
                          {menu?.Route}
                        </span>
                        {/* <div
                          className={`inline-flex h-full mt-1 float-right ${menu?.Service ? "block" : "hidden"
                            }  `}
                        >
                          {DropdownEnter == index ? (
                            <MdKeyboardArrowDown className=" text-lg" />
                          ) : (
                            <MdOutlineKeyboardArrowRight className=" text-lg" />
                          )}
                        </div> */}
                      </div>
                    </div>
                  </Link>
                </ActiveLink>
              ))}
            </div>
          </div>
          {/* Menu Items */}
        </div>
      </div>
      {/* <!-- Component End  --> */}
    </div>
  );
};

export default DashboardNav;
