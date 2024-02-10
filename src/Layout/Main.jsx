import React from "react";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";

import { Outlet } from "react-router-dom";
import HeroBanner from "../pages/HeroBanner/HeroBanner";

const Main = () => {
  return (
    <div >
      <Navbar />
      <HeroBanner/>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
