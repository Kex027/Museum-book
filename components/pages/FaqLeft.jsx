import { AiOutlinePlus } from "react-icons/ai";
import style from "/styles/faqLeft.module.scss";
import classNames from "classnames";
import Modal from "../helper/Modal";
import React, { useEffect, useState } from "react";
import { BiSolidRightArrowAlt } from "react-icons/bi";
import ModalButton from "../helper/ModalButton";

const FaqLeft = ({
  page: {
    fields: { qa },
  },
  setFaqModal,
  qaIndex,
  setQaIndex,
}) => {
  return (
    <>
      <div className={classNames(style.container)}>
        <h2 className={classNames(style.heading)}>FAQ</h2>
        <ModalButton
          click={() => setFaqModal(qa)}
          text={"Show questions and answers"}
          white
        />
      </div>
    </>
  );
};

export default FaqLeft;
