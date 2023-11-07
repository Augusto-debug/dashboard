"use client";
import React from "react";
import Avatar from "react-avatar";
import {
  SquaresPlusIcon,
  UserCircleIcon,
  ShoppingBagIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
  UsersIcon,
  Cog6ToothIcon,
  QuestionMarkCircleIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/solid";

const Sidebar = () => {
  return (
    <aside>
      <div className="">
        <div className="flex">
          <Avatar
            name="Wim Mostmans"
            size="50"
            round={true}
            className="cursor-pointer"
          />
          <div className="ml-3 cursor-pointer text-white">
            <p>User 1</p>
            <p>Admin</p>
          </div>
        </div>

        <div className="flex flex-col mt-5 space-y-2 w-full ">
          <p className="text-sm justify-start text-gray-400 -ml-2 py-2">
            Pages
          </p>
          <p className="text-white flex items-center cursor-pointer">
            <SquaresPlusIcon
              height={20}
              width={20}
              className="text-gray-400 mr-2"
            />
            Dashboard
          </p>
          <p className="text-white flex items-center cursor-pointer">
            <UserCircleIcon
              height={20}
              width={20}
              className="mr-2 text-gray-400"
            />
            Users
          </p>
          <p className="text-white flex items-center cursor-pointer">
            <ShoppingBagIcon
              height={20}
              width={20}
              className="mr-2 text-gray-400"
            />
            Products
          </p>
          <p className="text-white flex items-center cursor-pointer">
            <CurrencyDollarIcon
              height={20}
              width={20}
              className="mr-2 text-gray-400"
            />
            Transactions
          </p>
          <p className="text-sm justify-start text-gray-400 -ml-2 mb-2 py-2 ">
            Analytics
          </p>

          <p className="text-white flex items-center cursor-pointer">
            <ShoppingBagIcon
              height={20}
              width={20}
              className="mr-2 text-gray-400"
            />
            Revenue
          </p>
          <p className="text-white flex items-center cursor-pointer">
            <ChartBarIcon
              height={20}
              width={20}
              className="mr-2 text-gray-400"
            />
            Reports
          </p>
          <p className="text-white flex items-center cursor-pointer">
            <UsersIcon height={20} width={20} className="mr-2 text-gray-400" />
            Teams
          </p>
          <p className="text-sm justify-start text-gray-400 -ml-2 py-2 ">
            Users
          </p>
          <p className="text-white flex items-center cursor-pointer">
            <Cog6ToothIcon
              height={20}
              width={20}
              className="text-gray-400 mr-2"
            />
            Settings
          </p>
          <p className="text-white flex items-center cursor-pointer">
            <QuestionMarkCircleIcon
              height={20}
              width={20}
              color="text-gray-400"
              className="mr-2 text-gray-400"
            />
            Help
          </p>
          <p className="text-white flex items-center cursor-pointer">
            <ArrowRightCircleIcon
              height={20}
              width={20}
              color="text-gray-400"
              className="mr-2 text-gray-400"
            />
            Logout
          </p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
