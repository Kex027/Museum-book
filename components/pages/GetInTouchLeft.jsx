import React from "react";
import classNames from "classnames";
import style from "/styles/getInTouchLeft.module.scss";
import ModalButton from "../helper/ModalButton";

const GetInTouchLeft = ({ setGetInTouchModal }) => {
  return (
    <div className={classNames(style.container)}>
      <h2 className={classNames(style.heading)}>
        GET&nbsp;IN
        <br />
        TOUCH
      </h2>

      <ModalButton
        click={() => setGetInTouchModal(style)}
        text={"Get in touch"}
      />
    </div>
  );
};

export default GetInTouchLeft;
