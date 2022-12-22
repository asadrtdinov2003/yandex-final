/* eslint-disable */
import React, { useContext, useEffect, useState } from "react";
import s from './ProjectsPage.module.css';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import cn from 'classnames';
import { ThemeContext } from '../../Contexts/ThemeContext';
import { LanguageContext } from "../../Contexts/LanguageContext";

function ProjectsPage() {
  const { darkMode } = useContext(ThemeContext);
  const { translation } = useContext(LanguageContext);
  const textData = translation?.projects;
  const [projects, setProjects] = useState(translation?.projects?.data);

  useEffect(() => {
    setProjects(translation?.projects?.data);
  }, [translation]);

  const [visible, setVisible] = useState(2);

  if (!translation || !projects) {
    return null;
  }

  return (
    <main className={cn(s.page, { [s.page_dark]: darkMode })}>
      <div className={s.container}>
        <h1 className={cn(s.title, { [s.title_dark]: darkMode })}>{textData.title}</h1>
        <div className={s.cards}>
          {projects.slice(0, visible).map((data) => (
            <ProjectCard classname={cn(s.card, { [s.card_dark]: darkMode })} {...data} key={data.name}/>
          ))}
        </div>
        {projects.length >= visible && (
          <button
            className={cn(s.bottom_btn, { [s.bottom_btn_dark]: darkMode })}
            onClick={() => setVisible(visible + 2)}
          >
            {textData.button}
          </button>
        )}
      </div>
    </main>
  );
}

export default ProjectsPage;
