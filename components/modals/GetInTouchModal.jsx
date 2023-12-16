import React from "react";
import Form from "../helper/Form";
import style from "../../styles/getInTouchLeft.module.scss";
import Modal from "../helper/Modal";
import classNames from "classnames";

const GetInTouchModal = ({ getInTouchModal, setGetInTouchModal }) => {
  console.log(getInTouchModal);
  return (
    <Modal setShowModal={setGetInTouchModal}>
      <div className={classNames(style.container)}>
        <div className={style.doublePage}>
          <div
            style={{
              backgroundImage: `url(${getInTouchModal.page.fields.backgroundImage[0].fields.file?.url})`,
              borderRight: "1px solid hwb(235 26% 65% / 0.5)",
              WebkitBoxShadow: "inset -50px 0px 42px -47px rgba(0, 0, 0, 1)",
              MozBoxShadow: "inset -50px 0px 42px -47px rgba(0, 0, 0, 1)",
              boxShadow: "inset -50px 0px 42px -47px rgba(0, 0, 0)",
              display: "flex",
              flexDirection: "column",
            }}
            className={style.content}
          >
            <h2 className={classNames(style.heading)}>
              GET&nbsp;IN
              <br />
              TOUCH
            </h2>

            <Form style={style} />
          </div>

          <div
            style={{
              position: "relative",
              backgroundImage: `url(${getInTouchModal.page.fields.backgroundImage[1].fields.file?.url})`,
              borderLeft: "1px solid hwb(235 26% 65% / 0.5)",
              WebkitBoxShadow: "inset 50px 0px 42px -47px rgba(0, 0, 0, 1)",
              MozBoxShadow: "inset 50px 0px 42px -47px rgba(0, 0, 0, 1)",
              boxShadow: "inset 50px 0px 42px -47px rgba(0, 0, 0, 1)",
            }}
            className={style.content}
          ></div>
        </div>
      </div>
    </Modal>
  );
};

export default GetInTouchModal;
