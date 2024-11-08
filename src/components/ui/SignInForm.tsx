"use client";
import React from "react";
import Cookies from "js-cookie";
import { useSignInMutation } from "@/redux/api/auth";
import { TextField } from "@mui/material";
import { message } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";

const SignInForm = () => {
  const { register, handleSubmit } = useForm<ISignUp>();
  const router = useRouter();
  const [signIn] = useSignInMutation();

  const onSubmit: SubmitHandler<ILogin> = async (value) => {
    try {
      const res = await signIn({
        email: value.email,
        password: value.password,
      });

      if ("data" in res && res.data?.accessToken) {
        Cookies.set("accessToken", res.data.accessToken, {
          expires: 7,
          secure: true,
          sameSite: "strict",
        });
        router.push("/");
      } else {
        throw new Error("Токен не получен");
      }
    } catch (error) {
      message.error("Ошибка при входе");
    }
  };

  return (
    <div className="flex flex-col">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-2">
        <TextField
          size="small"
          type="text"
          label="Моб.телефон или эл.адрес"
          variant="outlined"
          {...register("email", { required: true })}
        />
        <TextField
          size="small"
          type="password"
          label="Пароль"
          variant="outlined"
          {...register("password", { required: true })}
        />
        <button
          type="submit"
          className="flex items-center justify-center text-white w-full py-2 bg-blue-500 rounded-xl hover:opacity-75 transition-all"
        >
          Войти
        </button>
        <div className="w-full flex items-center justify-center">
          <Link href="#" className="text-sm font-thin text-blue-900">
            Забыли пароль?
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
