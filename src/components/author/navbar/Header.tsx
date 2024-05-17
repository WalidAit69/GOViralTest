"use client"

import React from "react";
import MenuBtn from "./MenuBtn";

function Header() {
  return (
    <header className="flex items-center justify-end px-5 w-full h-[80px] bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] border-b">
      <MenuBtn />
    </header>
  );
}

export default Header;
