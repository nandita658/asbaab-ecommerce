import "./App.css";
import LandingPage from "./Components/LandingPage/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./Components/LoginPage/LoginPage";
import Register from "./Components/LoginPage/Register";
import CompleteRegister from "./Components/LoginPage/CompleteRegister";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  //to check firebase auth state

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      console.log(user);
      if (user) {
        const idTokenResult = await user.getIdTokenResult();
        dispatch({
          type: "LOGGED_IN_USER",
          payload: {
            name: user.displayName,
            email: user.email,
            token: idTokenResult.token,
          },
        });
      }
    });

    //cleanup
    return () => unsubscribe();
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/register" element={<Register />} />
        <Route
          exact
          path="/register/complete-registration"
          element={<CompleteRegister />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
