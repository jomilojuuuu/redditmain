import React from "react";
import logo from "../logged-in/images/logo.png";
import { FiSearch } from "react-icons/fi";
import { AiFillHome } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { PiArrowCircleUpRightLight } from "react-icons/pi";
import { FaRegCommentDots } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlinePlus } from "react-icons/ai";
import { HiOutlineMegaphone } from "react-icons/hi2";
import { CgProfile } from "react-icons/cg";

function Header() {
  return (
    <div className=" mx-6 h-16 flex items-center">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="w-[100px]" />
        <div className="flex items-center cursor-pointer rounded-md p-1 ml-8 hover:border">
          <AiFillHome className="w-6 h-6" />
          <p className="ml-2">Home</p>
          <IoIosArrowDown className="ml-[120px]" />
        </div>
      </div>
      <div className="relative ml-5">
        <div className="absolute left-3 top-3">
          <FiSearch />
        </div>
        <input
          type="text"
          placeholder="Search Reddit"
          className="pl-8 pr-4 py-2 border rounded-full w-[300px] outline-none bg-gray-200 hover:bg-white hover:border-blue-400"
        />
      </div>
      <div className="ml-5 flex align-center justify-between w-[170px] ">
        <PiArrowCircleUpRightLight className="w-8 h-8 cursor-pointer p-1 hover:bg-gray-200 hover:rounded-sm" />
        <FaRegCommentDots className="w-8 h-8 cursor-pointer p-1 hover:bg-gray-200 hover:rounded-sm" />
        <IoMdNotificationsOutline className="w-8 h-8 cursor-pointer p-1 hover:bg-gray-200 hover:rounded-sm" />
        <AiOutlinePlus className="w-8 h-8 cursor-pointer p-1 hover:bg-gray-200 hover:rounded-sm" />
      </div>
      <button className="ml-4 rounded-full py-1 px-2 font-semibold flex bg-gray-200 hover:bg-gray-300 items-center">
        <HiOutlineMegaphone className="pr-1 w-6 h-6" />
        Advertise
      </button>
      <div className="hover:border flex items-center w-fit p-1 ml-6">
        <CgProfile className="w-6 h-6" />
        <div className="ml-2">
          <p className="text-[13px]">oke Oluwajomiloju</p>
          <p className="text-[13px]">1 karma</p>
        </div>
        <IoIosArrowDown className="ml-7" />
      </div>
    </div>
  );
}

export default Header;
