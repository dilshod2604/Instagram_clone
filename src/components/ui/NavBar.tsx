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
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
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
        <Box sx={style}>
          <UploadFile />
        </Box>
      </TransitionsModal>
    </>
  );
};

export default NavBar;
