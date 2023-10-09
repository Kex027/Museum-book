import Content from "../Content";

const ContentsLeft = ({
  page: {fields: {title, listOfContents}}, 
  changeCustomPage, 
  pages
}) => {
  const indexOfFirstVideoPage = 
    pages.findIndex((page) => 
      page.sys.contentType.sys.id === "page"
  );
  return (
    <>
    <h1 style={{ color: "white", fontSize: '7vh', height: "18%", paddingLeft: "10%" }}>{title.toUpperCase()}</h1>

    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "flex-start",
        
      paddingLeft: "20px",
      height: "78%",
    }}>
      {listOfContents
        .slice(0, 5)
        .map(({ fields: { id, name, description } }, index) => (
          <Content
            id={id}
            name={name}
            description={description}
            changeCustomPage={changeCustomPage}
            key={index}
            indexOfFirstVideoPage={indexOfFirstVideoPage}
          />
      ))}
    </div>
  </>
  );
}

export default ContentsLeft;