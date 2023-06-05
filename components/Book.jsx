//TODO make book in a contentful

import style from "../styles/book.module.scss";
import VideoPage from "./VideoPage";
import React, { useState } from "react";
import Contents from "./Contents";
import Foreword from "./Foreword";
import Into from "./Into";
import HomeBookmark from "./HomeBookmark";
import Bookmarks from "./Bookmarks";

const Book = ({ pages }) => {
  const [pageIndex, setPageIndex] = useState(0);
  const [pageIndexStyle, setPageIndexStyle] = useState(0);
  const [changedPage, setChangedPage] = useState(true);

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

  const changeCustomPage = (e, bookmark) => {
    if (!changedPage) return;

    e.preventDefault();
    setChangedPage(false);
    const indexOfFirstBookmarkItem = pages.findIndex(
      ({ fields: { category } }) =>
        category &&
        bookmark &&
        category.toLowerCase() === bookmark.toLowerCase()
    );
    setTimeout(() => {
      setTimeout(() => {
        setPageIndex(indexOfFirstBookmarkItem);
      }, 280);
      setPageIndexStyle(indexOfFirstBookmarkItem);
    }, 50);

    setTimeout(() => {
      setChangedPage(true);
    }, 500);
  };

  return (
    <div className={style.container}>
      <div className={style.book}>
        <img src="/book.webp" alt="Book" />

        <HomeBookmark
          changeCustomPage={changeCustomPage}
          pagesLength={pages.length}
        />

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
                  logo,
                  subtitle,
                  footer,
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
                  <VideoPage
                    key={id}
                    currentPage={index}
                    pageIndex={pageIndex}
                    pageIndexStyle={pageIndexStyle}
                    pagesLength={pages.length}
                    quote={quote}
                    heading={heading}
                    description={description}
                    video={video}
                    changePage={changePage}
                  />
                );
              else if (content_id === "intoPage")
                return (
                  <Into
                    key={content_id}
                    currentPage={index}
                    pageIndex={pageIndex}
                    pageIndexStyle={pageIndexStyle}
                    pagesLength={pages.length}
                    page={{ logo, subtitle, footer }}
                    changePage={changePage}
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
                    changePage={changePage}
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
                    changePage={changePage}
                  />
                );
              return <></>;
            }
          )}
        </div>

        <Bookmarks
          changeCustomPage={changeCustomPage}
          pagesLength={pages.length}
        />
      </div>
    </div>
  );
};

export default Book;
