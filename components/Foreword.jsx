import React from "react";
import style from "../styles/doublePage.module.scss";

const Foreword = ({
  pageIndex,
  currentPage,
  pagesLength,
  pageIndexStyle,
  page: { title, text },
}) => {
  console.log(text);
  console.log(Object.entries(text.content));
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
          {Object.entries(text.content).map((content) => {
            return <div>{content[1].content[0].value}</div>;
          })}
          {/*<p>{text}</p>*/}
        </div>
      </div>
    </div>
  );
};

export default Foreword;
