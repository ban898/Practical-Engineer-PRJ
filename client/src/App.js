import * as React from "react";
import {
  RouterProvider,
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

import WelcomePage from "./pages/WelcomePage";
import RootLayout from "./pages/RootLayout";
import Products from "./pages/Products";
import ErrorElement from "./pages/Error";
// import Button from "@mui/material/Button";

const myRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<ErrorElement />}>
      <Route index element={<WelcomePage />} />
      <Route
        path="products"
        element={<Products />}
        errorElement={<ErrorElement />}
      />
    </Route>
  )
);
function App() {
  return <RouterProvider router={myRouter} />;
}

export default App;
