import Image from "next/image";

// Image import
import circle1 from "../../../images/logo/circle1.svg";
import circle2 from "../../../images/logo/circle2.svg";

// Icons Import
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import Link from "next/link";
const ContactFrom = () => {
  return (
    <section>
      <div>
        <Image
          src={circle1}
          alt="Picture of the author"
          className=" absolute top-0 left-0 z-[-1] hidden md:block"
        />

        <Image
          src={circle2}
          alt="Picture of the author"
          className=" absolute -bottom-80 right-0 z-[-1] hidden md:block"
        />

        <div className=" py-20 z-[-100] ">
          <div className=" container mx-auto xl:px-20 px-5 lg:flex gap-16  ">
            <div className=" lg:w-2/5 z-[100] mb-16 lg:mb-0">
              <div className=" px-7 contactBox py-8 rounded-3xl text-white h-full">
                <h1 className="  text-2xl mb-7">Get in touch</h1>

                <div className="mt-20">
                  <h2 className=" text-xl mt-5 mb-2">Social Media</h2>
                  <div className="flex items-center gap-5 mt-7 sm:mt-0">
                    <Link href={"https://www.instagram.com/myiepbuddy"}>
                      <div className=" w-[34px] h-[34px] rounded-full flex items-center justify-center text-xs border border-[#ffffff] ">
                        <AiFillInstagram size={13} />
                      </div>
                    </Link>
                    <Link href={"https://www.facebook.com/myiepbuddy"}>
                      <div className=" w-[34px] h-[34px] rounded-full flex items-center justify-center text-xs  border border-[#ffffff]">
                        <FaFacebookF size={13} />
                      </div>
                    </Link>
                    <Link href={"https://twitter.com/myiepbuddy"}>
                      <div className=" w-[34px] h-[34px] rounded-full flex items-center justify-center text-xs  border border-[#ffffff]">
                        <BsTwitter size={13} />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-3/5 z-[100]">
              <form>
                <div className=" flex items-center gap-7 mb-5">
                  <div className=" w-full">
                    <label className=" text-[#5F5F5F] text-sm" htmlFor="fname">
                      First Name *
                    </label>
                    <input
                      id="fname"
                      name="fname"
                      type="text"
                      placeholder=" Enter First Name"
                      className="mt-1.5 w-full py-2.5 bg-transparent outline-none border border-[#BFBFBF] px-3 rounded-lg"
                    />
                  </div>
                  <div className=" w-full">
                    <label className=" text-[#5F5F5F] text-sm" htmlFor="lname">
                      Last Name *
                    </label>
                    <input
                      id="lname"
                      name="lname"
                      type="text"
                      placeholder=" Enter Last Name"
                      className="mt-1.5 w-full py-2.5 bg-transparent outline-none border border-[#BFBFBF] px-3 rounded-lg"
                    />
                  </div>
                </div>

                <div className=" mb-5">
                  <label className=" text-[#5F5F5F] text-sm" htmlFor="email">
                    Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter Email"
                    className=" mt-1.5 w-full py-2.5 bg-transparent outline-none border border-[#BFBFBF] px-3 rounded-lg"
                  />
                </div>

                <div className=" mb-5">
                  <label className=" text-[#5F5F5F] text-sm" htmlFor="subject">
                    Subject *
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Enter Subject"
                    className="mt-1.5 w-full py-2.5 bg-transparent outline-none border border-[#BFBFBF] px-3 rounded-lg"
                  />
                </div>

                <div className=" mb-5">
                  <label className=" text-[#5F5F5F] text-sm " htmlFor="text">
                    Message *
                  </label>
                  <textarea
                    className=" mt-1.5 w-full py-2.5 bg-transparent outline-none border border-[#BFBFBF] px-3 rounded-lg"
                    name="text"
                    id="text"
                    cols="30"
                    rows="8"
                    placeholder="Your Message"
                  ></textarea>
                </div>

                <button
                  type="button"
                  class="py-3 w-full text-center bg-[#A9F8FD] text-[#555555] text-sm font-medium rounded-md"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFrom;
