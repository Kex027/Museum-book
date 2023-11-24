import React, { forwardRef } from "react";
import style from "../styles/content.module.scss";

const Content = ({
  index,
  name,
  text,
  changeCustomPage,
  indexOfFirstVideoPage,
  pageFlipRef,
}) => {
  const displayId = (id) => {
    if (id < 10) return "0" + id;
    return id;
  };

  const goToPage = (number) => {
    pageFlipRef.current.pageFlip().flip(number);
  };

  return (
    <div
      className={style.container}
      onClick={() => {
        let pageIndex = 0;
        if (index >= 0 && index <= 4)
          pageIndex = (index + 2 + indexOfFirstVideoPage) * 2;
        else pageIndex = (index + indexOfFirstVideoPage) * 2;
        goToPage(pageIndex);
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
