import React from "react";
import style from "../styles/content.module.scss";

const Content = ({
  index,
  name,
  text,
  changeCustomPage,
  indexOfFirstVideoPage,
}) => {
  const displayId = (id) => {
    if (id < 10) return "0" + id;
    return id;
  };

  return (
    <div
      className={style.container}
      onClick={() => {
        changeCustomPage(index + 1 + indexOfFirstVideoPage - 1);
      }}
    >
      <div className={style.description}>{text}</div>

      <div>
        <div className={style.wrapper}>
          <div className={style.dummy}></div>
          <div className={style.id}>{displayId(index + 1)}</div>
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
