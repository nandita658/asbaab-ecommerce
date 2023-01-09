import React, { useState, useEffect } from "react";
import classes from "./ForgotPassword.module.css";
import Navigation from "../LandingPage/Navigation/Navigation";
import Footer from "../LandingPage/Footer/Footer";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const { user } = useSelector((state) => ({ ...state }));
  const navigate = useNavigate();

  //Redirecting user if it has already logged in and trying to go to /login/forgotPassword
  useEffect(() => {
    if (user && user.token) navigate("/");
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const config = {
      url: process.env.REACT_APP_FORGOT_PASSWAORD_REDIRECT_URL,
      handleCodeInApp: true,
    };

    //Sending forgot your password email.
    await auth
      .sendPasswordResetEmail(email, config)
      .then(() => {
        setEmail("");
        toast.success("Check your email for password reset link.");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <React.Fragment>
      <Navigation />
      <div className={classes.register}>
        <h1>Forgot your Password</h1>
        <form onSubmit={handleSubmit}>
          <div className={classes.formControl}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="name"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoFocus
            />
          </div>
          <div className={classes.formActions}>
            <button type="submit">Submit</button>
          </div>
        </form>
        <ToastContainer toastStyle={{ fontSize: "14px" }} />
      </div>
      <Footer className={classes.footerRegister} />
    </React.Fragment>
  );
};

export default ForgotPassword;
