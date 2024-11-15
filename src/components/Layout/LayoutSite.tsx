"use client";
import React, { FC, useEffect, useState } from "react";
import Sidebar from "./sideBar/Sidebar";
import Header from "./Header";
import MainPreloader from "../ui/Preloader/MainPreloader";
interface LayoutSiteProps {
  children: React.ReactNode;
}
const LayoutSite: FC<LayoutSiteProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setInterval(() => {
      setIsLoading(false);
    }, 5000);
  }, []);
  if (isLoading) return <MainPreloader />;
  return (
    <div className="flex w-full h-[737px] overflow-hidden max-md:flex-col-reverse ">
      <Sidebar />
      <main className="w-full overflow-x-auto">{children}</main>
      <Header />
    </div>
  );
};

export default LayoutSite;
