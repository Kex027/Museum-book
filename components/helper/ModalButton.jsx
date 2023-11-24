import React from "react";

const ModalButton = ({ click, text = "", white = false }) => {
  return (
    <button
      style={{
        display: "flex",
        alignItems: "center",
        gap: "5px",
        fontWeight: "bold",
        color: white ? "black" : "white",
        backgroundColor: white ? "white" : "black",
        padding: "calc(2 * var(--vh))",
      }}
      onClick={() => {
        click();
      }}
    >
      {text}
    </button>
  );
};

export default ModalButton;
