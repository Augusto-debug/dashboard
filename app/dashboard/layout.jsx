import React from "react";
import Sidebar from "../components/dashboard/sidebar/Sidebar";
import Navbar from "../components/dashboard/navbar/Navbar";

const layout = ({ children }) => {
  return (
    <div className="flex bg-gray-200   ">
      <div className=" h-screen w-[35%] md:w-1/5 p-5 bg-[#182237]">
        <Sidebar />
      </div>
      <div className="flex flex-col w-full">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default layout;
