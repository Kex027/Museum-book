import React from "react";

const VideoMobile = ({
  page: {
    fields: { heading, videoUrl, text },
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
        {videoUrl && (
          <video controls style={{ width: "85%", maxWidth: "600px" }}>
            <source src={videoUrl} type="video/mp4" />
          </video>
        )}
      </div>
      <p>{text}</p>
    </div>
  );
};

export default VideoMobile;
