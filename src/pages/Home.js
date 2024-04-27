import React from "react";
import Carousel from "../components/Carousel";
import Hero from "../components/Hero";
import Service from "../components/Services/Service";
import Hero2 from "../components/Hero2";
import QueryForm from "../components/QueryForm";
import Footer from "../components/Footer";
import Copywrite from "./Copywrite";

const Home = () => {
  let slides = [
    " https://www.globtier.com/wp-content/themes/globtier/assets/images/resource/2.jpg",
    "https://www.globtier.com/wp-content/themes/globtier/assets/images/resource/3.jpg",
    "https://www.globtier.com/wp-content/themes/globtier/assets/images/resource/1.jpg",
    // Add more image URLs here
  ];
  return (
    <div>
      <div className="w-full m-auto pt-3">
        <Carousel slides={slides} />
      </div>
      <Hero></Hero>
      <Service></Service>
      <Hero2></Hero2>

      {/* QUERY FORM */}
      <div className=" mt-10 relative flex flex-col">
        <div className="w-full">
          <img
            src={window.location.origin + "/images/custome-image.png"}
            alt=""
            className="h-full w-full relative"
          />
          <div className=" absolute left-6 bottom-51">
            <h1>Free Consultation</h1>
          </div>
          <div className="bg-white w-full h-[100vh] "></div>
        </div>

        <QueryForm className="flex-grow"></QueryForm>
      </div>
      <div></div>
      <Footer></Footer>
      {/* copywrite */}
      <Copywrite />
    </div>
  );
};

export default Home;
