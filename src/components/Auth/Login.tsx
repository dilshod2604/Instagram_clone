import Image from "next/image";
import React from "react";
import logo from "../../assets/logo.png";
import SignInForm from "../ui/SignInForm";
import Link from "next/link";

const Login = () => {
  return (
    <div className="w-full h-full flex items-center justify-center  ">
      <div className="flex flex-col items-center justify-center max-w-[450px]  gap-y-4 ">
        <div className="flex flex-col border border-neutral-300 p-[40px] gap-y-4 ">
          <div className="flex items-center justify-center">
            <Image src={logo} alt="logo" width={200} height={40} />
          </div>

          <SignInForm />
        </div>
        <div className="flex gap-x-1 items-center justify-center py-5  border  border-neutral-300 w-full">
          <p className="text-sm font-thin">У вас ещё нет аккаунта?</p>
          <Link href="/auth/register" className="text-blue-700">
            Зарегистрироваться
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
