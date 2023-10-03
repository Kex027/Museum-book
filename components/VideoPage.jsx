import style from "../styles/doublePage.module.scss";
import React, { useEffect, useRef, useState } from "react";
import Curl from "./Curl";
import classNames from "classnames";

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
  const [isAnimationFinished, setIsAnimationFinished] = useState(false);

  useEffect(() => {
    if (pageIndexStyle > currentPage) {
      setTimeout(() => {
        setIsAnimationFinished(true);
      }, 450);
    } else {
      setTimeout(() => {
        setIsAnimationFinished(false);
      }, 200);
    }
  }, [isAnimationFinished, pageIndexStyle, currentPage]);

  const fullScreen = () => {
    const video = videoRef?.current;
    if (video.requestFullscreen) {
      video.requestFullscreen();
      video.play();
    } else if (video.webkitRequestFullscreen) {
      /* Safari */
      video.webkitRequestFullscreen();
      video.play();
    } else if (video.msRequestFullscreen) {
      /* IE11 */
      video.msRequestFullscreen();
      video.play();
    }
  };

  useEffect(() => {
    if (pageIndex !== currentPage) {
      videoRef?.current?.pause();
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
        className={classNames(style.leftPage, {
          [style.flippedRight]: pageIndexStyle < currentPage,
        })}
      >
        {currentPage === 0 && (
          <img
            src="/bookLeftSide.webp"
            alt="Left side of book"
            className={style.bookLeftSide}
          />
        )}
        <div
          className={classNames(style.contentLeft, {
            [style.visibilityHidden]: isAnimationFinished,
          })}
          style={{ backgroundImage: 'url("/videoPageLeftPage.webp")', backgroundSize: 'cover' }}
        >
          {/* <div onClick={fullScreen} style={{background: "linear-gradient(135deg, rgba(34,255,147,1) 0%, rgba(71,0,223,1) 100%)"}}>essa</div>
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
          )} */}
          {/* <p>{description}</p> */}

          {/* {quote && <p className={style.quote}>"{quote}"</p>} */}
          <Curl side="left" changePage={changePage} />
        </div>
      </div>
      <div
        className={classNames(style.rightPage, {
          [style.flippedLeft]: pageIndexStyle > currentPage,
        })}
      >
        {currentPage === pagesLength - 1 && (
          <img
            src="/bookRightSide.webp"
            alt="Right side of book"
            className={style.bookRightSide}
          />
        )}
        <div
          className={classNames(style.contentRight, {
            [style.visibilityHidden]: isAnimationFinished,
          })}
          style={{ backgroundImage: 'url("/videoPageRightPage.webp")' }}
        >
          {/* <h1>{heading}</h1> */}
          {pageIndex !== pagesLength - 1 && (
            <Curl side="right" changePage={changePage} />
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
