import React from "react";
import style from "/styles/refactor/cover.module.scss";
import classNames from "classnames";

const Cover = ({
  thisPageIndex,
  currentPage,
  pagesLength,
  zIndexPage,
  changePage,
}) => {
  return (
    <div
      className={style.container}
      style={{
        zIndex: pagesLength - Math.abs(zIndexPage - thisPageIndex),
      }}
    >
      <div

        className={classNames(style.content, {
          [style.flipped]: thisPageIndex < currentPage
        })}
        onClick={() => {
          changePage(1);
        }}
      ></div>
    </div>
  );
};

export default Cover;
