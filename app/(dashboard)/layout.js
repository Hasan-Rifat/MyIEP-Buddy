"use client";
import { useEffect, useState } from "react";
import DashboardNav from "../components/shared/DashboardNav";
import DashboardTopNav from "../components/shared/DashboardTopNav";

export default function Layout({ children }) {
  // Side Navbar
  const [close, setClose] = useState(
    typeof window !== "undefined" && JSON.parse(localStorage.getItem("close"))
  );
  useEffect(() => {
    typeof window !== "undefined" &&
      localStorage.setItem("close", JSON.stringify(close));
    setClose(close);
  }, [close]);

  return (
    <section>
      <div className="  fixed bottom-0 top-0 left-[5%7] z-[9999] ">
        <DashboardNav close={close} setClose={setClose} />
      </div>
      <div
        className={` transition-all duration-500 ease-in-out ${close ? "ml-16" : "xl:ml-80 ml-16"
          }`}
      >
        <div>
          <DashboardTopNav />
        </div>

        <div>{children}</div>
      </div>
    </section>
  );
}
