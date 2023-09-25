import React, { useEffect, useState } from "react";
import style from "../styles/doublePage.module.scss";
import Curl from "./Curl";
import classNames from "classnames";

const Foreword = ({
  pageIndex,
  currentPage,
  pagesLength,
  pageIndexStyle,
  page: { title, text },
  changePage,
}) => {
  const [isAnimationFinished, setIsAnimationFinished] = useState(false);

  useEffect(() => {
    if (pageIndexStyle > currentPage) {
      setTimeout(() => {
        setIsAnimationFinished(true);
      }, 500);
    } else {
      setTimeout(() => {
        setIsAnimationFinished(false);
      }, 200);
    }
  }, [isAnimationFinished, pageIndexStyle, currentPage]);

  return (
    <div
      className={style.container}
      style={{
        zIndex: pagesLength - Math.abs(currentPage - pageIndex),
      }}
    >
      <div
        className={classNames(style.leftPage, {
          [style.flippedRight]: pageIndexStyle < currentPage,
        })}
      >
        {currentPage === 0 && (
          <img
            src="/bookLeftSide.webp"
            alt="Left side of book"
            className={style.bookLeftSide}
          />
        )}
        <div
          className={classNames(style.contentLeft, {
            [style.visibilityHidden]: isAnimationFinished,
          })}
        >
          <Curl side="left" changePage={changePage} />
        </div>
      </div>
      <div
        className={classNames(style.rightPage, {
          [style.flippedLeft]: pageIndexStyle > currentPage,
        })}
      >
        {currentPage === pagesLength - 1 && (
          <img
            src="/bookRightSide.webp"
            alt="Left side of book"
            className={style.bookRightSide}
          />
        )}
        <div
          className={classNames(style.contentRight, {
            [style.visibilityHidden]: isAnimationFinished,
          })}
          style={{ justifyContent: "flex-start" }}
        >
          <h1 className={style.forewordTitle}>{title}</h1>
          {Object.entries(text.content).map((content) => (
            <div
              key={content[0]}
              style={{
                fontWeight: content[1].content[0].marks[0]?.type,
                fontSize: "14px",
              }}
            >
              {content[1].content[0].value}
              <br /> <br />
            </div>
          ))}
          {pageIndex !== pagesLength - 1 && (
            <Curl side="right" changePage={changePage} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Foreword;
