import React from "react";
import img1 from "../Assets/burger2.png";
import "./Slider2.css";

const Slider2 = () => {
  return (
    <div className="carousel mt-[80px]">


      <div id="slide1" className="carousel-item relative w-full overflow-hidden">
        <div className="img-container">
          <img src={img1} className="w-[78%] h-[80%]" />
          <img src={img1} className="w-[40%] h-[35%] mt-[130px] img-two" />
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2  bottom-36 left-[22%]">
          <a href="#slide3" className="btn btn-circle border-0 bg-[#ffff00] text-black mr-[100px]"> ❮ </a>
          <a href="#slide2" className="btn btn-circle border-0 bg-white text-black"> ❯ </a>
        </div>
      </div>

      <div id="slide2" className="carousel-item relative w-full overflow-hidden">
        <div className="img-container">
          <img src={img1} className="w-[78%] h-[80%]" />
          <img src={img1} className="w-[40%] h-[35%] mt-[130px] img-two" />
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2  bottom-36 left-[22%]">
          <a href="#slide1" className="btn btn-circle border-0 bg-[#ffff00] text-black mr-[100px]"> ❮ </a>
          <a href="#slide3" className="btn btn-circle border-0 bg-white text-black"> ❯ </a>
        </div>
      </div>


    </div>
  );
};

export default Slider2;
