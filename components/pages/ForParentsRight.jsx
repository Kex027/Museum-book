import React from "react";

const ForParentsRight = ({
  page: {
    fields: { descriptionRight },
  },
}) => {
  return (
    <>
      <div style={{ height: "28%" }}></div>
      <div
        style={{
          lineHeight: "calc(2.4 * var(--vh))",
          fontSize: "calc(1.5 * var(--vh))",
          fontWeight: 300,
          padding: "8% 8% 8% 0",
        }}
      >
        {descriptionRight?.content.map(({ content }, index) => (
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
