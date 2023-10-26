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
          fontSize: "calc(1.5 * var(--vh))",
          paddingRight: "8%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          fontWeight: 300,
        }}
      >
        {qa.map(({ fields: { answer } }, index) => (
          <div
            key={index}
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
      </div>
    </>
  );
};

export default FaqRight;
