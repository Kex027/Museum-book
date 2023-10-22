import React, { useState } from "react";
import classNames from "classnames";
import axios from "axios";
import { useForm } from "react-hook-form";

const Form = ({ style }) => {
  const [success, setSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    axios
      .post("http://sandbox.000.pe/contact.php", data)
      .then((response) => {
        setSuccess(true);
        console.log(`${response.status}: Success!`);
        reset();
      })
      .catch((err) => {
        setSuccess(false);
        console.log(err);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classNames(style.form)}>
      <label htmlFor="name" className={classNames(style.label)}>
        Name *
      </label>
      <input
        type="text"
        className={classNames(style.input)}
        {...register("name", { required: true })}
      />
      {errors.name && (
        <span style={{ color: "#f00" }}>This field is required</span>
      )}

      <label htmlFor="email" className={classNames(style.label)}>
        Email *
      </label>
      <input
        type="email"
        className={classNames(style.input)}
        {...register("email", {
          required: true,
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: "Entered value does not match email format",
          },
        })}
      />
      {errors.email && (
        <span style={{ color: "#f00" }}>This field is required</span>
      )}

      <label htmlFor="message" className={classNames(style.label)}>
        Message *
      </label>
      <textarea
        name="message"
        id=""
        rows="5"
        className={classNames(style.input)}
        {...register("message", { required: true })}
      ></textarea>
      {errors.message && (
        <span style={{ color: "#f00" }}>This field is required</span>
      )}

      <button type={"submit"} className={classNames(style.button)}>
        Submit
      </button>

      {success && (
        <span style={{ color: "#0f0" }}>Submitted successfully!</span>
      )}
    </form>
  );
};

export default Form;
