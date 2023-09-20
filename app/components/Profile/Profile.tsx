"use client";
import React, { FC, useState } from "react";
import { ProfileSideBar } from "./ProfileSideBar";
import { useLogOutQuery } from "@/redux/features/auth/authApi";
import { signOut } from "next-auth/react";
import { redirect } from "next/navigation";
import ProfileInfo from "./ProfileInfo";
import SideBarProfile from "./SideBarProfile";
import { ChangePassword } from "./ChangePassword";

type Props = {
  user: any;
};

export const Profile: FC<Props> = ({ user }) => {
  const [scroll, setScroll] = useState(false);
  const [active, setActive] = useState(1);
  const [avatar, setAvatar] = useState(null);
  const [logout, setLogout] = useState(false);

  const {} = useLogOutQuery(undefined, {
    skip: !logout ? true : false,
  });

  const logOutHandler = async () => {
    setLogout(true);
    await signOut();
    redirect("/");
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 85) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }

  return (
    <>
      <div className="w-[80%] flex m-auto">
        <div
          className={`w-[60px] 800px:w-[310px] h-[450px] dark:bg-slate-900 bg-opacity-90 border bg-white dark:border-[#ffffff1d] border-[#00000014] rounded-[5px] shadow-lg dark:shadow-lg mt-[80px] mb-[80px] sticky ${
            scroll ? "top-[120px]" : "top-[30px]"
          } left-[30px]`}
        >
          <ProfileSideBar
            user={user}
            active={active}
            setActive={setActive}
            avatar={avatar}
            logOutHandler={logOutHandler}
          />
          {/* <SideBarProfile
            user={user}
            active={active}
            avatar={avatar}
            setActive={setActive}
            logOutHandler={logOutHandler}
          /> */}
        </div>
        {active === 1 && (
          <div className="w-full h-full bg-transparent mt-[80px]">
            <ProfileInfo user={user} avatar={avatar} />
          </div>
        )}
        {active === 2 && (
          <div className="w-full h-full bg-transparent mt-[80px]">
            <ChangePassword user={user} />
          </div>
        )}
      </div>
    </>
  );
};
