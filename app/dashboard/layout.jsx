import React from "react";
import Sidebar from "../components/dashboard/sidebar/Sidebar";
import Navbar from "../components/dashboard/navbar/Navbar";

const layout = ({ children }) => {
  return (
    <div className="flex h-full">
      <div className="w-full">
        <Sidebar />
      </div>
      <div className="">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default layout;
