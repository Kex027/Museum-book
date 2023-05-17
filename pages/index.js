import Book from "../components/Book.jsx";
import style from "../styles/index.module.scss";
import { createClient } from "contentful";
import Link from "next/link";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const pageRes = await client.getEntries({ content_type: "page" });
  const contentsRes = await client.getEntries({ content_type: "contentsPage" });
  const forewordRes = await client.getEntries({ content_type: "forewordPage" });

  return {
    props: {
      pagesRes: pageRes.items,
      contentsRes: contentsRes.items[0],
      forewordRes: forewordRes.items[0],
    },
  };
}

export default function Index({ pagesRes, contentsRes, forewordRes }) {
  const pages = [...pagesRes].sort((first, second) => {
    return first.fields.id > second.fields.id ? 1 : -1;
  });
  return (
    <div className={style.container}>
      <div className={style.bg}>
        <Link href="/test_book4" className={style.link}>
          demo
        </Link>
        <div className={style.content}>
          <img
            src="/museum_title.webp"
            alt="Museum Title"
            className={style.museumTitle}
          />
          <Book
            pages={pages}
            contentsRes={contentsRes}
            forewordRes={forewordRes}
          />
        </div>
      </div>
    </div>
  );
}
