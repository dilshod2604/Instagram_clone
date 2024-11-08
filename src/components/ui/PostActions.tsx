"use client";
import React, { FC } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { FaRegBookmark } from "react-icons/fa6";
import { TbMessageCircle } from "react-icons/tb";
import { useIsLikedQuery, useToLikeMutation } from "@/redux/api/likes";
interface PostActionsProps {
  postId: number;
}
const PostActions: FC<PostActionsProps> = ({ postId }) => {
  // const { data } = useIsLikedQuery(605);
  const [toLike,{data}] = useToLikeMutation();

  const like = async () => {
    try {
      await toLike(postId);
    } catch (error) {
      console.log(error);
    }
  };

  
  return (
    <div className="flex items-center justify-between py-2">
      <div className="flex items-center gap-x-4">
        <FaRegHeart
          size={30}
          className="text-black cursor-pointe hover:opacity-75 transitions"
          onClick={like}
        />
        <TbMessageCircle
          size={30}
          className="text-black cursor-pointer hover:opacity-75 transitions"
        />
        <FiSend
          size={30}
          className="text-black cursor-pointer hover:opacity-75 transitions"
        />
      </div>
      <FaRegBookmark
        size={30}
        className="text-black cursor-pointer hover:opacity-75 transitions"
      />
    </div>
  );
};

export default PostActions;
