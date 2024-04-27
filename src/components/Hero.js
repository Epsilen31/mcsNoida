import React from "react";

const Hero = () => {
  return (
    <div className="w-full sm:w-11/12 mx-auto flex flex-col sm:flex-row items-center justify-between">
      <div className="flex flex-col sm:flex-col lg:flex-row items-center  lg:ml-[150px] lg:mr-[150px] justify-center gap-8 container">
        <div className="w-full lg:w-1/2 mt-10 lg:mt-44">
          <img
            className="w-full h-auto object-cover"
            src="./images/about-3.png"
            alt=""
          />
        </div>
        <div className="w-full lg:w-1/2  sm:mt-24">
          <h1 className=" text-center sm:text-start lg:text-left text-4xl  lg:text-2xl leading-normal lg:leading-[43.2px] text-[#666666]">
            Managing Your IT Requirement Smartly !!!
          </h1>
          <div className="text-lg sm:text-2xl w-full my-6 text-[#2154CF] text-opacity-70">
            Custom-Made, Professional, Affordable & Effective IT Solutions
          </div>
          <div className="w-full text-[#666666]">
            <p>
              We are capable of providing cost effective IT solutions, mobile
              application development and cloud services to our esteemed
              customers with widespread satisfaction.
            </p>
            <p className="py-7">
              Over 15 years working in Managed IT services, developing software
              applications and mobile apps for clients all over the world.
            </p>
          </div>
          <p className="text-[#555555]">
            We denounce with righteous indignation and dislike men who are so
            beguiled and demoralized by the charms of pleasure of the moment, so
            blinded by desire, that they cannot foresee the pain and trouble
            that are bound to ensue; and equal blame belongs to those who fail
            in their duty through weakness of will, which is the same as saying.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
