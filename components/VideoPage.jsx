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
  changeCustomPage,
  getIndexOfFirstBookmark,
}) => {
  const videoRef = useRef(null);
  const [showControls, setShowControls] = useState(false);
  const [isAnimationFinished, setIsAnimationFinished] = useState(false);

  const bookmarks = [
    {
      bookmarksIndex: 3,
      src: "SchoolsBookmark.webp",
      category: "Schools",
      styling: {
        top: "10%",
        right: pageIndexStyle > currentPage ? "-2vw" : "-4vw",
      },
    },
    {
      bookmarksIndex: 6,
      src: "ParentsBookmark.webp",
      category: "Parents",
      styling: {
        top: "25%",
        right: pageIndexStyle > currentPage ? "-1.3vw" : "-3vw",
      },
    },
    {
      bookmarksIndex: 4,
      src: "StudentsBookmark.webp",
      category: "Students",
      styling: {
        top: "40%",
        right: pageIndexStyle > currentPage ? "-1.3vw" : "-3vw",
      },
    },
    {
      bookmarksIndex: 7,
      src: "FaqBookmark.webp",
      category: "FAQ",
      styling: {
        top: "55%",
        right: pageIndexStyle > currentPage ? "-.8vw" : "-2.5vw",
      },
    },
  ];

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
        >
          {quote && <p className={style.quote}>"{quote}"</p>}
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
            alt="Left side of book"
            className={style.bookRightSide}
          />
        )}
        {bookmarks.map(({ bookmarksIndex, src, category, styling }) => {
          if (currentPage === getIndexOfFirstBookmark(category))
            return (
              <img
                key={bookmarksIndex}
                src={src}
                alt={category}
                style={styling}
                className={classNames(style.bookmark)}
                onClick={(e) => {
                  changeCustomPage(e, category);
                }}
              />
            );
        })}
        <div
          className={classNames(style.contentRight, {
            [style.visibilityHidden]: isAnimationFinished,
          })}
        >
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
