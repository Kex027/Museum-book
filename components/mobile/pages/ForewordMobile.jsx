import React from "react";

const ForewordMobile = ({
  page: {
    fields: { text },
  },
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <h3 style={{ fontWeight: "bold", fontSize: "1.5rem" }}>FOREWORD</h3>
      {Object.entries(text.content).map((content) => (
        <div key={content[0]}>{content[1].content[0].value}</div>
      ))}
    </div>
  );
};

export default ForewordMobile;
