import * as React from "react";
import { Route, Routes } from "react-router-dom";

import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";

import LandingPage from "./pages/Ecom/Landing/LandingPage";
import ShopSignUp from "./pages/Ecom/SignUp/ShopSignUp";

import ErrorElement from "./pages/Error/Error";
import Category from "./pages/Ecom/Category/Category";
import ProductDetail from "./pages/Ecom/Product/ProductDetail";

// import axios from "axios";

function App() {
  // const getUser = async () => {
  //   try {
  //     await axios.get("/api/v1/users/me", {
  //       withCredentials: true,
  //       auth: true,
  //     });
  //   } catch (err) {
  //     console.error(err.message);
  //   }
  // };

  // getUser();

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="signup"
          element={<ShopSignUp />}
          errorElement={<ErrorElement />}
        />
        <Route
          path=":catId"
          element={<Category />}
          errorElement={<ErrorElement />}
        />
        <Route path="/Coats/:prodId" element={<ProductDetail />} />
        <Route path="/Shoes/:prodId" element={<ProductDetail />} />
        <Route path="/Jeans/:prodId" element={<ProductDetail />} />
        <Route path="/Jewerlly/:prodId" element={<ProductDetail />} />
        <Route path="/Shirts/:prodId" element={<ProductDetail />} />
        <Route path="/Hoodies/:prodId" element={<ProductDetail />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;

//-------------------------------------------------------------------------------------
// <Route path="/profile" element={<ProfilePage />}>
//   <Route path=":userId" element={<ProfilePage />} />
// </Route>
// import ProfilePage from "./pages/Ecom/Profile/ProfilePage";
