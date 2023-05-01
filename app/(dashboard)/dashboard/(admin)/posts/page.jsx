import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa";
import recentImg from "../../../../../images/dashboard/admin/recent 1.svg";
import singleImg from "../../../../../images/dashboard/admin/singleImg.svg";

const Posts = () => {
  return (
    <section>
      <div className="bg-[#a9f8fd] h-[336px]">
        <div className="container mx-auto lg:px-20 px-5 py-[70px]">
          <FaArrowLeft className="text-[#9B9B9B]" />
          <div>
            <Image alt="" src={singleImg} className="mx-auto" />
          </div>
        </div>
        <div></div>
      </div>
      <div>
        <div className="">
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio. Nam libero tempore, cum soluta nobis est
            eligendi optio cumque nihil impedit .
          </p>
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio. Nam libero tempore, cum soluta nobis est
            eligendi optio cumque nihil impedit .
          </p>
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio. Nam libero tempore, cum soluta nobis est
            eligendi optio cumque nihil impedit .
          </p>
        </div>
      </div>
    </section>
  );
};

export default Posts;
