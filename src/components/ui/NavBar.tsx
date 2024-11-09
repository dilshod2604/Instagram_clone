"use client";
import { navLinks } from "@/constants/links";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import ProfileButton from "./ProfileButton";
import { Box, Fade, Icon, Menu, MenuItem } from "@mui/material";
import { FiPlusSquare } from "react-icons/fi";
import { TbPhotoVideo } from "react-icons/tb";
import { HiOutlineSignal } from "react-icons/hi2";
import { useCreateProductStore } from "@/app/store/useCreateProductStore";
import TransitionsModal from "../shared/Modal";

const NavBar = () => {
  const pathName = usePathname();
  const { setIsOpen, } = useCreateProductStore();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const openModal = () => {
    setIsOpen(true);
    setAnchorEl(null);
  };

  
  return (
    <>
      <ul className="flex flex-col gap-y-3">
        {navLinks.map((link, index) => (
          <li
            key={index}
            className="flex items-center  hover:bg-neutral-100 rounded-md"
          >
            {pathName === link.href ? (
              <Link
                href={link.href}
                className="flex items-center justify-center  px-2 py-3 group rounded-md  gap-x-4  "
              >
                <link.icon
                  size={25}
                  className="text-black group-hover:scale-110"
                />
                <p className="text-black  font-bold text-lg">{link.name}</p>
              </Link>
            ) : (
              <Link
                href={link.href}
                className="flex items-center justify-center  px-2 py-3 group rounded-md  gap-x-4  "
              >
                <link.icon
                  size={25}
                  className="text-black group-hover:scale-110"
                />
                <p className="text-black  text-lg">{link.name}</p>
              </Link>
            )}
          </li>
        ))}
        <li className="flex items-center  hover:bg-neutral-100 rounded-md">
          <button
            className="flex items-center justify-center  px-2 py-3 group rounded-md  gap-x-4 text-black  text-lg "
            onClick={handleClick}
          >
            <FiPlusSquare
              size={25}
              className="text-black group-hover:scale-110"
            />
            Создать
          </button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={openModal}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={openModal} className="flex items-center gap-x-5">
              Публикация <TbPhotoVideo size={30} className="text-black" />
            </MenuItem>
            <MenuItem onClick={openModal} className="flex items-center gap-x-5">
              Прямой Эфир <HiOutlineSignal size={30} className="text-black" />
            </MenuItem>
          </Menu>
        </li>
        <ProfileButton />
      </ul>
      <TransitionsModal>
        <div className="w-full h-[400px] flex flex-col items-center justify-center gap-y-3 ">
          <TbPhotoVideo size={70} className="text-neutral-700" />
          <p className="text-xl text-neutral-700 text-center">
            Перетащите сюда фото и видео
          </p>
          <button className="bg-blue-500 py-1 px-3 rounded-xl text-white flex items-center justify-center hover:opacity-75 transition-all">
            Выбрать на копьютере
          </button>
        </div>
      </TransitionsModal>
    </>
  );
};

export default NavBar;
