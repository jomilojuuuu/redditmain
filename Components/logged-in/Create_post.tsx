import React from "react";
import { CgProfile } from "react-icons/cg";
import { CiImageOn } from "react-icons/ci";
import { AiOutlineLink } from "react-icons/ai";

function Create_post() {
  return (
    <div className="flex bg-white p-2 items-center w-[640px] border-2 rounded-md">
      <div>
        <CgProfile className="w-6 h-6" />
      </div>
      <form action="">
        <input
          type="text"
          placeholder="Create post"
          className="p-2 bg-gray-200 w-[490px] ml-3 rounded-md border outline-none hover:bg-white hover:border-blue-400"
        />
      </form>
      <div className="flex justify-between w-[50px] ml-3">
        <div className="">
          <CiImageOn className="w-10 h-10 p-2 hover:bg-gray-200 hover:rounded-sm " />
        </div>
        <div className="">
          <AiOutlineLink className="w-10 h-10 p-2 hover:bg-gray-200 hover:rounded-sm" />
        </div>
      </div>
    </div>
  );
}

export default Create_post;
