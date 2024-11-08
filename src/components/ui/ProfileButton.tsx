"use client";
import { useGetMeQuery } from "@/redux/api/auth";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const ProfileButton = () => {
  const router = useRouter();
  const { data, isLoading } = useGetMeQuery();

  useEffect(() => {
    if (!isLoading && !data) {
      router.push("/auth/login");
    }
  }, [data, isLoading, router]);
  return (
    <li>
      <Link
        href="/my-profile"
        className="hover:bg-neutral-100 rounded-md px-2 py-3 flex items-center gap-x-4"
      >
        {data?.profile.photo? (
          <div className="w-7 h-7 rounded-full overflow-hidden">
            <img
              src={data.profile.photo}
              alt="avatar"
              width={28}
              height={28}
              className="object-cover"
            />
          </div>
        ) : (
          <div className="w-7 h-7 rounded-full bg-gray-300 flex items-center justify-center">
            <span className="text-sm text-white">?</span>
          </div>
        )}
        <p className="text-black text-lg">Профиль</p>
      </Link>
    </li>
  );
};

export default ProfileButton;
