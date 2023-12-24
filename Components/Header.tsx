"use client";
import React from "react";
import Image from "next/image";
import logo from "@/images/logo.png";
import { signIn, useSession } from "next-auth/react";

import { FiSearch } from "react-icons/fi";
import { BsQrCodeScan } from "react-icons/bs";
import { AiOutlineEllipsis } from "react-icons/ai";

function Header() {
  const { data: session } = useSession();

  return (
    <header className="mx-6 h-16 flex justify-between items-center border-b-[1px]">
      <div>
        <Image src={logo} alt="Picture of the logo" width={100} height={100} />
      </div>
      <div>
        <div className="relative">
          <div className="absolute left-3 top-3">
            <FiSearch />
          </div>
          <input
            type="text"
            placeholder="Search Reddit"
            className="pl-8 pr-4 py-2 border rounded-full w-96 outline-none bg-gray-200"
          />
        </div>
      </div>
      <div className="flex">
        <button className="rounded-full py-2 px-3 font-semibold flex bg-gray-200 hover:bg-gray-300 items-center">
          <BsQrCodeScan className="pr-1 w-10" />
          Get app
        </button>
        <button
          onClick={() => signIn()}
          className="text-white mx-3 rounded-full py-2 px-3 font-semibold bg-login hover:bg-login_hov"
        >
          Log in
        </button>

        <AiOutlineEllipsis className="mt-3" />
      </div>
    </header>
  );
}

export default Header;
