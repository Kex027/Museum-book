import React from "react";
import IntoLeft from "../pages/IntoLeft";
import IntoRight from "../pages/IntoRight";
import ContextLeft from "../pages/ContextLeft";
import ContextRight from "../pages/ContextRight";
import ForewordLeft from "../pages/ForewordLeft";
import ForewordRight from "../pages/ForewordRight";
import ContentsLeft from "../pages/ContentsLeft";
import ContentsRight from "../pages/ContentsRight";
import VideoLeft from "../pages/VideoLeft";
import VideoRight from "../pages/VideoRight";
import FaqLeft from "../pages/FaqLeft";
import FaqRight from "../pages/FaqRight";
import GetInTouchLeft from "../pages/GetInTouchLeft";
import GetInTouchRight from "../pages/GetInTouchRight";

const GetBookPage = ({
  id,
  page,
  side,
  changeCustomPage,
  pages,
  qaIndex,
  setQaIndex,
}) => {
  if (id === "intoPage")
    return side === "left" ? (
      <IntoLeft page={page} />
    ) : (
      <IntoRight page={page} />
    );
  else if (id === "contextPage")
    return side === "left" ? (
      <ContextLeft page={page} />
    ) : (
      <ContextRight page={page} />
    );
  else if (id === "forewordPage")
    return side === "left" ? (
      <ForewordLeft page={page} />
    ) : (
      <ForewordRight page={page} />
    );
  else if (id === "contentsPage")
    return side === "left" ? (
      <ContentsLeft
        page={page}
        changeCustomPage={changeCustomPage}
        pages={pages}
      />
    ) : (
      <ContentsRight
        page={page}
        changeCustomPage={changeCustomPage}
        pages={pages}
      />
    );
  else if (id === "page")
    return side === "left" ? (
      <VideoLeft page={page} />
    ) : (
      <VideoRight page={page} />
    );
  else if (id === "forTeachers")
    return side === "left" ? (
      <ContextLeft page={page} />
    ) : (
      <ContextRight page={page} />
    );
  else if (id === "forParents")
    return side === "left" ? (
      <ContextLeft page={page} />
    ) : (
      <ContextRight page={page} />
    );
  else if (id === "faq") {
    return side === "left" ? (
      <FaqLeft page={page} qaIndex={qaIndex} setQaIndex={setQaIndex} />
    ) : (
      <FaqRight page={page} qaIndex={qaIndex} />
    );
  } else if (id === "getInTouch")
    return side === "left" ? (
      <GetInTouchLeft page={page} />
    ) : (
      <GetInTouchRight page={page} />
    );
  return "";
};

export default GetBookPage;
