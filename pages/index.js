import Book from "../components/Book.jsx";
import style from "../styles/index.module.scss";
import { createClient } from "contentful";
import Link from "next/link";

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
  return (
    <div className={style.container}>
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
    </div>
  );
}
