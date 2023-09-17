"use client";
import React, { FC, useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { BsSun, BsMoon } from "react-icons/bs";

export const ThemeSwitcher = () => {
  const [mon, setMon] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMon(true), []);
  if (!mon) {
    return null;
  }
  return (
    <div className="group fixed bottom-10 right-10 h-14 w-14 bg-[#A8AAF3] dark:bg-[#fffff] rounded-full flex justify-center items-center bg-opacity-80 z-[999999] cursor-pointer hover:bg-[#A8AAF3] hover:bg-opacity-50 transition-all shadow-xl">
      {theme === "light" ? (
        <span
          className="cursor-pointer text-white bg-opacity-80 dark:text-white "
          onClick={() => setTheme("dark")}
        >
          <BsMoon className="text-2xl group-hover:scale-105 transition" />
        </span>
      ) : (
        <span
          className="cursor-pointer text-light "
          onClick={() => setTheme("light")}
        >
          <BsSun className="text-2xl group-hover:scale-105 transition" />
        </span>
      )}
    </div>
  );
};
