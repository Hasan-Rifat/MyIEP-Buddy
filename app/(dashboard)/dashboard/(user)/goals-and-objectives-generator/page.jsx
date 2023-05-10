"use client";
import Image from "next/image";
import { useState } from "react";
import React from "react";
// Image import
import img from "../../../../../images/dashboard/user/goalsAndObj/Sales-target.svg";
import img2 from "../../../../../images/dashboard/user/goalsAndObj/goals2.svg";
import { useAiMutation } from "@/redux/features/ai/aiApi";
import { toast } from "react-hot-toast";

const GoalsGenerator = () => {
  const email = JSON.parse(localStorage.getItem("user"))?.email;
  const [ai, { isError, isLoading, data, error }] = useAiMutation();
  const [next, setNext] = useState(true);
  const [resData, setResData] = useState(null);

  const handelSubmit = async (event) => {
    event.preventDefault();
    const firstname = event.target.firstname.value;
    const grade = event.target.grade.value;
    const area = event.target.area.value;
    const skills = event.target.skills.value;
    const date = event.target.date.value;
    const baseline = event.target.baseline.value;
    const interest = event.target.interest.value;
    const met = event.target.met.value;

    const prompt1 = `${firstname}, and his is a ${grade} student,  want to generate a goal for ${area}, Skill to focus on ${skills} to achiebe by the ${date} and the main is to become ${baseline}, she is interest in ${interest} and her Criteria to be ${met} SMART Goals`;

    const prompt2 = `${firstname}, and his is a ${grade} student,  want to generate a goal for ${area}, Skill to focus on ${skills} to achiebe by the ${date} and the main is to become ${baseline}, she is interest in ${interest} and her Criteria to be ${met} Short-term objective`;

    try {
      toast.loading("Loading...", {
        id: "loading",
      });

      const response = await ai({ prompt1, prompt2, email, goal: true });

      toast.remove("loading");
      toast.success("Text generated successfully", {
        id: "success",
      });
      setResData(response.data);
      setNext(false);
    } catch (error) {
      toast.remove("loading");
      toast.error(error.data?.message || error);
    }
  };

  // Rest of your code...

  return (
    <div className=" min-h-screen  bg-[#F2F2F2]  sm:px-10 px-2 pt-5 lg:flex items-center gap-10">
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
          <form onSubmit={handelSubmit}>
            <div>
              <label className=" text-[#5F5F5F] " htmlFor="firstname">
                Student Name{" "}
                <span className=" text-[#5f5f5fa6]">(Only First Name)</span>
              </label>
              <input
                required
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
                required
                name="grade"
                id="grade"
                type="text"
                placeholder="Student Grade"
                className=" w-full p-3 mt-2 rounded-lg outline-none border border-[#BFBFBF]"
              />
            </div>
            <div className=" mt-4">
              <label className=" text-[#5F5F5F] " htmlFor="area">
                Area of need{" "}
                <span className=" text-[#5f5f5fa6]">
                  (Ex. math calculation, reading comprehension, etc.)
                </span>
              </label>
              <select
                required
                id="area"
                name="area"
                class="bg-[#F5F5F5] border border-gray-300 text-gray-900 mt-2 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3  "
              >
                <option selected>Choose a area</option>
                <option value="Math Calculation">Math Calculation</option>
                <option value="Math Problem Solving">
                  Math Problem Solving
                </option>
                <option value="Reading Comprehension">
                  Reading Comprehension
                </option>
                <option value="Basic Reading">Basic Reading</option>
                <option value="Written Expression">Written Expression</option>
                <option value="Behavior">Behavior</option>
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
                required
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
                required
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
                required
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
                required
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
                required
                name="met"
                id="met"
                type="text"
                placeholder="Enter Criteria to be met"
                className=" w-full p-3 mt-2 rounded-lg outline-none border border-[#BFBFBF]"
              />
            </div>

            <button
              type="submit"
              className=" py-3 w-full rounded-lg bg-[#A9F8FD] text-[#555555]  mt-8 font-medium"
            >
              Create
            </button>
          </form>
        ) : (
          <div className=" flex flex-col items-center">
            <Image src={img2} alt="Picture of the author" className=" mt-10" />
            <div className=" bg-[#F7F7F7] p-8 mb-3 mt-10 rounded-lg">
              <h1 className=" text-[#616161] text-[22px] font-medium text-center">
                SMART Goals
              </h1>
              <p className=" text-[#878787] mt-2 text-[18px]">
                {" "}
                {resData?.data?.prompt1}
              </p>
            </div>
            <div className=" bg-[#F7F7F7] p-8 mb-10 rounded-lg">
              <h1 className=" text-[#616161] text-[22px] font-medium text-center">
                Short-term objective
              </h1>
              <p className=" text-[#878787] mt-2 text-[18px]">
                {resData?.data?.prompt2}
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
  );
};

export default GoalsGenerator;
