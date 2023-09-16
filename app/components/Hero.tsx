"use client";
import Image from "next/image";
import React, { FC } from "react";

type Props = {};

export const Hero: FC<Props> = (props) => {
  return (
    <>
      <div className="w-full 1000px:flex  items-center">
        <div className="absolute top-[100px] 1000px:top-[unset] 1500px:h-[700px] 1500px:w-[700px] 1100px:h-[600px] 1100px:w-[600px] h-[40vh] left-5 w-[40vh] hero_animation rounded-[50%] 1100px:left-8 1500px:left-14"></div>
        <div className="1000px:w-[40%] flex 1000px:min-h-screen items-center justify-end pt-[70px] 1000px:pt-[0] z-10">
          <Image
            src={require("../../public/assests/banner-img-1.png")}
            alt="Banner"
            height={400}
            width={400}
            className="object-contain 110px:max-w-[90%] w-[90%] 1500px:max-w-[85%] h-auto z-10"
          />
        </div>
        <div>
            <div>
                <h2> Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, sint. </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic sed sunt debitis autem iure qui! Ipsum dicta alias velit adipisci!</p>
                <div className="">
                    <input type="text" />
                    <button> hi </button>
                </div>
                
            </div>
        </div>
      </div>
    </>
  );
};
