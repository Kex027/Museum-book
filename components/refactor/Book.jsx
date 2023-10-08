import { useState } from "react";
import classNames from "classnames";
import style from '../../styles/refactor/book.module.scss'
import DoublePage from "./DoublePage";
import Cover from "./Cover";

const Book = ({
  pages,
  bookmarks, 
  currentPage, 
  zIndexPage, 
  changePage, 
  changeCustomPage
}) => {
  return (
    <div className={classNames(style.container)} style={{
      transform: currentPage === -1 ? "translateX(-25%)" : "translateX(0%)",
    }}>
      <img src="/book2.webp" alt="Book" />
  
      <Cover
        thisPageIndex={-1}
        currentPage={currentPage} 
        pagesLength={pages.length} 
        zIndexPage={zIndexPage} 
        changePage={changePage} 
      />
      {
        pages?.map((page, index) => {
          const bookmark = bookmarks.filter(({fields: {category}}) => 
            page.fields.category?.toLowerCase() === category?.toLowerCase()
          )[0]?.fields;

          const bookmarkIndex = bookmarks.findIndex(({fields}) => 
            fields === bookmark
          )

          return (
            <DoublePage 
              key={page.sys.id}
              thisPageIndex={index}
              currentPage={currentPage} 
              pagesLength={pages.length} 
              zIndexPage={zIndexPage} 
              changePage={changePage} 
              changeCustomPage={changeCustomPage}
              bgLeft={'url("/contentsLeftPage.webp")'}
              bgRight={'url("/contentsRightPage.webp")'}
              page={page}
              bookmark={bookmark}
              bookmarkIndex={bookmarkIndex}
            />
          )
        })
      }
      <Cover
        thisPageIndex={pages.length}
        currentPage={currentPage} 
        pagesLength={pages.length} 
        zIndexPage={zIndexPage} 
        changePage={changePage} 
      />
    </div> 
  )
}

export default Book;