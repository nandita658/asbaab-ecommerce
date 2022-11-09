import React from "react";
import classes from "./Dots.module.css";

const Dots = (props) => {
  return (
    <div className={classes.dots}>
      {props.imageSlider.map((slide, index) => (
        <span
          key={index}
          className={`${classes.dot} ${
            props.activeIndex === index ? classes.activeDot : ""
          }`}
          onClick={() => props.onClick(index)}
        >
          <span
            className={`${classes.innerDot} ${
              props.activeIndex === index ? classes.activeInnerDot : ""
            }`}
          ></span>
        </span>
      ))}
    </div>
  );
};

export default Dots;
