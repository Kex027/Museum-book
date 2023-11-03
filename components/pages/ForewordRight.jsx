const ForewordRight = ({
  page: {
    fields: { text },
  },
}) => {
  return (
    <div style={{ height: "100%" }}>
      <h2
        style={{
          height: "39%",
          color: "#0f0",
          fontSize: "calc(13 * var(--vh))",
          lineHeight: "calc(12 * var(--vh))",
          wordBreak: "break-all",
          fontWeight: "bold",
          paddingTop: "calc(2 * var(--vh))",
        }}
      >
        FORE&shy;WORD
      </h2>
      <div
        style={{
          fontSize: "calc(1.4 * var(--vh))",
          lineHeight: "calc(1.8 * var(--vh))",
          padding: "8% 20% 8% 0",
          fontWeight: 300,
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
