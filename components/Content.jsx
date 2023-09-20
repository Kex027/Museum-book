import React from "react";
import style from "../styles/Content.module.scss";

const Content = ({ id, name, description, changeCustomPage }) => {
  const displayId = () => {
    if (id < 10) return "0" + id;
    return id;
  };

  return (
    <div
      className={style.container}
      onClick={(e) => {
        changeCustomPage(e, id);
      }}
    >
      <p className={style.description}>{description}</p>
      <div className={style.title}>
        <span className={style.id}>{displayId(id)}</span>
        <span>{name}</span>
      </div>
    </div>
  );
};

export default Content;
