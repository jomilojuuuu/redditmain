import React from "react";
import { CgProfile } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";

function Premium() {
  return (
    <div className="bg-white rounded-md border h-fit w-[300px] py-2 ">
      <div className="flex items-center w-fit p-1 ml-6">
        <CgProfile className="w-6 h-6" />
        <div className="ml-2">
          <p className="text-[13px]">Reddit Premium</p>
          <p className="text-[13px]">The best Reddit experience</p>
        </div>
      </div>
      <button className="bg-login text-white w-[250px] ml-6 px-20 py-1 rounded-full">
        Try Now
      </button>
    </div>
  );
}

export default Premium;
