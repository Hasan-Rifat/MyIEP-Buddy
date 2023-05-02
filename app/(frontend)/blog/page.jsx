import BlogHero from "@/app/components/Blog/BlogHero";
import EducationBlog from "@/app/components/Home/EducationBlog";

export default function page() {
  return (
    <div className=" bg-[#F7F9FA] py-20">
      <div className=" container xl:px-20 px-5 mx-auto">
        <h1 className=" text-4xl text-center font-semibold text-[#232933]">
          Latest <span className=" text-[#43A4F5]">Blog</span>
        </h1>
        <BlogHero />
        <EducationBlog />
        <div className=" flex items-center justify-center">
          <button className=" py-2.5 px-10 text-[#4D4D4D] font-medium bg-[#A9F8FD] rounded-lg">
            See More
          </button>
        </div>
      </div>
    </div>
  );
}
