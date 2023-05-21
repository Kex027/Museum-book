import React from "react";
import style from "../styles/book.module.scss";

const Bookmarks = ({ changeCustomPage, pagesLength }) => {
  const bookmarks = [
    { image: "SchoolsBookmark.webp", name: "Schools" },
    { image: "StudentsBookmark.webp", name: "Students" },
    { image: "ParentsBookmark.webp", name: "Parents" },
    { image: "FaqBookmark.webp", name: "Faq" },
  ];

  return (
    <div className={style.bookmarks} style={{ zIndex: pagesLength + 1 }}>
      {bookmarks.map(({ image, name }) => (
        <img
          key={name}
          src={image}
          alt={name}
          className={style.pointer}
          onClick={(event) => changeCustomPage(event, name)}
        />
      ))}
    </div>
  );
};

export default Bookmarks;
