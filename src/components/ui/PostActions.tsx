"use client";
import React, { FC } from "react";
import { FaHeart, FaRegHeart, FaRegBookmark } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { TbMessageCircle } from "react-icons/tb";
import {
  useIsLikedQuery,
  useToLikeMutation,
  useUnLikeMutation,
} from "@/redux/api/likes";
import { useLikedUsersStore } from "@/app/store/useLikedUsersStore";

interface PostActionsProps {
  postId: number;
}

const PostActions: FC<PostActionsProps> = ({ postId }) => {
  const { data: like } = useIsLikedQuery(postId);
  const [toLike] = useToLikeMutation();
  const [unLike] = useUnLikeMutation();
  const { isOpen, setIsOpen, setLikedUsers } = useLikedUsersStore();

  const likePost = async () => {
    try {
      await toLike(postId);
    } catch (error) {
      console.error(error);
    }
  };

  const unLikePost = async () => {
    try {
      await unLike(postId);
    } catch (error) {
      console.error(error);
    }
  };

  const openModal = () => {
    setIsOpen(true);
    if (like?.likedUsers) {
      setLikedUsers(like?.likedUsers);
    } else {
      setLikedUsers([]);
    }
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between py-2">
        <div className="flex items-center gap-x-4">
          {like?.isLike ? (
            <FaHeart
              size={30}
              className="text-red-500 cursor-pointer hover:opacity-75 transition"
              onClick={unLikePost}
            />
          ) : (
            <FaRegHeart
              size={30}
              className="text-black cursor-pointer hover:opacity-75 transition"
              onClick={likePost}
            />
          )}
          <TbMessageCircle
            size={30}
            className="text-black cursor-pointer hover:opacity-75 transition"
          />
          <FiSend
            size={30}
            className="text-black cursor-pointer hover:opacity-75 transition"
          />
        </div>
        <FaRegBookmark
          size={30}
          className="text-black cursor-pointer hover:opacity-75 transition"
        />
      </div>
      <div
        className="flex items-center gap-x-1 cursor-pointer"
        onClick={openModal}
      >
        <span className="text-black">{like?.likesCount} отметок</span>
        <span className="text-black font-bold">"Нравится"</span>
      </div>
    </div>
  );
};

export default PostActions;
