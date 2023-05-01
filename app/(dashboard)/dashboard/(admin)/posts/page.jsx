import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa";
import recentImg from "../../../../../images/dashboard/admin/recent 1.svg";
import singleImg from "../../../../../images/dashboard/admin/singleImg.svg";

import { DM_Sans, Red_Hat_Display } from "next/font/google";

const redHotDisplay = Red_Hat_Display({
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const Posts = () => {
  return (
    <section className="bg-[#F2F2F2] pb-7 2xl:pb-[15rem]">
      <div className="bg-[#a9f8fd] h-[336px]">
        <div className="container mx-auto xl:px-20 px-5 py-[70px] flex">
          <FaArrowLeft className="text-[#9B9B9B] inline-block" />
          <div className="w-full">
            <Image alt="" src={singleImg} className="mx-auto" />
          </div>
        </div>
        <div></div>
      </div>
      <div className="h-full xl:px-20 px-5 ">
        <div className="grid grid-cols-1 lg:grid-cols-5 xl:grid-cols-4 gap-[33px]">
          <div className="hidden xl:block "></div>
          <div className="col-span-3 xl:col-span-2 pt-[103px]">
            <div className="text-base text-[#4D4D4D] ">
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                rerum facilis est et expedita distinctio. Nam libero tempore,
                cum soluta nobis est eligendi optio cumque nihil impedit .
              </p>
              <p className="py-10">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                rerum facilis est et expedita distinctio. Nam libero tempore,
                cum soluta nobis est eligendi optio cumque nihil impedit .
              </p>
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                rerum facilis est et expedita distinctio. Nam libero tempore,
                cum soluta nobis est eligendi optio cumque nihil impedit .
              </p>
            </div>
            <div className="text-sm text-[#4d4d4d80] mt-5">
              <p>Admin</p>
              <p className="mt-[10px]">April 25, 2023</p>
            </div>
          </div>
          <div className="col-span-2 xl:col-span-1">
            <div
              className={`${redHotDisplay.className} xl:h-[221px] xl:w-[313px]`}
            >
              <h3 className="text-[#4D4D4D] text-lg font-medium mb-[10px] mt-[15px] md:mt-24 xl:mt-[33px]">
                Recent Posts
              </h3>
              {/* recent post */}
              <div className={`${dmSans.className} `}>
                <div className="relative rounded-[20px] overflow-hidden">
                  <div className="w-full h-full card absolute left-0 top-0 z-20 rounded-[18px]"></div>
                  <Image
                    src={recentImg}
                    alt="recentImg"
                    className="absolute left-0 top-0 w-full  z-10 rounded-[20px] m-0"
                  />
                  <div className="px-[18px] pt-[88px] pb-[13px] text-white relative z-30">
                    <h3 className="  pr-[51px] text-lg leading-[23px] font-bold  ">
                      Sed do euismod tempor incididunt
                    </h3>
                    <p className="text-sm leading-[18.2px]">
                      Itaque earum rerum hic tenetur a sapiente delectus, ut aut
                      reiciendis voluptatibus maiores alias consequatur aut
                      perferendis
                    </p>
                  </div>
                </div>
              </div>
              <div className={`${dmSans.className} my-[10px]`}>
                <div className="relative rounded-[20px] overflow-hidden">
                  <div className="w-full h-full card absolute left-0 top-0 z-20 rounded-[18px]"></div>
                  <Image
                    src={recentImg}
                    alt="recentImg"
                    className="absolute left-0 top-0 w-full  z-10 rounded-[20px] m-0"
                  />
                  <div className="px-[18px] pt-[88px] pb-[13px] text-white relative z-30">
                    <h3 className="  pr-[51px] text-lg leading-[23px] font-bold  ">
                      Sed do euismod tempor incididunt
                    </h3>
                    <p className="text-sm leading-[18.2px]">
                      Itaque earum rerum hic tenetur a sapiente delectus, ut aut
                      reiciendis voluptatibus maiores alias consequatur aut
                      perferendis
                    </p>
                  </div>
                </div>
              </div>
              <div className={`${dmSans.className} `}>
                <div className="relative rounded-[20px] overflow-hidden">
                  <div className="w-full h-full card absolute left-0 top-0 z-20 rounded-[18px]"></div>
                  <Image
                    src={recentImg}
                    alt="recentImg"
                    className="absolute left-0 top-0 w-full  z-10 rounded-[20px] m-0"
                  />
                  <div className="px-[18px] pt-[88px] pb-[13px] text-white relative z-30">
                    <h3 className="  pr-[51px] text-lg leading-[23px] font-bold  ">
                      Sed do euismod tempor incididunt
                    </h3>
                    <p className="text-sm leading-[18.2px]">
                      Itaque earum rerum hic tenetur a sapiente delectus, ut aut
                      reiciendis voluptatibus maiores alias consequatur aut
                      perferendis
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Posts;
