import React from "react";
import classes from "./Product.module.css";
import ProductCard from "./ProductCard";

const Product = (props) => {
  return (
    <div className={classes.product}>
      <div className={classes.sectionHeader}>
        <h1>{props.title}</h1>
        <p>{props.desc}</p>
      </div>
      <ProductCard productImages={props.productImages} />
    </div>
  );
};

export default Product;
