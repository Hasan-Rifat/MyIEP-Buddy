"use client";
import { use, useEffect, useState } from "react";
import DashboardNav from "../components/shared/DashboardNav";
import DashboardTopNav from "../components/shared/DashboardTopNav";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setUserInfo } from "@/redux/features/user/userSlice";
import { useGetPaymentByEmailQuery } from "@/redux/features/payment/paymantApi";
import { toast } from "react-hot-toast";
import Loading from "../components/shared/Loading";

function Layout({ children }) {
  const [loading, SetLoading] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const data =
    typeof window !== "undefined" && JSON.parse(localStorage.getItem("user"));
  const {
    isLoading,
    error,
    data: paymentData,
  } = useGetPaymentByEmailQuery(data?.user?.email);

  useEffect(() => {
    if (!data?.token) {
      router.push("/sign-in");
    }
  }, [data?.token, router]);

  useEffect(() => {
    SetLoading(true);
    // user is logged in but not paid then redirect to payment page
    if (
      data?.email === paymentData?.email &&
      paymentData?.status === "active"
    ) {
      router.push("/dashboard");
    } else if (paymentData?.status !== "active") {
      const paymentPageTimeout = setTimeout(() => {
        // toast.error("Please complete your payment");
        router.push("/pricing");
      }, 2000);
      return () => clearTimeout(paymentPageTimeout);
    }
    SetLoading(false);
  }, [data?.email, paymentData, router]);

  useEffect(() => {
    dispatch(setUserInfo(data));
  }, [data, dispatch]);
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
  /*   const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);
  if (!hydrated) {
    return null;
  } */

  if (isLoading || loading) {
    return <Loading />;
  } else if (error) {
    toast.error(error.data.error, {
      id: "error",
    });
  }

  toast.dismiss("loading");

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

// data?.email === payment?.email ? 'dashboard' : 'payment page'
