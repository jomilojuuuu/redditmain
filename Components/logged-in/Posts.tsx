import React from "react";
import { LuArrowBigDown, LuArrowBigUp } from "react-icons/lu";
import { GoComment } from "react-icons/go";
import { LiaShareSolid } from "react-icons/lia";
import { BsBookmark } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { AiOutlineEllipsis } from "react-icons/ai";

function Posts() {
  return (
    <div className="flex pt-2 bg-white w-[640px] border-2 rounded-md mt-5">
      <div className=" p-1 h-fit">
        <LuArrowBigUp className="w-7 h-7 hover:bg-gray-300 rounded-sm hover:text-orange-500" />
        <p className="font-bold text-[12px]">4.9k</p>
        <LuArrowBigDown className="w-7 h-7 hover:bg-gray-300 rounded-sm hover:text-orange-500" />
      </div>
      <div className="ml-2">
        <div className="ml-2">
          <div className="flex items-center">
            <CgProfile className="w-5 h-5" />
            <p className="ml-1 font-bold text-[12px]">u/HoodedHorse</p>
          </div>
          <div>
            <h2 className="font-semibold text-lg mt-1">
              Strategic Base Building
            </h2>
          </div>
        </div>
        <div>
          <img
            src="https://external-preview.redd.it/wO396w_lDaJJvRZpNId4fm-D1Qwygvu9tSRyE7Jc6_4.jpg?width=640&crop=smart&auto=webp&s=3c158480a7bcbf23421b1db23a6e384e0c4cc44f"
            alt="img"
            className="mt-2"
          />
        </div>
        <div className="flex items-center mt-1">
          <div className="py-2 px-1 flex gap-1 items-center w-fit hover:bg-gray-300 hover:rounded-sm">
            <GoComment className="w-5 h-5" />
            <p className="text-[12px] font-bold">17 Comments</p>
          </div>
          <div className="mx-1 py-2 px-1 flex gap-1 items-center w-fit hover:bg-gray-300 hover:rounded-sm">
            <LiaShareSolid className="w-5 h-5" />
            <p className="text-[12px] font-bold">Share</p>
          </div>
          <div className="py-2 px-1 flex gap-1 items-center w-fit hover:bg-gray-300 hover:rounded-sm">
            <BsBookmark className="w-5 h-5" />
            <p className="text-[12px] font-bold">Save</p>
          </div>
          <div className="ml-4 mx-1 px-1 hover:bg-gray-300 hover:rounded-sm">
            <AiOutlineEllipsis className="w-7 h-7" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
