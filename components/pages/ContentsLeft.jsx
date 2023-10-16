import Content from "../Content";

const ContentsLeft = ({
  page: {
    fields: { title, listOfContents },
  },
  changeCustomPage,
  pages,
}) => {
  const indexOfFirstVideoPage = pages.findIndex(
    (page) => page.sys.contentType.sys.id === "page"
  );
  return (
    <>
      <h2
        style={{
          color: "white",
          fontSize: "7vh",
          height: "18%",
          paddingLeft: "10%",
          fontWeight: "bold",
        }}
      >
        {title.toUpperCase()}
      </h2>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "flex-start",

          padding: "4% 0 4% 12%",
          height: "78%",
        }}
      >
        {listOfContents
          .slice(0, 5)
          .map(({ fields: { id, name, description } }) => (
            <Content
              key={id}
              id={id}
              name={name}
              description={description}
              changeCustomPage={changeCustomPage}
              indexOfFirstVideoPage={indexOfFirstVideoPage}
            />
          ))}
      </div>
    </>
  );
};

export default ContentsLeft;
