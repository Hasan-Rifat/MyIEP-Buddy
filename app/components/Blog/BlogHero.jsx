import Image from "next/image";

// Image Import
import blogHero from "../../../images/blogImg/bloghero.svg";

export default function BlogHero() {
  return (
    <div className=" lg:flex items-center xl:gap-20 gap-10 py-14">
      <div className="lg:w-1/2 mb-10 lg:mb-0">
        <Image
          src={blogHero}
          alt="Picture of the author"
          className=" rounded-lg w-full "
        />
      </div>
      <div className=" lg:w-1/2">
        <h1 className=" text-4xl mb-5 text-[#4D4D4D] font-semibold">
          Lorem Ipsum Dolor Sit{" "}
        </h1>
        <p className=" text-[#4D4D4D] text-lg">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident,
          similique sunt in culpa qui officia deserunt mollitia animi, id est
          laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
          distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
          cumque nihil impedit At vero eos et accusamus et iusto odio
          dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
          atque corrupti quos dolores et quas molestias excepturi sint occaecati
          cupiditate non provident, similique sunt in culpa qui officia deserunt
          mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum
          facilis est et expedita distinctio. Nam libero tempore, cum soluta
          nobis est eligendi optio cumque nihil impedit{" "}
          <span className=" text-[#55B685]">See more ...</span>
        </p>
      </div>
    </div>
  );
}
