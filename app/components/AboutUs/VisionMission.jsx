import React from "react";
import VisionMissionImg from "../../../images/aboutImg/VisionMission.svg";
import { DM_Sans } from "@next/font/google";
import Image from "next/image";
import vision from "../../../images/aboutImg/vision.svg";
import mission from "../../../images/aboutImg/mission.svg";

const dmSans = DM_Sans({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});
const VisionMission = () => {
  return (
    <section className={`${dmSans.className} pb-[90px]`}>
      <div className="container mx-auto px-5 lg:px-20">
        <div className="text-center">
          <Image
            width={50}
            height={50}
            src={VisionMissionImg}
            alt="Our Values Img"
            className="mx-auto"
          />
          <h2 className="text-3xl md:text-[40px] leading-[52.08px] text-[#212936] font-bold mt-6">
            Vision & <span className="text-[#43A4F5]">Mission</span>
          </h2>
        </div>
        <div>
          <div className="pt-[39px] pl-[47px] pr-[44px] pb-[27px] bg-[#a9f8fd] max-w-[847px] mt-[72px] rounded-[20px]">
            <h3 className="flex gap-3 text-4xl font-semibold text-[#484848] mb-[23px]">
              Vision
              <Image width={28} height={18} src={vision} alt={"vision image"} />
            </h3>
            <p className="text-2xl leading-9 text-justify text-[#484848]">
              At MyIEP Buddy, we envision a future where educators are equipped
              with the tools and support to create exceptional Individualized
              Education Programs, paving the way for students with unique
              learning needs to flourish academically and personally in a
              nurturing and inclusive environment.
            </p>
          </div>
          <div className="pt-[39px] pl-[47px] pr-[44px] pb-[27px] bg-[#212936] ml-auto max-w-[847px] mt-[72px] rounded-[20px]">
            <h3 className="flex gap-3 text-4xl font-semibold text-white mb-[23px]">
              Mission
              <Image
                width={28}
                height={18}
                src={mission}
                alt={"vision image"}
              />
            </h3>
            <p className="text-2xl leading-9 text-justify text-white">
              Our mission at MyIEP Buddy is to provide special education staff
              with an intuitive, user-friendly platform that simplifies the IEP
              goal-setting process. We are dedicated to offering effective
              tools, resources, and support to create and manage individualized,
              SMART IEP goals and objectives that foster growth, inclusivity,
              and success for every student.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
