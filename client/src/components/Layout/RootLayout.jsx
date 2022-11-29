import { Outlet } from "react-router-dom";

import MainNavigation from "../NavBar/MainNavigation";
import Footer from "../Footer/Footer";

import bg from "../../img/loginbg2.jpg";

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
