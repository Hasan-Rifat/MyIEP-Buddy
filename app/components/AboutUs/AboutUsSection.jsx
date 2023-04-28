import Image from "next/image";
import React from "react";
import pencil from "../../../images/aboutImg/pencil.svg";
import aboutUs from "../../../images/aboutImg/about us.svg";

const AboutUsSection = () => {
  return (
    <section>
      <div className="px-20">
        <div className="max-w-[1283px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-[60px] ">
            <div className="col-span-3 order-last lg:order-first">
              <div>
                <Image src={pencil} width={60} height={60} alt="pencil icon" />
              </div>
              <div className="mt-5">
                <h2 className="text-3xl md:text-[40px] leading-[52.08px] text-[#212936] font-bold ">
                  About <span className="text-[#43A4F5]">Us</span>
                </h2>
                <div className="mt-5 text-2xl leading-[37.25px] text-justify text-[#878787] font-normal">
                  <p>
                    MyIEP Buddy is an innovative platform built by a special
                    education teacher for special education teachers and staff.
                    We are passionate about empowering students with unique
                    learning needs. Our goal is to simplify and streamline the
                    IEP goal-setting process for educators, providing them with
                    the tools and resources they need to create and manage
                    personalized, effective IEP goals and objectives.
                  </p>
                  <p className="my-7">
                    We understand the challenges faced by special education
                    teachers and families in navigating the complex world of
                    IEPs, and we are committed to offering an intuitive,
                    user-friendly solution that makes a meaningful difference in
                    the lives of our users.
                  </p>
                  <p>
                    At MyIEP Buddy, we believe that every student has the
                    potential to succeed, and it is our mission to foster
                    growth, inclusivity, and success by providing a
                    comprehensive platform that supports individualized learning
                    experiences.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-2 order-first lg:order-l">
              <Image src={aboutUs} alt="about us" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
