import React, { useEffect } from "react";

const Modal = ({ children, setShowModal, white }) => {
  useEffect(() => {
    const keyDownHandler = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();

        setShowModal(false);
      }
    };
    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, []);

  return (
    <>
      <div
        style={{
          zIndex: 0,
          position: "absolute",
          top: 0,
          left: 0,
          height: "100vh",
          width: "100vw",
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
        onClick={() => setShowModal(false)}
      ></div>
      <div
        style={{
          position: "absolute",
          backgroundColor: "#ffffff",
          maxWidth: "75%",
          maxHeight: "90%",
        }}
      >
        {children}
        <span
          style={{
            position: "absolute",
            top: "5px",
            right: "5px",
            padding: "0 1%",
            color: white ? "#fff" : "#000",
          }}
          onClick={() => setShowModal(false)}
        >
          X
        </span>
      </div>
    </>
  );
};

export default Modal;
