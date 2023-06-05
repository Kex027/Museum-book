import React, { useState } from "react";
import style from "../styles/curl.module.scss";

const Curl = ({ side, changePage }) => {
  const [curl, setCurl] = useState(false);

  const curlStyle = {
    width: curl ? "50px" : 0,
    height: curl ? "50px" : 0,
    left: side === "left" ? 0 : null,
    right: side === "right" ? 0 : null,

    background:
      side === "left"
        ? "linear-gradient(45deg, rgba(255, 255, 255, 0), rgba(243, 243, 243, 0) 45%, rgba(150, 150, 150) 50%, rgba(190, 190, 190) 50%, rgba(210, 210, 210) 56%, rgba(220, 220, 220) 62%, rgba(230, 230, 230) 80%, rgba(230, 230, 230) 100%)"
        : "linear-gradient(315deg, rgba(255, 255, 255, 0), rgba(243, 243, 243, 0) 25%, rgba(210, 210, 210) 45%, rgba(135, 135, 135) 50%, rgba(180, 180, 180) 50%, rgba(200, 200, 200) 56%, rgba(205, 205, 205) 62%, rgba(225, 225, 225) 80%, rgba(230, 230, 230) 100%)",

    boxShadow: `box-shadow: ${
      side === "left" ? "12px" : "-12px"
    } -12px 25px -15px rgba(0, 0, 0, 1)`,
    WebkitBoxShadow: `${
      side === "left" ? "12px" : "-12px"
    } -12px 25px -15px rgba(0, 0, 0, 1)`,
    MozBoxShadow: `${
      side === "left" ? "12px" : "-12px"
    } -12px 25px -15px rgba(0, 0, 0, 1)`,
  };

  const hoverStyle = {
    left: side === "left" ? 0 : null,
    right: side === "right" ? 0 : null,
  };

  return (
    <>
      <div className={style.curl} style={curlStyle}></div>
      <div
        onClick={() => {
          changePage(side === "left" ? -1 : 1);
          setCurl(false);
        }}
        className={style.curlHover}
        style={hoverStyle}
        onMouseOver={() => {
          setCurl(true);
        }}
        onMouseLeave={() => {
          setCurl(false);
        }}
      ></div>
    </>
  );
};

export default Curl;
