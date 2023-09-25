import React, { useRef, useState } from "react";
import classNames from "classnames";
import style from "../styles/doublePage.module.scss";

const Bookmark = ({ changeCustomPage, category, top, info }) => {
  const [isPositionChanged, setIsPositionChanged] = useState(false);
  const ref = useRef(null);

  setTimeout(() => {
    setIsPositionChanged(
      ref.current?.getBoundingClientRect().x < window.innerWidth / 2
    );
  }, 300);

  return (
    <div
      key={category}
      style={{
        top: top,
        backgroundColor: info?.color,
      }}
      className={classNames(style.bookmark)}
      onClick={(e) => {
        changeCustomPage(e, category);
      }}
    >
      <span
        className={classNames(style.bookmarkText)}
        ref={ref}
        style={{
          transform: isPositionChanged ? "rotateY(180deg)" : "",
          color: info?.textColor,
        }}
      >
        {info?.name}
      </span>
    </div>
  );
};

export default Bookmark;
