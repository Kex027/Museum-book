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
import ForTeachersLeft from "../pages/ForTeachersLeft";
import ForTeachersRight from "../pages/ForTeachersRight";
import ForParentsLeft from "../pages/ForParentsLeft";
import ForParentsRight from "../pages/ForParentsRight";
import IntoMobile from "../mobile/pages/IntoMobile";
import ForewordMobile from "../mobile/pages/ForewordMobile";
import ContentsMobile from "../mobile/pages/ContentsMobile";
import ContextMobile from "../mobile/pages/ContextMobile";
import VideoMobile from "../mobile/pages/VideoMobile";
import ForTeachersMobile from "../mobile/pages/ForTeachersMobile";
import ForParentsMobile from "../mobile/pages/ForParentsMobile";
import FaqMobile from "../mobile/pages/FaqMobile";
import GetInTouchMobile from "../mobile/pages/GetInTouchMobile";

const GetBookPage = ({
  id,
  page,
  side,
  changeCustomPage,
  pages,
  qaIndex,
  setQaIndex,
  mobile = false,
}) => {
  if (!mobile) {
    if (id === "intoPage")
      return side === "left" ? (
        <IntoLeft page={page} />
      ) : (
        <IntoRight page={page} />
      );
    else if (id === "forewordPage")
      return side === "left" ? (
        <ForewordLeft page={page} />
      ) : (
        <ForewordRight page={page} />
      );
    else if (id === "contextPage")
      return side === "left" ? (
        <ContextLeft page={page} />
      ) : (
        <ContextRight page={page} />
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
        <ForTeachersLeft page={page} />
      ) : (
        <ForTeachersRight page={page} />
      );
    else if (id === "forParents")
      return side === "left" ? (
        <ForParentsLeft page={page} />
      ) : (
        <ForParentsRight page={page} />
      );
    else if (id === "faq") {
      return side === "left" ? (
        <FaqLeft page={page} qaIndex={qaIndex} setQaIndex={setQaIndex} />
      ) : (
        <FaqRight page={page} qaIndex={qaIndex} />
      );
    } else if (id === "getInTouch")
      return side === "left" ? (
        <GetInTouchLeft />
      ) : (
        <GetInTouchRight page={page} />
      );
  } else {
    if (id === "intoPage") return <IntoMobile page={page} />;
    else if (id === "forewordPage") return <ForewordMobile page={page} />;
    else if (id === "contextPage") return <ContextMobile page={page} />;
    else if (id === "contentsPage")
      return (
        <ContentsMobile
          pages={pages}
          page={page}
          changeCustomPage={changeCustomPage}
        />
      );
    else if (id === "page") return <VideoMobile page={page} />;
    else if (id === "forTeachers") return <ForTeachersMobile page={page} />;
    else if (id === "forParents") return <ForParentsMobile page={page} />;
    else if (id === "faq") {
      return <FaqMobile page={page} />;
    } else if (id === "getInTouch") return <GetInTouchMobile page={page} />;
  }
  return "";
};

export default GetBookPage;
