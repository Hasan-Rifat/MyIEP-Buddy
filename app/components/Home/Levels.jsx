import Image from "next/image";

// Image import
import heroSec2 from "../../../images/homeImg/heroSec3.svg";
import heroicon2 from "../../../images/homeImg/heroIcon1.svg";

export default function Levels() {
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
            Present Levels <span className=" text-[#43A4F5]">Generator</span>
          </h1>

          <p className=" text-[#878787] text-lg mt-4 leading-[30px]">
            MyIEP Buddy&apos;s cutting-edge AI technology can craft Present
            Level statements to provide a solid foundation for your IEPs. Use
            these statements as a starting point and modify them to accurately
            reflect your students’ current performance and progress.
          </p>
        </div>
        <div className=" flex items-center justify-end mt-10 lg:mt-0 ">
          <Image src={heroSec2} alt="Picture of the author" />
        </div>
      </div>
    </div>
  );
}
