import Image from "next/image";

// Image import
import hero from "../../../images/homeImg/hero.svg";
import heroicon1 from "../../../images/homeImg/heroIcon1.svg";
import heroicon2 from "../../../images/homeImg/heroIcon2.svg";
import heroicon3 from "../../../images/homeImg/heroIcon3.svg";
import heroicon4 from "../../../images/homeImg/heroIcon4.svg";

export default function Hero() {
  return (
    <div className=" bg-[#F7F9FA] z-[-10] overflow-hidden">
      <div className=" container xl:px-20 px-5 mx-auto lg:flex sm:py-40 py-32 relative">
        <div className=" lg:w-1/2 relative z-[10]">
          <h1 className=" 2xl:text-[68px]  2xl:leading-[96px] lg:leading-[72px] md:leading-[72px] sm:text-6xl text-5xl font-bold text-black  mb-7">
            <span className=" text-[#FFAAA9]">Never struggle with </span>writing
            an IEP ever again.
          </h1>
          <p className=" text-[#868686] text-[18px] w-4/5 mb-8 ">
            You have enough going on. Make your life easier with MyIEP
            Buddy–your own IEP writing assistant!
          </p>
          <button className=" py-2 px-7 bg-[#A9F8FD] rounded-lg uppercase">
            Get Started
          </button>
          <div className=" absolute z-[-10] opacity-70 -top-20 -right-40 h-[600px] w-[600px] rounded-full bg-gradient-radial from-[#a9fde7] via-[#a9f7fd00] to-[#ffffff00]"></div>
        </div>
        <div className=" lg:w-1/2 z-[100] relative xl:pb-5 lg:pb-0 pb-5 mt-10 lg:mt-0">
          <Image src={hero} alt="Picture of the author" className=" w-full  " />
          <div className=" w-full xl:h-full lg:h-[90%] h-full bg-[#A9F8FD] rounded-[40px] absolute top-0 left-0 z-[-1]"></div>
        </div>

        <div>
          <Image
            src={heroicon1}
            alt="Picture of the author"
            className=" absolute top-16 sm:left-[20%] left-[5%] h-14 sm:h-auto"
          />
          <Image
            src={heroicon2}
            alt="Picture of the author"
            className=" absolute top-16 right-[35%] h-14 sm:h-auto"
          />
          <Image
            src={heroicon3}
            alt="Picture of the author"
            className=" absolute bottom-16 left-[25%] h-14 sm:h-auto"
          />
          <Image
            src={heroicon4}
            alt="Picture of the author"
            className=" absolute bottom-16 right-[25%] h-14 sm:h-auto"
          />
        </div>
      </div>
    </div>
  );
}
