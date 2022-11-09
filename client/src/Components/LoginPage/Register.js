import React, { useState } from "react";
import Footer from "../LandingPage/Footer/Footer";
import Navigation from "../LandingPage/Navigation/Navigation";
import classes from "./Register.module.css";
import { auth } from "../../firebase";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Outlet } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    //Passing state in email
    
    const actionCodeSettings = {
      url: process.env.REACT_APP_REGISTER_URL,
      handleCodeInApp: true,
    };

    //Sending email for verification

    await auth.sendSignInLinkToEmail(email, actionCodeSettings);
    toast.success(
      `Email is sent to ${email}. Click the link to complete registration.`
    );

    //save email to local storage

    window.localStorage.setItem("emailForRegisteration", email);

    //clear email state

    setEmail("");
  };

  return (
    <React.Fragment>
      <Navigation />
      <div className={classes.register}>
        <h1>New Account</h1>
        <form onSubmit={handleSubmit}>
          <div className={classes.formControl}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="name"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={classes.formActions}>
            <button type="submit">Register</button>
          </div>
        </form>
        <ToastContainer toastStyle={{ fontSize: "14px" }} />
      </div>
      <Footer className={classes.footerRegister} />
    </React.Fragment>
  );
};

export default Register;
