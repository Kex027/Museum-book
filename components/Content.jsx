import React, { forwardRef } from "react";
import style from "../styles/content.module.scss";

//TODO 6 - 10 doesn't work (6 => 8 chapter)
//TODO modals (video, faq, contact)
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
        console.log(index);
        console.log(indexOfFirstVideoPage);
        goToPage((index + 1 + indexOfFirstVideoPage + 1) * 2);
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
