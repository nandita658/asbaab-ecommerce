import React, { useEffect, useState } from "react";
import { auth } from "../../firebase";
import { toast, ToastContainer } from "react-toastify";
import Navigation from "../LandingPage/Navigation/Navigation";
import classes from "./CompleteRegister.module.css";
import Footer from "../LandingPage/Footer/Footer";
import { useNavigate } from "react-router-dom";

const CompleteRegister = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    setEmail(window.localStorage.getItem("emailForRegisteration"));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password || !name) {
      toast.error("Please fill all fields");
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    try {
      const result = await auth.signInWithEmailLink(
        email,
        window.location.href
      );
      //console.log("RESULT ", result);
      //console.log("RESULT ", result.user);

      // Check whether email is verified or not
      if (result.user.emailVerified) {
        // remove user from local storage

        window.localStorage.removeItem("emailForRegisteration");

        //get user id

        let user = auth.currentUser; //current loggedIn user is stored in firebase
        await user.updatePassword(password); //updatePassword is a firebase function to update the password
        await user.updateProfile({ displayName: name }); //updateProfile is a firebase function to update the profile and we pass object as argument
        const tokenId = await user.getIdTokenResult(); //getIdTokenResult is also a firebase function to access user's token

        //redux store

        //redirect

        navigate("/");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <React.Fragment>
      <Navigation />
      <div className={classes.completeRegister}>
        <h1>Complete registering with Us</h1>
        <form onSubmit={handleSubmit}>
          <div className={classes.formControl}>
            <label htmlFor="name">Full Name</label>
            <input
              type="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoFocus
            />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" defaultValue={email} disabled />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className={classes.formActions}>
            <button type="submit">Sign Up</button>
          </div>
        </form>
        <ToastContainer toastStyle={{ fontSize: "14px" }} />
      </div>
      <Footer className={classes.footerRegister} />
    </React.Fragment>
  );
};

export default CompleteRegister;
