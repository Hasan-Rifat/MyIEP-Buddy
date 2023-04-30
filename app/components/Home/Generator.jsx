import Image from "next/image";

// Image import
import heroSec2 from "../../../images/homeImg/heroSec2.svg";
import heroicon2 from "../../../images/homeImg/heroIcon3.svg";

export default function Generator() {
  return (
    <div className="bg-[#F7F9FA] py-20">
      <div className=" container xl:px-20 px-5 mx-auto lg:flex items-center justify-between gap-14">
        <div className=" flex items-center justify-end ">
          <Image src={heroSec2} alt="Picture of the author" />
        </div>
        <div className=" lg:w-1/2 mt-10 lg:mt-0">
          <div className=" h-[50px] bg-[#D4ECDF] rounded-lg w-[50px] flex items-center justify-center mb-6">
            <Image
              src={heroicon2}
              alt="Picture of the author"
              className=" h-9"
            />
          </div>
          <h1 className=" text-[#212936] sm:text-3xl text-2xl font-semibold">
            Goals and Objectives{" "}
            <span className=" text-[#43A4F5]">Generator</span>
          </h1>

          <p className=" text-[#878787] text-lg mt-4 leading-[30px]">
            MyIEP Buddy&apos;s intuitive platform offers a comprehensive library
            of suggested goals, objectives, and benchmarks tailored to your
            students’ unique needs. Explore and customize them to create the
            perfect IEP that aligns with your students’ strengths and areas for
            growth.
          </p>
        </div>
      </div>
    </div>
  );
}
