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
          fontSize: "1.5vh",
          paddingRight: "8%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        {qa.map(({ fields: { answer } }, index) => (
          <div
            style={{
              position: "absolute",
              transition: "transform 1s ease .25s, opacity 1s ease",
              transform:
                index === qaIndex ? "translateX(0%)" : "translateX(-125%)",
              opacity: index === qaIndex ? 1 : 0,
            }}
          >
            {answer}
          </div>
        ))}
        {/*<div>*/}
        {/*  A{qaIndex + 1}: {qa[qaIndex].fields.answer}*/}
        {/*</div>*/}
      </div>
    </>
  );
};

export default FaqRight;
