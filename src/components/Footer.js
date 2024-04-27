import React from "react";
import { NavLink } from "react-router-dom";
import { GrFacebook, GrInstagram, GrLinkedin, GrTwitter } from "react-icons/gr";
import { BsCaretRight } from "react-icons/bs";

const Footer = () => {
  const links = [
    { title: "Managed IT Services" },
    { title: "Cloud Services" },
    { title: "Staffing Solutions" },
    { title: "BPO Services" },
  ];

  const socialIcons = [
    { icon: <GrFacebook size={35} />, url: "#" },
    { icon: <GrTwitter size={35} />, url: "#" },
    { icon: <GrLinkedin size={35} />, url: "#" },
    { icon: <GrInstagram size={35} />, url: "#" },
  ];

  return (
    <footer className="bg-blue-800 text-white py-10 px-5 md:px-10 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <NavLink to="/">
            <img
              src="./images/MCS LOGO.png"
              alt="MCS LOGO"
              className="w-40 h-auto mb-5"
            />
          </NavLink>
          <p className="mb-4">
            Globtier from the day of its establishment in 2005, is providing
            small, midsize and startup enterprises with advanced IT solutions
            and uplifting their business performance with innovative workflows &
            solutions.
          </p>
          <p className="font-semibold mb-3">Follow Us On</p>
          <div className="flex space-x-4">
            {socialIcons.map((icon, index) => (
              <NavLink
                key={index}
                to={icon.url}
                className="text-white hover:opacity-5 transition-opacity duration-300"
              >
                {icon.icon}
              </NavLink>
            ))}
          </div>
        </div>
        {["Useful Links", "Useful Links"].map((title, index) => (
          <div key={index} className="space-y-2">
            <h2 className="font-semibold text-lg mb-5">{title}</h2>
            <ul className="space-y-2">
              {links.map((link, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <BsCaretRight />
                  <NavLink to="#">{link.title}</NavLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div>
          <h2 className="font-semibold text-lg mb-5">Memberships</h2>
          <div className="flex flex-col space-y-5">
            <img
              src={window.location.origin + "/images/w2.png"}
              alt=""
              className=" w-fit h-32"
            />
            <img
              src={window.location.origin + "/images/a28.jpg"}
              alt=""
              className="w-fit h-32"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
