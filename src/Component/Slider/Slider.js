
import React, { useState } from 'react';
import { Transition } from 'react-transition-group';
import img from "../Assets/burger2.png"

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const slides = [
    {
      src: 'https://burger-landing-page-mb.netlify.app/static/media/burger2.db5958546addac58b6a0.png'
    },
    {
      src: 'https://burger-landing-page-mb.netlify.app/static/media/burger2.db5958546addac58b6a0.png'
    },
    {
      src:'https://burger-landing-page-mb.netlify.app/static/media/burger2.db5958546addac58b6a0.png'
    },
  ]

  const transitionStyles = {
    entering: {
      transition: 'all 0.5s ease-in-out',
      transform: 'translateX(100%) scale(0.5)'
    },
    entered: {
      transition: 'all 0.5s ease-in-out',
      transform: 'translateX(0%) scale(1)'
    },
    exiting: {
      transition: 'all 0.5s ease-in-out',
      transform: 'translateX(-100%) scale(1)'
    },
    exited: {
      transition: 'all 0.5s ease-in-out',
      transform: 'translateX(0%) scale(0.5)'
    }
  }

  const handleNextClick = () => {
    const nextIndex = slideIndex === slides.length - 1 ? 0 : slideIndex + 1;
    setSlideIndex(nextIndex);
  };

  const handlePreviousClick = () => {
    const previousIndex = slideIndex === 0 ? slides.length - 1 : slideIndex - 1;
    setSlideIndex(previousIndex);
  };

  return (
    <div>

      {slides.map((slide, index) => (
        <Transition key={index} in={index === slideIndex} timeout={500} appear mountOnEnter unmountOnExit>
          {state => ( <img src={slide.src} style={{ ...transitionStyles[state], width: "100%", height: "100%"}}/>)}
        </Transition>
      ))}
      <button onClick={handleNextClick}>Next</button>
      <button onClick={handlePreviousClick}>Previous</button>
 
    </div>
  );
};

export default Slider;