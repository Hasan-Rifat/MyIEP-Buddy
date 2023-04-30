import Image from "next/image";

// Image import
import circle1 from "../../../images/logo/circle1.svg";
import circle2 from "../../../images/logo/circle2.svg";
import Suggestions from "../../../images/Suggestion/suggestion.svg";

const Suggestion = () => {
  return (
    <div>
      <Image
        src={circle1}
        alt="Picture of the author"
        className=" absolute top-0 left-0 z-[1] hidden md:block"
      />

      <Image
        src={circle2}
        alt="Picture of the author"
        className=" absolute -bottom-80 right-0 z-[-1] hidden md:block"
      />

      <div className=" py-20 z-[-100] ">
        <div className=" container mx-auto lg:px-20 px-5 md:flex gap-16  ">
          <div className=" md:w-2/5 z-[100] mb-10 md:mb-0">
            <h1 className=" text-2xl font-medium text-[#616161]">
              Suggestion Box
            </h1>
            <p className=" text-[#878787] mt-3 mb-16 z-[100]">
              Your voice matters! Share your ideas and feedback with the MyIEP
              Buddy Suggestion Box. Help us shape the future of IEP creation
              together!
            </p>

            <Image
              src={Suggestions}
              alt="Picture of the author"
              className=" mx-auto"
            />
          </div>
          <div className="md:w-3/5 z-[100]">
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
                <label className=" text-[#5F5F5F] text-sm " htmlFor="text">
                  Suggestion *
                </label>
                <textarea
                  className=" mt-1.5 w-full py-2.5 bg-transparent outline-none border border-[#BFBFBF] px-3 rounded-lg"
                  name="text"
                  id="text"
                  cols="30"
                  rows="8"
                  placeholder="Your Suggestion"
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
  );
};

export default Suggestion;
