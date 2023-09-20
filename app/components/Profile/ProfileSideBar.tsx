import Image from "next/image";
import React, { FC, useState } from "react";
import avatarDefault from "../../../public/assests/avatar.png";
import { RiLockPasswordLine } from "react-icons/ri";
import { AiOutlineLogout } from "react-icons/ai";
import { SiCoursera } from "react-icons/si";

type sideBarProps = {
  user: any;
  active: number;
  setActive: (active: number) => void;
  avater: string | null;
  logOutHandler: any;
};

export const ProfileSideBar: FC<sideBarProps> = ({
  user,
  active,
  setActive,
  avater,
  logOutHandler,
}) => {
  const logoutItem = () => {
    setActive(4);
    logOutHandler();
  };

  return (
    <div className="w-full">
      <div
        className={`w-full flex items-center gap-3 px-3 py-4 cursor-pointer ${
          active === 1 ? "dark:bg-[#1E293B] bg-slate-100" : "bg-transparent"
        }`}
        onClick={() => setActive(1)}
      >
        <Image
          src={user.avater || avater ? user.avater.url || avater : avatarDefault}
          alt=""
          className="w-[40px] h-[40px] rounded-full"
        />
        <h4 className="text-[18px] font-Poppins text-black dark:text-white">
          {" "}
          My Account{" "}
        </h4>
      </div>
      <div
        className={`w-full flex items-center gap-3 px-5 py-4 cursor-pointer ${
          active === 2 ? "dark:bg-[#1E293B] bg-slate-100" : "bg-transparent"
        }`}
        onClick={() => setActive(2)}
      >
        <RiLockPasswordLine size={20} className="dark:text-white text-black" />
        <h4 className="text-[16px] font-Poppins text-black dark:text-white">
          {" "}
          Change Password{" "}
        </h4>
      </div>
      <div
        className={`w-full flex items-center gap-3 px-5 py-4 cursor-pointer ${
          active === 3 ? "dark:bg-[#1E293B] bg-slate-100" : "bg-transparent"
        }`}
        onClick={() => setActive(3)}
      >
        <SiCoursera size={20} className="dark:text-white text-black" />
        <h4 className="text-[16px] font-Poppins text-black dark:text-white">
          {" "}
          Enrolled Courses{" "}
        </h4>
      </div>
      <div
        className={`w-full flex items-center gap-3 px-5 py-4 cursor-pointer ${
          active === 4 ? "dark:bg-[#1E293B] bg-slate-100" : "bg-transparent"
        }`}
        onClick={logoutItem}
      >
        <AiOutlineLogout size={20} className="dark:text-white text-black" />
        <h4 className="text-[16px] font-Poppins text-black dark:text-white">
          {" "}
          Log Out{" "}
        </h4>
      </div>
    </div>
  );
};
