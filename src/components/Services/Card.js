import React from "react";

const Card = ({ data }) => {
  return (
    <div className="flex  justify-center p-4">
      <div className="w-full flex flex-col  bg-white border  rounded-md overflow-hidden">
        <div className="mt-0 relative hover:scale-105 duration-[0.3s] ease   ">
          <img src={data.image} alt="" className=" w-full" />
        </div>
        <div className=" flex justify-center -translate-y-24">
          <div className=" w-20 h-20 pt-[15px] rounded-md  absolute bg-white flex justify-center translate-y-12 ">
            <img
              src={data.logo}
              alt=""
              className=" w-[31px] h-[35px] mx-auto"
            />
          </div>
        </div>

        <div className=" mt-10 text-center p-[4px]">
          <div className=" font-semibold text-lg leading-6 mb-5">
            {data.serviceName}
          </div>
          <div className="w-[30px] h-[3px] mb-5 rounded-md bg-[#eaeaea] m-auto "></div>
          <div className="  mb-12 ">{data.desc}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
