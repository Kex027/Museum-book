import React from "react";
import style from "../styles/doublePage.module.scss";

const Into = ({
  pageIndex,
  currentPage,
  pagesLength,
  pageIndexStyle,
  page: { logo, subtitle, footer },
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
          <div className={style.intoPageRightContent}>
            <img src={logo.fields.file.url} alt={logo.fields.title} />
            <h4>{subtitle}</h4>
            <p>{footer}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Into;
