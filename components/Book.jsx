import React, { useCallback, useRef, useState } from "react";
import classNames from "classnames";
import style from "../styles/book.module.scss";
import getInTouchStyle from "../styles/getInTouchLeft.module.scss";
import Cover from "./Cover";
import GetBookPage from "./helper/GetBookPage";
import HTMLFlipBook from "react-pageflip";
import LeftPage from "./LeftPage";
import RightPage from "./RightPage";
import Bookmarks from "./Bookmarks";
import Modal from "./helper/Modal";
import Form from "./helper/Form";
import { AiOutlinePlus } from "react-icons/ai";
import FaqModal from "./modals/FaqModal";
import GetInTouchModal from "./modals/GetInTouchModal";
import VideoModal from "./modals/VideoModal";

const Book = ({ pages, bookmarks, changeCustomPage }) => {
  const [qaIndex, setQaIndex] = useState(0);
  const pageFlipRef = useRef(null);
  const [activePage, setActivePage] = useState(null);
  const [faqModal, setFaqModal] = useState(false);
  const [getInTouchModal, setGetInTouchModal] = useState(false);
  const [videoModal, setVideoModal] = useState(false);
  const [showSideBanners, setShowSideBanners] = useState(false);

  const onFlip = useCallback((e) => {
    setActivePage(e.data);
  }, []);

  return (
    <>
      <div
        style={{
          position: "relative",
          width: "calc(132 * var(--vh))",
          height: "calc(220 * var(--vh))",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <HTMLFlipBook
          width={490}
          height={733}
          size={"stretch"}
          showCover={true}
          mobileScrollSupport={true}
          ref={pageFlipRef}
          onFlip={onFlip}
          style={{
            transform:
              Math.ceil(
                pageFlipRef.current?.pageFlip()?.getCurrentPageIndex() / 2
              ) === 0 || pageFlipRef.current === null
                ? "translateX(-25%)"
                : "translateX(0%)",
            transition: "transform .75s ease-in-out",
            boxShadow:
              Math.ceil(
                pageFlipRef.current?.pageFlip()?.getCurrentPageIndex() / 2
              ) !== 0 &&
              pageFlipRef.current !== null &&
              showSideBanners
                ? "0px 0px 24px 0px rgba(66, 68, 90, 1)"
                : "",
          }}
        >
          <Cover
            pageFlipRef={pageFlipRef}
            showSideBanners={showSideBanners}
            setShowSideBanners={setShowSideBanners}
          />

          {pages?.map((page, index) => {
            return [
              <div
                key={`${page.sys.contentType.sys.id}-left`}
                onClick={() => {
                  if (page.sys.contentType.sys.id === "intoPage")
                    setShowSideBanners(false);
                }}
              >
                <LeftPage
                  backgroundImg={`url('${page.fields.backgroundImage[0].fields.file.url}')`}
                  content={
                    <GetBookPage
                      id={page.sys.contentType.sys.id}
                      page={page}
                      side="left"
                      changeCustomPage={changeCustomPage}
                      pages={pages}
                      qaIndex={qaIndex}
                      setQaIndex={setQaIndex}
                      pageFlip={pageFlipRef}
                      setFaqModal={setFaqModal}
                      setGetInTouchModal={setGetInTouchModal}
                      setVideoModal={setVideoModal}
                    />
                  }
                  thisPageIndex={index}
                />
              </div>,
              <div key={`${page.sys.contentType.sys.id}-right`}>
                <RightPage
                  backgroundImg={`url('${page.fields.backgroundImage[1].fields.file.url}')`}
                  content={
                    <GetBookPage
                      id={page.sys.contentType.sys.id}
                      page={page}
                      side="right"
                      changeCustomPage={changeCustomPage}
                      pages={pages}
                      qaIndex={qaIndex}
                      setQaIndex={setQaIndex}
                      pageFlip={pageFlipRef}
                      setFaqModal={setFaqModal}
                      setGetInTouchModal={setGetInTouchModal}
                      setVideoModal={setVideoModal}
                    />
                  }
                  thisPageIndex={index}
                />
              </div>,
            ];
          })}
        </HTMLFlipBook>

        <Bookmarks
          pageFlipRef={pageFlipRef}
          bookmarks={bookmarks}
          pages={pages}
        />

        {/*<div*/}
        {/*  className={style.bookShadow}*/}
        {/*  style={{*/}
        {/*    left: showSideBanners ? "0" : "20.5%",*/}
        {/*    width: showSideBanners ? "81%" : "40.5%",*/}
        {/*  }}*/}
        {/*></div>*/}
      </div>

      {faqModal && (
        <FaqModal
          faqModal={faqModal}
          setFaqModal={setFaqModal}
          qaIndex={qaIndex}
          setQaIndex={setQaIndex}
        />
      )}

      {getInTouchModal && (
        <GetInTouchModal
          getInTouchModal={getInTouchModal}
          setGetInTouchModal={setGetInTouchModal}
        />
      )}

      {videoModal && (
        <VideoModal videoModal={videoModal} setVideoModal={setVideoModal} />
      )}
    </>
  );
};

export default Book;
