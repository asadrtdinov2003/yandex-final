/* eslint-disable */
import React, { useContext, useState } from 'react';
import s from './ProjectsPage.module.css';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import cn from 'classnames';
import { ThemeContext } from '../../Contexts/ThemeContext';
import { projects } from '../../constants/projects';

function ProjectsPage() {
  const { darkMode } = useContext(ThemeContext);
  const [visible, setVisible] = useState(2);

  return (
    <main className={cn(s.page, { [s.page_dark]: darkMode })}>
      <div className={s.container}>
        <h1 className={cn(s.title, { [s.title_dark]: darkMode })}>НАШИ ПРОЕКТЫ</h1>
        <div className={s.cards}>
          {projects.slice(0, visible).map((data) => (
            <ProjectCard className={cn(s.card, { [s.card_dark]: darkMode })} props={data} />
          ))}
        </div>
        {projects.length >= visible && (
          <button
            className={cn(s.bottom_btn, { [s.bottom_btn_dark]: darkMode })}
            onClick={() => setVisible(visible + 2)}
          >
            загрузить еще
          </button>
        )}
      </div>
    </main>
  );
}

export default ProjectsPage;
