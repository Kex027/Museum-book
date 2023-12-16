import style from "/styles/faqLeft.module.scss";
import classNames from "classnames";
import React from "react";
import ModalButton from "../helper/ModalButton";

const FaqLeft = ({
  page: {
    fields: { qa, backgroundImage },
  },
  setFaqModal,
}) => {
  return (
    <>
      <div className={classNames(style.container)}>
        <h2 className={classNames(style.heading)}>FAQ</h2>
        <ModalButton
          click={() => setFaqModal({ qa, backgroundImage })}
          text={"Show questions and answers"}
          white
        />
      </div>
    </>
  );
};

export default FaqLeft;
