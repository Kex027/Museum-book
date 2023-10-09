const ForewordRight = ({page: {fields: {title, category, text}}}) => {
  // console.log(page);
  return (
    <div style={{
      marginTop: "70%",
    }}>
      {Object.entries(text?.content).map((content) => (
        <div key={content[0]} style={{
          fontSize: "2.4vh",
          lineHeight: "2.2vh"
        }}>
          {content[1].content.map(({ value, marks }) => (
            <span
              key={value}
              style={{
                fontWeight: marks[0]?.type,
              }}
            >
              {value}
              <br />
            </span>
          ))}
          <br />
        </div>
      ))}
    </ div>
  );
}

export default ForewordRight;