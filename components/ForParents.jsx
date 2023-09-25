import React, { useEffect, useRef, useState } from "react";
import style from "../styles/doublePage.module.scss";
import classNames from "classnames";
import Curl from "./Curl";
import Bookmark from "./Bookmark";

const ForParents = ({
  pageIndex,
  currentPage,
  pagesLength,
  pageIndexStyle,
  page: { category },
  changePage,
  changeCustomPage,
  getIndexOfFirstBookmark,
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

  const bookmark = {
    src: "ClearPurpleBookmark.webp",
    category: "forParents",
    name: "For parents",
    moveRight: pageIndexStyle > currentPage ? "-2vw" : "-3.5vw",
  };

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
          {category} page
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
            alt="Right side of book"
            className={style.bookRightSide}
          />
        )}
        {currentPage === getIndexOfFirstBookmark(category) && (
          <Bookmark
            moveRight={bookmark.moveRight}
            changeCustomPage={changeCustomPage}
            category={category}
            src={bookmark.src}
            top={"40%"}
            name={bookmark.name}
          />
        )}
        <div
          className={classNames(style.contentRight, {
            [style.visibilityHidden]: isAnimationFinished,
          })}
          style={{ justifyContent: "flex-start" }}
        >
          {pageIndex !== pagesLength - 1 && (
            <Curl side="right" changePage={changePage} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ForParents;
