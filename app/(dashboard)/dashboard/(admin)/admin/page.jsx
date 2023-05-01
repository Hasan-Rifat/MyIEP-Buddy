import React from "react";

import { DM_Sans, Poppins } from "next/font/google";

const dmSans = DM_Sans({
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});
const poppins = Poppins({
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const AdminDashboard = () => {
  return (
    <section className={`bg-[#f2f2f2] ${dmSans.className}`}>
      <div className="container mx-auto xl:px-20 px-5">
        <div className="max-w-[1026px] mx-auto pt-[42px] pb-[35px]">
          <div>
            <form>
              <input
                type="text"
                placeholder="Title"
                className="p-5 border-[#00000026] rounded-[10px] w-full bg-[#FCFCFD] text-[#00000080] text-[14px] leading-[18px] appearance-none  focus:outline-none focus:shadow-outline"
              />
              <textarea
                rows="10"
                placeholder="Description"
                className="p-5 border-[#00000026] rounded-[10px] w-full bg-[#FCFCFD] text-[#00000080] text-[14px] leading-[18px] appearance-none  focus:outline-none focus:shadow-outline mt-[10px]"
              ></textarea>
              <div
                className={`mt-[30px] mb-[40px] ${poppins.className} grid grid-cols-1 lg:grid-cols-5 gap-10`}
              >
                <button className="col-span-2 py-[14px] block lg:px-[132px] text-[14px] leading-[21px] text-[#555555] bg-[#a9f8fd] rounded-[10px]">
                  Save
                </button>
                <div className="hidden lg:block"></div>
                <button className="col-span-2 py-[12px] block lg:px-[100px] text-[14px] leading-[21px] text-[#555555] border-[2px] border-[#000000b3] border-dashed rounded-[10px]">
                  Add Attachment
                </button>
              </div>
            </form>
          </div>
          <div>
            <div>
              <div className="bg-[#8DDBE0] rounded-[10px] py-[27px] px-[19px] text-white">
                <div className="flex flex-col lg:flex-row flex-wrap items-center">
                  <p className="text-xs font-medium lg:w-1/2">Select All</p>
                  <h2 className="uppercase text-xl lg:w-1/2">resent posts</h2>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-[#919eab1a] rounded-[10px] mt-5 p-5 flex flex-col md:flex-row flex-wrap justify-between">
                <div className="flex gap-5 flex-wrap">
                  <input type="checkbox" /> <p>Lorem ipsum dolor enet</p>
                </div>
                <div className="flex gap-5 sm:gap-[31px] flex-wrap mt-5">
                  <button className="text-base leading-[21px] text-black">
                    Edit
                  </button>
                  <button className="text-base leading-[21px] text-[#E94F1E]">
                    Delete
                  </button>
                  <button className="text-base leading-[21px] text-[#43A4F5]">
                    Hide Post
                  </button>
                </div>
              </div>
              <div className="bg-[#919eab1a] rounded-[10px] mt-5 p-5 flex flex-col md:flex-row flex-wrap justify-between">
                <div className="flex gap-5">
                  <input type="checkbox" /> <p>Lorem ipsum dolor enet</p>
                </div>
                <div className="flex gap-[31px] mt-5">
                  <button className="text-base leading-[21px] text-black">
                    Edit
                  </button>
                  <button className="text-base leading-[21px] text-[#E94F1E]">
                    Delete
                  </button>
                  <button className="text-base leading-[21px] text-[#43A4F5]">
                    Hide Post
                  </button>
                </div>
              </div>
              <div className="bg-[#919eab1a] rounded-[10px] mt-5 p-5 flex flex-col md:flex-row flex-wrap justify-between ">
                <div className="flex gap-5 mt-5">
                  <input type="checkbox" /> <p>Lorem ipsum dolor enet</p>
                </div>
                <div className="flex gap-[31px]">
                  <button className="text-base leading-[21px] text-black">
                    Edit
                  </button>
                  <button className="text-base leading-[21px] text-[#E94F1E]">
                    Delete
                  </button>
                  <button className="text-base leading-[21px] text-[#43A4F5]">
                    Hide Post
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminDashboard;
