import Content from "../Content";

const ContentsRight = ({
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
      <h1 style={{ height: "18%", paddingLeft: "10%" }}></h1>

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
        {listOfContents
          .slice(5, 10)
          .map(({ fields: { name, text } }, index) => (
            <Content
              key={name}
              index={index + 5}
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

export default ContentsRight;
