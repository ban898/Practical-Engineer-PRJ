import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop/ScrollToTop";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ScrollToTop />
    <App />
  </BrowserRouter>
);

//-------------------------------------------------------------------------------------
// import { ThemeProvider } from "@mui/material";
// import { theme } from "./theme";

// <ThemeProvider theme={theme}>
//   <App />
// </ThemeProvider>;
