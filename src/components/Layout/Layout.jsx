import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import cn from "classnames";
import { ThemeContext } from "../../Contexts/ThemeContext";
import styles from "./Layout.module.css";
import { motion } from "framer-motion";

function Layout() {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className={cn(styles.outer_page, { [styles.outer_page_dark]: darkMode })}>
      <Header />
      <motion.div
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1, transition: {duration: 1} }}
        exit={[{ x: 300, opacity: 0, transition: {duration: .5} }, "onExit"]}
        transition={{
          type: "spring",
          stiffness: 130,
          damping: 20
        }}>
        <Outlet />
      </motion.div>
      <Footer />
    </div>
  );
}

export default Layout;
