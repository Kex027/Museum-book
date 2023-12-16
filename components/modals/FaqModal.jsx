import React from "react";
import classNames from "classnames";
import { AiOutlinePlus } from "react-icons/ai";
import Modal from "../helper/Modal";
import style from "../../styles/book.module.scss";

const FaqModal = ({ faqModal, setFaqModal, qaIndex, setQaIndex }) => {
  return (
    <Modal setShowModal={setFaqModal}>
      <div className={style.faq}>
        <div
          style={{
            backgroundImage: `url(${faqModal.backgroundImage[0].fields.file?.url})`,
            borderRight: "1px solid hwb(235 26% 65% / 0.5)",
            WebkitBoxShadow: "inset -50px 0px 42px -47px rgba(0, 0, 0, 1)",
            MozBoxShadow: "inset -50px 0px 42px -47px rgba(0, 0, 0, 1)",
            boxShadow: "inset -50px 0px 42px -47px rgba(0, 0, 0)",
            display: "flex",
            flexDirection: "column",
          }}
          className={style.faqContainer}
        >
          <h2 className={classNames(style.heading)}>FAQ</h2>
          <div className={classNames(style.questions)}>
            {faqModal?.qa?.map(
              ({ fields: { question }, sys: { id } }, index) => (
                <div
                  key={id}
                  className={classNames(style.question)}
                  onClick={() => {
                    setQaIndex(index);
                  }}
                  style={{
                    color: qaIndex === index ? "#0f0" : "",
                    zIndex: 1,
                  }}
                >
                  <div style={{ display: "flex", gap: "5px" }}>
                    <span>Q{index + 1}: </span> <span>{question}</span>
                  </div>
                  <span>
                    <AiOutlinePlus
                      className={classNames(style.icon)}
                      style={{
                        transform: qaIndex === index ? "rotate(45deg)" : "",
                      }}
                    />
                  </span>
                </div>
              )
            )}
          </div>
        </div>

        <div
          style={{
            position: "relative",
            backgroundImage: `url(${faqModal.backgroundImage[1].fields.file?.url})`,
            borderLeft: "1px solid hwb(235 26% 65% / 0.5)",
            WebkitBoxShadow: "inset 50px 0px 42px -47px rgba(0, 0, 0, 1)",
            MozBoxShadow: "inset 50px 0px 42px -47px rgba(0, 0, 0, 1)",
            boxShadow: "inset 50px 0px 42px -47px rgba(0, 0, 0, 1)",
          }}
          className={style.faqContainer}
        >
          <h2 style={{ height: "22%" }}></h2>
          <div className={style.answers}>
            {faqModal?.qa?.map(({ fields: { answer } }, index) => (
              <div
                key={index}
                style={{
                  transform:
                    index === qaIndex ? "translateX(0%)" : "translateX(-125%)",
                  opacity: index === qaIndex ? 1 : 0,
                }}
                className={style.answer}
              >
                {answer}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default FaqModal;
