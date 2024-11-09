"use client";
import React, { FC } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { FaRegBookmark } from "react-icons/fa6";
import { TbMessageCircle } from "react-icons/tb";
import {
  useIsLikedQuery,
  useToLikeMutation,
  useUnLikeMutation,
} from "@/redux/api/likes";
interface PostActionsProps {
  postId: number;
}
const PostActions: FC<PostActionsProps> = ({ postId }) => {
  const { data: like } = useIsLikedQuery(+postId);
  const [toLike, { data }] = useToLikeMutation();
  const [unLike] = useUnLikeMutation();

  const likePost = async () => {
    try {
      await toLike(postId);
    } catch (error) {
      console.log(error);
    }
  };
  const unLikePost = async () => {
    try {
      await unLike(postId);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-between py-2">
      <div className="flex items-center gap-x-4">
        {like?.isLike ? (
          <FaHeart
            size={30}
            className="text-red-500 cursor-pointe hover:opacity-75 transitions"
            onClick={unLikePost}
          />
        ) : (
          <FaRegHeart
            size={30}
            className="text-black cursor-pointe hover:opacity-75 transitions"
            onClick={likePost}
          />
        )}
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
