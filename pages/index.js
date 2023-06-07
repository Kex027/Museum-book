import Book from "../components/Book.jsx";
import style from "../styles/index.module.scss";
import { createClient } from "contentful";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Mobile from "../components/mobile/Mobile";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const bookData = await client.getEntries({ content_type: "book" });
  return {
    props: {
      bookData: bookData.items[0],
    },
  };
}

export default function Index({ bookData }) {
  const size = useWindowSize();
  function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });

    useEffect(() => {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      window.addEventListener("resize", handleResize);

      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowSize;
  }

  return (
    <div
      className={style.container}
      style={{
        backgroundColor: size.width >= 900 ? "white" : "#565656",
      }}
    >
      {size.width >= 900 ? (
        <>
          <div className={style.bg}>
            <div className={style.content}>
              <img
                src="/museum_title.webp"
                alt="Museum Title"
                className={style.museumTitle}
              />
              <Book pages={bookData.fields.pages} />
            </div>
          </div>
        </>
      ) : (
        <Mobile pages={bookData.fields.pages} />
      )}
    </div>
  );
}
