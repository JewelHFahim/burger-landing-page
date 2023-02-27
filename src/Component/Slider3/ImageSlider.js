import { useState } from "react";
import React from 'react';
import img from "../Assets/burger2.png";
import "./ImageSlider.css"


const slideStyles = {
  width: "100%",
  height: "100%",
  borderRadius: "10px",
  backgroundSize: "cover",
  backgroundPosition: "center",
  border: '5px solid red'
};

const rightArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  right: "32px",
  fontSize: "45px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
};

const leftArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  left: "32px",
  fontSize: "45px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
};

const sliderStyles = {
  position: "relative",
  height: "100%",
};

const dotsContainerStyles = {
  display: "flex",
  justifyContent: "center",
};

const dotStyle = {
  margin: "0 3px",
  cursor: "pointer",
  fontSize: "20px",
};

  const transitionStyles = {
    entering: {
      transition: 'ease-in',
      transform: 'translateX(100%) scale(.000001)'
    },
    entered: {
      transition: 'all .5s .1s',
      transform: 'translateX(0%) scale(1)'
    },
    exiting: {
      transition: 'all 1s ease-out',
      transform: 'translateX(-1000%) scale(.5)'
    },
    exited: {
      transition: '1s ease-out',
      transform: 'translateX(1000%) scale(.5)'
    }
  }


const ImageSlider = ({ slides }) => {


    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
    };

    const goToNext = () => {
      const isLastSlide = currentIndex === slides.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
      setCurrentIndex(slideIndex);
    };
    
    const slideStylesWidthBackground = {
      ...slideStyles, transitionStyles,
      backgroundImage: `url(${slides[currentIndex].url})`,
    };
  
    return (
      <div style={sliderStyles}>


        {/* Arrow Controller */}
        <div>
          <div onClick={goToPrevious} style={rightArrowStyles} > ❰ </div>
          <div onClick={goToNext} style={leftArrowStyles} > ❱ </div>
        </div>

        <div style={ slideStylesWidthBackground } ></div>

       <div style={dotsContainerStyles}>
          {
          slides.map((slide, slideIndex) => (
            <div style={dotStyle} key={slideIndex} onClick={() => goToSlide(slideIndex)}>
              <img src={img} alt="" />
            </div>
          ))}
        </div> 

        
      </div>
    );
  };
  
  export default ImageSlider;