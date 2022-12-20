/* eslint-disable */
import React, { useContext } from "react";
import s from "./ProjectsPage.module.css";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import cn from 'classnames';
import { ThemeContext } from "../../Contexts/ThemeContext";

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
  const {darkMode} = useContext(ThemeContext);

  return (
    <main className={cn(s.page, {[s.page_dark]: darkMode})}>
      <div className={s.container}>
        <h1 className={cn(s.title, {[s.title_dark]: darkMode})}>НАШИ ПРОЕКТЫ</h1>
        <div className={s.cards}>
          <ProjectCard className={cn(s.card, {[s.card_dark]: darkMode})} props={fakeData} />
          <ProjectCard className={cn(s.card, {[s.card_dark]: darkMode})} props={fakeData} />
          <ProjectCard className={cn(s.card, {[s.card_dark]: darkMode})} props={fakeData} />
          <ProjectCard className={cn(s.card, {[s.card_dark]: darkMode})} props={fakeData} />
          <ProjectCard className={cn(s.card, {[s.card_dark]: darkMode})} props={fakeData} />
          <ProjectCard className={cn(s.card, {[s.card_dark]: darkMode})} props={fakeData} />
        </div>
        <button className={cn(s.bottom_btn, {[s.bottom_btn_dark]: darkMode})}>загрузить еще</button>
      </div>
    </main>
  );
}

export default ProjectsPage;
