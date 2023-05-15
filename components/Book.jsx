import style from "../styles/book.module.scss";
import DoublePage from "../components/DoublePage";
import React, { useState } from "react";
import DoublePageTest from "./DoublePageTest";

const Book = ({ pages }) => {
  const [pageIndex, setPageIndex] = useState(0);
  const [pageIndexStyle, setPageIndexStyle] = useState(0);

  const changePage = (index) => {
    setTimeout(() => {
      setTimeout(() => {
        setPageIndex((oldIndex) => {
          if (oldIndex + index < 0 || oldIndex + index > pages.length - 1)
            return oldIndex;
          return oldIndex + index;
        });
      }, 280);
      setPageIndexStyle((oldIndex) => {
        if (oldIndex + index < 0 || oldIndex + index > pages.length - 1)
          return oldIndex;
        return oldIndex + index;
      });
    }, 50);
    console.log(pageIndex);
    console.log(pageIndexStyle);
  };

  return (
    <div className={style.container}>
      {/*<button className={style.button} onClick={() => changePage(-1)}>*/}
      {/*  left*/}
      {/*</button>*/}
      <div className={style.book}>
        <img src="/book.webp" alt="Book" />
        <div className={style.bookContent}>
          {pages.map(
            (
              { fields: { id, image, heading, description, video, category } },
              index
            ) => (
              <div className={style.relative}>
                <DoublePage key={id} />
              </div>
            )
          )}
          {/*<DoublePage />*/}
        </div>
      </div>
      {/*<button className={style.button} onClick={() => changePage(+1)}>*/}
      {/*  right*/}
      {/*</button>*/}
    </div>
  );
};

export default Book;
