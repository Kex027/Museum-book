import React, { useState } from "react";
import classNames from "classnames";
import style from "../styles/doublePage.module.scss";

const Bookmark = ({
  name,
  moveRight,
  changeCustomPage,
  category,
  src,
  bookmarksTextRef,
  top,
}) => {
  const [isPositionChanged, setIsPositionChanged] = useState(false);

  setTimeout(() => {
    setIsPositionChanged(
      bookmarksTextRef.current?.getBoundingClientRect().x <
        window.innerWidth / 2
        ? "rotateY(180deg)"
        : ""
    );
  }, 300);

  return (
    <div
      key={category}
      style={{ right: moveRight, top: top }}
      className={classNames(style.bookmark)}
      onClick={(e) => {
        changeCustomPage(e, category);
      }}
    >
      <img src={src} alt={category} />
      <span
        className={classNames(style.bookmarkText)}
        ref={bookmarksTextRef}
        style={{
          transform: isPositionChanged ? "rotateY(180deg)" : "",
          fontSize: "1.1rem",
        }}
      >
        {name}
      </span>
    </div>
  );
};

export default Bookmark;
