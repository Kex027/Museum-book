import React, { useState } from "react";
import style from "../styles/curl.module.scss";

const Curl = ({ side, changePage }) => {
  const [curl, setCurl] = useState(false);

  const curlStyle = {
    width: curl ? "40px" : 0,
    height: curl ? "40px" : 0,
    left: side === "left" ? 0 : null,
    right: side === "right" ? 0 : null,

    background:
      side === "left"
        ? "linear-gradient(45deg, rgba(255, 255, 255, 0), rgba(243, 243, 243, 0) 45%, rgba(80, 80, 80, 0.5) 50%, rgba(170, 170, 170, 0.75) 50%, #bbb 56%, #ccc 62%, rgba(243, 243, 243, 0.5) 80%, rgba(255, 255, 255, 0.8) 100%)"
        : "linear-gradient(315deg, rgba(255, 255, 255, 0), rgba(243, 243, 243, 0) 45%, rgba(80, 80, 80, 0.5) 50%, rgba(170, 170, 170, 1) 50%, #bbb 56%, #ccc 62%, rgba(243, 243, 243, 0.5) 80%, rgba(255, 255, 255, 0.8) 100%)",

    boxShadow: `box-shadow: ${
      side === "left" ? "12px" : "-12px"
    } -12px 25px -15px rgba(0, 0, 0, 1)`,
    webkitBoxShadow: `${
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
