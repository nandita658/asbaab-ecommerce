import React, { useState } from "react";
import classes from "./ProductCard.module.css";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";

const ProductCard = (props) => {
  return (
    <div className={classes.productCard}>
      {props.productImages.map((item, index) => (
        <div
          key={item.id}
          className={classes.productCardItem}
        >
          <div className={classes.productCardImg}>
            <img src={item.imgURL} alt="" />
            {console.log(item.id)}
            <div className={classes.productImgHover}>
              <VisibilityOutlinedIcon
                style={{
                  backgroundColor: "transparent",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                }}
              />
            </div>
            <div className={classes.addToCart}>
              <AddShoppingCartOutlinedIcon
                style={{ backgroundColor: "transparent" }}
              />
              <span>Add to Cart</span>
            </div>
          </div>
          <div className={classes.productDescription}>
            <div className={classes.name}>{item.name}</div>
            <div className={classes.price}>
              <span>$</span>
              {item.price}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
