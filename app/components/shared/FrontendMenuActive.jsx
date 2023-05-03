import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const FrontendMenuActive = ({ children, href }) => {
  const router = useRouter();
  const path = usePathname();

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };
  return (
    <span
      href={href}
      onClick={handleClick}
      className={`${
        path === href ? "text-[#FFAAA9]  " : "text-black hover:text-[#FFAAA9] "
      }`}
    >
      {children}
    </span>
  );
};

export default FrontendMenuActive;
