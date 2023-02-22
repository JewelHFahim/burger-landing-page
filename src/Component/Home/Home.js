import React from "react";
import LeftContent from "../LeftContent/LeftContent";
import Navbar from "../Navbar/Navbar";
import RightContent from "../RightContent/RightContent";
import Slider from "../Slider/Slider";
import Slider2 from "../Slider2/Slider2";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container h-scree">
      <Navbar></Navbar>

      <div className="grid grid-cols-2 gap-0 px-[50px] relative">
        <div className="">
          {/* <LeftContent></LeftContent> */}
        </div>
        <div className="slider absolute left-[30%] z-50">
          {/* <Slider2></Slider2> */}
          <Slider></Slider>
        </div>
        <div className="RightContent ">
          {/* <RightContent /> */}
        </div>
      </div>
    </div>
  );
};

export default Home;