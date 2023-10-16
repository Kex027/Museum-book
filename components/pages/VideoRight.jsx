import classNames from "classnames";
import style from "../../styles/videoRight.module.scss";

const VideoRight = ({
  page: {
    fields: { heading },
  },
}) => {
  return (
    <div className={classNames(style.container)}>
      <h2 className={classNames(style.heading)}>{heading?.toUpperCase()}</h2>
      <div className={classNames(style.videoRect)}></div>
    </div>
  );
};

export default VideoRight;
