import React from 'react';
import classes from "./Footer.module.css";

const Footer = (props) => {
  return (
    <div className={`${classes.footer} ${props.className}`}>Copyright @ 2022</div>
  )
}

export default Footer;