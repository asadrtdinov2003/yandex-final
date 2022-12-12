/* eslint-disable */
import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import s from "./ProjectsPage.module.css";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

const fakeData = {
  name: "Название проекта 1",
  date: "22/11/22",
  type: "Личный проект",
  tags: ["JS", "CSS", "React", "MongoDB"],
  author: "Joe Est",
  description:
    "Краткое описание проекта. Lorem ipsum dolor sit amet consectetur. Senectus sed velit libero urna sem vivamus senectus penatibus turpis. Ut enim neque malesuada quam velit diam ipsum sagittis nec. Ut consequat tempus ullamcorper vivamus. Amet neque aenean gravida maecenas.",
};

function ProjectsPage() {
  return (
    <>
      <Header/>
      <main>
        <div className={s.container}>
          <h1 className={s.title}>НАШИ ПРОЕКТЫ</h1>
          <div className={s.cards}>
            <ProjectCard props={fakeData}/>
            <ProjectCard props={fakeData}/>
          </div>
          <button className={s.bottom_btn}>загрузить еще</button>
        </div>
      </main>
      <Footer/>
    </>
  );
}

export default ProjectsPage;
