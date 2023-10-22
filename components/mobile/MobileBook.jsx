import React from "react";
import style from "../../styles/mobile/mobileBook.module.scss";
import classNames from "classnames";
import GetBookPage from "../helper/GetBookPage";

const MobileBook = ({ pages, currentPage, changePage, changeCustomPage }) => {
  return (
    <div
      className={style.container}
      style={{ backgroundColor: currentPage === -1 ? "#0a0a0a" : "" }}
    >
      {currentPage === -1 ? (
        <div className={style.coverWrapper}>
          <img
            className={style.cover}
            src="/blackBookCover.webp"
            alt="book cover"
          />
        </div>
      ) : (
        <div className={style.content}>
          <GetBookPage
            mobile
            id={pages[currentPage].sys.contentType.sys.id}
            changeCustomPage={changeCustomPage}
            pages={pages}
            page={pages[currentPage]}
          />
        </div>
      )}
      <div className={style.navigation}>
        <button
          className={classNames(style.btn)}
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            changePage(-1);
          }}
        >
          -1
        </button>
        <button
          className={classNames(style.btn)}
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            changePage(1);
          }}
        >
          +1
        </button>
      </div>
    </div>
  );
};

export default MobileBook;
