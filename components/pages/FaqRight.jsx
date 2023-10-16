import React from "react";

const FaqRight = ({
  page: {
    fields: { qa },
  },
  qaIndex,
}) => {
  return (
    <>
      <h2 style={{ height: "22%" }}></h2>
      <div
        style={{
          height: "24%",
          fontSize: "1.6vh",
          paddingRight: "8%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          A{qaIndex + 1}: {qa[qaIndex].fields.answer}
        </div>
      </div>
    </>
  );
};

export default FaqRight;
