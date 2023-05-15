import style from "../styles/book.module.scss";
import DoublePage from "../components/DoublePage";
import React, { useState } from "react";
import DoublePageTest from "./DoublePageTest";

const Book = ({ pages }) => {
  const [pageIndex, setPageIndex] = useState(0);
  const [pageIndexStyle, setPageIndexStyle] = useState(0);

  const changePage = (value) => {
    setTimeout(() => {
      setTimeout(() => {
        setPageIndex((oldIndex) => {
          if (oldIndex + value < 0 || oldIndex + value > pages.length - 1)
            return oldIndex;
          return oldIndex + value;
        });
      }, 280);
      setPageIndexStyle((oldIndex) => {
        if (oldIndex + value < 0 || oldIndex + value > pages.length - 1)
          return oldIndex;
        return oldIndex + value;
      });
    }, 50);
  };

  return (
    <div className={style.container}>
      <button className={style.button} onClick={() => changePage(-1)}>
        left
      </button>
      <div className={style.book}>
        <img src="/book.webp" alt="Book" />
        <div className={style.bookContent}>
          {pages.map(
            (
              { fields: { id, image, heading, description, video, category } },
              index
            ) => (
              <div
                key={id}
                className={style.relative}
                style={{
                  zIndex: pages.length - Math.abs(index - pageIndex),
                }}
              >
                <DoublePage
                  currentPage={index}
                  pageIndex={pageIndex}
                  pageIndexStyle={pageIndexStyle}
                  pagesLength={pages.length}
                />
              </div>
            )
          )}
          {/*<DoublePage />*/}
        </div>
      </div>
      <button className={style.button} onClick={() => changePage(+1)}>
        right
      </button>
    </div>
  );
};

export default Book;
