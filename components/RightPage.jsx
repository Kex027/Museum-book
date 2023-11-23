import { forwardRef } from "react";

const RightPage = forwardRef(
  ({ backgroundImg, content, thisPageIndex }, ref) => {
    return (
      <div
        style={{
          position: "relative",
          padding: "30px",
          backgroundImage: backgroundImg,
          backgroundSize: "cover",
          height: "100%",
          borderLeft: "1px solid hwb(235 26% 65% / 0.5)",
          WebkitBoxShadow: "inset 42px 0px 42px -47px rgba(66, 68, 90, 1)",
          MozBoxShadow: "inset 42px 0px 42px -47px rgba(66, 68, 90, 1)",
          boxShadow: "inset 42px 0px 42px -47px rgba(66, 68, 90, 1)",
        }}
      >
        {content}
      </div>
    );
  }
);

export default RightPage;
