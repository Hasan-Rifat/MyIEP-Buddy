import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import React from "react";

const ActiveLink = ({ children, href }) => {
  const router = useRouter();
  const path = usePathname();

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <span>
      <Link
        href={href}
        onClick={handleClick}
        className={`mt-5 ${
          path === href && "text-[#202020]  bg-[#ffffffd4] rounded-[6.68571px]"
        }`}
      >
        {children}
      </Link>
    </span>
  );
};

export default ActiveLink;
