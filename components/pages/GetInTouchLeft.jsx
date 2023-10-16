import React from "react";
import classNames from "classnames";
import style from "/styles/getInTouchLeft.module.scss";

const GetInTouchLeft = ({
  page: {
    fields: { heading },
  },
}) => {
  const onSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className={classNames(style.container)}>
      <h2 className={classNames(style.heading)}>{heading?.toUpperCase()}</h2>
      <form onSubmit={(e) => onSubmit(e)} className={classNames(style.form)}>
        <label htmlFor="name" className={classNames(style.label)}>
          Name *
        </label>
        <input type="text" className={classNames(style.input)} />

        <label htmlFor="email" className={classNames(style.label)}>
          Email *
        </label>
        <input type="email" className={classNames(style.input)} />

        <label htmlFor="message" className={classNames(style.label)}>
          Message *
        </label>
        <textarea
          name="message"
          id=""
          rows="5"
          className={classNames(style.input)}
        ></textarea>

        <button type={"submit"} className={classNames(style.button)}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default GetInTouchLeft;
