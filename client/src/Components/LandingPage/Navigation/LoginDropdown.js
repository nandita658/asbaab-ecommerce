import React from "react";
import classes from "./LoginDropdown.module.css";
import LoginIcon from "@mui/icons-material/Login";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartCheckoutOutlinedIcon from "@mui/icons-material/ShoppingCartCheckoutOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link, useNavigate } from "react-router-dom";
import firebase from "firebase/compat/app";
import { useDispatch, useSelector } from "react-redux";

const LoginDropdown = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const { user } = useSelector((state) => ({ ...state }));

  const logout = () => {
    firebase.auth().signOut();
    dispatch({ type: "LOGOUT", payload: null });
    navigation("/login");
  };

  return (
    <>
      <div className={classes.arrowUp}></div>
      <div className={classes.loginDropdown}>
        <ul>
          {!user && (
            <>
              <Link to="/login" style={{ textDecoration: "none" }}>
                <li style={{ marginBottom: "6px" }}>
                  <LoginIcon
                    style={{ height: "18px", width: "18px", color: "#383838" }}
                  />{" "}
                  <span>Login</span>
                </li>
              </Link>
              <Link to="/register" style={{ textDecoration: "none" }}>
                <li>
                  <HowToRegOutlinedIcon
                    style={{ height: "18px", width: "18px", color: "#383838" }}
                  />{" "}
                  <span>Register</span>
                </li>
              </Link>
            </>
          )}
          {user && (
            <>
              <li style={{ marginBottom: "6px" }}>
                <ShoppingCartOutlinedIcon
                  style={{ height: "18px", width: "18px", color: "#383838" }}
                />{" "}
                <span>Your Cart</span>
              </li>
              <li style={{ marginBottom: "6px" }}>
                <FavoriteBorderOutlinedIcon
                  style={{ height: "18px", width: "18px", color: "#383838" }}
                />{" "}
                <span>Your Wishlist</span>
              </li>
              <li style={{ marginBottom: "6px" }}>
                <ShoppingCartCheckoutOutlinedIcon
                  style={{ height: "18px", width: "18px", color: "#383838" }}
                />{" "}
                <span>Your Orders</span>
              </li>
              <li style={{ marginBottom: "0px" }} onClick={logout}>
                <LogoutIcon
                  style={{ height: "18px", width: "18px", color: "#383838" }}
                />{" "}
                <span>Logout</span>
              </li>
            </>
          )}
        </ul>
      </div>
    </>
  );
};

export default LoginDropdown;
