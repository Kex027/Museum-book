import React, { useState } from "react";
import style from "/styles/mobile/mobile.module.scss";
import PageVideo from "./PageVideo";
import IntoMobile from "./IntoMobile";
import ContentsMobile from "./ContentsMobile";
import ForewordMobile from "./ForewordMobile";

const Mobile = ({ pages }) => {
  const [pageIndex, setPageIndex] = useState(0);

  const changePage = (value) => {
    setPageIndex((oldIndex) => {
      if (oldIndex + value < 0 || oldIndex + value > pages.length - 1)
        return oldIndex;
      return oldIndex + value;
    });
  };

  return (
    <div className={style.container}>
      {pages.map(
        (
          {
            sys,
            fields: {
              description,
              heading,
              quote,
              video,
              logo,
              subtitle,
              footer,
              title,
              list,
              text,
            },
          },
          index
        ) => {
          if (index === pageIndex) {
            if (sys.contentType.sys.id === "page")
              return (
                <PageVideo
                  key={sys.id}
                  sys={sys}
                  heading={heading}
                  description={description}
                  video={video}
                  quote={quote}
                />
              );
            else if (sys.contentType.sys.id === "intoPage")
              return (
                <IntoMobile
                  key={sys.id}
                  logo={logo}
                  subtitle={subtitle}
                  footer={footer}
                />
              );
            else if (sys.contentType.sys.id === "contentsPage")
              return <ContentsMobile key={sys.id} title={title} list={list} />;
            else if (sys.contentType.sys.id === "forewordPage")
              return <ForewordMobile key={sys.id} title={title} text={text} />;
            else return "PAGE 404 :(";
          }
        }
      )}
      <button
        className={`${style.btn} ${style.leftBtn}`}
        onClick={() => changePage(-1)}
      >
        &larr;
      </button>
      <button
        className={`${style.btn} ${style.rightBtn}`}
        onClick={() => changePage(1)}
      >
        &rarr;
      </button>
    </div>
  );
};

export default Mobile;
