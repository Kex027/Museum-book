import React from "react";
import style from "/styles/cover.module.scss";
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
        width: currentPage === -1 ? "51%" : "52.5%",
        transform:
          currentPage !== -1 && thisPageIndex === pagesLength
            ? "translateX(10%)"
            : "",
      }}
    >
      <div
        className={classNames(style.content, {
          [style.flipped]: thisPageIndex < currentPage,
        })}
        onClick={() => {
          changePage(1);
        }}
      ></div>
    </div>
  );
};

export default Cover;
