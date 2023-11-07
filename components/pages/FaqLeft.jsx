import { AiOutlinePlus } from "react-icons/ai";
import style from "/styles/faqLeft.module.scss";
import classNames from "classnames";

const FaqLeft = ({
  page: {
    fields: { qa },
  },
  qaIndex,
  setQaIndex,
}) => {
  return (
    <div className={classNames(style.container)}>
      <h2 className={classNames(style.heading)}>FAQ</h2>
      <div className={classNames(style.questions)}>
        {qa?.map(({ fields: { question }, sys: { id } }, index) => (
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
        ))}
      </div>
    </div>
  );
};

export default FaqLeft;
