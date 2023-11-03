import React from "react";

const ForTeachersLeft = ({
  page: {
    fields: { descriptionLeft },
  },
}) => {
  return (
    <>
      <div style={{ height: "28%" }}>
        <h2
          style={{
            color: "#0f0",
            fontSize: "calc(8 * var(--vh))",
            lineHeight: "calc(7 * var(--vh))",
            whiteSpace: "normal",
            fontWeight: "bold",
          }}
        >
          FOR
          <br />
          TEACHERS
        </h2>
      </div>
      <div
        style={{
          padding: "6% 0 0 0",
          fontSize: "calc(1.3 * var(--vh))",
          lineHeight: "calc(1.75 * var(--vh))",
          fontWeight: 300,
        }}
      >
        {descriptionLeft?.content.map(({ content }, index) => (
          <span
            key={index}
            style={{
              fontWeight: content[0].marks[0]?.type,
            }}
          >
            {content[0].value}
            <br />
            <br />
          </span>
        ))}
      </div>
    </>
  );
};

export default ForTeachersLeft;
