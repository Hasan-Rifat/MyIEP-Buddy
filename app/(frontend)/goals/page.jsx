"use client";
import Image from "next/image";
import { useState } from "react";
import React from "react";
// Image import
import img from "../../../images/dashboard/user/goalsAndObj/Sales-target.svg";
import img2 from "../../../images/dashboard/user/goalsAndObj/goals2.svg";

const Goals = () => {
  const [next, setNext] = useState(true);

  return (
    <section className="py-10   bg-[#F2F2F2]  ">
      <div className="container mx-auto sm:px-10 px-2 pt-5 lg:flex items-center gap-10">
        <div className=" flex flex-col items-center justify-center lg:w-2/6 mb-10 lg:mb-0 transition-all duration-200 ease-out">
          <Image src={img} alt="Picture of the author" />
          <h1 className=" text-[#616161] font-medium text-2xl mt-5 mb-3">
            Goal and Objectives Generator
          </h1>
          <p className=" text-[#878787]">
            1960s with the release of Letraset sheets containing Lorem Ipsum
            passages
          </p>
        </div>
        <div className=" lg:w-4/6 bg-white mb-10  py-12 px-7 rounded-3xl">
          <ol class="flex items-center justify-center ">
            <div className=" flex flex-col items-start justify-center">
              <li
                class={`flex  items-center text-blue-600 after:content-[''] after:w-10 after:h-1 after:border-b after:border-[#A9F8FD] after:border-4  after:rounded-l-full`}
              >
                <span
                  class={`flex text-xl text-[#555555] font-medium items-center justify-center w-10 h-10 bg-[#A9F8FD]  rounded-full lg:h-12 lg:w-12  shrink-0`}
                >
                  1
                </span>
              </li>
              <h1 className=" text-[#A9F8FD] font-medium">Create</h1>
            </div>
            <div className=" flex flex-col items-end ">
              <li
                class={`flex  items-center before:content-[''] before:w-10 before:h-1 before:border-b  before:border-4 before:inline-block before:rounded-r-full ${
                  next ? "before:border-[#555555]" : " before:border-[#A9F8FD]"
                } `}
              >
                <span
                  class={`flex text-xl items-center justify-center rounded-full w-10 h-10  lg:h-12 lg:w-12  shrink-0 ${
                    next
                      ? " bg-transparent border border-[#555555] "
                      : "bg-[#A9F8FD]"
                  }`}
                >
                  2
                </span>
              </li>
              <h1
                className={` font-medium ${
                  next ? "text-[#555555]" : "text-[#A9F8FD]"
                } `}
              >
                Result
              </h1>
            </div>
          </ol>

          {next ? (
            <from>
              <div>
                <label className=" text-[#5F5F5F] " htmlFor="firstname">
                  Student Name{" "}
                  <span className=" text-[#5f5f5fa6]">(Only First Name)</span>
                </label>
                <input
                  id="firstname"
                  name="firstname"
                  type="text"
                  placeholder="Enter Student Name"
                  className=" w-full p-3 mt-2 rounded-lg outline-none border border-[#BFBFBF]"
                />
              </div>
              <div className=" mt-4">
                <label className=" text-[#5F5F5F] " htmlFor="grade">
                  Student Grade{" "}
                </label>
                <input
                  name="grade"
                  id="grade"
                  type="text"
                  placeholder="Student Grade"
                  className=" w-full p-3 mt-2 rounded-lg outline-none border border-[#BFBFBF]"
                />
              </div>
              <div className=" mt-4">
                <label className=" text-[#5F5F5F] " htmlFor="countries">
                  Area of need{" "}
                  <span className=" text-[#5f5f5fa6]">
                    (Ex. math calculation, reading comprehension, etc.)
                  </span>
                </label>
                <select
                  id="countries"
                  class="bg-[#F5F5F5] border border-gray-300 text-gray-900 mt-2 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3  "
                >
                  <option selected>Choose a country</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>

              <div className=" mt-4">
                <label className=" text-[#5F5F5F] " htmlFor="skills">
                  Skill to focus on{" "}
                  <span className=" text-[#5f5f5fa6]">
                    (Ex. inferences, using complete sentences, linear equations,
                    etc.)
                  </span>
                </label>
                <input
                  id="skills"
                  name="skills"
                  type="text"
                  placeholder="Enter Target"
                  className=" w-full p-3 mt-2 rounded-lg outline-none border border-[#BFBFBF]"
                />
              </div>

              <div className=" mt-4">
                <label className=" text-[#5F5F5F] " htmlFor="date">
                  IEP Date{" "}
                </label>
                <input
                  name="date"
                  id="date"
                  type="date"
                  placeholder="Select Date"
                  className=" bg-[#F5F5F5] w-full p-3 mt-2 rounded-lg outline-none border border-[#BFBFBF]"
                />
              </div>

              <div className=" mt-4">
                <label className=" text-[#5F5F5F] " htmlFor="baseline">
                  Baseline Data Point
                </label>
                <input
                  name="baseline"
                  id="baseline"
                  type="text"
                  placeholder="Enter Baseline Data Point"
                  className=" w-full p-3 mt-2 rounded-lg outline-none border border-[#BFBFBF]"
                />
              </div>

              <div className=" mt-4">
                <label className=" text-[#5F5F5F] " htmlFor="interest">
                  Student Interest
                </label>
                <input
                  name="interest"
                  id="interest"
                  type="text"
                  placeholder="Enter Student Interest"
                  className=" w-full p-3 mt-2 rounded-lg outline-none border border-[#BFBFBF]"
                />
              </div>

              <div className=" mt-4">
                <label className=" text-[#5F5F5F] " htmlFor="met">
                  Criteria to be met{" "}
                  <span className=" text-[#5f5f5fa6]">
                    (Ex. 80% accuracy, 4 out of 5 trials, etc.)
                  </span>
                </label>
                <input
                  name="met"
                  id="met"
                  type="text"
                  placeholder="Enter Criteria to be met"
                  className=" w-full p-3 mt-2 rounded-lg outline-none border border-[#BFBFBF]"
                />
              </div>

              <button
                onClick={() => setNext(!next)}
                className=" py-3 w-full rounded-lg bg-[#A9F8FD] text-[#555555]  mt-8 font-medium"
              >
                Create
              </button>
            </from>
          ) : (
            <div className=" flex flex-col items-center">
              <Image
                src={img2}
                alt="Picture of the author"
                className=" mt-10"
              />
              <div className=" bg-[#F7F7F7] p-8 mb-3 mt-10 rounded-lg">
                <h1 className=" text-[#616161] text-[22px] font-medium text-center">
                  SMART Goals
                </h1>
                <p className=" text-[#878787] mt-2 text-[18px]">
                  {" "}
                  By the end of the IEP period 4/17/24, Heaven will improve her
                  math calculation skills related to exponents with fractions,
                  moving from her current baseline of correctly solving 40% of
                  problems to accurately solving at least 80% of exponent
                  problems involving fractions, as measured by teacher-created
                  assessments and classroom performance. This goal will support
                  Heaven&apos;s transition goal of becoming a dancer by
                  enhancing her problem-solving abilities, which are essential
                  for understanding complex choreography, managing personal
                  finances, and navigating other aspects of a professional dance
                  career.
                </p>
              </div>
              <div className=" bg-[#F7F7F7] p-8 mb-10 rounded-lg">
                <h1 className=" text-[#616161] text-[22px] font-medium text-center">
                  Short-term objective
                </h1>
                <p className=" text-[#878787] mt-2 text-[18px]">
                  By 7/17/23, Heaven will correctly simplify expressions
                  involving fractional exponents using the rules of exponents,
                  with at least 70% accuracy in 4 out of 5 consecutive trials,
                  as demonstrated in classwork and quizzes.
                </p>
                <p className=" text-[#878787] mt-2 text-[18px]">
                  By 10/17/23, Heaven will accurately solve word problems that
                  require the use of fractional exponents, achieving at least
                  75% accuracy in 4 out of 5 consecutive trials, as assessed by
                  teacher-created problems and in-class assignments.
                </p>
                <p className=" text-[#878787] mt-2 text-[18px]">
                  By 1/17/24, Heaven will demonstrate the ability to apply the
                  properties of exponents product of powers, quotient of powers,
                  power of a power to expressions involving fractional exponents
                  with at least 80% accuracy in 4 out of 5 consecutive trials,
                  as evidenced by classwork, quizzes, and tests.
                </p>
                <p className=" text-[#878787] mt-2 text-[18px]">
                  By 4/17/24, Heaven will exhibit increased confidence and
                  persistence in solving complex math problems involving
                  fractional exponents, as observed by the teacher and
                  documented through self-reflection activities and progress
                  monitoring. Additionally, she will explore the practical
                  applications of math in dance, such as understanding rhythm
                  patterns, calculating measurements for costume design, and
                  managing personal finances as a professional dancer.
                </p>
              </div>
              <div className=" flex items-center w-full gap-10">
                <button className=" w-1/2 py-3 border border-[#A9F8FD] rounded-lg text-[#555555] font-medium">
                  Copy
                </button>
                <button className=" w-1/2 bg-[#A9F8FD] rounded-lg py-3 text-[#555555] font-medium">
                  Save
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Goals;
