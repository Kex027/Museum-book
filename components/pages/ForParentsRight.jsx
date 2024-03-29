import React from "react";

const ForParentsRight = ({
  page: {
    fields: { textRight },
  },
}) => {
  return (
    <>
      <div style={{ height: "28%" }}></div>
      <div
        style={{
          lineHeight: "calc(2 * var(--vh))",
          fontSize: "calc(1.5 * var(--vh))",
          fontWeight: 300,
          padding: "14% 8% 8% 0",
          textAlign: "justify",
        }}
      >
        {textRight?.content.map(({ content }, index) => (
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

export default ForParentsRight;
