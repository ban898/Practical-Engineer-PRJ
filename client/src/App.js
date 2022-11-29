import * as React from "react";
import { Route, Routes } from "react-router-dom";

import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";

import WelcomePage from "./pages/LandingPage/WelcomePage";
import RootLayout from "./components/Layout/RootLayout";
import LandingPage from "./pages/Ecom/Landing/LandingPage";
import ShopSignUp from "./pages/Ecom/SignUp/ShopSignUp";

import Products from "./pages/Products/Products";
import ErrorElement from "./pages/Error/Error";
import Login from "./pages/Login/Login";
import Signup from "./pages/SignUp/Signup";
import Category from "./pages/Ecom/Category/Category";

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
          path="login"
          element={<Login />}
          errorElement={<ErrorElement />}
        />
        <Route
          path="Signup"
          element={<Signup />}
          errorElement={<ErrorElement />}
        />
        <Route
          path="shop"
          element={<LandingPage />}
          errorElement={<ErrorElement />}
        ></Route>
        <Route path="shop/signup" element={<ShopSignUp />} />
        <Route path="shop/:catId" element={<Category />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
