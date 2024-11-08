"use client";
import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import { FiSend } from "react-icons/fi";
import { FaRegBookmark } from "react-icons/fa6";
const PostActions = () => {
  return (
    <div className="flex items-center justify-between py-2">
      <div className="flex items-center gap-x-4">
        <FaRegHeart size={30} className="text-black cursor-pointer" />
        <FiMessageCircle size={30} className="text-black cursor-pointer" />
        <FiSend size={30} className="text-black cursor-pointer" />
      </div>
      <FaRegBookmark size={30} className="text-black cursor-pointer" />
    </div>
  );
};

export default PostActions;
