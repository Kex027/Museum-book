import classNames from "classnames";
import style from "../../styles/videoRight.module.scss";

const VideoRight = ({
  page: {
    fields: { id },
  },
}) => {
  const displayChapterNumber = () => {
    if (id < 10) return "0" + id;
    else return id;
  };

  return (
    <div className={classNames(style.container)}>
      <h2 className={classNames(style.heading)}>
        CHAP&shy;TER {displayChapterNumber()}
      </h2>
      <div className={classNames(style.videoRect)}></div>
    </div>
  );
};

export default VideoRight;
