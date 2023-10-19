import React from "react";
import style from "../styles/content.module.scss";

const Content = ({
  id,
  name,
  description,
  changeCustomPage,
  indexOfFirstVideoPage,
}) => {
  const displayId = () => {
    if (id < 10) return "0" + id;
    return id;
  };

  return (
    <div
      className={style.container}
      onClick={() => {
        changeCustomPage(id + indexOfFirstVideoPage - 1);
      }}
    >
      <div className={style.description}>{description}</div>

      <div>
        <div className={style.wrapper}>
          <div className={style.dummy}></div>
          <div className={style.id}>{displayId(id)}</div>
        </div>
        <div className={style.wrapper}>
          <div className={style.dummy}></div>
          <div className={style.name}>{name}</div>
        </div>
      </div>
    </div>
  );
};

export default Content;
