"use client";
import * as React from "react";
import { useCreateProductStore } from "@/app/store/useCreateProductStore";
import { Modal } from "antd";
interface TransitionsModal {
  children: React.ReactNode;
}
const TransitionsModal: React.FC<TransitionsModal> = ({ children }) => {
  const { open, handleClose } = useCreateProductStore();
  return (
    <div>
      <Modal
        title="Создание публикации"
        open={open}
        footer={null}
        onCancel={() => handleClose(false)}
      >
        {children}
      </Modal>
    </div>
  );
};
export default TransitionsModal;
