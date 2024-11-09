"use client";
import { useUploadFileStore } from "@/app/store/useUploadFileStore";
import { useUploadFileMutation } from "@/redux/api/files";
import { Button, message } from "antd";
import React, { useState } from "react";
import { TbPhotoVideo } from "react-icons/tb";

const UploadFile = () => {
  const { handleClose } = useUploadFileStore();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const [upploadFile, { isSuccess, isLoading }] = useUploadFileMutation();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];

      if (file) {
        setSelectedFile(file);
      }
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreviewUrl(reader.result as string);
        };
        reader.readAsDataURL(file);
      } else if (file.type.startsWith("video/")) {
        setPreviewUrl(URL.createObjectURL(file));
      }
    }
  };

  const upload = async () => {
    try {
      const formData = new FormData();
      if (selectedFile) {
        formData.append("file", selectedFile);
      }
      await upploadFile(formData);
      handleClose(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {selectedFile ? (
        <div className="w-full h-[400px] flex flex-col items-center justify-center gap-y-3 overflow-hidden relative">
          {selectedFile.type.startsWith("image/") ? (
            <img src={previewUrl!} alt="" className="w-full h-auto" />
          ) : (
            <video className="w-full h-full" muted autoPlay>
              <source src={previewUrl!} />
            </video>
          )}
          <Button
            loading={isLoading}
            className="absolute flex items-center justify-center py-1 px-2 bg-blue-500 text-white font-bold top-2 right-2 rounded-lg transition-all "
            onClick={upload}
          >
            Создать
          </Button>
        </div>
      ) : (
        <div className="w-full h-[400px] flex flex-col items-center justify-center gap-y-3 ">
          <TbPhotoVideo size={70} className="text-neutral-700" />
          <p className="text-xl text-neutral-700 text-center">
            Перетащите сюда фото и видео
          </p>
          <div className="bg-blue-500 py-1 px-3 rounded-xl text-white flex items-center justify-center hover:opacity-75 transition-all relative">
            <input
              type="file"
              accept="image/*,video/*"
              className="opacity-0 absolute"
              onChange={handleFileChange}
            />
            Выбрать на компьютере
          </div>
        </div>
      )}
    </>
  );
};

export default UploadFile;
