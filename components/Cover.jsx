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
        style={{ height: pageIndex !== -1 ? "99%" : "100%" }}
        onClick={() => {
          changePage(1);
        }}
      ></div>
    </div>
  );
};

export default Cover;
