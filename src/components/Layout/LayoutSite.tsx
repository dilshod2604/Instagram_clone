import React, { FC } from "react";
import Sidebar from "./sideBar/Sidebar";
import RightSideBar from "./rightSIdeBar/RightSideBar";
interface LayoutSiteProps {
  children: React.ReactNode;
}
const LayoutSite: FC<LayoutSiteProps> = ({ children }) => {
  return (
    <div className="flex w-full h-full">
      <Sidebar />
      <main>{children}</main>
      <RightSideBar />
    </div>
  );
};

export default LayoutSite;
