import React from "react";
import { NavLink } from "react-router-dom";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

const Copywrite = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full bg-gray-200 flex justify-center">
      <div className="h-16 flex-col lg:flex-row lg:justify-around w-full md:w-3/4 lg:w-1/2 flex items-center justify-around px-5 md:px-0 relative">
        <p>© Copyright 2023 MCS PVT.LTD All Rights Reserved</p>
        <div className="flex gap-x-6 gap-12">
          <NavLink to="/about" onClick={scrollToTop}>
            About
          </NavLink>
          <NavLink to="/privacy" onClick={scrollToTop}>
            Privacy Policy
          </NavLink>
          <NavLink to="/gdpr" onClick={scrollToTop}>
            GDPR
          </NavLink>
          <NavLink to="/contact" onClick={scrollToTop}>
            Contact
          </NavLink>
        </div>
        <div
          className="absolute bottom-12 bg-black flex rounded-full mx-auto right-5 lg:-right-48 cursor-pointer"
          onClick={scrollToTop}
        >
          <BsFillArrowUpCircleFill size={35} color="white" className="flex" />
        </div>
      </div>
    </div>
  );
};

export default Copywrite;
