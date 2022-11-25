import * as React from "react";
import { Route, Routes } from "react-router-dom";

import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";

import WelcomePage from "./pages/WelcomePage";
import RootLayout from "./pages/RootLayout";
import LandingPage from "./pages/Ecom/LandingPage";
import ShopSignUp from "./pages/Ecom/ShopSignUp";

import Products from "./pages/Products";
import ErrorElement from "./pages/Error";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import axios from "axios";

function App() {
  const getUser = async () => {
    try {
      await axios
        .get("/api/v1/users/me", { withCredentials: true, auth: true })
        .then((res) => {
          console.log(res);
        });
    } catch (err) {
      //console.error(err);
    }
  };

  getUser();

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route
          path="/"
          element={<RootLayout />}
          errorElement={<ErrorElement />}
        >
          <Route index element={<WelcomePage />} />
          <Route
            path="products"
            element={<Products />}
            errorElement={<ErrorElement />}
          />
        </Route>
        <Route
          path="shop"
          element={<LandingPage />}
          errorElement={<ErrorElement />}
        >
          <Route path="signup" element={<ShopSignUp />} />
        </Route>
        <Route
          path="login"
          element={<Login />}
          errorElement={<ErrorElement />}
        />
        <Route
          path="Signup"
          element={<Signup />}
          errorElement={<ErrorElement />}
        />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
