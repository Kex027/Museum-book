import React from "react";

const VideoMobile = ({
  page: {
    fields: { heading, video, description },
  },
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <h3 style={{ fontWeight: "bold", fontSize: "1.5rem" }}>{heading}</h3>
      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        {video && (
          <video controls style={{ width: "85%", maxWidth: "600px" }}>
            <source src={video?.fields.file.url} type="video/mp4" />
          </video>
        )}
      </div>
      <p>{description}</p>
    </div>
  );
};

export default VideoMobile;
