import React from "react";

const IntoMobile = ({
  page: {
    fields: { logo, subtitle },
  },
}) => {
  return (
    <div
      style={{
        width: "100%",
        height: "90vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          height: "100%",
          width: "75%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          textAlign: "center",
        }}
      >
        <img src={logo.fields.file.url} alt={logo.fields.title} />
        <h4 style={{ fontSize: "1.5rem" }}>{subtitle}</h4>
      </div>
    </div>
  );
};

export default IntoMobile;
