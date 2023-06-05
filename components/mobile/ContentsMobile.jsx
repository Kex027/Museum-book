import React from "react";

const ContentsMobile = ({ title, list }) => {
  return (
    <div>
      <h1>{title}</h1>
      <div>
        {list.map((chapter, index) => (
          <p key={chapter}>
            {index + 1}. {chapter}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ContentsMobile;
