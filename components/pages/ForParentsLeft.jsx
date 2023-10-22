import React from "react";

const ForParentsLeft = ({
  page: {
    fields: { description },
  },
}) => {
  return (
    <>
      <div style={{ height: "48%" }}>
        <h2
          style={{
            color: "#0f0",
            fontSize: "calc(9.5 * var(--vh))",
            lineHeight: "calc(13 * var(--vh))",
            wordBreak: "break-all",
            fontWeight: "bold",
            opacity: "60%",
          }}
        >
          FOR PAR&shy;ENTS
        </h2>
      </div>
      <div
        style={{
          lineHeight: "calc(1.4 * var(--vh))",
          fontSize: "calc(1.1 * var(--vh))",
          padding: "2% 2% 0 0",
        }}
      >
        {description?.content.map(({ content }, index) => (
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
