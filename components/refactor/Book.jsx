import { useRef, useState } from "react";
import classNames from "classnames";
import style from '../../styles/refactor/book.module.scss'
import DoublePage from "./DoublePage";
import Cover from "./Cover";
import IntoLeft from "./pages/IntoLeft";
import IntoRight from "./pages/IntoRight";
import ForewordLeft from "./pages/ForewordLeft";
import ForewordRight from "./pages/ForewordRight";
import ContentsLeft from "./pages/ContentsLeft";
import ContentsRight from "./pages/ContentsRight";
import ContextLeft from "./pages/ContextLeft";
import ContextRight from "./pages/ContextRight";
import VideoLeft from "./pages/VideoLeft";
import VideoRight from "./pages/VideoRight";

const Book = ({
  pages,
  bookmarks, 
  currentPage, 
  zIndexPage, 
  changePage, 
  changeCustomPage
}) => {
  const getContent = (id, side, page) => {
    if (id === 'intoPage')
      return side === 'left' ? <IntoLeft page={page} /> : <IntoRight page={page} />
    else if (id === 'forewordPage')
      return side === 'left' ? <ForewordLeft page={page} /> : <ForewordRight page={page} />
    else if (id === 'contentsPage')
      return side === 'left' ? <ContentsLeft page={page} changeCustomPage={changeCustomPage} pages={pages} /> : <ContentsRight page={page} changeCustomPage={changeCustomPage} pages={pages} />
    else if (id === 'contextPage')
      return side === 'left' ? <ContextLeft page={page} /> : <ContextRight page={page} />
    else if (id === 'page')
        return side === 'left' ? <VideoLeft page={page} /> : <VideoRight page={page} />
    else if (id === 'forTeachers')
      return side === 'left' ? <ContextLeft page={page} /> : <ContextRight page={page} />
    else if (id === 'forParents')
      return side === 'left' ? <ContextLeft page={page} /> : <ContextRight page={page} />
    return ""
  }

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
              bgLeft={`url('${page.fields.backgroundImage[0].fields.file.url}')`}
              bgRight={`url('${page.fields.backgroundImage[1].fields.file.url}')`}
              leftContent={getContent(page.sys.contentType.sys.id, "left", page)}
              rightContent={getContent(page.sys.contentType.sys.id, "right", page)}
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