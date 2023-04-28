import Link from "next/link";
import React from "react";

const SignUp = () => {
  return (
    <section className="">
      <div className="pt-[42px]">
        <div className="pl-[120px]">
          <p className="text-[#111827] text-base leading-5 ">
            Already have an account? <Link href={"/sign-in"}>Sign in</Link>
          </p>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
