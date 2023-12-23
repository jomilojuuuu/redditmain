import React from "react";
import Image from "next/image";
import logo from "@/images/images.png";

function Communities() {
  return (
    <div className="w-[300px] ml-12 mt-5">
      <div>
        <h1 className="text-[12px]">POPULAR COMMUNITIES</h1>
      </div>
      <div className="hover:bg-gray-200">
        <div className="flex items-center px-4 py-2">
          <div className="rounded-full ">
            <Image
              src={logo}
              alt="Picture of the logo"
              width={40}
              height={40}
            />
          </div>
          <div className="h-10">
            <p className="text-[13px] ml-2">r/Dallas</p>
            <p className="text-[13px] ml-2">
              5,743,307 <span className="text-[12px]">members</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Communities;
