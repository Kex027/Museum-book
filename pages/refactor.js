import Book from "../components/refactor/Book";
import style from "../styles/refactor/refactor.module.scss";
import { createClient } from "contentful";
import { useState } from "react";
import classNames from "classnames";

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

export default function Refactor({ bookData }) {
  const pagesLength = bookData.fields.pages;
  const [currentPage, setCurrentPage] = useState(-1)
  const [zIndexPage, setZIndexPage] = useState(-1)

  const changePage = (value) => {
    setCurrentPage(oldValue => {
      if (oldValue + value < -1 || oldValue + value > pagesLength - 1)
        return oldValue;
      return oldValue + value;
    })
    setTimeout(() => {
        setZIndexPage(oldValue => {
          if (oldValue === -1) {
            const audio = new Audio("/pageturn.mp3");
            audio.play();
          }
          if (oldValue + value < -1 || oldValue + value > pagesLength - 1)
            return oldValue;
          return oldValue + value;
        })
    }, 500)
  }

  const changeCustomPage = (value) => {
    setCurrentPage(oldValue => {
      
      if (value >= -1 || value <= pagesLength - 1)
        return value;
      return oldValue;
    })
    setTimeout(() => {
        setZIndexPage(oldValue => {
          if (oldValue === -1) {
            const audio = new Audio("/pageturn.mp3");
            audio.play();
          }
          if (value >= -1 || value <= pagesLength - 1)
            return value;
          return oldValue;
        })
    }, 500)
  }

  return (
    <div className={classNames(style.container)}>
      <Book 
        pages={bookData.fields.pages} 
        bookmarks={bookData.fields.bookmarks} 
        currentPage={currentPage} 
        zIndexPage={zIndexPage} 
        changePage={changePage} 
        changeCustomPage={changeCustomPage}
      />  
    </div>
  );
}
