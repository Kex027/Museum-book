import classNames from "classnames";
import { useRef, useState, useEffect } from "react";
import style from "../../styles/videoLeft.module.scss";
import { FaPlayCircle } from "react-icons/fa";

const VideoLeft = ({
  page: {
    fields: {
      id,
      heading,
      description,
      topics,
      video: {
        fields: {
          file: { url },
        },
      },
    },
  },
}) => {
  const [showVideo, setShowVideo] = useState(false);
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
      setShowVideo(false);
    }

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize, videoSize]);

  return (
    <div className={classNames(style.container)}>
      <video
        ref={videoRef}
        controls
        style={{
          display: showVideo ? "block" : "none",
        }}
      >
        <source
          src={"https://moneyjar.world/museum/john-mongan.mp4"}
          type="video/mp4"
        />
      </video>

      <div
        className={classNames(style.videoRect)}
        onClick={() => {
          setShowVideo(true);
          fullScreen();
        }}
      >
        <div className={classNames(style.videoRectClickable)}></div>

        <FaPlayCircle className={classNames(style.playButton)} />
      </div>

      <div className={classNames(style.info)}>
        <h3 className={classNames(style.heading)}>
          CHAPTER {id}: {heading}
        </h3>
        <p>{description}</p>
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
