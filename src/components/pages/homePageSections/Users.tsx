"use client";
import { useGetAllPostsQuery } from "@/redux/api/posts";
import React from "react";

const Users = () => {
  const { data: users } = useGetAllPostsQuery();
  return (
    <section className="mb-[50px] max-md:mt-[100px]  ">
      <div className="max-w-[630px] flex items-center justify-center px-[40px]">
        <div className="flex  items-center gap-x-4  overflow-x-auto scroll-hidden">
          {users?.map((item) => (
            <div className="flex flex-col" key={item.id}>
              <div className="w-[70px] h-[70px] rounded-full overflow-hidden     ">
                <img
                  src={item.user.photo}
                  alt="cover"
                  className="object-cover"
                />
              </div>
              <h1 className="text-black font-semibold text-sm">
                {item.user.username}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Users;
