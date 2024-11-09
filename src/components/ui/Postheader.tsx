import React, { FC } from "react";
import { HiDotsHorizontal } from "react-icons/hi";
interface PostheaderProps {
  photo: string;
  userName: string;
}
const Postheader: FC<PostheaderProps> = ({ photo, userName }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-x-3 ">
        <div className="flex items-center justify-center w-[32px] h-[32px] rounded-full overflow-hidden cursor-pointer">
          <img
            src={photo}
            alt="photo"
            width={32}
            height={32}
            className="object-cover"
          />
        </div>

        <p className="text-sm font-bold text-black cursor-pointer">
          {userName}
        </p>
      </div>
      <HiDotsHorizontal size={20} className="text-blck hover:scale-110" />
    </div>
  );
};

export default Postheader;
