import classNames from "classnames";
import React, { useState } from "react";
import style from '../../styles/refactor/curl.module.scss'

const Curl = ({ side, changePage }) => {
  const [showCurl, setShowCurl] = useState(false)

  const curlStyle = {
    width: showCurl ? "40px" : 0,
    height: showCurl ? "40px" : 0,
    left: side === "left" ? 0 : null,
    right: side === "right" ? 0 : null,

    background:
      side === "left"
        ? "linear-gradient(45deg, rgba(255, 255, 255, 100%), rgba(243, 243, 243, 100%) 45%, rgba(150, 150, 150) 50%, rgba(190, 190, 190) 50%, rgba(210, 210, 210) 56%, rgba(220, 220, 220) 62%, rgba(230, 230, 230) 80%, rgba(230, 230, 230) 100%)"
        : "linear-gradient(315deg, rgba(255, 255, 255, 100%), rgba(243, 243, 243, 100%) 25%, rgba(210, 210, 210) 45%, rgba(135, 135, 135) 50%, rgba(180, 180, 180) 50%, rgba(200, 200, 200) 56%, rgba(205, 205, 205) 62%, rgba(225, 225, 225) 80%, rgba(230, 230, 230) 100%)",

    boxShadow: `box-shadow: ${
        showCurl === "left" ? "12px" : "-12px"
    } -12px 25px -15px rgba(0, 0, 0, 1)`,
    WebkitBoxShadow: `${
        showCurl === "left" ? "12px" : "-12px"
    } -12px 25px -15px rgba(0, 0, 0, 1)`,
    MozBoxShadow: `${
        showCurl === "left" ? "12px" : "-12px"
    } -12px 25px -15px rgba(0, 0, 0, 1)`,
  };

  return (
    <div
      className={classNames(style.container)} 
      style={
        side === "left" ? 
        {
          left: '0',
          justifyContent: 'flex-start'
        } :
        {
          right: '0',
          justifyContent: 'flex-end'
        }
      }
      onClick={() => {
        changePage(side === "left" ? -1 : 1);
      }}
      onMouseOver={() => {
        setShowCurl(true);
      }}
      onMouseLeave={() => {
        setShowCurl(false);
      }}
    >
      <div 
        className={classNames(style.content)} 
        style={curlStyle}
      >
      </div>
    </div>
  );
};

export default Curl;
