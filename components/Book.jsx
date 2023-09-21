import style from "../styles/book.module.scss";
import VideoPage from "./VideoPage";
import React from "react";
import Contents from "./Contents";
import Foreword from "./Foreword";
import Into from "./Into";
import Cover from "./Cover";
import ContextPage from "./ContextPage";

const Book = ({
  pages,
  pageIndex,
  pageIndexStyle,
  setPageIndex,
  setPageIndexStyle,
  changeCustomPage,
}) => {
  const changePage = (value) => {
    setTimeout(() => {
      setTimeout(() => {
        setPageIndex((oldIndex) => {
          if (oldIndex + value < -1 || oldIndex + value > pages.length - 1)
            return oldIndex;
          return oldIndex + value;
        });
      }, 280);
      setPageIndexStyle((oldIndex) => {
        if (oldIndex + value < -1 || oldIndex + value > pages.length - 1)
          return oldIndex;
        return oldIndex + value;
      });
    }, 50);
  };

  const getIndexOfFirstBookmark = (bookmark) => {
    return pages.findIndex(
      ({ fields: { category } }) =>
        category &&
        bookmark &&
        category.toLowerCase() === bookmark.toLowerCase()
    );
  };

  return (
    <div
      className={style.container}
      style={{
        transform: pageIndex === -1 ? "translateX(-25%)" : "translateX(0%)",
      }}
    >
      <div className={style.book}>
        <img src="/book.webp" alt="Book" />

        <div className={style.bookContent}>
          <Cover
            changePage={changePage}
            pageIndex={pageIndex}
            pageIndexStyle={pageIndexStyle}
            pagesLength={pages.length}
            currentPage={-1}
            content={[
              <img
                key={1} // key is necessary to avoid error
                src="/Minceiri.webp"
                alt="Minceiri"
                style={{ width: "80%" }}
              />,
            ]}
          />
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
                  listOfContents,
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
                    changeCustomPage={changeCustomPage}
                    getIndexOfFirstBookmark={getIndexOfFirstBookmark}
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
                    changeCustomPage={changeCustomPage}
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
                    page={{ title, listOfContents }}
                    changePage={changePage}
                    changeCustomPage={changeCustomPage}
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
              return (
                <ContextPage
                  key={content_id}
                  currentPage={index}
                  pageIndex={pageIndex}
                  pageIndexStyle={pageIndexStyle}
                  pagesLength={pages.length}
                  page={{ id, category }}
                  changePage={changePage}
                />
              );
            }
          )}
          <Cover
            changePage={changePage}
            pageIndex={pageIndex}
            pageIndexStyle={pageIndexStyle}
            pagesLength={pages.length}
            currentPage={pages.length}
          />
        </div>
      </div>
    </div>
  );
};

export default Book;
