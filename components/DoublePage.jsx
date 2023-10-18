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
          style={{
            position: "absolute",
            color: "#0ff",
            left: "-6%",
            top: 0,
            backgroundColor: "#343434",
            height: "100%",
            width: "6%",
            zIndex: "-1",
            transform: currentPage === -1 ? "translateX(100%)" : "",
            transition: "transform 1s ease-in-out",
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
          style={{
            position: "absolute",
            color: "#0ff",
            right: "-6%",
            top: 0,
            backgroundColor: "#ddd",
            height: "100%",
            width: "6%",
            zIndex: "-1",
            transform: currentPage === -1 ? "translateX(-100%)" : "",
            transition: "transform 1s ease-in-out",
          }}
        ></div>
      </div>
    </div>
  );
};

export default DoublePage;
