"use client";
import { navLinks } from "@/constants/links";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import ProfileButton from "./ProfileButton";
import { Box, Menu, MenuItem } from "@mui/material";
import { FiPlusSquare } from "react-icons/fi";
import { TbPhotoVideo } from "react-icons/tb";
import { HiOutlineSignal } from "react-icons/hi2";
import { useUploadFileStore } from "@/app/store/useUploadFileStore";
import TransitionsModal from "../shared/Modal";
import UploadFile from "./UploadFile";
import { GoHomeFill } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import { IoIosCompass } from "react-icons/io";
import { BiMoviePlay } from "react-icons/bi";
import { LiaFacebookMessenger } from "react-icons/lia";
import { FaRegHeart } from "react-icons/fa";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 2,
  p: 4,
};

const NavBar = () => {
  const pathName = usePathname();
  const { setIsOpen } = useUploadFileStore();
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
      <ul className=" max-md:w-full flex flex-col gap-y-3 max-md:flex-row max-md:justify-between  ">
        <li className="flex items-center md:hover:bg-neutral-100 rounded-md">
          <Link
            href="/"
            className="flex items-center justify-center  px-2 py-3 group rounded-md  gap-x-4  "
          >
            <GoHomeFill
              size={25}
              className="text-black group-hover:scale-110"
            />
            <p className="text-black   text-lg max-md:hidden">Главная</p>
          </Link>
        </li>
        <li className="flex items-center md:hover:bg-neutral-100 rounded-md max-md:hidden">
          <Link
            href="/search"
            className="flex items-center justify-center  px-2 py-3 group rounded-md  gap-x-4  "
          >
            <IoSearch size={25} className="text-black group-hover:scale-110" />
            <p className="text-black   text-lg max-md:hidden">
              Поисковой запрос
            </p>
          </Link>
        </li>
        <li className="flex items-center md:hover:bg-neutral-100 rounded-md">
          <Link
            href="/interests"
            className="flex items-center justify-center  px-2 py-3 group rounded-md  gap-x-4  "
          >
            <IoIosCompass
              size={25}
              className="text-black group-hover:scale-110"
            />
            <p className="text-black   text-lg max-md:hidden">Интересное</p>
          </Link>
        </li>
        <li className="flex items-center md:hover:bg-neutral-100 rounded-md">
          <Link
            href="/reels"
            className="flex items-center justify-center  px-2 py-3 group rounded-md  gap-x-4  "
          >
            <BiMoviePlay
              size={25}
              className="text-black group-hover:scale-110"
            />
            <p className="text-black   text-lg max-md:hidden">Reels</p>
          </Link>
        </li>
        <li className="flex items-center md:hover:bg-neutral-100 rounded-md">
          <Link
            href="/message"
            className="flex items-center justify-center  px-2 py-3 group rounded-md  gap-x-4  "
          >
            <LiaFacebookMessenger
              size={25}
              className="text-black group-hover:scale-110"
            />
            <p className="text-black   text-lg max-md:hidden">Сообщения</p>
          </Link>
        </li>
        <li className="flex items-center md:hover:bg-neutral-100 rounded-md max-md:hidden">
          <Link
            href="/notification"
            className="flex items-center justify-center  px-2 py-3 group rounded-md  gap-x-4  "
          >
            <FaRegHeart
              size={25}
              className="text-black group-hover:scale-110"
            />
            <p className="text-black   text-lg max-md:hidden">Уведомление</p>
          </Link>
        </li>

        <li className="flex items-center md:hover:bg-neutral-100 rounded-md">
          <button
            className="flex items-center justify-center  px-2 py-3 group rounded-md  gap-x-4 text-black  text-lg "
            onClick={handleClick}
          >
            <FiPlusSquare
              size={25}
              className="text-black group-hover:scale-110"
            />
            <p className="text-black  text-lg max-md:hidden"> Создать</p>
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
        <Box sx={style}>
          <UploadFile />
        </Box>
      </TransitionsModal>
    </>
  );
};

export default NavBar;
