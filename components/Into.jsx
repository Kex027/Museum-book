import React from "react";
import style from "../styles/doublePage.module.scss";
import Curl from "./Curl";

const Into = ({
  pageIndex,
  currentPage,
  pagesLength,
  pageIndexStyle,
  page: { logo, subtitle, footer },
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
          <div className={style.intoPageRightContent}>
            <img src={logo.fields.file.url} alt={logo.fields.title} />
            <h4>{subtitle}</h4>
            <p>{footer}</p>
          </div>
          <Curl side="right" changePage={changePage} />
        </div>
      </div>
    </div>
  );
};

export default Into;
