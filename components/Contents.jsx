import React, { useEffect, useState } from "react";
import style from "../styles/doublePage.module.scss";
import Curl from "./Curl";
import classNames from "classnames";
import Content from "./Content";

const Contents = ({
  pageIndex,
  currentPage,
  pagesLength,
  pageIndexStyle,
  page: { title, listOfContents },
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
          <div style={{ height: "100%", marginTop: "45px" }}>
            {listOfContents
              .slice(0, 5)
              .map(({ fields: { id, name, description } }, index) => (
                <Content
                  id={id}
                  name={name}
                  description={description}
                  changeCustomPage={changeCustomPage}
                  key={index}
                />
              ))}
          </div>
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
          <h1 style={{ height: "45px" }}>{title}</h1>
          <div>
            {listOfContents
              .slice(5, 10)
              .map(({ fields: { id, name, description } }, index) => (
                <Content
                  id={id}
                  name={name}
                  description={description}
                  changeCustomPage={changeCustomPage}
                  key={index}
                />
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
