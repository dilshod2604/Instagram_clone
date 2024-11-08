import React from "react";
import Image from "next/image";
import logo from "../../assets/logo.png";
import SignUpForm from "../ui/SignUpForm";
import Link from "next/link";

const Register = () => {
  return (
    <div className="w-full h-full flex items-center justify-center  ">
      <div className="flex flex-col items-center justify-center max-w-[450px]  gap-y-4 ">
        <div className="flex flex-col border border-neutral-300 p-[40px] gap-y-4 ">
          <div className="flex items-center justify-center">
            <Image src={logo} alt="logo" width={200} height={40} />
          </div>
          <p className="text-neutral-700 font-bold text-center">
            Зарегистрируйтесь, чтобы смотреть фото и видео ваших друзей.
          </p>
          <SignUpForm />
        </div>
        <div className="flex gap-x-1 items-center justify-center py-5  border  border-neutral-300 w-full">
          <p className="text-sm font-thin">Есть аккаунт?</p>
          <Link href="/auth/login" className="text-blue-700">
            Вход
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
