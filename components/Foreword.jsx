import React, { useEffect, useState } from "react";
import style from "../styles/doublePage.module.scss";
import Curl from "./Curl";
import classNames from "classnames";
import Bookmark from "./Bookmark";

const Foreword = ({
  pageIndex,
  currentPage,
  pagesLength,
  pageIndexStyle,
  page: { title, text, category },
  changePage,
  changeCustomPage,
  getIndexOfFirstBookmark,
  bookmarkInfo,
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
          style={{
            backgroundImage: 'url("/forewordLeftPage.webp")',
          }}
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
        {currentPage === getIndexOfFirstBookmark(category) && (
          <Bookmark
            changeCustomPage={changeCustomPage}
            category={category}
            top={"70%"}
            info={bookmarkInfo}
          />
        )}
        <div
          className={classNames(style.contentRight, {
            [style.visibilityHidden]: isAnimationFinished,
          })}
          style={{
            backgroundImage: 'url("/forewordRightPage.webp")',
          }}
        >
          <div
            style={{
              marginTop: "60%",
            }}
          >
            {Object.entries(text?.content).map((content) => (
              <div key={content[0]} className={style.forewordText}>
                {content[1].content.map(({ value, marks }) => (
                  <span
                    key={value}
                    style={{
                      fontWeight: marks[0]?.type,
                    }}
                  >
                    {value}
                    <br />
                  </span>
                ))}
                <br />
              </div>
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

export default Foreword;
