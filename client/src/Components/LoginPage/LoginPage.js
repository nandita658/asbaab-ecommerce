import React, { useState } from "react";
import classes from "./LoginPage.module.css";
import Navigation from "../LandingPage/Navigation/Navigation";
import Footer from "../LandingPage/Footer/Footer";
import { Link, useNavigate } from "react-router-dom";
import { auth, googleAuthProvider } from "../../firebase";
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import GoogleIcon from "@mui/icons-material/Google";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await auth.signInWithEmailAndPassword(email, password);
      const { user } = result;
      const idTokenResult = await user.getIdTokenResult();

      dispatch({
        type: "LOGGED_IN_USER",
        payload: {
          name: user.displayName,
          email: user.email,
          token: idTokenResult.token,
        },
      });

      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error(error);
      setLoading(false);
    }
  };

  const googleLoginHandler = async () => {
    auth
      .signInWithPopup(googleAuthProvider)
      .then(async (result) => {
        const { user } = result;
        const idTokenResult = user.getIdTokenResult();

        dispatch({
          type: "LOGGED_IN_USER",
          payload: {
            name: user.displayName,
            email: user.email,
            token: idTokenResult.token,
          },
        });

        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
  };

  return (
    <React.Fragment>
      <Navigation />
      <div className={classes.loginPage}>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className={classes.formControl}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="name"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <span style={{ fontSize: "12px", textAlign: "right" }}>
            Forgot your password?
          </span>
          <div className={classes.formActions}>
            <button type="submit">Login</button>
            <button onClick={googleLoginHandler}>Login with Google</button>
          </div>
          <div className={classes.signup}>
            Not registered yet?{" "}
            <Link to="/register" style={{ color: "#A27B5C" }}>
              Create an account
            </Link>
          </div>
        </form>
        <ToastContainer toastStyle={{ fontSize: "14px" }} />
      </div>
      <Footer className={classes.footerRegister} />
    </React.Fragment>
  );
};

export default LoginPage;
