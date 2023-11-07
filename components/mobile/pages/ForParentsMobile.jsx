import React from "react";

const ForParentsMobile = ({
  page: {
    fields: { textLeft, textRight },
  },
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <h3
        style={{ fontWeight: "bold", fontSize: "1.5rem", alignSelf: "center" }}
      >
        FOR PARENTS
      </h3>
      {[
        ...Object.entries(textLeft.content),
        ...Object.entries(textRight.content),
      ].map((content) => (
        <div
          key={content[0]}
          style={{ fontWeight: content[1]?.content[0]?.marks[0]?.type }}
        >
          {content[1].content[0].value}
        </div>
      ))}
    </div>
  );
};

export default ForParentsMobile;
