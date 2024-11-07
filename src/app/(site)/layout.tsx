import LayoutSite from "@/components/Layout/LayoutSite";
import React, { FC } from "react";
interface LayoutProps {
  children: React.ReactNode;
}
const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      
      <LayoutSite>{children}</LayoutSite>
    </div>
  );
};

export default Layout;
