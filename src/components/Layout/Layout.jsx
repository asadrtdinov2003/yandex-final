import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {motion} from "framer-motion";

function Layout() {
  return (<>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
