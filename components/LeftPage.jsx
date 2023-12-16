import { forwardRef } from "react";

const LeftPage = forwardRef(({ backgroundImg, content }, ref) => {
  return (
    <div
      style={{
        padding: "30px",
        backgroundImage: backgroundImg,
        backgroundSize: "cover",
        height: "100%",
        borderRight: "1px solid hwb(235 26% 65% / 0.5)",
        WebkitBoxShadow: "inset -50px 0px 42px -47px rgba(0, 0, 0, 1)",
        MozBoxShadow: "inset -50px 0px 42px -47px rgba(0, 0, 0, 1)",
        boxShadow: "inset -50px 0px 42px -47px rgba(0, 0, 0)",
      }}
    >
      {content}
    </div>
  );
});

export default LeftPage;
