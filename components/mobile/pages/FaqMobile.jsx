import React, { useState } from "react";
import style from "../../../styles/mobile/FaqMobile.module.scss";
import { AiOutlinePlus } from "react-icons/ai";
import classNames from "classnames";

const FaqMobile = ({
  page: {
    fields: { qa },
  },
}) => {
  const [openedAnswerIndex, setOpenedAnswerIndex] = useState(0);
  return (
    <div className={style.container}>
      <h3 className={style.heading}>FAQ</h3>
      {qa.map(({ fields: { question, answer } }, index) => {
        return (
          <>
            <div
              onClick={() => {
                setOpenedAnswerIndex(index);
              }}
              className={style.question}
            >
              <span>
                {index + 1}. {question}
              </span>
              <span>
                <AiOutlinePlus
                  className={classNames(style.icon)}
                  style={{
                    transform:
                      openedAnswerIndex === index ? "rotate(45deg)" : "",
                  }}
                />
              </span>
            </div>
            <div
              className={style.answer}
              style={{
                maxHeight:
                  openedAnswerIndex === index ? "calc(100 * var(--vh))" : 0,
                padding: openedAnswerIndex === index ? "10px" : "0 10px",
                overflow: "hidden",
              }}
            >
              {answer}
            </div>
          </>
        );
      })}
    </div>
  );
};

export default FaqMobile;
