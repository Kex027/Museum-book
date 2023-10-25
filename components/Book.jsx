import { useState } from "react";
import classNames from "classnames";
import style from "../styles/book.module.scss";
import DoublePage from "./DoublePage";
import Cover from "./Cover";
import GetBookPage from "./helper/GetBookPage";

const Book = ({
  pages,
  bookmarks,
  currentPage,
  zIndexPage,
  changePage,
  changeCustomPage,
  bookRef,
}) => {
  const [qaIndex, setQaIndex] = useState(0);

  return (
    <div
      className={classNames(style.container)}
      style={{
        transform: currentPage === -1 ? "translateX(-25%)" : "translateX(0%)",
      }}
      ref={bookRef}
    >
      <img src="/book2.webp" alt="Book" />

      <Cover
        thisPageIndex={-1}
        currentPage={currentPage}
        pagesLength={pages.length}
        zIndexPage={zIndexPage}
        changePage={changePage}
      />
      {pages?.map((page, index) => {
        const bookmark = bookmarks.filter(
          ({ fields: { category } }) =>
            page.fields.category?.toLowerCase() === category?.toLowerCase()
        )[0]?.fields;

        const bookmarkIndex = bookmarks.findIndex(
          ({ fields }) => fields === bookmark
        );
        return (
          <DoublePage
            key={page.sys.id}
            thisPageIndex={index}
            currentPage={currentPage}
            pagesLength={pages.length}
            zIndexPage={zIndexPage}
            changePage={changePage}
            changeCustomPage={changeCustomPage}
            bgLeft={`url('${page.fields.backgroundImage[0].fields.file.url}')`}
            bgRight={`url('${page.fields.backgroundImage[1].fields.file.url}')`}
            leftContent={
              <GetBookPage
                id={page.sys.contentType.sys.id}
                side={"left"}
                page={page}
                changeCustomPage={changeCustomPage}
                pages={pages}
                qaIndex={qaIndex}
                setQaIndex={setQaIndex}
              />
            }
            rightContent={
              <GetBookPage
                id={page.sys.contentType.sys.id}
                side={"right"}
                page={page}
                changeCustomPage={changeCustomPage}
                pages={pages}
                qaIndex={qaIndex}
              />
            }
            bookmark={bookmark}
            bookmarkIndex={bookmarkIndex}
          />
        );
      })}
      <Cover
        thisPageIndex={pages.length}
        currentPage={currentPage}
        pagesLength={pages.length}
        zIndexPage={zIndexPage}
        changePage={changePage}
      />
    </div>
  );
};

export default Book;
