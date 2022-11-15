import { Outlet } from "react-router-dom";

import Footer from "../components/Footer";
import MainNavigation from "../components/MainNavigation";
import bg from "../img/loginbg2.jpg";

function RootLayout() {
  return (
    <div style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }}>
      <div
        style={{
          width: "1600px",
          maxWidth: "100%",
          margin: "auto auto",
        }}
      >
        <MainNavigation />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default RootLayout;
