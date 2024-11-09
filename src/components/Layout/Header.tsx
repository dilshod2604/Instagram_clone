import React from "react";
import Image from "next/image";
import logo from "../../assets/logo.png";
import { FaRegHeart } from "react-icons/fa";

const Header = () => {
  return (
    <header className="w-full top-0 right-0 bg-white z-50 fixed  hidden max-md:flex border-b ">
      <div className="px-4 py-3 w-full flex items-center justify-between relative">
        <div className="flex items-center justify-start ">
          <Image src={logo} alt="logo" width={103} height={70} />
        </div>
        <div className="flex items-center gap-x-4 absolute right-2">
          <input
            type="search"
            placeholder="Search..."
            className="max-w-[400px] py-1 px-4  bg-neutral-200 rounded-md focus:outline-none"
          />
          <FaRegHeart size={25} className="text-black" />
        </div>
      </div>
    </header>
  );
};

export default Header;
