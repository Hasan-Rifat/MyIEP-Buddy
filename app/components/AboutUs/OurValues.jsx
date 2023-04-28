import Image from "next/image";
import React from "react";
import OurValuesImg from "../../../images/aboutImg/ourValues.svg";
import Empowerment from "../../../images/aboutImg/empowerment.svg";
import Inclusivity from "../../../images/aboutImg/Inclusivity.svg";
import Innovation from "../../../images/aboutImg/Innovation.svg";
import {} from "@next/font/google";

const values = [
  {
    id: 1,
    image: Empowerment,
    title: "Empowerment",
    description:
      "At MyIEP Buddy, we believe in empowering educators by providing them with the tools, resources, and support needed to create and manage personalized, effective IEP goals and objectives, fostering an environment where every student can thrive.",
  },
  {
    id: 2,
    image: Inclusivity,
    title: "Inclusivity",
    description:
      "MyIEP Buddy is committed to creating a platform that recognizes and respects the diverse needs and abilities of each student. We strive to provide tailored solutions that support every learner's unique journey, fostering a sense of belonging and ensuring equal opportunities for success.",
  },
  {
    id: 3,
    image: Innovation,
    title: "Innovation",
    description:
      "At MyIEP Buddy, we value the power of innovation in transforming the IEP process. By harnessing cutting-edge technology and continuously refining our platform, we strive to provide educators with the most effective and user-friendly tools for creating and managing IEPs.",
  },
];

async function getData() {
  const res = values;
  return res;
}

import { DM_Sans } from "@next/font/google";

const dmSans = DM_Sans({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const OurValues = async () => {
  const data = await getData();
  return (
    <section className={`px-5 lg:px-20 pb-[133px] ${dmSans.className}`}>
      <div className="container mx-auto">
        <div className="text-center">
          <Image
            width={50}
            height={50}
            src={OurValuesImg}
            alt="Our Values Img"
            className="mx-auto"
          />
          <h2 className="text-3xl md:text-[40px] leading-[52.08px] text-[#212936] font-bold mt-6">
            Our <span className="text-[#43A4F5]">Values</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-[193px] mt-[60px]">
          {data.map((item) => (
            <div key={item.id} className="text-center">
              <div className="mb-5">
                <Image src={item.image} alt={item.title} className="mx-auto" />
              </div>
              <h3 className="text-[32px] leading-[56px] font-medium text-[#4D4D4D] mb-[8px] italic">
                {item.title}
              </h3>
              <p className="text-base leading-6 text-[#6B6B6B]  mx-auto">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurValues;
