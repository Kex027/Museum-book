import React from "react";
import style from "../../styles/mobile/mobile.module.scss";

const PageVideo = ({ sys, heading, quote, video, description }) => {
  return (
    <div className={style.page} key={sys.id}>
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
              <source src={video?.fields.file.url} type="video/mp4" />
            </video>
          </div>
        )}
      </div>
      <p className={style.description}>{description}</p>
    </div>
  );
};

export default PageVideo;
