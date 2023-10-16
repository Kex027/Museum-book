const ForewordRight = ({
  page: {
    fields: { title, text },
  },
}) => {
  return (
    <div style={{ height: "100%" }}>
      <h2
        style={{
          height: "39%",
          color: "#0f0",
          fontSize: "13vh",
          lineHeight: "12vh",
          wordBreak: "break-all",
          fontWeight: "bold",
        }}
      >
        {title?.toUpperCase()}
      </h2>
      <div
        style={{
          fontSize: "1.8vh",
          lineHeight: "2.0vh",
          color: "white",
          paddingRight: "8%",
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
