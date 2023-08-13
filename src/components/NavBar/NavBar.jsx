import React from "react";
import { images } from "../../constants";
import { AiOutlineMenu } from "react-icons/ai";
const NavBar = () => {
  return (
    <nav className=" bg-bgBlue flex justify-between p-[16px] lg:py-[20px] lg:px-[140px] text-[15px] font-semibold text-white border-b-[1px] border-[#648EF7]">
      <div className="flex gap-[64px]">
        <img src={images.logo} alt="logo" />
        <ul className=" hidden lg:flex justify-center items-center gap-[32px]">
          <li>
            <a href="#">Home</a>
          </li>
          <li className=" flex-shrink-0">
            <a href="#">Our Products</a>
          </li>
          <li>
            <a href="#">Resources</a>
          </li>
          <li>
            <a href="#">Contacts</a>
          </li>
        </ul>
      </div>
      <div className="flex justify-center items-center gap-[24px]">
        <button className="hidden lg:block">Login</button>
        <button className=" hidden lg:block rounded-lg bg-btnBlue py-[12px] px-[18px]">
          Sign Up
        </button>
        <AiOutlineMenu className="w-[20px] lg:hidden" />
      </div>
    </nav>
  );
};

export default NavBar;
