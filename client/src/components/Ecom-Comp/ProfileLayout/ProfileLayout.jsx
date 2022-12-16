import React from "react";
import ShopNav from "../Navbar/ShopNav";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router";

const ProfileLayout = () => {
  return (
    <div>
      <ShopNav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default ProfileLayout;
