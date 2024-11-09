"use client";
import React from "react";
import { useLikedUsersStore } from "@/app/store/useLikedUsersStore";
import { Backdrop, Box, Fade, Modal } from "@mui/material";
import { IoClose } from "react-icons/io5";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 1,
  borderRadius: 2,
};
const LikedUsersModal = () => {
  const { isOpen, setIsOpen, likedUsers } = useLikedUsersStore();
  console.log(likedUsers);
  const closeModal = () => setIsOpen(false);
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={isOpen}
      onClose={closeModal}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={isOpen}>
        <Box sx={style}>
          <div className=" relative flex flex-col h-[400px] overflow-hidden gap-y-5">
            <h1 className="text-black w-full text-center py-2 border-b-2 font-bold sticky">
              Отметки "Нравится"
            </h1>
            {likedUsers ? (
              <div className="flex flex-col overflow-y-auto gap-y-2">
                {likedUsers.map((user, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between hover:bg-neutral-100 py-2 "
                  >
                    <div className="flex items-center gap-x-2">
                      <div className="w-[35px] h-[35px] rounded-full overflow-hidden cursor-pointer">
                        <img src={user.photo} className="w-full h-full" />
                      </div>
                      <h1 className="text-black font-bold cursor-pointer">
                        {user.username}
                      </h1>
                    </div>
                    <button className="text-white font-semibold bg-blue-500 py-1 px-2 rounded-lg hover:bg-blue-600 transition-all ">
                      Подписаться
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div></div>
            )}

            <IoClose
              size={25}
              className="texx-black absolute top-0 right-0 hover:opacity-75 cursor-pointer"
              onClick={closeModal}
            />
          </div>
        </Box>
      </Fade>
    </Modal>
  );
};

export default LikedUsersModal;
