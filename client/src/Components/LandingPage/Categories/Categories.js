import React from 'react'
import classes from "./Categories.module.css";
import CategoryCard from './CategoryCard';

const Categories = () => {
  return (
    <div className={classes.categories}>
        <h1>Clever designs, delivered free</h1>
        <CategoryCard />
    </div>
  )
}

export default Categories