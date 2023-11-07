import React from "react";
import style from "../../../styles/mobile/contentsMobile.module.scss";

const ContentsMobile = ({
  pages,
  page: {
    fields: { listOfContents },
  },
  changeCustomPage,
}) => {
  const indexOfFirstVideoPage = pages.findIndex(
    (page) => page.sys.contentType.sys.id === "videoPage"
  );
  return (
    <div className={style.container}>
      <h3 className={style.heading}>CONTENTS</h3>
      <div className={style.contents}>
        {listOfContents.map(({ fields: { name, text } }, index) => (
          <div
            key={index + 1}
            className={style.content}
            onClick={() =>
              changeCustomPage(index + 1 + indexOfFirstVideoPage - 1)
            }
          >
            <h3 className={style.contentHeading}>
              {index + 1}. {name}
            </h3>
            <p className={style.description}>{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentsMobile;
