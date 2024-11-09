"use client";
import React from "react";
import { useUploadFileStore } from "@/app/store/useUploadFileStore";
import { Modal } from "@mui/material";
interface TransitionsModal {
  children: React.ReactElement;
}
const TransitionsModal: React.FC<TransitionsModal> = ({ children }) => {
  const { open, handleClose } = useUploadFileStore();
  return (
    <div>
      <Modal open={open} onClose={() => handleClose(false)}>
        {children}
      </Modal>
    </div>
  );
};
export default TransitionsModal;
