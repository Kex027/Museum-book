//TODO make book in a contentful

import style from "../styles/book.module.scss";
import DoublePage from "../components/DoublePage";
import React, { useState } from "react";
import Contents from "./Contents";
import Foreword from "./Foreword";

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
          {pages?.map(
            (
              {
                fields: {
                  id,
                  image,
                  quote,
                  heading,
                  title,
                  description,
                  video,
                  list,
                  text,
                  category,
                },
                sys: {
                  contentType: {
                    sys: { id: content_id },
                  },
                },
              },
              index
            ) => {
              if (content_id === "page")
                return (
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
                );
              else if (content_id === "contentsPage")
                return (
                  <Contents
                    key={content_id}
                    currentPage={index}
                    pageIndex={pageIndex}
                    pageIndexStyle={pageIndexStyle}
                    pagesLength={pages.length}
                    page={{ title, list }}
                  />
                );
              else if (content_id === "forewordPage")
                return (
                  <Foreword
                    key={content_id}
                    currentPage={index}
                    pageIndex={pageIndex}
                    pageIndexStyle={pageIndexStyle}
                    pagesLength={pages.length}
                    page={{ title, text }}
                  />
                );
              return <></>;
            }
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
