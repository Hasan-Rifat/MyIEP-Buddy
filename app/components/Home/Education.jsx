import Image from "next/image";

// Image import
import heroSec1 from "../../../images/homeImg/heroSec1.svg";
import heroicon2 from "../../../images/homeImg/heroIcon2.svg";

export default function Education() {
  return (
    <div className="bg-[#F7F9FA] py-20">
      <div className=" container xl:px-20 px-5 mx-auto lg:flex items-center justify-between gap-14">
        <div className=" lg:w-1/2">
          <div className=" h-[50px] bg-[#D4ECDF] rounded-lg w-[50px] flex items-center justify-center mb-6">
            <Image
              src={heroicon2}
              alt="Picture of the author"
              className=" h-9"
            />
          </div>
          <h1 className=" text-[#212936] sm:text-3xl text-2xl font-semibold">
            Dear Special{" "}
            <span className=" text-[#43A4F5]">Education Teachers,</span>
          </h1>

          <p className=" text-[#878787] text-lg mt-4 leading-[30px]">
            We know how hard you work to create a supportive, inclusive learning
            environment for your students. Your dedication goes beyond the
            classroom, as you navigate the complexities of Individualized
            Education Programs (IEPs). That&apos;s why we&apos;re introducing
            MyIEP Buddy, a game-changing solution designed to simplify and
            streamline the IEP process — so you can focus on what matters most:
            your students.
          </p>
        </div>
        <div className=" flex items-center lg:justify-end justify-center mt-10 lg:mt-0 ">
          <Image src={heroSec1} alt="Picture of the author" />
        </div>
      </div>
    </div>
  );
}
