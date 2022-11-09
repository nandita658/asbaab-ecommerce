import React from "react";
import classes from "./SliderContent.module.css";

const SliderContent = (props) => {
  return (
    <div className={classes.sliderContent}>
      {props.imageSlider.map((slide, index) => (
        <div
          key={index}
          className={`${
            index === props.activeIndex
              ? `${classes.slides} ${classes.actve}`
              : classes.inactive
          }`}
        >
          <div className={`${props.activeIndex===0 ? classes.imageContainer : classes.imageContainer1}`}>
            <img className={classes.slideImage} src={slide.imgURL} alt="" />
          </div>
          <h2 className={`${classes.slideTitle} ${props.activeIndex === 1 && classes.slideTitle1}`}>{slide.title}</h2>
          <h3 className={`${classes.slideDesc} ${props.activeIndex === 1 && classes.slideDesc1}`}>{slide.description}</h3>
          <button className={`${props.activeIndex === 1 && classes.button}`}>Shop Now</button>
        </div>
      ))}
    </div>
  );
};

export default SliderContent;
