import style from "../styles/doublePage.module.scss";
import React, { useEffect, useRef } from "react";
import Curl from "./Curl";

const VideoPage = ({
  pageIndex,
  currentPage,
  pageIndexStyle,
  pagesLength,
  quote,
  heading,
  description,
  video,
  changePage,
}) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (pageIndex !== currentPage) {
      videoRef.current.pause();
    }
  }, [videoRef, pageIndex]);

  return (
    <div
      className={style.container}
      style={{
        zIndex: pagesLength - Math.abs(currentPage - pageIndex),
      }}
    >
      <div
        className={`${style.leftPage} ${
          pageIndexStyle < currentPage && style.flippedRight
        }`}
      >
        <div className={style.contentLeft}>
          {quote && <p className={style.quote}>"{quote}"</p>}
          <Curl side="left" changePage={changePage} />
        </div>
      </div>
      <div
        className={`${style.rightPage} ${
          pageIndexStyle > currentPage && style.flippedLeft
        }`}
      >
        <div className={style.contentRight}>
          <h1>{heading}</h1>
          {video && (
            <div className={style.video}>
              <video ref={videoRef}>
                <source src={video?.fields.file.url} type="video/mp4" />
              </video>
            </div>
          )}
          <p>{description}</p>
          <Curl side="right" changePage={changePage} />
        </div>
      </div>
    </div>
  );
};

export default VideoPage;