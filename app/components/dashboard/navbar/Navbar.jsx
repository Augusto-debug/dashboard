import React from "react";

const navbar = () => {
  return (
    <nav>
      <div className="flex flex-1 justify-between bg-[#182237] p-5 mx-2 mt-3 rounded-lg items-center">
        <p className="text-white mr-2">Users</p>
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-2 outline-none rounded-lg bg-gray-100"
        />
      </div>
    </nav>
  );
};

export default navbar;
