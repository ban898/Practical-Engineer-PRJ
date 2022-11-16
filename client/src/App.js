import * as React from "react";
import { Route, Routes } from "react-router-dom";

import WelcomePage from "./pages/WelcomePage";
import RootLayout from "./pages/RootLayout";

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
    } catch (err) {}
  };

  getUser();

  return (
    <Routes>
      <Route path="/" element={<RootLayout />} errorElement={<ErrorElement />}>
        <Route index element={<WelcomePage />} />
        <Route
          path="products"
          element={<Products />}
          errorElement={<ErrorElement />}
        />
      </Route>
      <Route path="login" element={<Login />} errorElement={<ErrorElement />} />
      <Route
        path="Signup"
        element={<Signup />}
        errorElement={<ErrorElement />}
      />
    </Routes>
  );
}

export default App;
