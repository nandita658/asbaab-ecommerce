import React, { useState } from "react";
import imageSlider from "../../../Files/imageSlider";
import classes from "./Slider.module.css";
import SliderContent from "./SliderContent";
import Arrow from "./Arrow";
import Dots from "./Dots";

const len = imageSlider.length - 1;

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex(activeIndex < 1 ? len : activeIndex - 1);
  };

  return (
    <div className={classes.slider}>
      <SliderContent activeIndex={activeIndex} imageSlider={imageSlider} />
      <Arrow
        prevSlide={() =>
          setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
        }
        nextSlide={nextSlide}
      />
      <Dots
        activeIndex={activeIndex}
        imageSlider={imageSlider}
        onClick={(activeIndex) => setActiveIndex(activeIndex)}
      />
    </div>
  );
};

export default Slider;
