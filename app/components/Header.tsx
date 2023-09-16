"use client";
import Link from "next/link";
import React, { FC, useState } from "react";
import { NaveItem } from "../utilis/NaveItem";
import { ThemeSwitcher } from "../utilis/ThemeSwitcher";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  activeItem: number;
};

export const Header: FC<Props> = ({ open, setOpen, activeItem }) => {
  const [active, setActive] = useState(false);
  const [openSideBar, setOpenSideBar] = useState(false);

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
              : "w-full border-b dark:border-[#fffff1c] h-[80px] z-[80] dark:shahow"
          }`}
        >
           <div className="w-[95% 800px:w-[90%] 800px:px-3 h-full m-auto py-3">
            <div className="flex item-center justify-between w-full h-[80px] p-2">
                <div>
                    <Link className={`text-[30px] font-Poppins text-black dark:text-white font-bold`} href={"/"}> Elearning </Link>
                </div>
                <div className="flex item-center">
                   <NaveItem 
                    activeItem={activeItem}
                    isMobile={false}
                   />
                   <ThemeSwitcher />
                   {/* Only for mobile */}
                   <div className="800px:hidden">
                   <span 
                     className="text-black dark:text-white cursor-pointer"
                     onClick={() => setOpenSideBar(true)}
                   >==</span>
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
                  <NaveItem activeItem={activeItem} isMobile={true} />
                </div>
              </div>
            )
          }
        </div>
      </div>
    </>
  );
};
