import Image from "next/image";
import arrow from "../../../../../images/dashboard/admin/rightArrow.svg";

import { DM_Sans } from "next/font/google";
const dmSans = DM_Sans({
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});
const SummeryEveryGeneratorSResults = () => {
  const data = [
    {
      id: 1,
      title: "goals results",
      heading: "At vero eos et accusamus et iusto odio dignissimos..",
      description: [
        "By 7/17/23, Heaven will correctly simplify expressions involving fractional exponents using the rules of exponents, with at least 70% accuracy in 4 out of 5 consecutive trials, as demonstrated in classwork and quizzes.",
        "By 10/17/23, Heaven will accurately solve word problems that require the use of fractional exponents, achieving at least 75% accuracy in 4 out of 5 consecutive trials, as assessed by teacher-created problems and in-class assignments.",
        "By 1/17/24, Heaven will demonstrate the ability to apply the properties of exponents (product of powers, quotient of powers, power of a power) to expressions involving fractional exponents with at least 80% accuracy in 4 out of 5 consecutive trials, as evidenced by classwork, quizzes, and tests.",
      ],
    },
    {
      id: 2,
      title: "accomodations results",
      heading: "At vero eos et accusamus et iusto odio dignissimos.. ",
      description: [
        "The Learning Environment",
        "1960s with the release of Letraset sheets containing Lorem Ipsum passages",
        "Teaching Methods",
        "1960s with the release of Letraset sheets containing Lorem Ipsum passages",
      ],
    },
    {
      id: 3,
      title: "Present level results",
      heading: "At vero eos et accusamus et iusto odio dignissimos..",
      description: [
        "Student’s Strengths",
        "1960s with the release of Letraset sheets containing Lorem Ipsum passages",
        "Student’s Weaknesses",
        "1960s with the release of Letraset sheets containing Lorem Ipsum passages",
        "Student’s Accommodations",
        "1960s with the release of Letraset sheets containing Lorem Ipsum passages",
      ],
    },
    {
      id: 4,
      title: "progress monitoring ideas results",
      heading: "At vero eos et accusamus et iusto odio dignissimos..",
      description: [
        "By 7/17/23, Heaven will correctly simplify expressions involving fractional exponents using the rules of exponents, with at least 70% accuracy in 4 out of 5 consecutive trials, as demonstrated in classwork and quizzes.",
        "By 10/17/23, Heaven will accurately solve word problems that require the use of fractional exponents, achieving at least 75% accuracy in 4 out of 5 consecutive trials, as assessed by teacher-created problems and in-class assignments.",
        "By 1/17/24, Heaven will demonstrate the ability to apply the properties of exponents (product of powers, quotient of powers, power of a power) to expressions involving fractional exponents with at least 80% accuracy in 4 out of 5 consecutive trials, as evidenced by classwork, quizzes, and tests.",
      ],
    },
  ];

  return (
    <section className={`bg-[#F2F2F2] ${dmSans.className}`}>
      <div className="container mx-auto xl:px-20 px-5 pt-10 pb-[126px]">
        <div className="">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[76px]">
            {data.map((item) => (
              <div key={item.id}>
                <h3 className="text-xl text-[#4D4D4D] text-center mb-[10px]">
                  {item.title}
                </h3>
                <div className="bg-[#A9F8FD]  p-5 rounded-[5px] shadow-[0px_5px_15px_rgba(0,0,0,0.05)] h-full">
                  <div className="flex gap-2 justify-between mt-[7px]">
                    <div className="bg-[#fff] pl-[20px] pr-[86px] py-[8px] rounded-[3px]">
                      <h4 className="text-lg text-[#4D4D4D] font-medium">
                        {item.heading}
                      </h4>
                    </div>
                    <Image src={arrow} alt="arrow" className="inline-block" />
                  </div>
                  <div className="py-[23px] px-5 bg-white rounded-[3px] mt-[7px] min-h-[337px]">
                    {item.description.map((p, i) => (
                      <p className="my-6 text-base text-[#878787]" key={i}>
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SummeryEveryGeneratorSResults;
