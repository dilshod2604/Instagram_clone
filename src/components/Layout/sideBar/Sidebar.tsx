import Image from "next/image";
import React from "react";
import logo from "../../../assets/logo.png";
import NavBar from "@/components/ui/NavBar";
const Sidebar = () => {
  return (
    <div className="max-w-[400px] h-screen border-r">
      <div className="flex flex-col  gap-y-[40px] container">
        <div className="flex items-center justify-start">
          <Image src={logo} alt="logo" width={103} height={29} />
        </div>
        <NavBar />
      </div>
    </div>
  );
};

export default Sidebar;
