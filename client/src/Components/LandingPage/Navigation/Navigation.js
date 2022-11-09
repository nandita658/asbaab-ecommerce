import React, { useState } from "react";
import classes from "./Navigation.module.css";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LoginDropdown from "./LoginDropdown";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import StyledEngine from "@mui/styled-engine";

const Navigation = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const { user } = useSelector((state) => ({ ...state }));

  return (
    <div className={classes.navigation}>
      <div className={classes.navigationTop}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1>Asbaab</h1>
        </Link>
        <div className={classes.container}>
          <form action="" className={classes.searchForm}>
            <input type="text" placeholder="Search" />
            <button type="submit">
              <SearchIcon />
            </button>
          </form>
          <div className={`${user ? classes.iconsLoggedIn : classes.icons}`}>
            <LocalMallOutlinedIcon
              style={{
                height: "30px",
                width: "30px",
                color: "#383838",
                cursor: "pointer",
              }}
            />
            <span style={{ color: "rgb(201, 196, 196)" }}>|</span>
            <div className={classes.login}>
              <div
                onClick={() => setShowDropdown(!showDropdown)}
                className={classes.loginButton}
              >
                <PersonOutlineIcon
                  style={{ height: "30px", width: "30px", color: "#383838" }}
                />
                {user && <span style={{ fontSize: "12px" }}>{user.name}</span>}
                <KeyboardArrowDownIcon
                  style={{ height: "15px", width: "15px" }}
                />
              </div>
              {showDropdown && <LoginDropdown />}
            </div>
          </div>
        </div>
      </div>
      <div className={classes.navbar}>
        <ul>
          <li>Living Room</li>
          <li>|</li>
          <li>Dining Room</li>
          <li>|</li>
          <li>Bedroom</li>
          <li>|</li>
          <li>Kids</li>
          <li>|</li>
          <li>Home Office</li>
          <li>|</li>
          <li>Ready to Ship</li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
