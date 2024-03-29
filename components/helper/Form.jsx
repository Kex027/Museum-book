import React, { useRef, useState } from "react";
import classNames from "classnames";
import axios from "axios";
import { useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";

const Form = ({ style }) => {
  const [isVerified, setIsVerified] = useState(false);
  const captchaRef = useRef(null);

  const [success, setSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (!isVerified) {
      setSuccess(false);
      return;
    }
    data = { ...data, isVerified: isVerified };

    axios
      .post("https://moneyjar.world/museum/contact.php", data)
      .then((response) => {
        setSuccess(true);
        console.log(`${response.status}: Success!`);
        reset();
        captchaRef.current.reset();
        setIsVerified(false);
      })
      .catch((err) => {
        setSuccess(false);
        console.log(err);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classNames(style.form)}>
      <label
        htmlFor="name"
        className={classNames(style.label)}
        style={{
          color: errors.name ? "#f00" : "#000",
        }}
      >
        Name *
      </label>
      <input
        type="text"
        className={classNames(style.input)}
        {...register("name", { required: true })}
      />
      <label
        htmlFor="email"
        className={classNames(style.label)}
        style={{
          color: errors.email ? "#f00" : "#000",
        }}
      >
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
      <label
        htmlFor="message"
        className={classNames(style.label)}
        style={{
          color: errors.message ? "#f00" : "#000",
        }}
      >
        Message *
      </label>
      <textarea
        name="message"
        id=""
        rows="5"
        className={classNames(style.input)}
        {...register("message", { required: true })}
      ></textarea>

      <div style={{ alignSelf: "center" }}>
        <ReCAPTCHA
          ref={captchaRef}
          sitekey={"6LfmvMMoAAAAAIWouPy6IM5NLRgiA2dTZw2weg32"}
          onChange={(value) => setIsVerified(value)}
        />
      </div>

      <button type={"submit"} className={classNames(style.button)}>
        Submit
      </button>
      {success && (
        <span className={style.success}>Thank you for getting in touch!</span>
      )}
    </form>
  );
};

export default Form;
