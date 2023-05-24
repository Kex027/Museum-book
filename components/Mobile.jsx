import React, { useState } from "react";
import style from "/styles/mobile.module.scss";

const Mobile = ({ pages }) => {
  const [pageIndex, setPageIndex] = useState(3);
  console.log(pages);
  return (
    <div className={style.container}>
      {pages.map(
        ({ sys, fields: { description, heading, quote, video } }, index) => {
          if (index === pageIndex) {
            if (sys.contentType.sys.id === "page")
              return (
                <div className={style.page}>
                  <div className={style.header}>
                    <h1>{heading}</h1>
                    <img
                      className={style.img}
                      src="/museum_title.webp"
                      alt="Museum Title"
                    />
                  </div>
                  <div className={style.videoAndQuote}>
                    <h3 className={style.quote}>"{quote}"</h3>
                    {video && (
                      <div className={style.video}>
                        <video controls>
                          <source
                            src={video?.fields.file.url}
                            type="video/mp4"
                          />
                        </video>
                      </div>
                    )}
                  </div>
                  <p className={style.description}>{description}</p>
                </div>
              );
            else return "zla strona";
          }
        }
      )}
      <button className={`${style.btn} ${style.leftBtn}`}>&larr;</button>
      <button className={`${style.btn} ${style.rightBtn}`}>&rarr;</button>
    </div>
  );
};

export default Mobile;
