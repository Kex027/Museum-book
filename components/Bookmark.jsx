import React, { useRef, useState } from "react";
import classNames from "classnames";
import style from "../styles/doublePage.module.scss";

const Bookmark = ({ changeCustomPage, category, info }) => {
  const [isPositionChanged, setIsPositionChanged] = useState(false);
  const ref = useRef(null);

  // cos dziwnego sie dzieje z ostatnia zakladka od dolu
  // nawet przy przewracaniu zawsze tylko ostatnia idzie dolem
  // zakladam ze jesli to sie rowiaze,
  // to rowniez rozwiazany bedzie problem wyswietlania get in touch, 
  // ktory w ogole jest pod wszystkimi kartkami

  setTimeout(() => {
    setIsPositionChanged(
      ref.current?.getBoundingClientRect().x < window.innerWidth / 2
    );
  }, 300);

  return (
    <div
      key={category}
      style={{
        top: (info.index * 10 + 10) + "%",
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
          transform: isPositionChanged ? "" : "rotateY(180deg)",
          color: info?.textColor,
        }}
      >
        {info?.name}
      </span>
    </div>
  );
};

export default Bookmark;
