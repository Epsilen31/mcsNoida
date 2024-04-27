import React from "react";
import { NavLink } from "react-router-dom";

const Hero2 = () => {
  return (
    <div className="w-full mx-auto flex flex-col lg:flex-row items-center justify-between">
      <div className="flex flex-col lg:flex-row items-center lg:mx-auto  lg:ml-[193px] lg:mr-[193px] lg:items-center justify-center gap-8 container">
        <div className="w-full lg:w-1/2 mt-10 lg:mt-24">
          <h1 className="text-center lg:text-left text-lg  lg:text-2xl leading-normal lg:leading-[43.2px] text-[#666666]">
            Why MCS
          </h1>
          <div className="text-lg lg:text-2xl w-full my-6 text-[#666666] text-opacity-70">
            We’ve been triumphing all these 15 years.
          </div>
          <div className="w-full text-[#666666]">
            <p className="font-bold">Broad Service Bandwidth</p>
            <p className="py-2">
              Globtier team is adept at handling projects with supreme finesse,
              irrespective of the quantity or complexity of projects.
            </p>
            <p className="font-bold">Absolutely Customized Solutions </p>
            <p className="py-2">
              With Globtier you get the facility to pick and choose your
              services based on your specific requirements.
            </p>
            <p className="font-bold">Diverse Development Models</p>
            <p className="py-2">
              We have successfully incorporated a wide range of development
              models that suit our clients’ objective and help them achieve
              their goals.
            </p>
            <p className="font-bold">Offshore Leverage </p>
            <p className="py-2">
              Cost – effectiveness is not the only factor, competence of the
              highest order marks our offshore development model that delivers a
              suite of benefits for clients.
            </p>
          </div>
          <NavLink className="text-[#2154CF] font-semibold">Learn More</NavLink>
        </div>
        <div className="w-full lg:w-1/2 mt-10 lg:mt-44">
          <img
            className="w-full h-auto object-cover"
            src="./images/about-3.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero2;
