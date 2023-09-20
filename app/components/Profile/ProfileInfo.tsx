import Image from "next/image";
import { styles } from "../../../app/styles/style";
import React, { FC, useEffect, useState } from "react";
import { AiOutlineCamera } from "react-icons/ai";
import avatarIcon from "../../../public/assests/avatar.png";

import { useLoadUserQuery } from "@/redux/features/api/apiSlice";
import { toast } from "react-hot-toast";

type Props = {
  avatar: string | null;
  user: any;
};

const ProfileInfo: FC<Props> = ({ avatar, user }) => {
  const [name, setName] = useState(user && user.name);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="w-full flex justify-center">
        <div className="relative">
          <Image
            src={user.avatar || avatar ? user.avatar.url || avatar : avatarIcon}
            alt=""
            width={120}
            height={120}
            className="w-[120px] h-[120px] cursor-pointer border-[3px] border-[#37a39a] rounded-full"
          />
          <input
            type="file"
            name=""
            id="avatar"
            className="hidden"
            accept="image/png,image/jpg,image/jpeg,image/webp"
          />
          <label htmlFor="avatar">
            <div className="w-[30px] h-[30px] bg-slate-900 rounded-full absolute bottom-2 right-2 flex items-center justify-center cursor-pointer">
              <AiOutlineCamera size={20} className="z-1" />
            </div>
          </label>
        </div>
      </div>
      <br />
      <br />
      <div className="w-full pl-10 800px:pl-20">
        <form onSubmit={handleSubmit}>
          <div className="m-auto block pb-4">
            <div className="w-[100%] flex justify-between mb-6">
              <div className="800px:w-[50%]">
                <label className="block pb-2">Full Name</label>
                <input
                  type="text"
                  placeholder="your name"
                  className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                  required
                />
              </div>
              <div className="800px:w-[50%]">
                <label className="block pb-2">Full Name</label>
                <input
                  type="text"
                  placeholder="your name"
                  className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                  required
                />
              </div>
            </div>
            <div className="w-[100%] flex justify-between">
              <div className="w-[50%]">
                <label className="block pb-2">Full Name</label>
                <input
                  type="text"
                  placeholder="your name"
                  className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                  required
                />
              </div>
              <div className="w-[50%]">
                <label className="block pb-2">Full Name</label>
                <input
                  type="text"
                  placeholder="your name"
                  className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                  required
                />
              </div>
            </div>

            <input
              className={`w-full 800px:w-[250px] h-[40px] border border-[#37a39a] text-center dark:text-[#fff] text-black rounded-[3px] mt-8 cursor-pointer`}
              required
              value="Update"
              type="submit"
            />
          </div>
        </form>
        <br />
      </div>
    </>
  );
};

export default ProfileInfo;
