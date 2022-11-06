import { Outlet } from "react-router-dom";

import Footer from "../components/Footer";
import MainNavigation from "../components/MainNavigation";
import bg from "../img/bg2.jpg";

function RootLayout() {
  return (
    <div style={{ backgroundImage: `url(${bg})`, margin: "0 0 0 0" }}>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default RootLayout;
