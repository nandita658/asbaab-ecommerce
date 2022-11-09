import React from "react";
import categories from "../../../Files/categories";
import classes from "./CategoryCard.module.css";

const CategoryCard = () => {
  return (
    <div className={classes.categoryCard}>
      {categories.map((item) => (
        <div className={classes.categoryCardItem}>
          <div className={classes.categoryCardImg}>
            <img src={item.imgURL} alt="" />
          </div>
          <div className={classes.title}>{item.title}</div>
        </div>
      ))}
    </div>
  );
};

export default CategoryCard;
