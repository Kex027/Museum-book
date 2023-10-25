import style from "../styles/bookmark.module.scss";
import classNames from "classnames";

const Bookmark = ({
  bookmark,
  bookmarkIndex,
  thisPageIndex,
  zIndexPage,
  changeCustomPage,
}) => {
  return (
    <div
      className={classNames(style.container)}
      style={{
        top: (bookmarkIndex + 1) * 7.25 - 4 + "%",
        color: zIndexPage === thisPageIndex ? "#0f0" : "#232323",
        backgroundColor: zIndexPage === thisPageIndex ? "#232323" : "#fefefe",
        background:
          zIndexPage !== thisPageIndex
            ? thisPageIndex <= zIndexPage
              ? "linear-gradient(90deg, rgba(255,255,255,1) 80%, rgba(30,30,30,1) 95%)"
              : "linear-gradient(90deg, rgba(90,90,90,1) 5%, rgba(255,255,255,1) 20%)"
            : "#232323",
        transform: thisPageIndex <= zIndexPage ? "" : "rotateY(180deg)",
        paddingLeft: thisPageIndex <= zIndexPage ? "6%" : "14%",
        left: zIndexPage === -1 ? "0%" : "-46%",
      }}
      onClick={() => {
        changeCustomPage(thisPageIndex);
      }}
    >
      {bookmark?.name?.toUpperCase()}
    </div>
  );
};

export default Bookmark;
