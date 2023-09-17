"use client"
import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Poppins, Josefin_Sans } from "next/font/google";
import { ThemeSwitcher } from "./utilis/ThemeSwitcher";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-Poppins",
});

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-Josefin",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${josefin.variable} !bg-white bg-no-repeat dark:bg-gradient-to-b dark:to-black duration:300 dark:from-gray-900 relative`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
        <Toaster position="top-center" reverseOrder={false} />
        <ThemeSwitcher />
        </ThemeProvider>
      </body>
    </html>
  );
}
