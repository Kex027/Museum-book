import React from "react";
import style from "/styles/mobile/intoMobile.module.scss";

const IntoMobile = ({ logo, subtitle, footer }) => {
  return (
    <div className={style.container}>
      <img src={logo.fields.file.url} alt={logo.fields.title} />
      <h4>{subtitle}</h4>
      <p>{footer}</p>
    </div>
  );
};

export default IntoMobile;
