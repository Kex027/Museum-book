import React, { useEffect, useState } from "react";
import style from "../styles/doublePage.module.scss";
import Curl from "./Curl";
import HomeBookmark from "./HomeBookmark";
import classNames from "classnames";

const Into = ({
  pageIndex,
  currentPage,
  pagesLength,
  pageIndexStyle,
  page: { logo, subtitle, footer },
  changePage,
  changeCustomPage,
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
        <HomeBookmark
          changeCustomPage={changeCustomPage}
          pagesLength={pagesLength}
        />
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
          <div className={style.intoPageRightContent}>
            <img src={logo.fields.file.url} alt={logo.fields.title} />
            <h4>{subtitle}</h4>
            <p>{footer}</p>
          </div>
          {pageIndex !== pagesLength - 1 && (
            <Curl side="right" changePage={changePage} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Into;
