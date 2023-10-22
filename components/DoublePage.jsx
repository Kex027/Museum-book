import classNames from "classnames";
import style from "../styles/doublePage.module.scss";
import Curl from "./Curl";
import Bookmark from "./Bookmark";
import PageIndex from "./PageIndex";

const DoublePage = ({
  thisPageIndex,
  currentPage,
  pagesLength,
  zIndexPage,
  changePage,
  changeCustomPage,
  bgLeft,
  bgRight,
  leftContent,
  rightContent,
  bookmark,
  bookmarkIndex,
}) => {
  return (
    <div
      className={classNames(style.container)}
      style={{
        zIndex: pagesLength - Math.abs(zIndexPage - thisPageIndex),
      }}
    >
      {/* LEFT PAGE */}
      <div
        className={classNames(style.leftPage, {
          [style.flippedRight]: thisPageIndex > currentPage,
        })}
        style={{
          backgroundImage: bgLeft,
        }}
      >
        <div className={classNames(style.content)}>
          {leftContent}

          {bookmark && (
            <Bookmark
              bookmark={bookmark}
              bookmarkIndex={bookmarkIndex}
              thisPageIndex={thisPageIndex}
              zIndexPage={zIndexPage}
              changeCustomPage={changeCustomPage}
            />
          )}

          <PageIndex side="left" thisPageIndex={thisPageIndex} />
        </div>
        <Curl side="left" changePage={changePage} />
        <div
          className={classNames(style.banner, style.leftPageShadow)}
          style={{
            left: "-5%",
            backgroundColor: "#565656",
            transform: currentPage === -1 ? "translateX(100%)" : "",
          }}
        ></div>
      </div>

      {/* RIGHT PAGE */}
      <div
        className={classNames(style.rightPage, {
          [style.flippedLeft]: thisPageIndex < currentPage,
        })}
        style={{
          backgroundImage: bgRight,
        }}
      >
        <div className={classNames(style.content)}>
          {rightContent}

          <PageIndex side="right" thisPageIndex={thisPageIndex} />
        </div>
        {thisPageIndex !== pagesLength - 1 && (
          <Curl side="right" changePage={changePage} />
        )}

        <div
          className={classNames(style.banner, style.rightPageShadow)}
          style={{
            right: "-5%",
            backgroundColor: "#ddd",
            transform: currentPage === -1 ? "translateX(-100%)" : "",
          }}
        ></div>
      </div>
    </div>
  );
};

export default DoublePage;
