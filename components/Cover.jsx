import React from "react";
import style from "../styles/doublePage.module.scss";

const Cover = ({ heading, description }) => {
  return (
    <div className={style.container}>
      <div className={style.paper}>
        <h1>{heading}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Cover;
