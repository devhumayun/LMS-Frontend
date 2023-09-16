"use client"
import React, {FC, useState, useEffect} from 'react'
import { useTheme } from 'next-themes'

export const ThemeSwitcher = () => {
    const [mon, setMon] = useState(false)
    const { theme, setTheme } = useTheme();

    useEffect(() => setMon(true), [])
    if(!mon){
        return null
    }
    return(
        <div>
            {
                theme === "light" ? (
                    <span
                     className="cursor-pointer text-black dark:text-white"
                     onClick={() => setTheme("dark")}
                    >moon</span>
                ) : (
                    <span 
                    className="cursor-pointer dark:text-light "
                     onClick={() => setTheme("light")}
                    >sun</span>
                )
            }
        </div>
    )
}