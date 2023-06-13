import React from "react";
import style from "../styles/book.module.scss";

const HomeBookmark = ({ changeCustomPage }) => {
  return (
    <div className={style.homeBookmark} style={{ zIndex: 1 }}>
      <img
        src="/HomeBookmark.webp"
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
