import React, { useState , useEffect} from "react";
import classes from "./LoginPage.module.css";
import Navigation from "../LandingPage/Navigation/Navigation";
import Footer from "../LandingPage/Footer/Footer";
import { Link, useNavigate } from "react-router-dom";
import { auth, googleAuthProvider } from "../../firebase";
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { useSelector } from "react-redux"
import GoogleIcon from "@mui/icons-material/Google";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => ({ ...state }));

  //Redirecting user if it has already logged in and trying to go to /login
  useEffect(() => {
    if (user && user.token) navigate("/");
  }, [user]);

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
          <Link
            to="/login/forgotPassword"
            style={{
              fontSize: "12px",
              textAlign: "right",
              textDecoration: "none",
              color: "#383838",
              fontWeight: "500",
            }}
          >
            <span>Forgot your password?</span>
          </Link>
          <div className={classes.formActions}>
            <button type="submit">
              <MailOutlineIcon
                style={{
                  background: "transparent",
                  paddingRight: "6px",
                  color: "#f7f7f7",
                  height: "20px",
                }}
              />
              Login
            </button>
            <button onClick={googleLoginHandler}>
              <GoogleIcon
                style={{
                  background: "transparent",
                  paddingRight: "6px",
                  color: "#f7f7f7",
                  height: "20px",
                }}
              />
              Login with Google
            </button>
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
