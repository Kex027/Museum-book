import style from "../styles/doublePage.module.scss";
import React, { useEffect, useRef, useState } from "react";
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
  const [showControls, setShowControls] = useState(false);

  const fullScreen = () => {
    const video = videoRef.current;
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) {
      /* Safari */
      video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) {
      /* IE11 */
      video.msRequestFullscreen();
    }
  };

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
        {currentPage === 0 && (
          <img
            src="/bookLeftSide.webp"
            alt="Left side of book"
            className={style.bookLeftSide}
          />
        )}
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
        {currentPage === pagesLength - 1 && (
          <img
            src="/bookRightSide.webp"
            alt="Left side of book"
            className={style.bookRightSide}
          />
        )}
        <div className={style.contentRight}>
          <h1>{heading}</h1>
          {video && (
            <div
              className={style.video}
              onMouseOver={() => {
                setShowControls(true);
              }}
              onMouseLeave={() => {
                setShowControls(false);
              }}
              onClick={fullScreen}
            >
              <video ref={videoRef} controls={showControls}>
                <source src={video?.fields.file.url} type="video/mp4" />
              </video>
            </div>
          )}
          <p>{description}</p>
          {pageIndex !== pagesLength - 1 && (
            <Curl side="right" changePage={changePage} />
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
