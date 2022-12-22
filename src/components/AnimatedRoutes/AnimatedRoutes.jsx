import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Layout from "../Layout/Layout";
import MainPage from "../../pages/MainPage/MainPage";
import ProjectsPage from "../../pages/ProjectsPage/ProjectsPage";
import TeamsPage from "../../pages/TeamsPage/TeamsPage";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence
      mode="wait"
      onExitComplete={() => {
        window.scrollTo(0, 0);
      }}
      initial={false}
    >
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="teams" element={<TeamsPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
