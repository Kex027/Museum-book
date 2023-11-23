import React from "react";
import style from "../styles/bookmarks.module.scss";
import { ca } from "date-fns/locale";

const Bookmarks = ({ pageFlipRef, bookmarks, pages }) => {
  const goToPage = (pageNumber) => {
    pageFlipRef.current.pageFlip().flip(pageNumber);
  };

  return (
    <div
      className={style.container}
      style={{
        transform:
          Math.ceil(
            pageFlipRef.current?.pageFlip()?.getCurrentPageIndex() / 2
          ) === 0 || pageFlipRef.current === null
            ? "translateX(calc(-26.5 * var(--vh)))"
            : "translateX(calc(0 * var(--vh)))",
        transition: "transform .75s ease-in-out",
      }}
    >
      {bookmarks.map(({ fields: { category, name } }) => {
        const getIndexOfPageWithBookmark = () => {
          let index = 0;
          pages.forEach(({ fields }, i) => {
            if (fields.category === category) index = i;
          });
          return index * 2 + 1;
        };
        return (
          <div
            className={style.bookmark}
            key={name}
            style={{
              color:
                pageFlipRef.current?.pageFlip()?.getCurrentPageIndex() ===
                getIndexOfPageWithBookmark()
                  ? "#0f0"
                  : "#232323",
              backgroundColor:
                pageFlipRef.current?.pageFlip()?.getCurrentPageIndex() ===
                getIndexOfPageWithBookmark()
                  ? "#232323"
                  : "#fefefe",
            }}
            onClick={() => goToPage(getIndexOfPageWithBookmark())}
          >
            {name?.toUpperCase()}
          </div>
        );
      })}
    </div>
  );
};

export default Bookmarks;
