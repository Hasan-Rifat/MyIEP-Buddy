import Image from "next/image";
import React from "react";
import pencil from "../../../images/aboutImg/pencil.svg";

const AboutUsSection = () => {
  return (
    <section>
      <div className="container mx-auto px-20">
        <div>
          <div>
            <div>
              <Image src={pencil} width={60} height={60} alt="pencil icon" />
            </div>
            <h2></h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
