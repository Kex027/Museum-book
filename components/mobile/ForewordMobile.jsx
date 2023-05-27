import React from "react";
import style from "../../styles/doublePage.module.scss";

const ForewordMobile = ({ title, text }) => {
  return (
    <div>
      <h1 className={style.forewordTitle}>{title}</h1>
      {Object.entries(text.content).map((content) => (
        <div key={content[0]}>{content[1].content[0].value}</div>
      ))}
    </div>
  );
};

export default ForewordMobile;
