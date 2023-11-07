import React from "react";
import style from "../../../styles/mobile/getInTouchMobile.module.scss";
import Form from "../../helper/Form";

const GetInTouchMobile = () => {
  return (
    <div className={style.container}>
      <h3 className={style.heading}>GET IN TOUCH</h3>
      <Form style={style} />
    </div>
  );
};

export default GetInTouchMobile;
