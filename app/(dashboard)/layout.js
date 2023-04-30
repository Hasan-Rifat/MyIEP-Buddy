import DashboardNav from "../components/shared/DashboardNav";

export default function Layout({ children }) {
  return (
    <section>
      <div className="  fixed bottom-0 top-0 left-[5%7] z-[9999] ">
        <DashboardNav />
      </div>
      <div>{children}</div>
    </section>
  );
}
