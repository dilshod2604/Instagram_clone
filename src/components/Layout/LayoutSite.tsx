import React, { FC } from "react";
import Sidebar from "./sideBar/Sidebar";
import Header from "./Header";
interface LayoutSiteProps {
  children: React.ReactNode;
}
const LayoutSite: FC<LayoutSiteProps> = ({ children }) => {
  return (
    <div className="flex w-full h-[737px] overflow-hidden max-md:flex-col-reverse">
      <Sidebar />
      <main className="w-full overflow-x-auto">{children}</main>
      <Header />
    </div>
  );
};

export default LayoutSite;
