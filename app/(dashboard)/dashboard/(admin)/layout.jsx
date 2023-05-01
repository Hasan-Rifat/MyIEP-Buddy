import React from "react";
import AdminNav from "@/app/components/shared/AdminNav";

const layout = ({ children }) => {
  return (
    <>
      <AdminNav />
      {children}
    </>
  );
};

export default layout;
