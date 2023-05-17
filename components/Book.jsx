//TODO make book in a contentful

import style from "../styles/book.module.scss";
import DoublePage from "../components/DoublePage";
import React, { useState } from "react";
import Contents from "./Contents";
import Foreword from "./Foreword";

const Book = ({ pages, contentsRes, forewordRes }) => {
  const lowestIndex = -2;
  const [pageIndex, setPageIndex] = useState(lowestIndex);
  const [pageIndexStyle, setPageIndexStyle] = useState(lowestIndex);

  const changePage = (value) => {
    setTimeout(() => {
      setTimeout(() => {
        setPageIndex((oldIndex) => {
          if (
            oldIndex + value < lowestIndex ||
            oldIndex + value > pages.length - 1
          )
            return oldIndex;
          return oldIndex + value;
        });
      }, 280);
      setPageIndexStyle((oldIndex) => {
        if (
          oldIndex + value < lowestIndex ||
          oldIndex + value > pages.length - 1
        )
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
          <Contents
            currentPage={lowestIndex}
            pageIndex={pageIndex}
            pageIndexStyle={pageIndexStyle}
            pagesLength={pages.length}
            page={contentsRes.fields}
          />
          <Foreword
            currentPage={lowestIndex + 1}
            pageIndex={pageIndex}
            pageIndexStyle={pageIndexStyle}
            pagesLength={pages.length}
            page={forewordRes.fields}
          />
          {pages?.map(
            (
              {
                fields: {
                  id,
                  image,
                  quote,
                  heading,
                  description,
                  video,
                  category,
                },
              },
              index
            ) => (
              <DoublePage
                key={id}
                currentPage={index}
                pageIndex={pageIndex}
                pageIndexStyle={pageIndexStyle}
                pagesLength={pages.length}
                quote={quote}
                heading={heading}
                description={description}
                video={video}
              />
            )
          )}
        </div>
      </div>
      <button className={style.button} onClick={() => changePage(+1)}>
        right
      </button>
    </div>
  );
};

export default Book;
