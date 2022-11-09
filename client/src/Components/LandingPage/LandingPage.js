import React from 'react'
import Categories from './Categories/Categories'
import HeroPage from './HeroPage/HeroPage'
import Product from './Products/Product'
import popularProducts from "../../Files/popularProducts"
import latestProducts from '../../Files/latestProducts'
import classes from './LandingPage.module.css'
import Footer from './Footer/Footer'

const LandingPage = () => {
  return (
    <div>
        <HeroPage />
        <Categories />
        <Product title="Most Popular Products" desc = "" productImages={popularProducts} />
        <Product title="The Latest Arrivals" desc = "Delicately designed" productImages={latestProducts} />
        <Footer />
    </div>
  )
}

export default LandingPage