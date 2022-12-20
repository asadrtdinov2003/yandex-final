/* eslint-disable */
import React from "react";
import s from "./ProjectCard.module.css";
import img_placeholder from "../../imgs/SM-placeholder.png";
import cn from "classnames";

function ProjectCard({ props, className }) {
  const tags = props.tags.map((item) => {
    return (
      <div className={s.tag} key={item}>
        {item}
      </div>
    );
  });

  return (
    <div className={cn(s.project_card, className)}>
      <img src={img_placeholder} className={s.imgs} alt="img" width="100%" />
      <div className={s.discr}>
        <div className={s.date_and_tags}>
          <div className={s.date}>
            <div className={s.date_type}>
              {props.date} | {props.type} |
            </div>
            {tags}
          </div>
        </div>
        <h1 className={s.title}>{props.name}</h1>
        <div className={s.author}>Автор: {props.author}</div>
        <div className={s.description}>{props.description}</div>
      </div>
    </div>
  );
}

export default ProjectCard;
