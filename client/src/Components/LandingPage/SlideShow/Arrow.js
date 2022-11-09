import React from "react";
import classes from "./Arrow.module.css";

const Arrow = (props) => {
  return (
    <div className={classes.arrow}>
      <span className={classes.arrowPrev} onClick={props.prevSlide}>
        &#10094;
      </span>
      <span className={classes.arrowNext} onClick={props.nextSlide}>
        &#10095;
      </span>
    </div>
  );
};

export default Arrow;
