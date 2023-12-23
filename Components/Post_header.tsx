import React from "react";
import { TfiHome } from "react-icons/tfi";
import { AiOutlineEllipsis } from "react-icons/ai";

function Post_header() {
  return (
    <div className="flex justify-between">
      <div className="flex items-center cursor-pointer hover:text-black">
        <TfiHome className="w-4 h-4" />
        <p className="ml-2 text-[12px]">Home</p>
        <p className="ml-2 text-[12px]">
          <span>.</span>16 hr. ago
        </p>
      </div>
      <div>
        <button className="bg-blue-700 px-3 font-bold text-white py-1 rounded-full text-[12px] mr-2">
          Join
        </button>
        <button className="hover:bg-gray-200 px-1 font-bold text-black py-1 rounded-full text-[12px]">
          <AiOutlineEllipsis className="font-bold" />
        </button>
      </div>
    </div>
  );
}

export default Post_header;
