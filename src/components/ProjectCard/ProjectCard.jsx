/* eslint-disable */
import React from "react";
import s from "./ProjectCard.module.css";
import cn from "classnames";

function ProjectCard(props) {
  const t = props.tags.map((item) => {
    return (
      <div className={s.tag} key={item}>
        {item}
      </div>
    );
  })

  console.log(props.image);

  return (
    <div className={cn(s.project_card, props.classname)}>
      <img src={props.image} className={s.imgs} alt="img" width="100%" />
      <div className={s.discr}>
        <div className={s.date_and_tags}>
          <div className={s.date}>
            <div className={s.date_type}>
              {props.date} | {props.type} |
            </div>
            {t}
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
