import React from "react";

const ForParentsLeft = ({
  page: {
    fields: { textLeft },
  },
}) => {
  return (
    <>
      <div style={{ height: "28%" }}>
        <h2
          style={{
            color: "#0f0",
            fontSize: "calc(9.5 * var(--vh))",
            lineHeight: "calc(8 * var(--vh))",
            whiteSpace: "normal",
            fontWeight: "bold",
          }}
        >
          FOR
          <br />
          PARENTS
        </h2>
      </div>
      <div
        style={{
          lineHeight: "calc(2.4 * var(--vh))",
          fontSize: "calc(1.5 * var(--vh))",
          fontWeight: 300,
          padding: "10% 0",
        }}
      >
        {textLeft?.content.map(({ content }, index) => (
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

export default ForParentsLeft;
