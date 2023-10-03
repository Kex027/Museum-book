import style from "../styles/book.module.scss";
import VideoPage from "./VideoPage";
import React from "react";
import Contents from "./Contents";
import Foreword from "./Foreword";
import Into from "./Into";
import Cover from "./Cover";
import ContextPage from "./ContextPage";
import ForTeachers from "./ForTeachers";
import ForParents from "./ForParents";
import FAQ from "./FAQ";
import GetInTouch from "./GetInTouch";

const Book = ({
  pages,
  bookmarks,
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
          if (oldIndex === -1) {
            const audio = new Audio("/pageturn.mp3");
            audio.play();
          }
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

  const getIndexOfFirstBookmark = (bookmark) =>
    pages.findIndex(
      ({ fields: { category } }) =>
        category &&
        bookmark &&
        category.toLowerCase() === bookmark.toLowerCase()
    );

  const getProperBookmark = (cat) =>
    bookmarks.filter(
      ({ fields: { category } }) => category.toLowerCase() === cat.toLowerCase()
    )[0]?.fields;

    console.log(pages);
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
          />
          {pages?.map(
            (
              {
                fields: {
                  id,
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
                    key={`${id}-${content_id}`}
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
                  />
                );
              else if (content_id === "intoPage")
                return (
                  <Into
                    key={`${id}-${content_id}`}
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
                    key={`${id}-${content_id}`}
                    currentPage={index}
                    pageIndex={pageIndex}
                    pageIndexStyle={pageIndexStyle}
                    pagesLength={pages.length}
                    page={{ category, title, listOfContents }}
                    changePage={changePage}
                    changeCustomPage={changeCustomPage}
                    getIndexOfFirstBookmark={getIndexOfFirstBookmark}
                    bookmarkInfo={getProperBookmark(category)}
                  />
                );
              else if (content_id === "forewordPage")
                return (
                  <Foreword
                    key={`${id}-${content_id}`}
                    currentPage={index}
                    pageIndex={pageIndex}
                    pageIndexStyle={pageIndexStyle}
                    pagesLength={pages.length}
                    page={{ title, text }}
                    changePage={changePage}
                  />
                );
              else if (content_id === "contextPage")
                return (
                  <ContextPage
                    key={`${id}-${content_id}`}
                    currentPage={index}
                    pageIndex={pageIndex}
                    pageIndexStyle={pageIndexStyle}
                    pagesLength={pages.length}
                    page={{ id, category }}
                    changePage={changePage}
                    changeCustomPage={changeCustomPage}
                    getIndexOfFirstBookmark={getIndexOfFirstBookmark}
                    bookmarkInfo={getProperBookmark(category)}
                  />
                );
              else if (content_id === "forTeachers")
                return (
                  <ForTeachers
                    key={`${id}-${content_id}`}
                    currentPage={index}
                    pageIndex={pageIndex}
                    pageIndexStyle={pageIndexStyle}
                    pagesLength={pages.length}
                    page={{ id, category }}
                    changePage={changePage}
                    changeCustomPage={changeCustomPage}
                    getIndexOfFirstBookmark={getIndexOfFirstBookmark}
                    bookmarkInfo={getProperBookmark(category)}
                  />
                );
              else if (content_id === "forParents")
                return (
                  <ForParents
                    key={`${id}-${content_id}`}
                    currentPage={index}
                    pageIndex={pageIndex}
                    pageIndexStyle={pageIndexStyle}
                    pagesLength={pages.length}
                    page={{ id, category }}
                    changePage={changePage}
                    changeCustomPage={changeCustomPage}
                    getIndexOfFirstBookmark={getIndexOfFirstBookmark}
                    bookmarkInfo={getProperBookmark(category)}
                  />
                );
              else if (content_id === "faq")
                return (
                  <FAQ
                    key={`${id}-${content_id}`}
                    currentPage={index}
                    pageIndex={pageIndex}
                    pageIndexStyle={pageIndexStyle}
                    pagesLength={pages.length}
                    page={{ id, category }}
                    changePage={changePage}
                    changeCustomPage={changeCustomPage}
                    getIndexOfFirstBookmark={getIndexOfFirstBookmark}
                    bookmarkInfo={getProperBookmark(category)}
                  />
                );
              else if (content_id === "getInTouch")
                return (
                  <GetInTouch
                    key={`${id}-${content_id}`}
                    currentPage={index}
                    pageIndex={pageIndex}
                    pageIndexStyle={pageIndexStyle}
                    pagesLength={pages.length}
                    page={{ id, category }}
                    changePage={changePage}
                    changeCustomPage={changeCustomPage}
                    getIndexOfFirstBookmark={getIndexOfFirstBookmark}
                    bookmarkInfo={getProperBookmark(category)}
                  />
                );
              return <></>;
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
