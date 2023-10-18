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
        width: currentPage === -1 ? "51%" : "53%",
        transform:
          currentPage !== -1 && thisPageIndex === pagesLength
            ? "translateX(12%)"
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
      >
        {/*<div*/}
        {/*  style={{*/}
        {/*    display: zIndexPage === thisPageIndex ? "none" : "block",*/}
        {/*    backgroundColor: thisPageIndex === pagesLength ? "#ddd" : "#605F5A",*/}
        {/*    position: "absolute",*/}
        {/*    zIndex: thisPageIndex === pagesLength ? 0 : -1,*/}
        {/*    width: "88%",*/}
        {/*    height: "100%",*/}
        {/*  }}*/}
        {/*></div>*/}
      </div>
    </div>
  );
};

export default Cover;
