"use client";
import Link from "next/link";
import React, { FC, useState } from "react";
import { NaveItem } from "../utilis/NaveItem";
import { ThemeSwitcher } from "../utilis/ThemeSwitcher";
import { AiOutlineAlignRight, AiOutlineClose } from 'react-icons/ai';
import { BiUserCircle } from 'react-icons/bi';
import { CustomModal } from "../utilis/CustomModal";
import {Login} from './auth/Login'
import {SignUp} from './auth/SignUp'
import {Verification} from './auth/Verification'
import { styles } from "../styles/style";
import { useSelector } from "react-redux";
import Image from "next/image";
import avater from '../../public/assests/avatar.png'

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  activeItem: number;
  route: string;
  setRoute: (route: string) => void;
};

export const Header: FC<Props> = ({ open, setOpen, activeItem, route, setRoute }) => {
  const [active, setActive] = useState(false);
  const [openSideBar, setOpenSideBar] = useState(false);
  const {user} = useSelector((state:any) => state.auth)
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 85) {
        setActive(true);
      } else {
        setActive(false);
      }
    });
  }

  // Hide mobile menu
  const handleClose = (e:any) => {
    if(e.target.id === "screen"){
      setOpenSideBar(false)
    }
  }
  return (
    <>
      <div className="w-full relative">
        <div
          className={`${
            active
              ? "dark:bg-opacity-50 bg-white dark:bg-gradient-to-b dark:from-gray-900 dark:to-black fixed top-0 left-0 w-full h-[80px] z-[80] broder-b dark:border-[#fffff1c] shadow-xl transition duration-500"
              : "w-full border-b dark:border-[#fffff1c] h-[80px] z-[80] dark:shahow "
          }`}
        >
           <div className="w-[95%] 800px:w-[90%] 800px:px-5 h-[800px] m-auto">
            <div className="w-full h-[80px] flex items-center justify-between">
                <div className="flex items-center">
                    <Link className={`text-[30px] font-Poppins text-black dark:text-white font-bold`} href={"/"}> Elearning </Link>
                </div>
                <div className="flex items-center">
                   <NaveItem
                    activeItem={activeItem}
                    isMobile={false}
                   />
                    <div className="hidden 800px:block">
                      {
                        user ? 
                        (
                          <>
                            <Image 
                              src={user.avatar? user.avatar : avater}
                              alt="Profile"
                              className="w-[30px] h-[30px] rounded-full cursor-pointer"
                            />
                          </>
                        )
                        :
                        (
                        <BiUserCircle 
                        size={23}
                        className="text-black dark:text-white cursor-pointer"
                        onClick={() => setOpen(true)}
                        />
                        )
                      }
                    </div>
                   {/* <ThemeSwitcher /> */}
                   {/* Only for mobile */}
                   <div className="group 800px:hidden flex justify-center items-center">
                   <span 
                     className="text-black dark:text-white cursor-pointer text-xl"
                     onClick={() => setOpenSideBar(true)}
                   ><AiOutlineAlignRight className="group-hover:scale-110 transition" /></span>
                   </div>
  
                </div>
            </div>
          </div> 
          {
            openSideBar && (
              <div className="w-full fixed h-screen top-0 left-0 z-[9999] dark:bg-[unset] bg-[#00000024]
              "
              id="screen"
              onClick={handleClose}
              >
                <div className="w-[70%] fixed top-0 right-0 z-[9999] h-screen bg-white dark:bg-slate-900 dark:bg-opacity-90">
                  <div className="mt-8 text-center relative">
                    <span className="font-semibold font-Poppins text-2xl text-black dark:text-white"> Elearning </span>
                    <span className={`${styles.closeBtn}`}
                      onClick={() => setOpenSideBar(false)}
                    > <AiOutlineClose /> </span>
                  </div>
                  <NaveItem activeItem={activeItem} isMobile={true} />
                  <div className="800px:block">
                      <BiUserCircle 
                        size={23}
                        className="text-black dark:text-white ml-5"
                        onClick={() => setOpen(true)}
                      />
                    </div>
                    <div className="mt-8 text-center">
                      <p className="text-black dark:text-white font-Poppins"> Copyright © 2023 Elearning | All Rights Reserved </p>
                    </div>
                </div>
              </div>
            )
          }
        </div>
        {
          route === "Login" && (
            <>
              {open && (
              <CustomModal 
              open={open}
              setOpen={setOpen}
              activeItem={activeItem}
              setRoute={setRoute}
              component={Login}
            />
          )}
            </>
          )
        }
        {
          route === "Sign-Up" && (
            <>
              {open && (
              <CustomModal 
              open={open}
              setOpen={setOpen}
              activeItem={activeItem}
              setRoute={setRoute}
              component={SignUp}
            />
          )}
            </>
          )
        }
        {
          route === "Verification" && (
            <>
              {open && (
              <CustomModal 
              open={open}
              setOpen={setOpen}
              activeItem={activeItem}
              setRoute={setRoute}
              component={Verification}
            />
          )}
            </>
          )
        }
      </div>
    </>
  );
};
