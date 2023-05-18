import React, { useState } from "react";
import style from "../styles/test_book4.module.scss";
import { createClient } from "contentful";
import DoublePageTest from "../components/DoublePageTest";
import Link from "next/link";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const res = await client.getEntries({ content_type: "page" });

  return {
    props: {
      data: res.items,
    },
  };
}

const TestBook4 = ({ data }) => {
  const pages = [...data].sort((first, second) => {
    const firstCategory = first.fields.category.toLowerCase();
    const secondCategory = second.fields.category.toLowerCase();
    if (firstCategory < secondCategory) {
      return -1;
    }
    if (firstCategory > secondCategory) {
      return 1;
    }

    // categories must be equal
    return first.fields.id - second.fields.id;
  });
  const [pageIndex, setPageIndex] = useState(0);
  const [pageIndexStyle, setPageIndexStyle] = useState(0);

  const bookmarksNames = [];
  pages.forEach(({ fields: { category } }) => {
    if (!bookmarksNames.includes(category)) bookmarksNames.push(category);
  });
  bookmarksNames.sort();

  const changePage = (value) => {
    setTimeout(() => {
      setTimeout(() => {
        setPageIndex((oldIndex) => {
          if (oldIndex + value < 0 || oldIndex + value > pages.length - 1)
            return oldIndex;
          return oldIndex + value;
        });
      }, 280);
      setPageIndexStyle((oldIndex) => {
        if (oldIndex + value < 0 || oldIndex + value > pages.length - 1)
          return oldIndex;
        return oldIndex + value;
      });
    }, 50);
  };

  const changeCustomPage = (e, bookmark) => {
    e.preventDefault();
    const indexOfFirstBookmarkItem = pages.findIndex(
      ({ fields: { category } }) => category === bookmark
    );
    setTimeout(() => {
      setTimeout(() => {
        setPageIndex(indexOfFirstBookmarkItem);
      }, 250);
      setPageIndexStyle(indexOfFirstBookmarkItem);
    }, 50);
  };

  return (
    <div className={style.container}>
      <Link href="/" className={style.link}>
        app
      </Link>
      <button className={style.btn} onClick={() => changePage(-1)}>
        &larr;
      </button>
      <div className={style.bookmarks}>
        {bookmarksNames.map((bookmark) => (
          <button
            key={bookmark}
            className={style.bookmark}
            onClick={(e) => changeCustomPage(e, bookmark)}
          >
            {bookmark}
          </button>
        ))}
      </div>
      <div className={style.book}>
        {pages.map(
          (
            { fields: { id, image, heading, description, video, category } },
            index
          ) => (
            <DoublePageTest
              key={id}
              currentPage={index}
              pageIndex={pageIndex}
              pagesLength={pages.length}
              pageIndexStyle={pageIndexStyle}
              id={id}
              heading={heading}
              description={description}
              video={video}
              image={image}
              category={category}
            />
          )
        )}
      </div>
      <button className={style.btn} onClick={() => changePage(1)}>
        &rarr;
      </button>
    </div>
  );
};

export default TestBook4;
