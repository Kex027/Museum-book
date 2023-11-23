import Book from "../components/Book";
import style from "../styles/index.module.scss";
import { createClient } from "contentful";
import { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import MobileBook from "../components/mobile/MobileBook";
import useWindowSize from "../components/helper/useWindowSize";
import Bookmarks from "../components/Bookmarks";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const bookData = await client.getEntries({
    content_type: "book",
    include: 4,
  });

  return {
    props: {
      bookData: bookData.items[0],
    },
  };
}

export default function Index({ bookData }) {
  const [loader, setLoader] = useState(true);
  const pagesLength = bookData.fields.pages?.length;
  const [currentPage, setCurrentPage] = useState(-1);
  const [zIndexPage, setZIndexPage] = useState(-1);
  const bookRef = useRef(null);
  const windowSize = useWindowSize();

  const changePage = (value) => {
    setCurrentPage((oldValue) => {
      if (oldValue + value < -1 || oldValue + value > pagesLength - 1)
        return oldValue;
      return oldValue + value;
    });
    setTimeout(() => {
      setZIndexPage((oldValue) => {
        if (oldValue === -1 && value === 1) {
          const audio = new Audio("/pageturn.mp3");
          audio.play();
        }
        if (oldValue + value < -1 || oldValue + value > pagesLength - 1)
          return oldValue;
        return oldValue + value;
      });
    }, 500);
  };

  const changeCustomPage = (value) => {
    setCurrentPage((oldValue) => {
      if (value >= -1 || value <= pagesLength - 1) return value;
      return oldValue;
    });
    setTimeout(() => {
      setZIndexPage((oldValue) => {
        if (oldValue === -1) {
          const audio = new Audio("/pageturn.mp3");
          audio.play();
        }
        if (value >= -1 || value <= pagesLength - 1) return value;
        return oldValue;
      });
    }, 500);
  };

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    setTimeout(() => {
      setLoader(false);
    }, 250);
  }, []);

  const getOrientation = () => {
    if (isClient) return window?.screen.orientation.type;
  };

  if (windowSize.width < 1024 || getOrientation() === "portrait-primary")
    return (
      <div className={style.container}>
        <MobileBook
          pages={bookData.fields.pages}
          currentPage={currentPage}
          changePage={changePage}
          changeCustomPage={changeCustomPage}
        />
      </div>
    );
  return (
    <div className={classNames(style.container)}>
      {loader ? (
        <img src="/loading.gif" alt="loader" />
      ) : (
        <>
          <div
            className={style.imgWrapper}
            style={{
              width: bookRef?.current?.clientWidth + 90 + "px" || "65%",
            }}
          >
            <img
              src="/museum_title.webp"
              alt="Museum logo"
              className={style.img}
            />
          </div>

          {/*<div*/}
          {/*  style={{*/}
          {/*    width: "calc(120 * var(--vh))",*/}
          {/*    height: "calc(200 * var(--vh))",*/}
          {/*    // display: "flex",*/}
          {/*    // justifyContent: "center",*/}
          {/*    // alignItems: "center",*/}
          {/*  }}*/}
          {/*>*/}
          <Book
            pages={bookData.fields.pages}
            bookmarks={bookData.fields.bookmarks}
            currentPage={currentPage}
            zIndexPage={zIndexPage}
            changePage={changePage}
            changeCustomPage={changeCustomPage}
            bookRef={bookRef}
          />
          {/*</div>*/}
        </>
      )}
    </div>
  );
}
