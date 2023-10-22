import React from "react";
import style from "../../../styles/mobile/getInTouchMobile.module.scss";
import Form from "../../helper/Form";

const GetInTouchMobile = ({
  page: {
    fields: { heading },
  },
}) => {
  return (
    <div className={style.container}>
      <h3 className={style.heading}>{heading}</h3>
      <Form style={style} />
    </div>
  );
};

export default GetInTouchMobile;
