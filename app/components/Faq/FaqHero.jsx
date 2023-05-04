// Icon import
import { BsSearch } from "react-icons/bs";

export default function FaqHero() {
  return (
    <div>
      <h1 className=" text-4xl text-center font-semibold text-[#232933]">
        Frequently Asked <span className=" text-[#43A4F5]">Questions</span>
      </h1>
      <h1 className="text-[#4D4D4D] text-2xl text-center mt-5">
        Have questions? We&apos;re here to help!
      </h1>
      <div className="  mx-auto w-1/3 flex items-center px-3 mt-8 border border-gray-300 rounded-lg">
        <BsSearch className=" text-gray-400" />
        <input
          className=" w-full bg-transparent outline-none py-2.5 pl-3"
          type="text"
          placeholder="Search"
        />
      </div>
    </div>
  );
}
