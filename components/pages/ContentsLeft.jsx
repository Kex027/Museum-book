import Content from "../Content";

const ContentsLeft = ({
  page: {
    fields: { listOfContents },
  },
  changeCustomPage,
  pages,
  pageFlip,
}) => {
  const indexOfFirstVideoPage = pages.findIndex(
    (page) => page.sys.contentType.sys.id === "videoPage"
  );
  return (
    <>
      <h2
        style={{
          color: "#0f0",
          fontSize: "calc(7.7 * var(--vh))",
          lineHeight: "calc(7 * var(--vh))",
          height: "18%",
          paddingLeft: "5%",
          fontWeight: "bold",
        }}
      >
        CONTENTS
      </h2>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "flex-start",

          padding: "4% 0 4% 0",
          height: "78%",
        }}
      >
        {listOfContents.slice(0, 5).map(({ fields: { name, text } }, index) => (
          <Content
            key={index}
            index={index}
            name={name}
            text={text}
            changeCustomPage={changeCustomPage}
            indexOfFirstVideoPage={indexOfFirstVideoPage}
            pageFlipRef={pageFlip}
          />
        ))}
      </div>
    </>
  );
};

export default ContentsLeft;
