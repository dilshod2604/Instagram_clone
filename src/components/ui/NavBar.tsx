"use client";
import { navLinks } from "@/constants/links";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavBar = () => {
  const pathName = usePathname();
  return (
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
    </ul>
  );
};

export default NavBar;
