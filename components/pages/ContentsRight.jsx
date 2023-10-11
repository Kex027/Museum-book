import Content from "../Content";

const ContentsRight = ({
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
    <h1 style={{ height: "18%", paddingLeft: "10%" }}></h1>

    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "flex-start",
        
      padding: "4% 0 4% 6%",
      height: "78%",
    }}>
      {listOfContents
        .slice(5, 10)
        .map(({ fields: { id, name, description } }, index) => (
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
}

export default ContentsRight;