import React from "react";
import { GoSignOut } from "react-icons/go";

function MenuSignOutBtn() {
  return (
    <button className="w-full bg-[#ff0000c4] hover:bg-[#ff0b0b] text-white flex-shrink-0 block !leading-none font-medium py-2.5 text-sm sm:text-base sm:py-3 rounded-full focus:outline-none">
      <span className="h-full w-full flex items-center gap-5 pl-8 max-w-[90%] mx-auto">
        <GoSignOut className="w-[25px] h-[25px]" />
        <span className={`pl-3 text-left w-[70%]`}>Se déconnecter</span>
      </span>
    </button>
  );
}

export default MenuSignOutBtn;
