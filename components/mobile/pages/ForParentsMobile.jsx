import React from "react";

const ForParentsMobile = ({
  page: {
    fields: { heading, descriptionLeft, descriptionRight },
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
        {heading}
      </h3>
      {[
        ...Object.entries(descriptionLeft.content),
        ...Object.entries(descriptionRight.content),
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
