import { forwardRef, useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import LeftPage from "./LeftPage";
import RightPage from "./RightPage";
import GetBookPage from "./helper/GetBookPage";

const Book = forwardRef(({ pages, bookmarks }, ref) => {
  // currentPage,
  // zIndexPage,
  // changePage,
  // changeCustomPage,
  const [qaIndex, setQaIndex] = useState(0);

  const [currentPage, setCurrentPage] = useState(0);
  const [leftPageIndex, setLeftPageIndex] = useState(0);
  const [changeCustomPage, setChangeCustomPage] = useState(0);

  const bookRef = useRef(null);

  // console.log(bookRef.current?.pageFlip().pages.pages.length);
  return (
    <HTMLFlipBook
      showCover
      height={770}
      width={540}
      // autoSize={false}
      // minWidth={250}
      // maxWidth={500}
      // minHeight={100}
      // maxHeight={330}
      size="stretch"
      maxShadowOpacity={0.5}
      onFlip={(e) => setLeftPageIndex(e.data)}
      // onFlip={({ object }) => {
      //   setCurrentPage(object.pages.currentSpreadIndex);
      // }}
      style={{
        transform: leftPageIndex === 0 ? "translateX(-25%)" : "translateX(0%)",
        transition: "transform .75s ease-in-out",
      }}
    >
      <img src="/blackBookCover.webp" alt="" />

      {pages?.map((page, index) => {
        // const bookmark = bookmarks.filter(
        //   ({ fields: { category } }) =>
        //     // <div
        //     //   className={classNames(style.container)}
        //     //   style={{
        //     //     transform: currentPage === -1 ? "translateX(-25%)" : "translateX(0%)",
        //     //   }}
        //     // >
        //     //   <img src="/book2.webp" alt="Book" />
        //     //
        //     //   <Cover
        //     //     thisPageIndex={-1}
        //     //     currentPage={currentPage}
        //     //     pagesLength={pages.length}
        //     //     zIndexPage={zIndexPage}
        //     //     changePage={changePage}
        //     //   />
        //     //   {pages?.map((page, index) => {
        //     //     const bookmark = bookmarks.filter(
        //     //       ({ fields: { category } }) =>
        //     page.fields.category?.toLowerCase() === category?.toLowerCase()
        // )[0]?.fields;
        //
        // const bookmarkIndex = bookmarks.findIndex(
        //   ({ fields }) => fields === bookmark
        // );
        return [
          <div key={`${page.sys.contentType.sys.id}-left`}>
            <LeftPage
              backgroundImg={`url('${page.fields.backgroundImage[0].fields.file.url}')`}
              content={
                <GetBookPage
                  page={page}
                  changeCustomPage={changeCustomPage}
                  pages={pages}
                  setQaIndex={setQaIndex}
                  qaIndex={qaIndex}
                  id={page.sys.contentType.sys.id}
                  side="left"
                />
              }
              thisPageIndex={index}
            />
          </div>,
          <div key={`${page.sys.contentType.sys.id}-right`}>
            <RightPage
              backgroundImg={`url('${page.fields.backgroundImage[1].fields.file.url}')`}
              content={
                <GetBookPage
                  page={page}
                  changeCustomPage={changeCustomPage}
                  pages={pages}
                  setQaIndex={setQaIndex}
                  qaIndex={qaIndex}
                  id={page.sys.contentType.sys.id}
                  side="right"
                />
              }
              thisPageIndex={index}
            />
          </div>,
        ];
      })}
      <img src="/blackBookCover.webp" alt="" />
    </HTMLFlipBook>
  );
});
//         const bookmarkIndex = bookmarks.findIndex(
//           ({ fields }) => fields === bookmark
//         );
//         return (
//           <DoublePage
//             key={page.sys.id}
//             thisPageIndex={index}
//             currentPage={currentPage}
//             pagesLength={pages.length}
//             zIndexPage={zIndexPage}
//             changePage={changePage}
//             changeCustomPage={changeCustomPage}
//             bgLeft={`url('${page.fields.backgroundImage[0].fields.file.url}')`}
//             bgRight={`url('${page.fields.backgroundImage[1].fields.file.url}')`}
//             leftContent={
//               <GetBookPage
//                 id={page.sys.contentType.sys.id}
//                 side={"left"}
//                 page={page}
//                 changeCustomPage={changeCustomPage}
//                 pages={pages}
//                 qaIndex={qaIndex}
//                 setQaIndex={setQaIndex}
//               />
//             }
//             rightContent={
//               <GetBookPage
//                 id={page.sys.contentType.sys.id}
//                 side={"right"}
//                 page={page}
//                 changeCustomPage={changeCustomPage}
//                 pages={pages}
//                 qaIndex={qaIndex}
//               />
//             }
//             bookmark={bookmark}
//             bookmarkIndex={bookmarkIndex}
//           />
//         );
//       })}
//       <Cover
//         thisPageIndex={pages.length}
//         currentPage={currentPage}
//         pagesLength={pages.length}
//         zIndexPage={zIndexPage}
//         changePage={changePage}
//       />
//     </div>
//   );
// };

export default Book;
