import React from "react";
import style from "../styles/doublePage.module.scss";

const Contents = ({
  pageIndex,
  currentPage,
  pagesLength,
  pageIndexStyle,
  page: { title, list },
}) => {
  return (
    <div
      className={style.container}
      style={{
        zIndex: pagesLength - Math.abs(currentPage - pageIndex),
      }}
    >
      <div
        className={`${style.leftPage} ${
          pageIndexStyle < currentPage && style.flippedRight
        }`}
      >
        <div className={style.contentLeft}></div>
      </div>
      <div
        className={`${style.rightPage} ${
          pageIndexStyle > currentPage && style.flippedLeft
        }`}
      >
        <div
          className={style.contentRight}
          style={{ justifyContent: "flex-start" }}
        >
          <h1>{title}</h1>
          <div>
            {list.map((chapter, index) => (
              <p key={chapter}>
                {index + 1}. {chapter}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contents;
