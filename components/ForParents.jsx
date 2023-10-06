import React, { useEffect, useRef, useState } from "react";
import style from "../styles/doublePage.module.scss";
import classNames from "classnames";
import Curl from "./Curl";
import Bookmark from "./Bookmark";

const ForParents = ({
  pageIndex,
  currentPage,
  pagesLength,
  pageIndexStyle,
  page: { category, heading },
  changePage,
  changeCustomPage,
  getIndexOfFirstBookmark,
  bookmarkInfo,
}) => {
  const [isAnimationFinished, setIsAnimationFinished] = useState(false);

  useEffect(() => {
    if (pageIndexStyle > currentPage) {
      setTimeout(() => {
        setIsAnimationFinished(true);
      }, 500);
    } else {
      setTimeout(() => {
        setIsAnimationFinished(false);
      }, 200);
    }
  }, [isAnimationFinished, pageIndexStyle, currentPage]);

  // return (
  //   <div
  //     className={style.container}
  //     style={{
  //       zIndex: pagesLength - Math.abs(currentPage - pageIndex),
  //     }}
  //   >
  //     <div
  //       className={classNames(style.leftPage, {
  //         [style.flippedRight]: pageIndexStyle < currentPage,
  //       })}
  //     >
  //       {currentPage === 0 && (
  //         <img
  //           src="/bookLeftSide.webp"
  //           alt="Left side of book"
  //           className={style.bookLeftSide}
  //         />
  //       )}
  //       <div
  //         className={classNames(style.contentLeft, {
  //           [style.visibilityHidden]: isAnimationFinished,
  //         })}
  //       >
  //         {category} page
  //         <Curl side="left" changePage={changePage} />
  //       </div>
  //     </div>
  //     <div
  //       className={classNames(style.rightPage, {
  //         [style.flippedLeft]: pageIndexStyle > currentPage,
  //       })}
  //     >
  //       {currentPage === pagesLength - 1 && (
  //         <img
  //           src="/bookRightSide.webp"
  //           alt="Right side of book"
  //           className={style.bookRightSide}
  //         />
  //       )}
  //       {currentPage === getIndexOfFirstBookmark(category) && (
  //         <Bookmark
  //           changeCustomPage={changeCustomPage}
  //           category={category}
  //           top={"40%"}
  //           info={bookmarkInfo}
  //         />
  //       )}
  //       <div
  //         className={classNames(style.contentRight, {
  //           [style.visibilityHidden]: isAnimationFinished,
  //         })}
  //         style={{ justifyContent: "flex-start" }}
  //       >
  //         {pageIndex !== pagesLength - 1 && (
  //           <Curl side="right" changePage={changePage} />
  //         )}
  //       </div>
  //     </div>
  //   </div>
  // );

  return (
    <div
      className={style.container}
      style={{
        zIndex: pagesLength - Math.abs(currentPage - pageIndex),
      }}
    >
      <div
        className={classNames(style.leftPage, {
          [style.flippedRight]: pageIndexStyle < currentPage,
        })}
      >
        {currentPage === 0 && (
          <img
            src="/bookLeftSide.webp"
            alt="Left side of book"
            className={style.bookLeftSide}
          />
        )}
        {currentPage === getIndexOfFirstBookmark(category) && (
          <Bookmark
            changeCustomPage={changeCustomPage}
            category={category}
            info={bookmarkInfo}
          />
        )}
        <div
          className={classNames(style.contentLeft, {
            [style.visibilityHidden]: isAnimationFinished,
          })}
          style={{
            backgroundImage: 'url("/forewordLeftPage.webp")',
          }}
        >
          <Curl side="left" changePage={changePage} />
        </div>
      </div>
      <div
        className={classNames(style.rightPage, {
          [style.flippedLeft]: pageIndexStyle > currentPage,
        })}
      >
        {currentPage === pagesLength - 1 && (
          <img
            src="/bookRightSide.webp"
            alt="Left side of book"
            className={style.bookRightSide}
          />
        )}
        <div
          className={classNames(style.contentRight, {
            [style.visibilityHidden]: isAnimationFinished,
          })}
          style={{
            backgroundImage: 'url("/forewordRightPage.webp")',
          }}
        >
          <div style={{height: '36%'}}>
            <h2 className={style.contextTitle}>{heading}</h2>
          </div>
          <div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, molestiae praesentium! Aut eligendi odit, delectus a repellendus libero accusamus nam in mollitia. Expedita ullam, corrupti illo sapiente, cum ab omnis neque officiis ea a est, eaque voluptatibus fuga explicabo ipsa. Minus cum cumque in rem facere ipsam, blanditiis perspiciatis autem dolor eligendi consequatur voluptas expedita libero, nemo soluta molestiae? Totam, laboriosam reprehenderit. Animi mollitia error quis tempore tempora eos, laborum vitae minus modi aliquam temporibus sit fuga officia non dolorem ratione ducimus ad ut dolore odio rerum inventore perferendis porro obcaecati. At dicta numquam, alias enim minus perferendis illo placeat.
          </div>
          {pageIndex !== pagesLength - 1 && (
            <Curl side="right" changePage={changePage} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ForParents;
