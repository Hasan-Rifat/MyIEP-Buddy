import aboutHero from "../../../images/aboutImg/aboutHero.svg";
import Image from "next/image";
import { Red_Hat_Display } from "@next/font/google";

const redFont = Red_Hat_Display({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const AboutHero = () => {
  return (
    <section className={redFont.className}>
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
              {/*  <p class="mt-5 text-center text-2xl text-white opacity-100">
                Have questions? We&apos;re here to help!
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
