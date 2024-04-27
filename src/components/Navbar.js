import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(true); // Add state for screen size
  const [submenuOpen, setSubmenuOpen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024); // Adjust the breakpoint as needed
    };

    checkScreenSize(); // Check initial screen size

    // Add event listener to update state on window resize
    window.addEventListener("resize", checkScreenSize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleCompany = () => {
    setCompanyOpen(!companyOpen);
  };

  const toggleServices = () => {
    setServicesOpen(!servicesOpen);
  };

  // const handleToggleSubmenu = () => {
  //   setSubmenuOpen(!submenuOpen);
  // };

  const handleSubmenuEnter = () => {
    setSubmenuOpen(true);
  };

  const handleSubmenuLeave = () => {
    setSubmenuOpen(false);
  };

  if (isLargeScreen) {
    return (
      <div className="">
        <div className="flex h-14 items-center mt-6 mb-3 justify-between  ">
          <div className="flex  w-11/12 max-w-maxContent items-center justify-around  ">
            <div className="p-10">
              <NavLink to="/">
                <img
                  src="./images/MCS LOGO.png"
                  alt="MCS LOGO"
                  height={120}
                  width={120}
                />
              </NavLink>
            </div>
            <div>
              <ul className=" flex font-semibold  items-center">
                <li className=" pr-5 flex items-center gap-x-8">
                  <NavLink to="/">HOME</NavLink>
                  <div className=" w-[2px] h-[15px] bg-slate-400"></div>
                </li>
                <li
                  className={`relative flex flex-col p-3 ${
                    submenuOpen ? "hover:cursor-pointer" : ""
                  }`}
                  onMouseEnter={handleSubmenuEnter}
                  onMouseLeave={handleSubmenuLeave}
                >
                  <div className="flex justify-between gap-x-7 items-center w-full">
                    <NavLink to="/company">COMPANY</NavLink>
                    <div className=" w-[2px] h-[15px] bg-slate-400"></div>
                  </div>
                  {submenuOpen && (
                    <ul className="absolute top-12 left-[40px] min-w-[240px] max-h-min text-white p-3 flex flex-col gap-y-2 font-semibold transition-all duration-500 ease-in-out bg-black bg-opacity-75 z-20">
                      <li>
                        <NavLink to="/company/submenu1">Submenu 1</NavLink>
                      </li>
                      <li>
                        <NavLink to="/company/submenu2">Submenu 2</NavLink>
                      </li>
                      <li>
                        <NavLink to="/company/submenu3">Submenu 3</NavLink>
                      </li>
                      {/* Add more submenu items as needed */}
                    </ul>
                  )}
                </li>
                <li
                  className={`relative flex flex-col p-3 ${
                    servicesOpen ? "hover:cursor-pointer" : ""
                  }`}
                  onMouseEnter={toggleServices}
                  onMouseLeave={toggleServices}
                >
                  <div className="flex justify-between gap-x-7 items-center w-full">
                    <NavLink to="/company">SERVICES</NavLink>
                    <div className=" w-[2px] h-[15px] bg-slate-400"></div>
                  </div>
                  {servicesOpen && (
                    <ul className="absolute top-12 left-[40px]  min-w-[240px] max-h-min text-white p-3 flex flex-col gap-y-2 font-semibold transition-all duration-500 ease-in-out bg-black bg-opacity-75 z-20">
                      <li>
                        <NavLink to="/service/submenu1">Submenu 1</NavLink>
                      </li>
                      <li>
                        <NavLink to="/service/submenu2">Submenu 2</NavLink>
                      </li>
                      <li>
                        <NavLink to="/service/submenu3">Submenu 3</NavLink>
                      </li>
                    </ul>
                  )}
                </li>
                <li className="p-3  pr-5 flex items-center gap-x-7 ">
                  <NavLink to="/portfolio">PORTFOLIO</NavLink>
                  <div className=" w-[2px] h-[15px] bg-slate-400"></div>
                </li>
                <li className="p-3  pr-5 flex items-center gap-x-7 ">
                  <NavLink to="/partner">PARTNERS</NavLink>
                  <div className=" w-[2px] h-[15px] bg-slate-400"></div>
                </li>
                <li className="p-3  pr-5 ">
                  <NavLink to="/contact">CONTACT</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className=" lg:flex lg:justify-around lg:items-center">
      <div className="flex h-14 items-center m-6 justify-between">
        <div className="flex w-11/12 max-w-maxContent items-center justify-between">
          <NavLink to="/">
            <img
              src="./images/MCS LOGO.png"
              alt="MCS LOGO"
              height={120}
              width={120}
            />
          </NavLink>

          <div className=" lg:hidden  flex items-center border rounded-full p-2 bg-[rgba(215,208,209,0.51)] ">
            {menuOpen ? (
              <AiOutlineMenu
                size={30}
                onClick={toggleMenu}
                style={{ transform: "rotate(90deg)" }}
              />
            ) : (
              <AiOutlineMenu size={30} onClick={toggleMenu} />
            )}
          </div>
        </div>
      </div>
      {menuOpen && (
        <ul className=" flex flex-col gap-y-2 text-[#ffffff] font-semibold bg-[#2154cf] relative mx-4 ">
          <li className="border-b border-white p-3">
            <NavLink to="/">HOME</NavLink>
          </li>
          <li className={`flex flex-col p-3 border-b border-white`}>
            <div
              className="flex justify-between items-center w-full"
              onClick={toggleCompany}
            >
              <NavLink to="/company">COMPANY</NavLink>
              <div className=" flex justify-center items-center border h-[30px] w-[34px]">
                <MdOutlineKeyboardArrowDown size={25} />
              </div>
            </div>
            {companyOpen && (
              <ul className=" flex flex-col gap-y-2 font-semibold transition-all duration-500 ease-in-out w-full pl-0">
                <li className="border-b border-white p-3">
                  <NavLink to="/company/submenu1">Submenu 1</NavLink>
                </li>
                <li className="border-b border-white p-3">
                  <NavLink to="/company/submenu2">Submenu 2</NavLink>
                </li>
                <li className="border-b border-white p-3">
                  <NavLink to="/company/submenu3">Submenu 3</NavLink>
                </li>
              </ul>
            )}
          </li>
          <li className={`flex flex-col p-3 border-b border-white`}>
            <div
              className="flex justify-between items-center w-full"
              onClick={toggleServices}
            >
              <NavLink to="/service">SERVICES</NavLink>
              <div className=" flex justify-center items-center border h-[30px] w-[34px]">
                <MdOutlineKeyboardArrowDown size={25} />
              </div>
            </div>
            {servicesOpen && (
              <ul className="flex flex-col gap-y-2 font-semibold transition-all duration-500 ease-in-out w-full pl-0">
                <li className="border-b border-white p-3">
                  <NavLink to="/service/submenu1">Submenu 1</NavLink>
                </li>
                <li className="border-b border-white p-3">
                  <NavLink to="/service/submenu2">Submenu 2</NavLink>
                </li>
                <li className="border-b border-white p-3">
                  <NavLink to="/service/submenu3">Submenu 3</NavLink>
                </li>
              </ul>
            )}
          </li>
          <li className="border-b border-white p-3">
            <NavLink to="/portfolio">PORTFOLIO</NavLink>
          </li>
          <li className="border-b border-white p-3">
            <NavLink to="/partner">PARTNERS</NavLink>
          </li>
          <li className="border-b border-white p-3">
            <NavLink to="/contact">CONTACT</NavLink>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
