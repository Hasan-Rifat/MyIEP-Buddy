"use client";
import { useEffect, useState } from "react";
import DashboardNav from "../components/shared/DashboardNav";
import DashboardTopNav from "../components/shared/DashboardTopNav";
import { withAuth } from "../components/shared/withAuth";
import { useRouter } from "next/navigation";

function Layout({ children }) {
  const router = useRouter();
  if (typeof window !== "undefined") {
    const data = JSON.parse(localStorage.getItem("user"));

    if (!data?.token) {
      router.push("/sign-in");
    }
  }

  // Side Navbar
  const [close, setClose] = useState(
    typeof window !== "undefined" && JSON.parse(localStorage.getItem("close"))
  );
  useEffect(() => {
    typeof window !== "undefined" &&
      localStorage.setItem("close", JSON.stringify(close));
    setClose(close);
  }, [close]);

  // prevent hydration error
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);
  if (!hydrated) {
    return null;
  }

  return (
    <section>
      <div className="  fixed bottom-0 top-0 left-[5%7] z-[9999] ">
        <DashboardNav close={close} setClose={setClose} />
      </div>
      <div
        className={` transition-all duration-500 ease-in-out ${
          close ? "ml-16" : "xl:ml-80 ml-16"
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
export default Layout;
