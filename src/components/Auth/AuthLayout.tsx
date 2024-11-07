import React, { FC } from "react";
interface AuthLayoutProps {
  children: React.ReactNode;
}
const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
};

export default AuthLayout;
