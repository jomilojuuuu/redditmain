import React from "react";
import Image from "next/image";
import logo from "@/images/images.png";

function Small_Card() {
  return (
    <div className="w-[290px] h-[220px] rounded-2xl shadow-lg">
      <div
        className="w-full h-28 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/images/car.jpg")',
        }}
      ></div>
      <div className="px-4">
        <div className="font-bold text-2xl text-24 truncate ">
          Texas Rangers parade
        </div>
        <h2 className="truncate text-gray-700 text-[14px]">
          Texas Rangers 2023 World Series parade in...
        </h2>
      </div>
      <div className="flex items-center px-4 py-2">
        <div className="rounded-full ">
          <Image src={logo} alt="Picture of the logo" width={30} height={30} />
        </div>
        <p className="text-[12px] ml-2">
          r/Dallas <span className="text-gray-400">and more</span>
        </p>
      </div>
    </div>
  );
}

export default Small_Card;
