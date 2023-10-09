import { useRef, useState, useEffect } from "react";
import classNames from 'classnames';
import style from '../../../styles/refactor/videoRight.module.scss'

const VideoRight = ({
  page: {fields: {heading, video: {fields: {file: {url}}}}}
}) => {
  return (
    <div className={classNames(style.container)}>
      <h2 className={classNames(style.heading)}>
        {heading?.toUpperCase()}
      </h2>
      <div className={classNames(style.videoRect)}></div>
    </div>
  );
}

export default VideoRight;