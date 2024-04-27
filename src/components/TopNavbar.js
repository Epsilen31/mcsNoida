import React from "react";
import { FiMail } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

const TopNavbar = () => {
  return (
    <div className="bg-[#2154CF] text-red-100 flex flex-col items-center justify-around">
      <div className="w-full h-[94.5px] lg:flex-row lg:mx-auto lg:justify-between lg:items-center lg:h-[50px] lg:max-w-[1170px] max-w-[992.4px] flex flex-col items-center">
        <div className=" flex mt-3 mr-16 lg:gap-3 lg:ml-3 ">
          <FiMail size={25}></FiMail>
          <NavLink className="text-[13px]">info@mcs.com</NavLink>
        </div>

        <ul className="flex w-full max-w-[146px] items-center gap-3 py-3">
          <li>
            <NavLink to="">
              <AiFillFacebook size={25}></AiFillFacebook>
            </NavLink>
          </li>
          <li>
            <NavLink to="">
              <AiOutlineTwitter size={25}></AiOutlineTwitter>
            </NavLink>
          </li>
          <li>
            <NavLink to="">
              <AiFillLinkedin size={25}></AiFillLinkedin>
            </NavLink>
          </li>
          <li>
            <NavLink to="">
              <AiFillInstagram size={25}></AiFillInstagram>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopNavbar;
