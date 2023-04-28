import React from "react";
import aboutHero from "../../../../images/aboutHero.svg";
import Image from "next/image";

const AboutHero = () => {
  return (
    <section className="py-[88px] ">
      <div className="">
        <div class="w-full h-[557px] flex justify-center items-center overflow-hidden relative bg-black bg-opacity-50">
          <Image
            src={aboutHero}
            alt="Hero Image"
            className="object-cover"
            fill
          />
          <div className="container mx-auto px-20">
            <div class="flex flex-col justify-center items-center px-3">
              <h1 class=" text-center text-3xl md:text-5xl text-white font-bold drop-shadow-lg">
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
