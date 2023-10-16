import { AiOutlinePlus } from "react-icons/ai";
import style from "/styles/faqLeft.module.scss";
import classNames from "classnames";

const FaqLeft = ({
  page: {
    fields: { category, qa },
  },
  qaIndex,
  setQaIndex,
}) => {
  return (
    <div className={classNames(style.container)}>
      <h2 className={classNames(style.heading)}>{category}</h2>
      <div className={classNames(style.questions)}>
        {qa.map(({ fields: { id, question } }, index) => (
          <div
            className={classNames(style.question)}
            onClick={() => {
              setQaIndex(index);
            }}
            style={{
              color: qaIndex === index ? "#0f0" : "",
            }}
          >
            <span>
              Q{index + 1}: {question}
            </span>
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
