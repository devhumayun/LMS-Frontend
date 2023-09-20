import Image from "next/image";
import { styles } from "../../../app/styles/style";
import React, { FC, useEffect, useState } from "react";
import { AiOutlineCamera } from "react-icons/ai";
import avatarIcon from "../../../public/assests/avatar.png";

import { useLoadUserQuery } from "@/redux/features/api/apiSlice";
import { toast } from "react-hot-toast";
import { useEditProfileMutation, useUpdateUserProfileMutation } from "@/redux/features/user/userApi";

type Props = {
  avater: string | null;
  user: any;
};

const ProfileInfo: FC<Props> = ({ avater, user }) => {
  const [name, setName] = useState(user && user.name);
  const [loadUser, setLoadUser] = useState(false)
  const {} = useLoadUserQuery(undefined, {
    skip: loadUser ? false : true
  })

  const [editProfile, {isSuccess:success, error:updateError}] = useEditProfileMutation()



  const [updateUserProfile, {isSuccess, error}] = useUpdateUserProfileMutation()

  const handleProfileChange = async (e:any) => {
    const fileReader = new FileReader()

    fileReader.onload =  () => {
      if(fileReader.readyState === 2){
        const avater = fileReader.result
        console.log(avater);
        
        updateUserProfile(avater)
        
      }
    }
    fileReader.readAsDataURL(e.target.files[0]);
  }

  
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if(name !== ""){
      await editProfile({name})
    }
  };

  useEffect(() => {
    if(isSuccess){
      setLoadUser(true)
    }
    if(error){
      console.log(error);
    }
    if(success){
      toast.success("Profile updated successfull")
    }
  }, [isSuccess, error, success])

  return (
    <>
      <div className="w-full flex justify-center">
        <div className="relative">
          <Image
            src={user.avater || avater ? user.avater || avater : avatarIcon}
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
            onChange={handleProfileChange}
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
                <label className="block pb-2">Your Full Name</label>
                <input
                  type="text"
                  placeholder="your name"
                  className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value) }
                />
              </div>
              <div className="800px:w-[50%]">
                <label className="block pb-2">Your Email</label>
                <input
                  type="text"
                  placeholder="your name"
                  className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                  required
                  readOnly
                  value={user?.email}
                />
              </div>
            </div>
            <div className="w-[100%] flex justify-between">
              <div className="w-[50%]">
                <label className="block pb-2">Your Phone Number</label>
                <input
                  type="text"
                  placeholder="your name"
                  className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                  value={user?.phone}
                />
              </div>
              <div className="w-[50%]">
                <label className="block pb-2">Your Password</label>
                <input
                  type="text"
                  placeholder="your name"
                  className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                  value={user?.password}
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
