"use client";

import useScreenWidth from "@/hooks/useScreenWidth";
import { useMenu } from "@/store/store";
import { cn } from "@/utils/twmerge";
import React, { useEffect } from "react";

function MenuBtn() {
  const { MenuOpen, closeMenu, toggleMenu } = useMenu();

  const screenWidth = useScreenWidth();

  useEffect(() => {
    if (screenWidth && screenWidth > 1280) {
      closeMenu();
    }

    if (MenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [screenWidth, MenuOpen]);
  
  return (
    <div className="items-center justify-center flex lg:hidden z-[9999]">
      <button
        className={cn(
          "relative sm:w-10 sm:h-10 w-10  h-10 rounded-md transform transition-all duration-300",
          {
            "bg-[#67b6ff]": MenuOpen,
            "bg-transparent": !MenuOpen,
          }
        )}
        onClick={toggleMenu}
      >
        <div
          className={cn(
            "sm:w-6 w-5 h-[2px] transition-all duration-300 absolute left-1/2",
            {
              "top-[50%] -translate-y-1/2 -translate-x-1/2 rotate-45 bg-white":
                MenuOpen,
              "top-[25%] -translate-x-1/2 rotate-0 translate-y-0 bg-[#67b6ff]":
                !MenuOpen,
            }
          )}
        ></div>
        <div
          className={cn(
            "sm:w-6 w-5 h-[2px] transition-all duration-300 absolute left-1/2",
            {
              "opacity-0 bg-white": MenuOpen,
              "top-[45%] -translate-x-1/2 opacity-100 bg-[#67b6ff]": !MenuOpen,
            }
          )}
        ></div>
        <div
          className={cn(
            "sm:w-6 w-5 h-[2px] transition-all duration-300 absolute left-1/2",
            {
              "top-[50%] -translate-y-1/2 -translate-x-1/2 -rotate-45 bg-white":
                MenuOpen,
              "top-[65%] -translate-x-1/2 rotate-0 translate-y-0 bg-[#67b6ff]":
                !MenuOpen,
            }
          )}
        ></div>
      </button>
    </div>
  );
}

export default MenuBtn;
