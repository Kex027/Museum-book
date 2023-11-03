import React from "react";
import { BiSolidRightArrowAlt } from "react-icons/bi";

const ForTeachersRight = ({
  page: {
    fields: { descriptionRight, encouragement },
  },
}) => {
  return (
    <>
      <div style={{ height: "28%" }}></div>
      <div
        style={{
          padding: "6% 6% 0 0",
          fontSize: "calc(1.3 * var(--vh))",
          lineHeight: "calc(1.75 * var(--vh))",
          fontWeight: 300,
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
      <div style={{ fontWeight: "bold", fontSize: "calc(1.7 * var(--vh))" }}>
        {encouragement?.toUpperCase()}
      </div>
      <br />
      <button
        style={{
          display: "flex",
          alignItems: "center",
          gap: "5px",
          fontWeight: "bold",
          color: "white",
          backgroundColor: "black",
          padding: "calc(2 * var(--vh))",
        }}
      >
        DOWNLOAD CONTENT
        <BiSolidRightArrowAlt style={{ fontSize: "calc(4 * var(--vh))" }} />
      </button>
    </>
  );
};

export default ForTeachersRight;
