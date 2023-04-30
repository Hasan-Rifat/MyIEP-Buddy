import FaqHero from "@/app/components/Faq/FaqHero";
import FaqAccording from "@/app/components/Faq/FaqAccording";
import Question from "@/app/components/Faq/Question";

const Faq = () => {

  return (
    <div className="bg-[#F7F9FA] pb-14 ">
      <div className='bg-[#F7F9FA] py-20'>
        <div className=' container mx-auto xl:px-20 px-5'>
          <FaqHero />
          <FaqAccording />
        </div>
      </div>
      <div className="bg-[#A9F8FD] py-14 ">
        <Question />
      </div>
    </div>
  )
};

export default Faq;
