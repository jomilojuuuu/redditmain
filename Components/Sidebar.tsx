"use client";

import React, { useState } from "react";
import { TfiHome } from "react-icons/tfi";
import { BiSolidRightTopArrowCircle } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { LuGamepad2 } from "react-icons/lu";

function Sidebar() {
  const [isContentVisible, setIsContentVisible] = useState(false);

  // Function to toggle the visibility of the content
  const toggleContent = () => {
    setIsContentVisible(!isContentVisible);
  };

  return (
    <div className="text-gray-700 p-5 text-sm lg:text-xm border-r-[1px] overflow-y-scroll scrollbar-hide  h-screen sm:max-w-[12rem] lg:max-w-[15rem] hidden md:inline-flex ">
      <div>
        <div className="border-b-2 h-fit pb-3">
          <div className="flex items-center w-48 py-2 px-5 rounded-md cursor-pointer hover:bg-gray-200 hover:text-black">
            <TfiHome className="w-6 h-6" />
            <p className="ml-3 text-sm">Home</p>
          </div>
          <div className="flex items-center w-48 py-2 px-5 rounded-md cursor-pointer hover:bg-gray-200 hover:text-black after:bg-gray-100">
            <BiSolidRightTopArrowCircle className="w-6 h-6" />
            <p className="ml-3 text-sm">Popular</p>
          </div>
        </div>
        <div className=" border-b-2">
          <div
            onClick={toggleContent}
            className="flex justify-between cursor-pointer hover:bg-gray-100 py-3 px-2 my-2 rounded-md"
          >
            <h4>TOPICS</h4>
            <IoIosArrowDown className="w-4 h-4" />
          </div>
          <div>
            {isContentVisible && (
              <div className="transition">
                <div className="ml-4 w-44 flex justify-between cursor-pointer hover:bg-gray-100 py-3 px-2 my-2 rounded-md">
                  <div className="flex items-center">
                    <LuGamepad2 className="w-4 h-4" />
                    <h4 className="ml-3">Gaming</h4>
                  </div>
                  <IoIosArrowDown className="w-4 h-4" />
                </div>
                <div className="ml-4 w-44 flex justify-between cursor-pointer hover:bg-gray-100 py-3 px-2 my-2 rounded-md">
                  <div className="flex items-center">
                    <LuGamepad2 className="w-4 h-4" />
                    <h4 className="ml-3">Gaming</h4>
                  </div>
                  <IoIosArrowDown className="w-4 h-4" />
                </div>
                <div className="ml-4 w-44 flex justify-between cursor-pointer hover:bg-gray-100 py-3 px-2 my-2 rounded-md">
                  <div className="flex items-center">
                    <LuGamepad2 className="w-4 h-4" />
                    <h4 className="ml-3">Gaming</h4>
                  </div>
                  <IoIosArrowDown className="w-4 h-4" />
                </div>
                <div className="ml-4 w-44 flex justify-between cursor-pointer hover:bg-gray-100 py-3 px-2 my-2 rounded-md">
                  <div className="flex items-center">
                    <LuGamepad2 className="w-4 h-4" />
                    <h4 className="ml-3">Gaming</h4>
                  </div>
                  <IoIosArrowDown className="w-4 h-4" />
                </div>
                <div className="ml-4 w-44 flex justify-between cursor-pointer hover:bg-gray-100 py-3 px-2 my-2 rounded-md">
                  <div className="flex items-center">
                    <LuGamepad2 className="w-4 h-4" />
                    <h4 className="ml-3">Gaming</h4>
                  </div>
                  <IoIosArrowDown className="w-4 h-4" />
                </div>
                <div className="ml-4 w-44 flex justify-between cursor-pointer hover:bg-gray-100 py-3 px-2 my-2 rounded-md">
                  <div className="flex items-center">
                    <LuGamepad2 className="w-4 h-4" />
                    <h4 className="ml-3">Gaming</h4>
                  </div>
                  <IoIosArrowDown className="w-4 h-4" />
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="border-b-2">
          <div className="flex justify-between cursor-pointer hover:bg-gray-100 py-3 px-2 my-2 rounded-md">
            <h4>RESOURCES</h4>
            <IoIosArrowDown className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
