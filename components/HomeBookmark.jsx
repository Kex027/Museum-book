import React from "react";
import style from "../styles/book.module.scss";

const HomeBookmark = ({ changeCustomPage, pagesLength }) => {
  return (
    <div className={style.homeBookmark} style={{ zIndex: pagesLength + 1 }}>
      <img
        src="/homeBookmark.webp"
        alt="Home Bookmark"
        className={style.pointer}
        onClick={(event) => {
          changeCustomPage(event, "Home");
        }}
      />
    </div>
  );
};

export default HomeBookmark;
