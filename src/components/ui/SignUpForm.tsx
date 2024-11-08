"use client";
import { useSignUpMutation } from "@/redux/api/auth";
import { TextField } from "@mui/material";
import { message } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
const SignUpForm = () => {
  const { register, handleSubmit } = useForm<ISignUp>();
  const router = useRouter();

  const [signUp, { data }] = useSignUpMutation();
  console.log(data);
  const onSubmit: SubmitHandler<ISignUp> = async (value) => {
    try {
      const data = {
        email: value.email,
        name: value.name,
        password: value.password,
        username: value.username,
        photo: value.photo,
      };
      await signUp(data);
      router.push("/auth/login");
    } catch (error) {
      message.error("Ощибка при авторизацию");
    }
  };
  return (
    <div className="flex flex-col ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-y-2 "
      >
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
        <TextField
          size="small"
          type="text"
          label="Имя и фамиля"
          variant="outlined"
          {...register("name", { required: true })}
        />
        <TextField
          size="small"
          type="text"
          label="Имя ползователья"
          variant="outlined"
          {...register("username", { required: true })}
        />
        <TextField
          size="small"
          type="text"
          label="Photo URL"
          variant="outlined"
          {...register("photo", { required: true })}
        />
        <p className="text-sm font-thin text-neutral-400 text-center">
          Люди, которые пользуются нашим сервисом, могли загрузить вашу
          контактную информацию в Instagram.
          <a className="text-sm font-thin text-blue-700">Подробнее</a>
        </p>
        <p className="text-sm font-thin text-neutral-400 text-center">
          Регистрируясь, вы принимаете наши{" "}
          <a className="text-sm font-thin text-blue-700">
            Условия, Политику конфиденциальности и Политику в отношении файлов
            cookie.
          </a>
        </p>
        <button
          type="submit"
          className="flex items-center justify-center text-white w-full py-2 bg-blue-500 rounded-xl hover:opacity-75 transition-all"
        >
          Регистрация
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
