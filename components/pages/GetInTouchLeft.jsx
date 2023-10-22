import React from "react";
import classNames from "classnames";
import style from "/styles/getInTouchLeft.module.scss";
import Form from "../helper/Form";

const GetInTouchLeft = ({
  page: {
    fields: { heading },
  },
}) => {
  return (
    <div className={classNames(style.container)}>
      <h2 className={classNames(style.heading)}>{heading?.toUpperCase()}</h2>
      <Form style={style} />
    </div>
  );
};

export default GetInTouchLeft;
