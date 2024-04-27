import React from "react";
import "./Service.css";
import cardData from "./data";
import Card from "./Card";

const Service = () => {
  return (
    <div className="bg-[#eaeaea] mt-52 pt-[50px]">
      <div className="">
        <div className="text-center mb-20">
          <h2 className="text-[24px] mb-[40px] font-semibold text-[#222222] leading-[28.8px]">
            Our Services
          </h2>
          <p className="uppercase text-[24px] text-[#222222] leading-[28.8px]">
            What We Offered
          </p>
        </div>

        <div className="flex flex-wrap justify-center lg:justify-start lg:ml-[160px] lg:mr-[160px]">
          {cardData.map((data) => (
            <div key={data.id} className="w-full lg:w-1/2 xl:w-1/3 px-4">
              <Card data={data}></Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
