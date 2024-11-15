import Image from "next/image";
import React from "react";
import logo from "../../../assets/logo.png";
import NavBar from "@/components/ui/NavBar";
const Sidebar = () => {
  return (
    <div className=" border-r max-md:w-full max-md:border-none ">
      <div className="flex md:flex-col  md:gap-y-[40px] container w-full max-md:justify-center max-md:fixed max-md:bottom-0 max-md:bg-white z-50">
        <div className="flex items-center justify-start max-md:hidden">
          <Image src={logo} alt="logo" width={103} height={29} />
        </div>
        <NavBar />
      </div>
    </div>
  );
};

export default Sidebar;
