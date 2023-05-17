import style from "../styles/doublePage.module.scss";
import { useEffect, useRef } from "react";

const DoublePageTest = ({
  pageIndex,
  currentPage,
  pageIndexStyle,
  heading,
  description,
  video,
}) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (pageIndex !== currentPage) {
      videoRef.current.pause();
    }
  }, [videoRef, pageIndex]);

  return (
    <div className={style.container}>
      <div
        className={`${style.leftPage} ${
          pageIndexStyle < currentPage && style.flippedRight
        }`}
      >
        <div className={style.contentLeft}>
          <p className={style.quote}>
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa,
            vero."
          </p>
        </div>
      </div>
      <div
        className={`${style.rightPage} ${
          pageIndexStyle > currentPage && style.flippedLeft
        }`}
      >
        <div className={style.contentRight}>
          <h1>{heading}</h1>
          <div className={style.video}>
            <video controls ref={videoRef}>
              <source src={video.fields.file.url} type="video/mp4" />
            </video>
          </div>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default DoublePageTest;
