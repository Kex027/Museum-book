import classNames from "classnames";
import React, { useRef, useState, useEffect } from "react";
import style from "../../styles/videoLeft.module.scss";
import { FaPlayCircle } from "react-icons/fa";

const VideoLeft = ({
  page: {
    fields: { id, heading, text, topics, videoUrl },
  },
  setVideoModal,
}) => {
  const videoRef = useRef(null);

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

  const getCurrentDimension = () => {
    if (typeof window === "undefined") return;
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  };

  const getVideoSize = () => {
    if (typeof window === "undefined") return;
    return {
      width: videoRef.current?.offsetWidth,
      height: videoRef.current?.offsetHeight,
    };
  };

  const [screenSize, setScreenSize] = useState(getCurrentDimension());
  const [videoSize, setVideoSize] = useState(getVideoSize());

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
      setVideoSize(getVideoSize());
    };
    window.addEventListener("resize", updateDimension);

    if (videoSize.width !== screenSize.width) {
      videoRef?.current?.pause();
      setVideoModal(false);
    }

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize, videoSize]);

  return (
    <div className={classNames(style.container)}>
      <div className={classNames(style.videoRect)}>
        <button
          className={classNames(style.videoRectClickable)}
          onClick={() => {
            setVideoModal(
              <video ref={videoRef} controls>
                <source src={videoUrl} type="video/mp4" />
              </video>
            );
          }}
        ></button>

        <FaPlayCircle className={classNames(style.playButton)} />
      </div>

      <div className={classNames(style.info)}>
        <div className={classNames(style.text)}>
          <h3 className={classNames(style.heading)}>
            {heading?.toUpperCase()}
          </h3>
          <p className={style.description}>{text}</p>
        </div>
        <div className={classNames(style.topics)}>
          Topics:{" "}
          {topics.map((topic, index) => {
            if (index !== topics.length - 1) {
              return `${topic}, `;
            }
            return topic;
          })}
        </div>
      </div>
    </div>
  );
};

export default VideoLeft;
