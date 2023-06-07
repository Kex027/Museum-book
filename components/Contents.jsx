import React from "react";
import style from "../styles/doublePage.module.scss";
import Curl from "./Curl";

const Contents = ({
  pageIndex,
  currentPage,
  pagesLength,
  pageIndexStyle,
  page: { title, list },
  changePage,
}) => {
  return (
    <div
      className={style.container}
      style={{
        zIndex: pagesLength - Math.abs(currentPage - pageIndex),
        width: pageIndexStyle === -1 ? "50%" : "100%",
        transition: pageIndexStyle === -1 ? "width 10s ease-in" : "none",
      }}
    >
      <div
        className={`${style.leftPage} ${
          pageIndexStyle < currentPage && style.flippedRight
        }`}
      >
        {currentPage === 0 && (
          <img
            src="/bookLeftSide.webp"
            alt="Left side of book"
            className={style.bookLeftSide}
          />
        )}
        <div className={style.contentLeft}>
          <Curl side="left" changePage={changePage} />
        </div>
      </div>
      <div
        className={`${style.rightPage} ${
          pageIndexStyle > currentPage && style.flippedLeft
        }`}
      >
        {currentPage === pagesLength - 1 && (
          <img
            src="/bookRightSide.webp"
            alt="Left side of book"
            className={style.bookRightSide}
          />
        )}
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
          {pageIndex !== pagesLength - 1 && (
            <Curl side="right" changePage={changePage} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Contents;
