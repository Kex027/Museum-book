const ForewordRight = ({
  page: {
    fields: { title, category, text },
  },
}) => {
  // const ForewordRight = ({
  //   page: {
  //     fields: { title, text },
  //   },
  // }) => {
  return (
    <div style={{ height: "100%" }}>
      <h2
        style={{
          height: "39%",
          color: "#0f0",
          fontSize: "13vh",
          lineHeight: "11vh",
          wordBreak: "break-all",
          fontWeight: "bold",
        }}
      >
        {/*{title?.toUpperCase()}*/}
        FORE&shy;WORD
      </h2>
      <div
        style={{
          fontSize: "1.4vh",
          lineHeight: "2.0vh",
          color: "white",
          padding: "8% 8% 8% 0",
        }}
      >
        {Object.entries(text?.content).map((content) => (
          <div key={content[0]}>
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
      </div>
    </div>
  );
};

export default ForewordRight;
