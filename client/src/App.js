import * as React from "react";
import { Route, Routes } from "react-router-dom";

import WelcomePage from "./pages/WelcomePage";
import RootLayout from "./pages/RootLayout";
import Products from "./pages/Products";
import ErrorElement from "./pages/Error";
import Login from "./pages/Login";

function App() {
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
    </Routes>
  );
}

export default App;

//-------------------------------------------------------------------------------------
// const myRouter = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<RootLayout />} errorElement={<ErrorElement />}>
//       <Route index element={<WelcomePage />} />
//       <Route path="login" element={<Login />} errorElement={<ErrorElement />} />
//       <Route
//         path="products"
//         element={<Products />}
//         errorElement={<ErrorElement />}
//       />
//     </Route>
//   )
// );

// function App() {
//   return (
//     <div>
//       <RouterProvider router={myRouter} />
//     </div>
//   );
// }

// RouterProvider,
// createBrowserRouter,
// createRoutesFromElements,
