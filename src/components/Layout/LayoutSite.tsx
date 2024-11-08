import React, { FC } from "react";
import Sidebar from "./sideBar/Sidebar";
interface LayoutSiteProps {
  children: React.ReactNode;
}
const LayoutSite: FC<LayoutSiteProps> = ({ children }) => {
  return (
    <div className="flex w-full h-[737px] overflow-hidden ">
      <Sidebar />
      <main className="w-full overflow-x-auto">{children}</main>
      {/* <RightSideBar /> */}
    </div>
  );
};

export default LayoutSite;
