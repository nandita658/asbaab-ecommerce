import React from 'react'
import classes from "./Features.module.css";
import AutoAwesomeMotionRoundedIcon from '@mui/icons-material/AutoAwesomeMotionRounded';
import RefreshIcon from '@mui/icons-material/Refresh';
import FlightTakeoffSharpIcon from '@mui/icons-material/FlightTakeoffSharp';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const Features = () => {
  return (
    <div className={classes.features}>
        <ul>
            <li><AutoAwesomeMotionRoundedIcon style={{color: "#E2D784"}} /> <span>Bulk Ordering Save on Shipping</span></li>
            <li>|</li>
            <li><RefreshIcon style={{color: "#E2D784"}} /> <span>Hassle Free Returns</span></li>
            <li>|</li>
            <li><FlightTakeoffSharpIcon style={{color: "#E2D784"}} /> <span>Free Worldwide Shipping</span></li>
            <li>|</li>
            <li><LockOutlinedIcon style={{color: "#E2D784"}} /> <span>100% Safe & Secure Checkout</span></li>
        </ul>
    </div>
  )
}

export default Features;