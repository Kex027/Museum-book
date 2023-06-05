import React from "react";
import style from "/styles/cover.module.scss";

const Cover = ({
  pageIndex,
  pagesLength,
  pageIndexStyle,
  currentPage,
  changePage,
}) => {
  return (
    <div
      className={style.container}
      style={{
        zIndex: pagesLength - Math.abs(currentPage - pageIndex),
      }}
    >
      <div
        className={`${style.content} ${
          pageIndexStyle > currentPage && style.flipped
        }`}
        onClick={() => {
          changePage(1);
        }}
      >
        <img src="/Minceiri.webp" alt="Minceiri" className={style.logo} />
      </div>
    </div>
  );
};

export default Cover;
