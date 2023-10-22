import React from "react";
import style from "../../../styles/mobile/contentsMobile.module.scss";

const ContentsMobile = ({
  pages,
  page: {
    fields: { title, listOfContents },
  },
  changeCustomPage,
}) => {
  const indexOfFirstVideoPage = pages.findIndex(
    (page) => page.sys.contentType.sys.id === "page"
  );
  return (
    <div className={style.container}>
      <h3 className={style.heading}>{title}</h3>
      <div className={style.contents}>
        {listOfContents.map(({ fields: { id, name, description } }) => (
          <div
            key={id}
            className={style.content}
            onClick={() => changeCustomPage(id + indexOfFirstVideoPage - 1)}
          >
            <h3 className={style.contentHeading}>
              {id}. {name}
            </h3>
            <p className={style.description}>{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentsMobile;
