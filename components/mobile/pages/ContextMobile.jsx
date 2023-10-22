import React from "react";

const ContextMobile = ({
  page: {
    fields: {
      heading,
      description: { content },
    },
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
      <h3 style={{ fontWeight: "bold", fontSize: "1.5rem" }}>{heading}</h3>
      {content.map(({ content }) => {
        return (
          <span style={{ fontBold: content[0].marks[0]?.type }}>
            {content[0].value}
          </span>
        );
      })}
    </div>
  );
};

export default ContextMobile;
