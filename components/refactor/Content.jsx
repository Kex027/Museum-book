import React from "react";
import style from '../../styles/refactor/content.module.scsss'

const Content = ({ id, name, description, changeCustomPage, indexOfFirstVideoPage }) => {
  const displayId = () => {
    if (id < 10) return "0" + id;
    return id;
  };

  return (
    <div
      className={style.container}
      onClick={() => {
        changeCustomPage(id + indexOfFirstVideoPage);
      }}
    >
      <p className={style.description}>{description}</p>
      <div className={style.title}>
        <div className={style.id}>{displayId(id)}</div>
        <div className={style.name}>{name}</div>
      </div>
    </div>
  );
};

export default Content;
