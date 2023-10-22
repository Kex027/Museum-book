import Book from "../components/Book";
import style from "../styles/index.module.scss";
import { createClient } from "contentful";
import { useEffect, useState } from "react";
import classNames from "classnames";
import MobileBook from "../components/mobile/MobileBook";
import { AiOutlineLoading } from "react-icons/ai";

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
  const [showLoader, setShowLoader] = useState(true);

  const pagesLength = bookData.fields.pages.length;
  const [currentPage, setCurrentPage] = useState(-1);
  const [zIndexPage, setZIndexPage] = useState(-1);
  const windowSize = useWindowSize();

  function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
    function updateWindowSize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    function adjustVH() {
      const htmlElement = document.getElementsByTagName("html")[0];
      const maxRatio = 0.75;
      let maxHeight = innerWidth * maxRatio;
      const adjustedHeight = Math.min(innerHeight, maxHeight);

      htmlElement.style.setProperty("--vh", adjustedHeight / 110 + "px");
    }

    useEffect(() => {
      setTimeout(() => {
        setShowLoader(false);
      }, 250);

      window.addEventListener("resize", () => {
        updateWindowSize();
        adjustVH();
      });
      adjustVH();

      updateWindowSize();

      return () => window.removeEventListener("resize", updateWindowSize);
    }, []);
    return windowSize;
  }

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

  if (windowSize.width < 700 || windowSize.height < 520)
    return (
      <div className={style.container} style={{ overflowY: "visible" }}>
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
      <div className={style.imgWrapper}>
        <img src="/museum_title.webp" alt="Museum logo" className={style.img} />
      </div>
      <Book
        pages={bookData.fields.pages}
        bookmarks={bookData.fields.bookmarks}
        currentPage={currentPage}
        zIndexPage={zIndexPage}
        changePage={changePage}
        changeCustomPage={changeCustomPage}
      />
      {showLoader && (
        <div className={style.container}>
          <div className={style.loader}>
            <AiOutlineLoading className={style.loadingIcon} />
          </div>
        </div>
      )}
    </div>
  );
}
