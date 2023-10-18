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
        top: (bookmarkIndex + 1) * 8 - 4 + "%",
        color: zIndexPage === thisPageIndex ? "#0f0" : "#232323",
        backgroundColor: zIndexPage === thisPageIndex ? "#232323" : "#fefefe",
        transform: thisPageIndex <= zIndexPage ? "" : "rotateY(180deg)",
        paddingLeft: thisPageIndex <= zIndexPage ? "10%" : "14%",
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
