import React from "react";
import aboutHero from "../../../images/aboutImg/aboutHero.svg";
import Image from "next/image";

const AboutHero = () => {
  return (
    <section className="py-[88px] ">
      <div className="relative w-full h-[557px]">
        <div class="w-full h-full flex justify-center items-center overflow-hidden absolute left-0 top-0 z-10 bg-black ">
          <Image
            src={aboutHero}
            alt="Hero Image"
            className="object-cover object-top h-full w-full"
            fill
          />

          <div className="bg-black h-full w-full opacity-50 absolute left-0 top-0"></div>

          <div className="container mx-auto px-20 z-30">
            <div class="flex flex-col justify-center items-center px-3">
              <h1 class=" text-center text-3xl md:text-5xl text-white font-bold drop-shadow-lg mb-[24px]">
                About MyIEP Buddy
              </h1>
              <p class="mt-5 text-center text-2xl text-white opacity-100">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
