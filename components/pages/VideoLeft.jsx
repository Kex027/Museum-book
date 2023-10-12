import classNames from "classnames";
import { useRef, useState, useEffect } from "react";
import style from '../../styles/videoLeft.module.scss'
import { AiFillPlayCircle } from "react-icons/ai";

const VideoLeft = ({
  page: {fields: {description, video: {fields: {file: {url}}}}},
}) => {
  const [showVideo, setShowVideo] = useState(false);
  const [showPlay, setShowPlay] = useState(false);
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
    if (typeof window === "undefined")
      return
    return {
      width: window.innerWidth,
      height: window.innerHeight
    }
  }

  const getVideoSize = () => {
    if (typeof window === "undefined")
      return
    return {
      width: videoRef.current?.offsetWidth,
      height: videoRef.current?.offsetHeight,
    }
  }

  const [screenSize, setScreenSize] = useState(getCurrentDimension());
  const [videoSize, setVideoSize] = useState(getVideoSize());

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension())
      setVideoSize(getVideoSize())
    }
    window.addEventListener('resize', updateDimension);

    if (videoSize.width !== screenSize.width) {
      videoRef?.current?.pause();
      setShowVideo(false);
    }

    return(() => {
      window.removeEventListener('resize', updateDimension);
    })
  }, [screenSize, videoSize])

  return (
    <div className={classNames(style.container)}>

      <video ref={videoRef} controls 
        className={classNames(style.video)}
        style={{
          display: showVideo ? "block" : 'none'
        }}
      >
        <source src={url} type="video/mp4" />  
      </video>

      <div 
        className={classNames(style.videoRect)} 
        onClick={() => {
          setShowVideo(true);
          fullScreen();
        }}
        onMouseOver={() => setShowPlay(true)}
        onMouseLeave={() => setShowPlay(false)}
      >
        <div 
          className={classNames(style.videoRectClickable)}
        ></div>

        {showPlay && <AiFillPlayCircle className={classNames(style.playButton)} />}  
      </div>

      <div className={classNames(style.description)}>
        {description}
      </div>
    </div>
  );
}

export default VideoLeft;