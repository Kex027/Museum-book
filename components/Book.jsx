import { forwardRef, useRef, useState } from "react";
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
import HTMLFlipBook from "react-pageflip";
import LeftPage from "./LeftPage";
import RightPage from "./RightPage";

const Book = forwardRef(({
  pages,
  bookmarks,
}, ref) => {
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

  const [currentPage, setCurrentPage] = useState(0);
  const [changeCustomPage, setChangeCustomPage] = useState(0);

  const bookRef = useRef(null);

  // console.log(bookRef.current?.pageFlip().pages.pages.length);
  return (
    <HTMLFlipBook 
      showCover
      width={300}
      height={460}
      size="stretch"
      maxShadowOpacity={0.5}
      onFlip={({object}) => {
        setCurrentPage(object.pages.currentSpreadIndex);
      }}
      style={{
        transform: currentPage === 0 ? "translateX(-25%)" : "translateX(0%)",
        transition: "transform 1s ease-in-out"
      }}
    >
      <img src="/blackBookCover.webp" alt="" />

      {pages?.map((page, index) => {
          const bookmark = bookmarks.filter(({fields: {category}}) => 
            page.fields.category?.toLowerCase() === category?.toLowerCase()
          )[0]?.fields;

          const bookmarkIndex = bookmarks.findIndex(({fields}) => 
            fields === bookmark
          )
          return [
            (
              <div>
                <LeftPage 
                  backgroundImg={`url('${page.fields.backgroundImage[0].fields.file.url}')`} 
                  content={getContent(page.sys.contentType.sys.id, "left", page)} 
                />
              </div>
            ),
            (
              <div>
                <RightPage 
                  backgroundImg={`url('${page.fields.backgroundImage[1].fields.file.url}')`} 
                  content={getContent(page.sys.contentType.sys.id, "right", page)} 
                />
              </div>
            )
          ];            
        })
      }
      <img src="/blackBookCover.webp" alt="" />
    </HTMLFlipBook> 
  )
});

export default Book;