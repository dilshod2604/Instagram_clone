import { IconType } from "react-icons";
import { GoHomeFill } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import { IoIosCompass } from "react-icons/io";

import { BiMoviePlay } from "react-icons/bi";
import { LiaFacebookMessenger } from "react-icons/lia";
import { FaRegHeart } from "react-icons/fa";
import { FiPlusSquare } from "react-icons/fi";

export const navLinks: { name: string; icon: IconType; href: string }[] = [
  {
    name: "Главная",
    icon: GoHomeFill,
    href: "/",
  },
  {
    name: "Поисковой запрос",
    icon: IoSearch,
    href: "/search",
  },
  {
    name: "Интересное",
    icon: IoIosCompass,
    href: "/interests",
  },
  {
    name: "Reels",
    icon: BiMoviePlay,
    href: "/reels",
  },
  {
    name: "Сообщения",
    icon: LiaFacebookMessenger,
    href: "/message",
  },
  {
    name: "Уведомление",
    icon: FaRegHeart,
    href: "/notification",
  },
];
