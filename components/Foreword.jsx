import React from "react";
import style from "../styles/doublePage.module.scss";
import Curl from "./Curl";

const Foreword = ({
  pageIndex,
  currentPage,
  pagesLength,
  pageIndexStyle,
  page: { title, text },
  changePage,
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
        <div className={style.contentLeft}>
          <Curl side="left" changePage={changePage} />
        </div>
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
          <h1 className={style.forewordTitle}>{title}</h1>
          {Object.entries(text.content).map((content) => (
            <div key={content[0]}>{content[1].content[0].value}</div>
          ))}
          <Curl side="right" changePage={changePage} />
        </div>
      </div>
    </div>
  );
};

export default Foreword;
