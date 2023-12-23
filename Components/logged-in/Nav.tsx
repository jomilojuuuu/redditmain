import React from "react";
import { PiRocket } from "react-icons/pi";
import { LiaFireSolid } from "react-icons/lia";
import { GiCircleClaws } from "react-icons/gi";
import { FaRegRectangleList } from "react-icons/fa6";
import { BiSolidArrowFromBottom } from "react-icons/bi";
import { AiOutlineEllipsis } from "react-icons/ai";

function Nav() {
  return (
    <div className="flex justify-between bg-white p-3 items-center w-[640px] border-2 rounded-md mt-5">
      <div className="flex">
        <button className="ml-2 rounded-full py-1 px-2 font-semibold flex text-blue-700 hover:bg-gray-300 items-center">
          <PiRocket className="pr-1 w-6 h-6" />
          Best
        </button>
        <button className="ml-2 rounded-full py-1 px-2 font-semibold flex hover:bg-gray-300 items-center">
          <LiaFireSolid className="pr-1 w-6 h-6" />
          Hot
        </button>
        <button className="ml-2 rounded-full py-1 px-2 font-semibold flex hover:bg-gray-300 items-center">
          <GiCircleClaws className="pr-1 w-6 h-6" />
          New
        </button>
        <button className="ml-2 rounded-full py-1 px-2 font-semibold flex hover:bg-gray-300 items-center">
          <BiSolidArrowFromBottom className="pr-1 w-6 h-6" />
          Top
        </button>
        <button className="ml-2 rounded-full p-1 font-semibold flex hover:bg-gray-300 items-center">
          <AiOutlineEllipsis className="pr-1 w-6 h-6" />
        </button>
      </div>
      <div className="">
        <button className="ml-4 rounded-full py-1 px-2 font-semibold flex bg-gray-200 hover:bg-gray-300 items-center">
          <BiSolidArrowFromBottom className="pr-1 w-6 h-6" />
          <BiSolidArrowFromBottom className="pr-1 w-6 h-6" />
        </button>
      </div>
    </div>
  );
}

export default Nav;
